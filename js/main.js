/**
 * UMEZOO Corporate Website - Main JavaScript
 *
 * Dependencies (loaded before this file):
 *   - js/data/translations.js (translations)
 *   - js/data/news-data.js (newsData, NEWS_CATEGORIES)
 *   - js/data/job-data.js (jobData)
 *   - js/modal.js (initModal)
 */

// Current language
let currentLang = 'ja';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Set initial language from localStorage or browser preference
  const savedLang = localStorage.getItem('umezoo-lang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  }

  // Initialize components
  initSplash();
  initHeroBackground();
  initPageHeroBackground();
  initHeader();
  initMobileMenu();
  initLanguageSwitcher();
  initAnimations();
  initContactForm();
  initNewsModal();
  initCareerModal();
  initWorkstyleModal();
  initNoteArticles();

  // Apply translations
  applyTranslations();
});

// Splash screen
function initSplash() {
  const splash = document.getElementById('splash');
  if (!splash) return;

  // ロゴがふわっと出てきた後、2.5秒後にスプラッシュを非表示
  setTimeout(() => {
    splash.classList.add('is-hidden');
  }, 2500);
}

// Hero images array (shared between main hero and page heroes)
const heroImages = [
  'images/hero/hero-1.jpg',
  'images/hero/hero-2.jpg',
  'images/hero/hero-3.jpg',
  'images/hero/hero-4.jpg',
  'images/hero/hero-5.jpg',
  'images/hero/hero-6.jpg',
  'images/hero/hero-7.jpg',
  'images/hero/hero-8.jpg',
  'images/hero/hero-9.jpg',
  'images/hero/1768332177874.jpg',
  'images/hero/1768332287121.jpg',
  'images/hero/1768332314082.jpg',
  'images/hero/1768332359561.jpg',
  'images/hero/1768332385350.jpg',
  'images/hero/1768332415046.jpg',
  'images/hero/1768332447130.jpg',
  'images/hero/1768332476156.jpg',
  'images/hero/1768332498041.jpg',
  'images/hero/1768332521861.jpg',
  'images/hero/1768332543110.jpg',
  'images/hero/1768332571132.jpg',
  'images/hero/1768332589937.jpg',
  'images/hero/1768332610859.jpg',
  'images/hero/1768332676035.jpg',
  'images/hero/1768332703871.jpg'
];

// Hero background random image (for index.html)
function initHeroBackground() {
  const heroBg = document.getElementById('hero-bg');
  if (!heroBg) return;

  const randomIndex = Math.floor(Math.random() * heroImages.length);
  heroBg.style.backgroundImage = `url('${heroImages[randomIndex]}')`;
}

// Page hero background random image (for other pages)
function initPageHeroBackground() {
  const pageHeroBg = document.getElementById('page-hero-bg');
  if (!pageHeroBg) return;

  const randomIndex = Math.floor(Math.random() * heroImages.length);
  pageHeroBg.style.backgroundImage = `url('${heroImages[randomIndex]}')`;
}

// Header scroll effect
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
}

// Mobile menu
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-open');
    nav.classList.toggle('is-open');
  });

  // Close menu when clicking on links
  const navLinks = nav.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('is-open');
      nav.classList.remove('is-open');
    });
  });
}

// Language switcher
function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-switcher__btn');

  langButtons.forEach(btn => {
    // Set active state
    if (btn.dataset.lang === currentLang) {
      btn.classList.add('lang-switcher__btn--active');
    }

    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;

      // Update active state
      langButtons.forEach(b => b.classList.remove('lang-switcher__btn--active'));
      btn.classList.add('lang-switcher__btn--active');

      // Update language
      currentLang = lang;
      localStorage.setItem('umezoo-lang', lang);

      // Apply translations
      applyTranslations();
    });
  });
}

// Apply translations to page
function applyTranslations() {
  const t = translations[currentLang];
  if (!t) return;

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = getNestedValue(t, key);
    if (value) {
      el.textContent = value;
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const value = getNestedValue(t, key);
    if (value) {
      el.placeholder = value;
    }
  });

  // Update html lang attribute
  document.documentElement.lang = currentLang;
}

// Get nested object value by dot notation
function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// Scroll animations
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Existing animations for feature cards, work cards, etc.
  document.querySelectorAll('.feature-card, .work-card, .service-item, .value-card, .workstyle-item, .svc-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Fade-in-up animations for About page and other sections
  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });
}

// Add animation styles when visible
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    .is-visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
});

// Contact form handling
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      alert(currentLang === 'ja' ? '必須項目を入力してください。' :
            currentLang === 'fr' ? 'Veuillez remplir les champs obligatoires.' :
            'Please fill in required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert(currentLang === 'ja' ? '有効なメールアドレスを入力してください。' :
            currentLang === 'fr' ? 'Veuillez entrer une adresse email valide.' :
            'Please enter a valid email address.');
      return;
    }

    // Show success message (in real implementation, this would send to server)
    alert(currentLang === 'ja' ? 'お問い合わせを受け付けました。' :
          currentLang === 'fr' ? 'Votre message a été envoyé.' :
          'Your message has been sent.');
    form.reset();
  });
}

