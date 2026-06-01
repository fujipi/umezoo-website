// Assemble shared header/footer into page HTML, in place, between
// <!-- BUILD:<SLOT>:START --> / <!-- BUILD:<SLOT>:END --> markers.
//
// Source of truth: scripts/partials/*.js + scripts/site-config.js.
// Output is committed (the rsync deploy ships the assembled .html as-is),
// so URLs and the deploy model are unchanged. Same marker-replacement
// strategy as scripts/generate-career-pages.js (updateCareerIndex).
//
// Run: npm run build-partials   (also part of `npm run build`)

const fs = require('fs');
const path = require('path');

const { PAGES } = require('./site-config.js');
const { renderHeadChrome } = require('./partials/head.js');
const { renderHeader } = require('./partials/header.js');
const { renderFooter } = require('./partials/footer.js');

const ROOT = path.join(__dirname, '..');

const SLOTS = [
  { name: 'HEADCHROME', render: renderHeadChrome },
  { name: 'HEADER', render: renderHeader },
  { name: 'FOOTER', render: renderFooter }
];

function replaceSlot(html, name, rendered, file) {
  // Match between markers, indentation-aware (markers sit at 2-space indent).
  const re = new RegExp(`(<!-- BUILD:${name}:START -->)[\\s\\S]*?(<!-- BUILD:${name}:END -->)`);
  if (!re.test(html)) {
    throw new Error(
      `Markers <!-- BUILD:${name}:START --> / <!-- BUILD:${name}:END --> not found in ${file}. ` +
      `Add them around the ${name.toLowerCase()} block first.`
    );
  }
  return html.replace(re, `$1\n${rendered}\n  $2`);
}

function main() {
  let changed = 0;
  const files = Object.keys(PAGES);
  for (const file of files) {
    const cfg = PAGES[file];
    const abs = path.join(ROOT, file);
    const before = fs.readFileSync(abs, 'utf8');
    let html = before;
    for (const slot of SLOTS) {
      html = replaceSlot(html, slot.name, slot.render(cfg), file);
    }
    if (html !== before) {
      fs.writeFileSync(abs, html, 'utf8');
      changed++;
      console.log(`  updated ${file}`);
    }
  }
  console.log(`build-partials: processed ${files.length} pages, ${changed} changed.`);
}

main();
