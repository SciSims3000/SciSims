(() => {
  'use strict';
  const courses = [
    ['Biology', 'Biology'],
    ['Chemistry', 'Chemistry'],
    ['EarthEnvironmentalScience', 'Earth and Environmental Science'],
    ['InvSci', 'Investigating Science'],
    ['Physics', 'Physics'],
    ['ScienceExtension', 'Science Extension'],
  ];
  document.addEventListener('DOMContentLoaded', () => {
    const topbar = document.querySelector('.topbar');
    if (!topbar) return;
    topbar.querySelector('a[href*="Stage6index"]')?.remove();
    const select = document.createElement('select');
    select.id = 'jeopardyCourseSelect';
    select.className = 'btn';
    select.setAttribute('aria-label', 'Change Jeopardy year or course');
    courses.forEach(([value, label]) => select.add(new Option(label, value)));
    const current = location.pathname.split('/').filter(Boolean).at(-1);
    if (courses.some(([value]) => value === current)) select.value = current;
    select.addEventListener('change', () => {
      location.href = `../${select.value}/`;
    });
    topbar.insertBefore(select, document.getElementById('fitBtn'));
  });
})();
