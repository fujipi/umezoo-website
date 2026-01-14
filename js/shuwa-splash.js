/**
 * しゅわTokyo Splash Screen & Hero
 * Random image with komorebi (dappled sunlight) effect
 */

(function() {
  'use strict';

  // Splash/Hero images - ランダムに選ばれる
  const splashImages = [
    'images/shuwa/splash-1.jpg',
    'images/shuwa/splash-2.jpg',
    'images/shuwa/splash-3.jpg',
    'images/shuwa/splash-4.jpg',
    'images/shuwa/splash-5.jpg',
    'images/shuwa/splash-6.jpg'
  ];

  // Get random image index
  function getRandomIndex(exclude) {
    let index;
    do {
      index = Math.floor(Math.random() * splashImages.length);
    } while (index === exclude && splashImages.length > 1);
    return index;
  }

  // Initialize splash screen and hero
  function init() {
    const splash = document.getElementById('shuwaSplash');
    const hero = document.getElementById('shuwaHero');

    // Select random images (different for splash and hero)
    const splashIndex = getRandomIndex(-1);
    const heroIndex = getRandomIndex(splashIndex);

    // Set splash background
    if (splash) {
      const splashBg = splash.querySelector('.shuwa-splash__bg');
      splashBg.style.backgroundImage = `url('${splashImages[splashIndex]}')`;

      // Fade in
      splash.classList.add('is-visible');

      // Fade out after delay
      setTimeout(() => {
        splash.classList.add('is-hidden');
        // Strengthen hero overlay after splash ends
        if (hero) {
          hero.classList.add('is-ready');
        }
      }, 2500);

      // Remove from DOM after animation
      setTimeout(() => {
        splash.style.display = 'none';
      }, 3500);
    } else if (hero) {
      // No splash, immediately strengthen overlay
      hero.classList.add('is-ready');
    }

    // Set hero background
    if (hero) {
      const heroBg = hero.querySelector('.shuwa-hero__bg');
      heroBg.style.backgroundImage = `url('${splashImages[heroIndex]}')`;
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
