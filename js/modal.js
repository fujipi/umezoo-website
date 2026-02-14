/**
 * UMEZOO Corporate Website - Modal Utility
 *
 * Shared modal open/close logic for news, career, and workstyle modals.
 */

/**
 * Initialize a modal with standard open/close behavior.
 *
 * @param {Object} config
 * @param {string} config.modalId - ID of the modal element
 * @param {string} config.prefix - BEM prefix for child elements (e.g. 'news-modal')
 * @param {string} [config.triggerSelector] - CSS selector for trigger elements
 * @param {Function} [config.onOpen] - Callback(triggerElement, modalElement) before opening
 * @returns {{ open: Function, close: Function, element: HTMLElement } | null}
 */
function initModal(config) {
  const modal = document.getElementById(config.modalId);
  if (!modal) return null;

  const overlay = modal.querySelector('.' + config.prefix + '__overlay');
  const closeBtn = modal.querySelector('.' + config.prefix + '__close');

  function openModal() {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (overlay) {
    overlay.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  if (config.triggerSelector) {
    document.querySelectorAll(config.triggerSelector).forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        if (config.onOpen) {
          config.onOpen(trigger, modal);
        }
        openModal();
      });
    });
  }

  return { open: openModal, close: closeModal, element: modal };
}
