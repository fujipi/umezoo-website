// Shared site footer.
// Single source of truth for the markup injected between
// <!-- BUILD:FOOTER:START --> / <!-- BUILD:FOOTER:END --> markers.

const { NAV, FOOTER_RELATED, FOOTER_LEGAL } = require('../site-config.js');

function renderFooter({ base = '', logoExt = 'jpg' } = {}) {
  const p = (rel) => base + rel;

  const navLink = (l) => l.external
    ? `            <a href="${l.href}" target="_blank" rel="noopener noreferrer" class="footer__nav-link">${l.label}</a>`
    : `            <a href="${p(l.href)}" class="footer__nav-link" data-i18n="${l.i18n}">${l.label}</a>`;

  const sitemap = NAV.map(navLink).join('\n');

  const related = FOOTER_RELATED
    .map((l) => `            <a href="${p(l.href)}" class="footer__nav-link">${l.label}</a>`)
    .join('\n');

  const legal = FOOTER_LEGAL
    .map((l) => `          <a href="${p(l.href)}" class="footer__legal-link" data-i18n="${l.i18n}">${l.label}</a>`)
    .join('\n');

  return `  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__brand">
          <a href="${p('index.html')}" class="footer__logo">
            <img src="${p('umezoo_logo_yoko_color.' + logoExt)}" alt="UMEZOO" width="240" height="60">
          </a>
          <p class="footer__desc" data-i18n="footer.desc">創造的な食体験を事業活動に浸透させる、フードクリエイティブファーム</p>
        </div>
        <nav class="footer__nav-col" aria-label="サイトマップ">
          <h2 class="footer__nav-title">Sitemap</h2>
          <div class="footer__nav-list">
${sitemap}
          </div>
        </nav>
        <nav class="footer__nav-col" aria-label="関連サイト">
          <h2 class="footer__nav-title">Related</h2>
          <div class="footer__nav-list">
${related}
          </div>
        </nav>
      </div>
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
