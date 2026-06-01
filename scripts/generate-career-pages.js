// Generate per-job static detail pages from js/data/job-data.js
// and refresh the position-card list block in career.html.
// Run: npm run generate-career-pages

const fs = require('fs');
const path = require('path');

const jobData = require('../js/data/job-data.js');
const { renderHeadChrome } = require('./partials/head.js');
const { renderHeader } = require('./partials/header.js');
const { renderFooter } = require('./partials/footer.js');

const ROOT = path.join(__dirname, '..');
const CAREERS_DIR = path.join(ROOT, 'careers');
const CAREER_INDEX = path.join(ROOT, 'career.html');

const SITE_ORIGIN = 'https://umezoo.co.jp';
const DATE_POSTED = '2026-04-19';
const VALID_THROUGH = '2026-10-19';

const ORG = {
  '@type': 'Organization',
  name: 'UMEZOO株式会社',
  sameAs: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/umezoo_logo_yoko_color.jpg`
};

const JOB_LOCATION = {
  '@type': 'Place',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '東神田一丁目13番14号 Hide and seek TOKYO102号室',
    addressLocality: '千代田区',
    addressRegion: '東京都',
    postalCode: '101-0031',
    addressCountry: 'JP'
  }
};

function mapEmploymentType(typeStr) {
  if (typeStr === '正社員') return 'FULL_TIME';
  if (typeStr === '正社員 / 業務委託') return ['FULL_TIME', 'CONTRACTOR'];
  console.warn(`[generate-career-pages] Unknown employment type "${typeStr}", defaulting to FULL_TIME`);
  return 'FULL_TIME';
}

function isTelecommute(locationStr) {
  return locationStr.includes('ハイブリッド');
}

function buildJobPostingJsonLd(job) {
  const url = `${SITE_ORIGIN}/careers/${job.slug}.html`;
  const posting = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.role,
    datePosted: DATE_POSTED,
    validThrough: VALID_THROUGH,
    employmentType: mapEmploymentType(job.type),
    hiringOrganization: ORG,
    jobLocation: JOB_LOCATION,
    directApply: true,
    url
  };
  if (isTelecommute(job.location)) {
    posting.jobLocationType = 'TELECOMMUTE';
    posting.applicantLocationRequirements = { '@type': 'Country', name: 'JP' };
  }
  return posting;
}

function buildBreadcrumbJsonLd(job) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${SITE_ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: '採用情報', item: `${SITE_ORIGIN}/career.html` },
      { '@type': 'ListItem', position: 3, name: job.title, item: `${SITE_ORIGIN}/careers/${job.slug}.html` }
    ]
  };
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderJobPage(job) {
  const url = `${SITE_ORIGIN}/careers/${job.slug}.html`;
  const titleTag = `${job.title} | UMEZOO株式会社 採用情報`;
  const description = job.role;
  const breadcrumb = buildBreadcrumbJsonLd(job);
  const posting = buildJobPostingJsonLd(job);

  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-7CT8HM5TSV"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-7CT8HM5TSV');
  </script>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO Meta Tags -->
  <title>${escapeHtml(titleTag)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="author" content="UMEZOO株式会社">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${url}">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${escapeHtml(titleTag)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:image" content="${SITE_ORIGIN}/umezoo_logo_yoko_color.jpg">
  <meta property="og:site_name" content="UMEZOO株式会社">
  <meta property="og:locale" content="ja_JP">

  <!-- Mobile / PWA polish -->
  <meta name="theme-color" content="#1a1a1a">
  <meta name="apple-mobile-web-app-title" content="UMEZOO">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(titleTag)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${SITE_ORIGIN}/umezoo_logo_yoko_color.jpg">

  <!-- hreflang -->
  <link rel="alternate" hreflang="ja" href="${url}">
  <link rel="alternate" hreflang="x-default" href="${url}">

  <!-- BreadcrumbList -->
  <script type="application/ld+json">
${JSON.stringify(breadcrumb, null, 2)}
  </script>

  <!-- JobPosting -->
  <script type="application/ld+json">
${JSON.stringify(posting, null, 2)}
  </script>

${renderHeadChrome({ base: '/' })}
</head>
<body>
  <!-- Header -->
${renderHeader({ base: '/', activeNav: 'career' })}

  <!-- Page Hero -->
  <section class="page-hero">
    <div class="container">
      <p class="page-hero__breadcrumb"><a href="/career.html">採用情報</a> &raquo; ${escapeHtml(job.title)}</p>
      <h1 class="page-hero__title">${escapeHtml(job.title)}</h1>
      <p class="page-hero__subtitle">${escapeHtml(job.role)}</p>
      <div class="page-hero__meta">
        <span>${escapeHtml(job.type)}</span>
        <span>${escapeHtml(job.location)}</span>
      </div>
    </div>
  </section>

  <!-- Job Detail -->
  <section class="content-section job-detail">
    <div class="container">
      <article class="job-detail__body">
${job.body}
      </article>

      <div class="job-detail__cta">
        <a href="/contact.html?subject=${encodeURIComponent(job.title)}" class="btn btn--primary">この職種に応募する</a>
        <a href="/career.html" class="btn btn--outline">他のポジションを見る</a>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="section cta">
    <div class="container">
      <h2 class="cta__title" data-i18n="cta.title">お問い合わせ</h2>
      <p class="cta__text" data-i18n="cta.text">プロジェクトのご相談、お見積もりなど、お気軽にご連絡ください。</p>
      <a href="/contact.html" class="btn btn--outline" data-i18n="cta.button">Contact Us</a>
    </div>
  </section>

  <!-- Footer -->
${renderFooter({ base: '/' })}

  <!-- Scripts -->
  <script src="/js/data/translations.js" defer></script>
  <script src="/js/main.js" defer></script>
</body>
</html>
`;
}

