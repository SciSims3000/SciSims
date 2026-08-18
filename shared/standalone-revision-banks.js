/* Adds the shared Stage 6 banks to the original, standalone revision games. */
(() => {
  'use strict';

  const ROOT = '../../question-banks';
  const slug = value => String(value).toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  async function json(path) {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Unable to load ${path}`);
    return response.json();
  }

  function asModule(collection) {
    const groupNames = {};
    const groups = {};
    collection.groups.forEach(group => {
      groupNames[group.id] = group.label;
      groups[group.id] = group.items.map(item => ({
        word: item.term,
        clue: item.clue || item.definition,
        definition: item.definition || item.clue,
      }));
    });
    return {
      label: collection.label,
      displayTitle: collection.label,
      subtitle: `${collection.course} revision using the original game format.`,
      learningIntention: `Retrieve and connect key ${collection.course} knowledge from ${collection.label}.`,
      successCriteria: `Accurately identify and explain vocabulary from ${collection.label}.`,
      groupNames,
      groups,
    };
  }

  function addChainMaterial(courseKey, collection, sequences, chains) {
    collection.groups.forEach(group => {
      const terms = group.items.map(item => item.term).slice(0, 8);
      if (terms.length < 4) return;
      sequences?.push({
        year: courseKey,
        module: collection.id,
        title: `${group.label} concept sequence`,
        type: 'Concept pathway',
        items: terms,
        explanation: `Review the relationship between the key ${group.label.toLowerCase()} concepts in this module.`,
      });
      chains?.push({
        year: courseKey,
        module: collection.id,
        title: `${group.label} concept chain`,
        start: terms[0],
        nodes: terms,
        edges: terms.slice(0, -1).map((term, index) => [term, terms[index + 1], `Both concepts belong to ${group.label}.`]),
        explanation: `This pathway links related vocabulary from ${group.label}.`,
      });
    });
  }

  async function extend(library, options = {}) {
    const catalogue = await json(`${ROOT}/catalogue.json`);
    const stage6 = catalogue.curricula.find(item => item.id === 'nsw-2017');
    await Promise.all(stage6.banks.map(async descriptor => {
      const bank = await json(`${ROOT}/${descriptor.path}`);
      const courseKey = `stage6-${slug(bank.label)}`;
      const modules = {};
      bank.collections.forEach(collection => {
        modules[collection.id] = asModule(collection);
        addChainMaterial(courseKey, collection, options.sequenceSets, options.chainPacks);
      });
      library[courseKey] = { label: bank.label, modules };
    }));
    return library;
  }

  window.SciSimsStandaloneBanks = { extend };
})();