// News modal functionality
function initNewsModal() {
  const modal = document.getElementById('newsModal');
  if (!modal) return;

  const modalTag = modal.querySelector('.news-modal__tag');
  const modalDate = modal.querySelector('.news-modal__date');
  const modalTitle = modal.querySelector('.news-modal__title');
  const modalImage = modal.querySelector('.news-modal__image');
  const modalBody = modal.querySelector('.news-modal__body');

  initModal({
    modalId: 'newsModal',
    prefix: 'news-modal',
    triggerSelector: '.news-card[data-news-id]',
    onOpen: (card) => {
      const news = newsData[card.dataset.newsId];
      if (news) {
        modalTag.textContent = news.tag;
        modalDate.textContent = news.date;
        modalTitle.textContent = news.title;
        modalImage.style.backgroundImage = `url('${news.image}')`;
        modalBody.innerHTML = news.body;
      }
    }
  });
}

// Career modal functionality
function initCareerModal() {
  const modal = document.getElementById('careerModal');
  if (!modal) return;

  const modalType = modal.querySelector('.career-modal__type');
  const modalLocation = modal.querySelector('.career-modal__location');
  const modalTitle = modal.querySelector('.career-modal__title');
  const modalRole = modal.querySelector('.career-modal__role');
  const modalBody = modal.querySelector('.career-modal__body');

  initModal({
    modalId: 'careerModal',
    prefix: 'career-modal',
    triggerSelector: '.position-card',
    onOpen: (card) => {
      const job = jobData[card.dataset.jobId];
      if (job) {
        modalType.textContent = job.type;
        modalLocation.textContent = job.location;
        modalTitle.textContent = job.title;
        modalRole.textContent = job.role;
        modalBody.innerHTML = job.body;
      }
    }
  });
}

// Workstyle detail modal functionality
function initWorkstyleModal() {
  const btn = document.getElementById('workstyleDetailBtn');
  if (!btn) return;

  const instance = initModal({
    modalId: 'workstyleDetailModal',
    prefix: 'workstyle-modal'
  });

  if (instance) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      instance.open();
    });
  }
}


// Load note articles and integrate with news grid
async function initNoteArticles() {
  const newsGrid = document.querySelector('.news-grid');
  if (!newsGrid) return;

  try {
    const response = await fetch('data/note-articles.json');
    if (!response.ok) {
      initNewsFilter(); // Initialize filter even without note articles
      return;
    }

    const data = await response.json();

    if (data.articles && data.articles.length > 0) {
      // Add note articles to the news grid
      const noteCardsHTML = data.articles.map(article => `
        <article class="news-card news-card--external" data-tag="${article.tag}" data-date="${article.date}" onclick="window.open('${article.link}', '_blank')">
          <div class="news-card__image" style="background-image: url('${article.image || 'images/news/default-note.jpg'}');">
            <span class="news-card__image-placeholder">${article.title.substring(0, 20)}...</span>
          </div>
          <div class="news-card__content">
            <div class="news-card__meta">
              <span class="news-card__tag">${article.tag}</span>
              <time class="news-card__date">${article.date}</time>
            </div>
            <h3 class="news-card__title">${article.title}</h3>
            <p class="news-card__summary">${article.summary}</p>
            <span class="news-card__external-link">noteで読む →</span>
          </div>
        </article>
      `).join('');

      // Insert note articles at the beginning of the grid
      newsGrid.insertAdjacentHTML('afterbegin', noteCardsHTML);
    }

    // Initialize filter after adding note articles
    initNewsFilter();

  } catch (error) {
    initNewsFilter(); // Initialize filter even on error
  }
}

// News filter functionality
function initNewsFilter() {
  const newsGrid = document.querySelector('.news-grid');
  const filterContainer = document.querySelector('.news-filter');
  if (!newsGrid || !filterContainer) return;

  const filterButtons = filterContainer.querySelectorAll('.news-filter__btn');
  const newsCards = newsGrid.querySelectorAll('.news-card');

  // Add data-tag to existing news cards that don't have it
  newsCards.forEach(card => {
    if (!card.dataset.tag) {
      const tagEl = card.querySelector('.news-card__tag');
      if (tagEl) {
        card.dataset.tag = tagEl.textContent.trim();
      }
    }
  });

  // Sort all cards by date (newest first)
  sortNewsByDate();

  // Filter button click handler
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;

      // Update active state
      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      // Filter cards
      const allCards = newsGrid.querySelectorAll('.news-card');
      allCards.forEach(card => {
        if (category === 'すべて' || card.dataset.tag === category) {
          card.style.display = '';
          card.classList.remove('is-hidden');
        } else {
          card.style.display = 'none';
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

// Sort news cards by date
function sortNewsByDate() {
  const newsGrid = document.querySelector('.news-grid');
  if (!newsGrid) return;

  const cards = Array.from(newsGrid.querySelectorAll('.news-card'));

  cards.sort((a, b) => {
    const dateA = parseDateString(a.dataset.date || a.querySelector('.news-card__date')?.textContent || '');
    const dateB = parseDateString(b.dataset.date || b.querySelector('.news-card__date')?.textContent || '');
    return dateB - dateA; // Newest first
  });

  // Re-append in sorted order
  cards.forEach(card => newsGrid.appendChild(card));
}

// Parse date string like "2024.03.15" or "2025.06（予定）"
function parseDateString(dateStr) {
  const match = dateStr.match(/(\d{4})\.(\d{2})(?:\.(\d{2}))?/);
  if (match) {
    const year = parseInt(match[1]);
    const month = parseInt(match[2]) - 1;
    const day = match[3] ? parseInt(match[3]) : 1;
    return new Date(year, month, day);
  }
  return new Date(0);
}
