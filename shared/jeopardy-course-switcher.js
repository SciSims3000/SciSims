(() => {
  'use strict';
  const courses = [
    ['junior-7', 'Year 7 Science'],
    ['junior-8', 'Year 8 Science'],
    ['junior-9', 'Year 9 Science'],
    ['junior-10', 'Year 10 Science'],
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
    const currentFolder = location.pathname.split('/').filter(Boolean).at(-1);
    const current = currentFolder === 'Junior'
      ? 'junior-' + (new URLSearchParams(location.search).get('year') || '7')
      : currentFolder;
    if (courses.some(([value]) => value === current)) select.value = current;
    select.addEventListener('change', () => {
      if (select.value.startsWith('junior-')) {
        location.href = '../Junior/?year=' + select.value.slice(7);
      } else {
        location.href = '../' + select.value + '/';
      }
    });
    topbar.insertBefore(select, document.getElementById('fitBtn'));
  });
})();
