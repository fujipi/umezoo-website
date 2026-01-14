/**
 * しゅわTokyo Splash Screen
 * Random image with komorebi (dappled sunlight) effect
 */

(function() {
  'use strict';

  // Splash images - ランダムに1つ選ばれる
  const splashImages = [
    'images/shuwa/splash-1.jpg',
    'images/shuwa/splash-2.jpg'
  ];

  // Initialize splash screen
  function initSplash() {
    const splash = document.getElementById('shuwaSplash');
    if (!splash) return;

    const bg = splash.querySelector('.shuwa-splash__bg');

    // Select random image
    const randomIndex = Math.floor(Math.random() * splashImages.length);
    const selectedImage = splashImages[randomIndex];

    // Set background image
    bg.style.backgroundImage = `url('${selectedImage}')`;

    // Fade in
    splash.classList.add('is-visible');

    // Fade out after delay
    setTimeout(() => {
      splash.classList.add('is-hidden');
    }, 2500);

    // Remove from DOM after animation
    setTimeout(() => {
      splash.style.display = 'none';
    }, 3500);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSplash);
  } else {
    initSplash();
  }
})();
