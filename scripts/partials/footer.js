// Shared site footer.
// Single source of truth for the markup injected between
// <!-- BUILD:FOOTER:START --> / <!-- BUILD:FOOTER:END --> markers.

const { FOOTER_RELATED, FOOTER_LEGAL } = require('../site-config.js');

function renderFooter({ base = '' } = {}) {
  const p = (rel) => base + rel;

  const related = FOOTER_RELATED
    .map((l) => `        <a href="${p(l.href)}">${l.label}</a>`)
    .join('\n');

  const legal = FOOTER_LEGAL
    .map((l) => `          <a href="${p(l.href)}" class="footer__legal-link" data-i18n="${l.i18n}">${l.label}</a>`)
    .join('\n');

  return `  <footer class="footer">
    <div class="container">
      <nav class="footer__links" aria-label="関連サイト">
${related}
      </nav>
      <div class="footer__bottom">
        <p class="footer__copyright" data-i18n="footer.copyright">&copy; 2025 UMEZOO Inc. All rights reserved.</p>
        <div class="footer__legal">
${legal}
        </div>
      </div>
    </div>
  </footer>`;
}

module.exports = { renderFooter };
