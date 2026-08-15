/* SciSims shared site navigation | Version 1.1.0 */
(() => {
  'use strict';

  const mount = document.getElementById('scisimsSiteNav');
  if (!mount) return;
  if (mount.classList.contains('scisims-simulation-nav')) {
    document.body.classList.add('has-scisims-simulation-nav');
  }

  const script = document.currentScript || Array.from(document.scripts).find(item =>
    item.src && item.src.split('?')[0].endsWith('/scisims-nav.js')
  );
  const siteRoot = script ? new URL('../', script.src) : new URL('./', window.location.href);

  const items = [
    {label:'Stage 4', file:'Stage4index.html'},
    {label:'Stage 5', file:'Stage5index.html'},
    {label:'Stage 6', file:'Stage6index.html'},
    {label:'Teacher Tools', file:'TeacherToolsindex.html'},
    {label:'More', file:'Moreindex.html'}
  ];

  const currentPath = decodeURIComponent(window.location.pathname).replace(/\\/g,'/');
  const currentFile = (currentPath.split('/').filter(Boolean).pop() || 'index.html').toLowerCase();
  const activeFile = currentFile === 'hscindex.html' ? 'stage6index.html' : currentFile;

  const nav = document.createElement('nav');
  nav.className = 'scisims-site-nav';
  nav.setAttribute('aria-label','SciSims site navigation');

  const homeHref = new URL('index.html', siteRoot).href;
  const links = items.map(item => {
    const active = item.file.toLowerCase() === activeFile;
    return `<a class="scisims-nav-link" href="${new URL(item.file, siteRoot).href}"${active ? ' aria-current="page"' : ''}>${item.label}</a>`;
  }).join('');

  nav.innerHTML = `
    <div class="scisims-nav-inner">
      <a class="scisims-nav-brand" href="${homeHref}"${activeFile === 'index.html' ? ' aria-current="page"' : ''}>
        <svg class="scisims-nav-mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
          <circle cx="20" cy="20" r="3.4"></circle>
          <ellipse cx="20" cy="20" rx="16" ry="6.5"></ellipse>
          <ellipse cx="20" cy="20" rx="16" ry="6.5" transform="rotate(60 20 20)"></ellipse>
          <ellipse cx="20" cy="20" rx="16" ry="6.5" transform="rotate(120 20 20)"></ellipse>
        </svg>
        <span>SciSims</span>
      </a>
      <button class="scisims-nav-toggle" type="button" aria-expanded="false" aria-controls="scisimsNavLinks" aria-label="Open site menu">☰</button>
      <div id="scisimsNavLinks" class="scisims-nav-links">${links}</div>
    </div>`;

  mount.replaceChildren(nav);

  const toggle = nav.querySelector('.scisims-nav-toggle');
  const setOpen = open => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close site menu' : 'Open site menu');
    toggle.textContent = open ? '×' : '☰';
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  nav.addEventListener('click', event => {
    if (event.target.closest('.scisims-nav-link, .scisims-nav-brand')) setOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setOpen(false);
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target)) setOpen(false);
  });
})();
