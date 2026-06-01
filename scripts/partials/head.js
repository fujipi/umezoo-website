// Shared <head> chrome: favicon, fonts, optional LCP preload, and stylesheet.
// Single source for the markup injected between
// <!-- BUILD:HEADCHROME:START --> / <!-- BUILD:HEADCHROME:END --> markers.
//
// Per-page <title>, meta description, canonical, Open Graph and JSON-LD stay
// authored in each page (they are unique and carry no duplication); only the
// shared chrome is centralized so site-wide changes (manifest, favicon sizes,
// font tweaks) are a single edit.

const { SITE } = require('../site-config.js');

function renderHeadChrome({ base = '', lcpPreload = null } = {}) {
  const p = (rel) => base + rel;

  const lcp = lcpPreload
    ? `  <!-- LCP: pin hero image so the preload actually matches first paint.
       main.js:initHeroBackground skips the random swap when data-lcp-pinned is set. -->
  <link rel="preload" as="image" href="${p(lcpPreload)}" fetchpriority="high">

`
    : '';

  return `  <!-- Favicon -->
  <link rel="icon" type="image/png" href="${p('images/favicon.png')}">
  <link rel="apple-touch-icon" href="${p('images/favicon.png')}">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${SITE.fontsHref}" rel="stylesheet">

${lcp}  <!-- Styles -->
  <link rel="stylesheet" href="${p('css/style.css')}">`;
}

module.exports = { renderHeadChrome };
