/* Shared floating back-to-top control for SciSims index pages. */
(() => {
  'use strict';

  if (document.getElementById('backToTop')) return;

  const button = document.createElement('button');
  button.id = 'backToTop';
  button.className = 'back-to-top';
  button.type = 'button';
  button.setAttribute('aria-label', 'Back to top');
  button.textContent = '↑ Back to top';
  document.body.append(button);

  function updateScrollControls() {
    button.classList.toggle('is-visible', window.scrollY > 650);
  }

  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', updateScrollControls, { passive: true });
  updateScrollControls();
})();
