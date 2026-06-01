// Centralized site configuration + per-page build registry.
// Consumed by scripts/build-partials.js, scripts/partials/*, and the
// career-page generator. Lives under scripts/ so it is excluded from the
// rsync deploy artifact (see .github/workflows/deploy-pages.yml).

const SITE = {
  origin: 'https://umezoo.co.jp',
  ga4: 'G-7CT8HM5TSV'
};

// Primary navigation (order matters). `key` matches a page's `activeNav`.
// `external` items render with target=_blank and carry no active state / i18n.
const NAV = [
  { key: 'about',   href: 'about.html',   i18n: 'nav.about',   label: 'About'   },
  { key: 'work',    href: 'work.html',    i18n: 'nav.work',    label: 'Work'    },
  { key: 'service', href: 'service.html', i18n: 'nav.service', label: 'Service' },
  { external: true, href: 'https://note.com/cccellars', label: 'Journey' },
  { key: 'career',  href: 'career.html',  i18n: 'nav.career',  label: 'Career'  },
  { key: 'news',    href: 'news.html',    i18n: 'nav.news',    label: 'News'    },
  { key: 'contact', href: 'contact.html', i18n: 'nav.contact', label: 'Contact' }
];

// Footer "related sites" + legal links.
const FOOTER_RELATED = [
  { href: 'shuwa.html', label: 'しゅわTokyo' },
  { href: 'ai-ops/',    label: 'AI業務Ops' }
];
const FOOTER_LEGAL = [
  { href: 'privacy.html',  i18n: 'footer.privacyPolicy', label: 'Privacy Policy' },
  { href: 'security.html', i18n: 'footer.security',      label: 'Security' }
];

// Pages whose shared header/footer are build-managed.
//   base:    '' => relative paths (root pages); '/' => absolute paths.
//   header:  'default' | 'transparent' (index hero overlay only).
//   logoExt: 'jpg' (default) | 'png'.
const PAGES = {
  'index.html':    { base: '',  activeNav: null,      header: 'transparent', logoExt: 'png' },
  'about.html':    { base: '',  activeNav: 'about'   },
  'work.html':     { base: '',  activeNav: 'work'    },
  'service.html':  { base: '',  activeNav: 'service' },
  'career.html':   { base: '',  activeNav: 'career'  },
  'news.html':     { base: '',  activeNav: 'news'    },
  'contact.html':  { base: '',  activeNav: 'contact' },
  'privacy.html':  { base: '',  activeNav: null      },
  'security.html': { base: '',  activeNav: null      },
  '404.html':      { base: '/', activeNav: null      }
};

module.exports = { SITE, NAV, FOOTER_RELATED, FOOTER_LEGAL, PAGES };
