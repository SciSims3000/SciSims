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

  const uniqueItems = items => {
    const seen = new Set();
    return items.filter(item => {
      const key = String(item.word || item.term || '').trim().toLowerCase();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };

  function compositeModule(label, modules, sourceModuleIds) {
    const groupNames = {};
    const groups = {};
    modules.filter(Boolean).forEach((module, moduleIndex) => {
      Object.entries(module.groups || {}).forEach(([groupId, items]) => {
        if (groupId === 'custom') return;
        const id = `${moduleIndex + 1}-${groupId}`;
        groupNames[id] = module.groupNames?.[groupId] || module.label;
        groups[id] = uniqueItems(items);
      });
    });
    return {
      label,
      displayTitle: label,
      subtitle: `Cumulative revision using ${label.toLowerCase()}.`,
      learningIntention: 'Retrieve and connect knowledge across the selected course range.',
      successCriteria: 'Accurately identify, explain and connect terms from the selected modules.',
      groupNames,
      groups,
      sourceModuleIds,
      isCourseReview: true,
    };
  }

  function organiseJuniorCourses(library) {
    const glossary = library['7']?.modules?.['intro-science'];
    ['7', '8', '9', '10'].forEach(year => {
      const yearData = library[year];
      if (!yearData) return;
      const original = yearData.modules;
      const moduleKeys = Object.keys(original).filter(key => new RegExp(`^${year}-[1-4]-`).test(key));
      if (moduleKeys.length < 4) return;
      const firstThree = moduleKeys.slice(0, 3);
      const firstFour = moduleKeys.slice(0, 4);
      const ordered = {};
      firstThree.forEach(key => { ordered[key] = original[key]; });
      ordered['modules-1-3'] = compositeModule('Modules 1–3 Review', firstThree.map(key => original[key]), firstThree);
      ordered['modules-1-3-glossary'] = compositeModule('Modules 1–3 + Glossary', [...firstThree.map(key => original[key]), glossary], [...firstThree, 'intro-science']);
      ordered[moduleKeys[3]] = original[moduleKeys[3]];
      ordered['modules-1-4'] = compositeModule('Modules 1–4 Review', firstFour.map(key => original[key]), firstFour);
      ordered['modules-1-4-glossary'] = compositeModule('Modules 1–4 + Glossary', [...firstFour.map(key => original[key]), glossary], [...firstFour, 'intro-science']);
      Object.keys(original).filter(key => key === 'intro-science' || !moduleKeys.includes(key)).forEach(key => {
        if (key !== 'year-review') ordered[key] = original[key];
      });
      yearData.modules = ordered;
    });
  }

  function organiseStage6Course(bank, modules) {
    const entries = Object.entries(modules);
    const year11 = entries.filter(([, module]) => /Module [1-4]\b/.test(module.label));
    const year12 = entries.filter(([, module]) => /Module [5-8]\b/.test(module.label));
    const glossary = entries.find(([, module]) => /Glossary/i.test(module.label));
    const ordered = {};
    const add = ([key, module]) => { ordered[key] = module; };
    year11.forEach(add);
    if (year11.length) {
      ordered['year-11-course'] = compositeModule('Year 11 Course — Modules 1–4', year11.map(([, module]) => module), year11.map(([key]) => key));
      ordered['year-11-course-glossary'] = compositeModule('Year 11 Course + Glossary', [...year11.map(([, module]) => module), glossary?.[1]], [...year11.map(([key]) => key), glossary?.[0]].filter(Boolean));
    }
    year12.forEach(add);
    if (year12.length) {
      ordered['year-12-course'] = compositeModule('Year 12 Course — Modules 5–8', year12.map(([, module]) => module), year12.map(([key]) => key));
      ordered['year-12-course-glossary'] = compositeModule('Year 12 Course + Glossary', [...year12.map(([, module]) => module), glossary?.[1]], [...year12.map(([key]) => key), glossary?.[0]].filter(Boolean));
    }
    if (glossary) add(glossary);
    const allModules = [...year11, ...year12];
    ordered['whole-course'] = compositeModule('Whole Course — All Modules', allModules.map(([, module]) => module), allModules.map(([key]) => key));
    ordered['whole-course-glossary'] = compositeModule('Whole Course + Glossary', [...allModules.map(([, module]) => module), glossary?.[1]], [...allModules.map(([key]) => key), glossary?.[0]].filter(Boolean));
    bank.modules = ordered;
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
    organiseJuniorCourses(library);
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
      organiseStage6Course(library[courseKey], modules);
    }));
    return library;
  }

  window.SciSimsStandaloneBanks = { extend };
})();