function renderCard(job) {
  return `        <a class="position-card" href="/careers/${job.slug}.html">
          <div class="position-card__info">
            <h3>${escapeHtml(job.title)}</h3>
            <p class="position-card__summary">${escapeHtml(job.role)}</p>
            <div class="position-card__meta">
              <span>${escapeHtml(job.type)}</span>
              <span>${escapeHtml(job.location)}</span>
            </div>
          </div>
          <span class="position-card__arrow" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </span>
        </a>`;
}

function updateCareerIndex(jobs) {
  const html = fs.readFileSync(CAREER_INDEX, 'utf8');
  const cards = jobs.map((job, i) => {
    const card = renderCard(job);
    return i === 0 ? card : `\n        <!-- Position ${i + 1}: ${job.title} -->\n${card}`;
  }).join('\n');
  // Match between markers, indentation-aware.
  const re = /(<!-- POSITIONS:START -->)[\s\S]*?(<!-- POSITIONS:END -->)/;
  if (!re.test(html)) {
    throw new Error(`Markers <!-- POSITIONS:START --> / <!-- POSITIONS:END --> not found in career.html. Add them around the .positions-list contents first.`);
  }
  const updated = html.replace(re, `$1\n        <!-- Position 1: ${jobs[0].title} -->\n${cards}\n        $2`);
  fs.writeFileSync(CAREER_INDEX, updated, 'utf8');
}

function main() {
  fs.mkdirSync(CAREERS_DIR, { recursive: true });
  const jobs = Object.values(jobData);
  let written = 0;
  for (const job of jobs) {
    if (!job.slug) {
      throw new Error(`Job "${job.title}" is missing slug field in job-data.js`);
    }
    const out = path.join(CAREERS_DIR, `${job.slug}.html`);
    fs.writeFileSync(out, renderJobPage(job), 'utf8');
    written++;
  }
  updateCareerIndex(jobs);
  console.log(`Generated ${written} detail pages in ${path.relative(ROOT, CAREERS_DIR)}/`);
  console.log(`Updated position cards in ${path.relative(ROOT, CAREER_INDEX)}`);
}

main();
