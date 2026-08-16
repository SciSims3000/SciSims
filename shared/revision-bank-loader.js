/* SciSims shared revision-bank loader | Schema 1.x */
(() => {
  'use strict';
  const cache = new Map();
  const fetchJson = async path => {
    if (cache.has(path)) return cache.get(path);
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Could not load ${path}`);
    const value = await response.json();
    if (!String(value.schemaVersion || '').startsWith('1.')) throw new Error(`Unsupported revision-bank schema in ${path}`);
    cache.set(path, value);
    return value;
  };
  const join = (base, path) => `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
  const flatten = collections => collections.flatMap(collection => collection.groups.flatMap(group => group.items.map(item => ({
    ...item,
    groupId: group.id,
    groupLabel: group.label,
    collectionId: collection.id,
    collectionLabel: collection.label,
    year: collection.year,
    course: collection.course,
  }))));

  window.SciSimsRevisionBanks = {
    loadCatalogue: base => fetchJson(join(base, 'catalogue.json')),
    loadBank: (base, relativePath) => fetchJson(join(base, relativePath)),
    flatten,
    clearCache: () => cache.clear(),
  };
})();
