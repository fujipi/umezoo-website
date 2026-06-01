// Shared site header / primary navigation.
// Single source of truth for the markup injected between
// <!-- BUILD:HEADER:START --> / <!-- BUILD:HEADER:END --> markers.

const { NAV } = require('../site-config.js');

function renderHeader({ base = '', activeNav = null, header = 'default', logoExt = 'jpg' } = {}) {
  const p = (rel) => base + rel;

  const headerClass = header === 'transparent' ? 'header header--transparent' : 'header';
  const headerAttrs = header === 'transparent' ? ' id="header"' : '';

  const navItems = NAV.map((item) => {
    if (item.external) {
      return `          <li><a href="${item.href}" target="_blank" rel="noopener noreferrer" class="nav__link">${item.label}</a></li>`;
    }
    const cls = item.key === activeNav ? 'nav__link nav__link--active' : 'nav__link';
    return `          <li><a href="${p(item.href)}" class="${cls}" data-i18n="${item.i18n}">${item.label}</a></li>`;
  }).join('\n');

  return `  <header class="${headerClass}"${headerAttrs}>
    <div class="header__inner">
      <a href="${p('index.html')}" class="header__logo">
        <img src="${p('umezoo_logo_yoko_color.' + logoExt)}" alt="UMEZOO" width="240" height="60">
      </a>

      <nav class="nav">
        <ul class="nav__list">
${navItems}
        </ul>

        <div class="nav__right">
          <div class="lang-switcher">
            <button class="lang-switcher__btn" data-lang="ja">JP</button>
            <button class="lang-switcher__btn" data-lang="en">EN</button>
            <button class="lang-switcher__btn" data-lang="fr">FR</button>
          </div>
        </div>
      </nav>

      <button class="menu-toggle" aria-label="Menu">
        <span class="menu-toggle__bar"></span>
        <span class="menu-toggle__bar"></span>
        <span class="menu-toggle__bar"></span>
      </button>
    </div>
  </header>`;
}

module.exports = { renderHeader };
