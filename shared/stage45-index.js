/* Stage 4 and Stage 5 index renderer | Version 1.0.0 */
(() => {
  'use strict';

  const data = window.SCISIMS_STAGE45;
  if (!data) return;

  const stage = Number(document.body.dataset.stage);
  if (![4, 5].includes(stage)) return;

  const modules = data.modules.filter(module => module.stage === stage);
  const resources = data.resources.filter(resource =>
    resource.mappings.some(mapping => modules.some(module => module.code === mapping.module))
  );

  const state = {
    query: '',
    relevance: '',
    type: '',
    workingScientifically: '',
    depthStudy: false
  };

  const $ = selector => document.querySelector(selector);
  const yearGrid = $('#yearGrid');
  const moduleResults = $('#moduleResults');
  const sharedToolsGrid = $('#sharedToolsGrid');
  const wsToolkitGrid = $('#wsToolkitGrid');
  const searchInput = $('#searchInput');
  const relevanceSelect = $('#relevanceSelect');
  const typeSelect = $('#typeSelect');
  const wsSelect = $('#wsSelect');
  const depthStudyButton = $('#depthStudyButton');
  const resetButton = $('#resetButton');
  const resultsSummary = $('#resultsSummary');

  const normalise = value => String(value || '').toLowerCase().replace(/\s+/g, ' ').trim();
  const stageMappings = resource => resource.mappings.filter(mapping =>
    modules.some(module => module.code === mapping.module)
  );

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function renderYearPanels() {
    const years = [...new Set(modules.map(module => module.year))];
    yearGrid.replaceChildren(...years.map(year => {
      const panel = element('section', 'year-panel');
      panel.append(element('h2', '', year));
      panel.append(element('p', '', 'Resources are organised using the confirmed SciSims teaching sequence.'));
      const links = element('div', 'module-links');
      modules.filter(module => module.year === year).forEach(module => {
        const link = element('a', 'module-link');
        link.href = `#module-${module.code.replace('.', '-')}`;
        link.dataset.moduleLink = module.code;
        const code = element('span', 'module-code', module.code);
        const copy = element('span', 'module-link-copy');
        copy.append(element('strong', '', module.title));
        copy.append(element('small', 'module-count', '0 mapped resources'));
        link.append(code, copy);
        links.append(link);
      });
      panel.append(links);
      return panel;
    }));
  }

  function makeBadge(text, className = '') {
    return element('span', `resource-badge ${className}`.trim(), text);
  }

  function renderCompactCard(resource) {
    const card = element('article', 'compact-resource-card');
    const top = element('div', 'compact-card-top');
    top.append(element('h3', '', resource.title), makeBadge(resource.type, 'type-badge'));
    card.append(top, element('p', '', resource.description));
    const link = element('a', 'open-link', 'Open resource');
    link.href = resource.path;
    card.append(link);
    return card;
  }

  function renderSharedTools() {
    sharedToolsGrid.replaceChildren(...data.sharedTools.map(renderCompactCard));
    const toolkit = data.workingScientificallyToolkit[String(stage)] || [];
    wsToolkitGrid.replaceChildren(...toolkit.map(renderCompactCard));
  }

  function searchableText(resource, module, mapping) {
    return normalise([
      resource.title,
      resource.description,
      resource.type,
      mapping.relevance,
      module.code,
      module.title,
      module.outcome,
      module.outcomeText,
      ...resource.tags,
      ...resource.workingScientifically
    ].join(' '));
  }

  function matches(resource, module, mapping) {
    if (state.query && !searchableText(resource, module, mapping).includes(state.query)) return false;
    if (state.relevance && mapping.relevance !== state.relevance) return false;
    if (state.type && resource.type !== state.type) return false;
    if (state.workingScientifically && !resource.workingScientifically.includes(state.workingScientifically)) return false;
    if (state.depthStudy && !resource.depthStudy) return false;
    return true;
  }

  function renderResourceCard(resource, mapping) {
    const card = element('article', 'mapped-resource-card');
    const heading = element('div', 'resource-card-heading');
    heading.append(element('h3', '', resource.title));
    const badges = element('div', 'resource-card-badges');
    badges.append(
      makeBadge(mapping.relevance, mapping.relevance === 'Core' ? 'core-badge' : 'supporting-badge'),
      makeBadge(resource.type, 'type-badge')
    );
    if (resource.depthStudy) badges.append(makeBadge('Depth study', 'depth-badge'));
    heading.append(badges);
    card.append(heading, element('p', 'resource-description', resource.description));

    const tags = element('div', 'resource-tags');
    resource.tags.slice(0, 5).forEach(tag => tags.append(element('span', 'resource-tag', tag)));
    card.append(tags);

    const details = document.createElement('details');
    const summary = element('summary', '', 'Working scientifically');
    details.append(summary);
    const ws = element('div', 'ws-tags');
    resource.workingScientifically.forEach(process => ws.append(element('span', 'ws-tag', process)));
    details.append(ws);
    card.append(details);

    const link = element('a', 'open-link', 'Open resource');
    link.href = resource.path;
    card.append(link);
    return card;
  }

  function filteredForModule(module) {
    return resources
      .map(resource => ({
        resource,
        mapping: resource.mappings.find(mapping => mapping.module === module.code)
      }))
      .filter(item => item.mapping && matches(item.resource, module, item.mapping))
      .sort((a, b) => {
        if (a.mapping.relevance !== b.mapping.relevance) return a.mapping.relevance === 'Core' ? -1 : 1;
        return a.resource.title.localeCompare(b.resource.title, 'en-AU');
      });
  }

  function renderModules() {
    const visibleResourceIds = new Set();
    let visibleMappings = 0;

    const sections = modules.map(module => {
      const items = filteredForModule(module);
      visibleMappings += items.length;
      items.forEach(item => visibleResourceIds.add(item.resource.id));

      const section = element('section', 'module-section');
      section.id = `module-${module.code.replace('.', '-')}`;
      section.style.setProperty('--module-colour', module.colour);

      const heading = element('div', 'module-heading');
      const headingCopy = element('div', 'module-heading-copy');
      headingCopy.append(element('h2', '', `${module.code} ${module.title}`));
      const outcome = element('p', 'module-outcome');
      outcome.append(element('strong', '', `${module.outcome}: `));
      outcome.append(document.createTextNode(module.outcomeText));
      headingCopy.append(outcome);
      heading.append(headingCopy, element('span', 'module-label', `${module.year} · ${items.length} resource${items.length === 1 ? '' : 's'}`));
      section.append(heading);

      if (items.length) {
        const grid = element('div', 'resource-grid');
        items.forEach(item => grid.append(renderResourceCard(item.resource, item.mapping)));
        section.append(grid);
      } else {
        section.append(element('div', 'empty-state', 'No mapped resources match the current filters.'));
      }

      const moduleLinkCount = document.querySelector(`[data-module-link="${module.code}"] .module-count`);
      if (moduleLinkCount) moduleLinkCount.textContent = `${items.length} mapped resource${items.length === 1 ? '' : 's'}`;
      return section;
    });

    moduleResults.replaceChildren(...sections);
    resultsSummary.textContent = `${visibleResourceIds.size} unique resources across ${visibleMappings} curriculum links`;
    $('#mappedResourceCount').textContent = String(visibleResourceIds.size);
    $('#curriculumLinkCount').textContent = String(visibleMappings);
    $('#depthStudyCount').textContent = String(resources.filter(resource => resource.depthStudy).length);
  }

  function populateFilters() {
    [...new Set(resources.map(resource => resource.type))]
      .sort((a, b) => a.localeCompare(b, 'en-AU'))
      .forEach(type => {
        const option = element('option', '', type);
        option.value = type;
        typeSelect.append(option);
      });

    data.workingScientificallyProcesses.forEach(process => {
      const option = element('option', '', process);
      option.value = process;
      wsSelect.append(option);
    });
  }

  function updateDepthButton() {
    depthStudyButton.classList.toggle('active', state.depthStudy);
    depthStudyButton.setAttribute('aria-pressed', String(state.depthStudy));
    depthStudyButton.textContent = state.depthStudy ? 'Depth study: on' : 'Depth study resources';
  }

  function resetFilters() {
    state.query = '';
    state.relevance = '';
    state.type = '';
    state.workingScientifically = '';
    state.depthStudy = false;
    searchInput.value = '';
    relevanceSelect.value = '';
    typeSelect.value = '';
    wsSelect.value = '';
    updateDepthButton();
    renderModules();
  }

  searchInput.addEventListener('input', event => {
    state.query = normalise(event.target.value);
    renderModules();
  });
  relevanceSelect.addEventListener('change', event => {
    state.relevance = event.target.value;
    renderModules();
  });
  typeSelect.addEventListener('change', event => {
    state.type = event.target.value;
    renderModules();
  });
  wsSelect.addEventListener('change', event => {
    state.workingScientifically = event.target.value;
    renderModules();
  });
  depthStudyButton.addEventListener('click', () => {
    state.depthStudy = !state.depthStudy;
    updateDepthButton();
    renderModules();
  });
  resetButton.addEventListener('click', resetFilters);

  renderYearPanels();
  renderSharedTools();
  populateFilters();
  updateDepthButton();
  renderModules();
})();
