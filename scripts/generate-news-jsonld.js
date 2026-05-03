// Statically render Blog/BlogPosting JSON-LD from js/data/news-data.js
// into the <script id="news-jsonld"> element in news.html so crawlers
// can pick it up without executing JavaScript.
// Run: npm run generate-news-jsonld

const fs = require('fs');
const path = require('path');

const { newsData } = require('../js/data/news-data.js');

const ROOT = path.join(__dirname, '..');
const NEWS_HTML = path.join(ROOT, 'news.html');

const BASE = 'https://umezoo.co.jp/';

const PUBLISHER = {
  '@type': 'Organization',
  name: 'UMEZOO株式会社',
  url: BASE,
  logo: { '@type': 'ImageObject', url: BASE + 'umezoo_logo_yoko_color.jpg' }
};

function buildJsonLd() {
  const entries = Object.values(newsData);
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'お知らせ | UMEZOO株式会社',
    url: BASE + 'news.html',
    description: 'UMEZOO株式会社からのお知らせ・最新情報。',
    publisher: PUBLISHER,
    blogPost: entries.map(n => ({
      '@type': 'BlogPosting',
      headline: n.title,
      datePublished: n.dateISO,
      dateModified: n.dateModified || n.dateISO,
      image: BASE + n.image,
      author: { '@type': 'Organization', name: 'UMEZOO株式会社', url: BASE },
      publisher: PUBLISHER,
      description: n.summary || '',
      articleBody: (n.body || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
      keywords: [n.tag].filter(Boolean),
      mainEntityOfPage: { '@type': 'WebPage', '@id': BASE + 'news.html' }
    }))
  };
}

function main() {
  const html = fs.readFileSync(NEWS_HTML, 'utf8');
  const jsonLdString = JSON.stringify(buildJsonLd());

  const re = /(<script id="news-jsonld" type="application\/ld\+json">)[\s\S]*?(<\/script>)/;
  const updated = html.replace(re, `$1${jsonLdString}$2`);

  if (updated === html) {
    throw new Error('news-jsonld marker not found in news.html');
  }

  fs.writeFileSync(NEWS_HTML, updated);
  console.log(`Wrote Blog JSON-LD with ${Object.keys(newsData).length} BlogPosting entries to news.html`);
}

main();
