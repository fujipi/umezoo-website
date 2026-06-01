# Build scripts

This is a static HTML site. The files under `scripts/` are a small build layer
(plain Node, no framework) that generates committed output. The deploy workflow
(`.github/workflows/deploy-pages.yml`) only `rsync`s the repo to GitHub Pages —
it does **not** run a build — so **generated output is committed** and the
`scripts/` directory is excluded from what ships.

## Commands

| Command | What it does |
|---|---|
| `npm run build` | Runs all generators below, in order. |
| `npm run build-partials` | Injects the shared header/footer into pages between `BUILD` markers. |
| `npm run generate-career-pages` | Renders `careers/<slug>.html` from `js/data/job-data.js` and refreshes the cards in `career.html`. |
| `npm run generate-news-jsonld` | Renders Blog/BlogPosting JSON-LD from `js/data/news-data.js` into `news.html`. |
| `npm run generate-sitemap` | Regenerates `sitemap.xml` (lastmod from git history). |
| `npm run sync-note` | Pulls latest note.com articles into `data/note-articles.json`. |

Run `npm run build` and commit the result whenever you change a partial,
`site-config.js`, or any data file. CI (`verify-build.yml`) fails if the
committed output is stale.

## Shared header / footer (partial templating)

The site header and footer used to be hand-duplicated in every page. They now
have a single source of truth:

- `scripts/site-config.js` — nav items, footer links, and the per-page registry
  (`PAGES`) with each page's `base` (`''` relative / `'/'` absolute), `activeNav`,
  and header variant.
- `scripts/partials/header.js`, `scripts/partials/footer.js` — render the markup.
- `scripts/build-partials.js` — replaces the content between
  `<!-- BUILD:HEADER:START -->…<!-- BUILD:HEADER:END -->` and the matching
  `FOOTER` markers, in place (same marker-replacement approach as
  `generate-career-pages.js`). `careers/*.html` consume the same partials directly.

To change the nav or footer, edit `site-config.js` (and/or the partials), then
`npm run build`. To bring a new page under management, add `BUILD:HEADER` /
`BUILD:FOOTER` marker pairs around its `<header>` / `<footer>` and register it in
`PAGES`.
