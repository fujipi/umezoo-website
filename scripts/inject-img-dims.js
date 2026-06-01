// Wrap dimensionless content <img> tags in <picture> with AVIF/WebP sources
// and inject intrinsic width/height from scripts/image-manifest.json. This
// lets browsers serve the smaller formats and reserves layout space (no CLS).
//
// Idempotent: an <img> that already has a width= attribute is left untouched,
// so re-runs, the templated header/splash logos, and any hand-sized image are
// all skipped. <img> with onerror= is skipped too (its JS fallback relies on
// nextElementSibling, which a <picture> wrapper would change).
//
// Runs as part of `npm run build`; operates only on pages in site-config PAGES.

const fs = require('fs');
const path = require('path');

const { PAGES } = require('./site-config.js');
const manifest = require('./image-manifest.json');

const ROOT = path.join(__dirname, '..');

const keyFor = (src) => src.replace(/^\.?\//, '');

function transform(html) {
  return html.replace(/^([ \t]*)(<img\b[^>]*>)[ \t]*$/gm, (line, indent, tag) => {
    if (/\bwidth=/.test(tag) || /\bonerror=/.test(tag)) return line;

    const srcMatch = tag.match(/\bsrc="([^"]+)"/);
    if (!srcMatch) return line;

    const src = srcMatch[1];
    const rec = manifest[keyFor(src)];
    if (!rec) return line;

    const avif = src.replace(/\.(jpe?g|png)$/i, '.avif');
    const webp = src.replace(/\.(jpe?g|png)$/i, '.webp');
    const sizedTag = tag.replace(/\s*>$/, ` width="${rec.width}" height="${rec.height}">`);

    return [
      `${indent}<picture>`,
      `${indent}  <source srcset="${avif}" type="image/avif">`,
      `${indent}  <source srcset="${webp}" type="image/webp">`,
      `${indent}  ${sizedTag}`,
      `${indent}</picture>`
    ].join('\n');
  });
}

function main() {
  let changed = 0;
  for (const file of Object.keys(PAGES)) {
    const abs = path.join(ROOT, file);
    const before = fs.readFileSync(abs, 'utf8');
    const after = transform(before);
    if (after !== before) {
      fs.writeFileSync(abs, after);
      changed++;
      console.log(`  img dims/picture: ${file}`);
    }
  }
  console.log(`inject-img-dims: ${changed} files updated.`);
}

main();
