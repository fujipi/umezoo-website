// Optimize raster images under images/** in place: downscale oversized
// originals to a sane maximum edge, re-encode them, and emit WebP + AVIF
// siblings. Also (re)generates PWA icons from the favicon and records final
// dimensions in scripts/image-manifest.json (used for width/height injection).
//
// This is intentionally NOT part of `npm run build`: it rewrites binaries in
// place, so running it on every build/CI would risk recompression drift.
// Run it on demand whenever images are added or changed:
//
//   npm run optimize-images
//
// Idempotent: a file is skipped when its current bytes already match the hash
// recorded from the previous optimization and both siblings exist.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const IMAGES_DIR = path.join(ROOT, 'images');
const ICONS_DIR = path.join(IMAGES_DIR, 'icons');
const MANIFEST_PATH = path.join(__dirname, 'image-manifest.json');

const MAX_EDGE = 1920; // longest side; never upscales
const JPEG_Q = 80;
const WEBP_Q = 80;
const AVIF_Q = 50;

// Icon source; handled separately, never treated as a photo.
const FAVICON = path.join(IMAGES_DIR, 'favicon.png');

const sha1 = (buf) => crypto.createHash('sha1').update(buf).digest('hex');
const toPosix = (p) => p.split(path.sep).join('/');

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      if (full === ICONS_DIR) continue; // generated output
      walk(full, out);
    } else {
      out.push(full);
    }
  }
  return out;
}

async function optimizePhoto(file, manifest) {
  const rel = toPosix(path.relative(ROOT, file));
  const buf = fs.readFileSync(file);
  const hash = sha1(buf);
  const isPng = /\.png$/i.test(file);
  const webpPath = file.replace(/\.(jpe?g|png)$/i, '.webp');
  const avifPath = file.replace(/\.(jpe?g|png)$/i, '.avif');

  const rec = manifest[rel];
  if (rec && rec.hash === hash && fs.existsSync(webpPath) && fs.existsSync(avifPath)) {
    return 'skip';
  }

  const meta = await sharp(buf).metadata();
  const resize = { width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true };
  const pipe = () => sharp(buf, { failOn: 'none' }).resize(resize);

  // Re-encode the original in place, but only keep it if it actually shrank.
  const reencoded = isPng
    ? await pipe().png({ compressionLevel: 9 }).toBuffer()
    : await pipe().jpeg({ quality: JPEG_Q, mozjpeg: true }).toBuffer();
  if (reencoded.length < buf.length) {
    fs.writeFileSync(file, reencoded);
  }

  await pipe().webp({ quality: WEBP_Q }).toFile(webpPath);
  await pipe().avif({ quality: AVIF_Q }).toFile(avifPath);

  const finalBuf = fs.readFileSync(file);
  const finalMeta = await sharp(finalBuf).metadata();
  manifest[rel] = {
    width: finalMeta.width,
    height: finalMeta.height,
    hash: sha1(finalBuf),
    webp: true,
    avif: true
  };
  return 'done';
}

async function generateIcons() {
  if (!fs.existsSync(FAVICON)) return;
  fs.mkdirSync(ICONS_DIR, { recursive: true });
  const src = fs.readFileSync(FAVICON);
  for (const size of [192, 512]) {
    await sharp(src)
      .resize(size, size, { fit: 'cover' })
      .png({ compressionLevel: 9 })
      .toFile(path.join(ICONS_DIR, `icon-${size}.png`));
  }
}

async function main() {
  const manifest = fs.existsSync(MANIFEST_PATH)
    ? JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'))
    : {};

  const photos = walk(IMAGES_DIR).filter(
    (f) => /\.(jpe?g|png)$/i.test(f) && f !== FAVICON
  );

  let done = 0;
  let skipped = 0;
  for (const file of photos) {
    const result = await optimizePhoto(file, manifest);
    if (result === 'done') {
      done++;
      console.log(`  optimized ${toPosix(path.relative(ROOT, file))} -> ${manifest[toPosix(path.relative(ROOT, file))].width}x${manifest[toPosix(path.relative(ROOT, file))].height}`);
    } else {
      skipped++;
    }
  }

  await generateIcons();

  const sorted = {};
  Object.keys(manifest).sort().forEach((k) => { sorted[k] = manifest[k]; });
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(sorted, null, 2) + '\n');

  console.log(`optimize-images: ${done} optimized, ${skipped} up to date, icons regenerated.`);
}

main().catch((err) => { console.error(err); process.exit(1); });
