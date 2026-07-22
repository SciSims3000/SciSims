(() => {
  'use strict';

  const APP_VERSION = '1.0.0';
  const STORAGE_KEY = 'steam-web-engine-v1';

  const STATUS_OPTIONS = [
    { value: 'not-started', label: 'Not started' },
    { value: 'in-progress', label: 'In progress' },
    { value: 'ready-review', label: 'Ready for review' },
    { value: 'complete', label: 'Complete' }
  ];

  const ROLE_OPTIONS = [
    'Project Manager',
    'Science Lead',
    'Design and Engineering Lead',
    'Data and Testing Lead',
    'Communication and Presentation Lead',
    'Materials and Safety Lead'
  ];

  const META_FIELDS = [
    { id: 'projectTitle', label: 'Project title', placeholder: 'Give the project a clear working title', span: 2 },
    { id: 'projectOption', label: 'Selected project option', placeholder: 'Enter the selected Year 7 STEAM project' },
    { id: 'groupName', label: 'Group name', placeholder: 'Optional group name' },
    { id: 'className', label: 'Class', placeholder: 'For example, 7A' },
    { id: 'teacher', label: 'Teacher', placeholder: 'Teacher name' },
    { id: 'dateCommenced', label: 'Date commenced', type: 'date' },
    { id: 'targetCompletion', label: 'Target completion date', type: 'date' },
    { id: 'portfolioUrl', label: 'Google Docs portfolio link', type: 'url', placeholder: 'Paste the shared portfolio link', span: 2 },
    { id: 'portfolioLocation', label: 'Portfolio location notes', placeholder: 'Folder, document title or other location details', span: 2 }
  ];

  const phaseConfigs = [
    {
      id: 'choose',
      tabLabel: 'Investigate: Choose & Define',
      title: 'Investigate: Choose and Define',
      focus: 'Understand the problem and define a worthwhile project direction.',
      collaboration: 'Form the team, assign initial roles, shortlist project options and use evidence, interest and feasibility to choose a direction.',
      actions: 'Explore the available project options, agree on how the group will work, choose a project and write a precise problem statement.',
      evidence: 'Group contract, project shortlist, selection decision and problem statement.',
      purpose: 'Start with a shared understanding of the challenge. A strong project begins with a clear problem, a realistic scope and a team agreement.',
      sections: [
        {
          title: 'Project shortlist and selection',
          help: 'Compare possible projects before confirming the final choice.',
          fields: [
            {
              type: 'table', id: 'projectShortlist', label: 'Project shortlist', addLabel: 'Add project option', defaultRows: 3,
              columns: [
                { key: 'option', label: 'Project option', type: 'textarea', placeholder: 'Name or describe the option' },
                { key: 'interest', label: 'Group interest (1–5)', type: 'select', options: ['', '1', '2', '3', '4', '5'] },
                { key: 'scienceFit', label: 'Science fit (1–5)', type: 'select', options: ['', '1', '2', '3', '4', '5'] },
                { key: 'feasibility', label: 'Feasibility (1–5)', type: 'select', options: ['', '1', '2', '3', '4', '5'] },
                { key: 'evidence', label: 'Evidence / reasons', type: 'textarea', placeholder: 'Why is this a sensible option?' },
                { key: 'decision', label: 'Decision', type: 'select', options: ['', 'Shortlist', 'Reject', 'Selected'] }
              ]
            },
            { type: 'textarea', id: 'selectionJustification', label: 'Why did the group choose this project?', placeholder: 'Use evidence, interest, feasibility and the available resources to justify the choice.', full: true, rows: 5 },
            { type: 'textarea', id: 'rejectedOptions', label: 'Which options were rejected, and why?', placeholder: 'Record the key reasons so the decision-making process is clear.', full: true, rows: 4 }
          ]
        },
        {
          title: 'Define the problem',
          help: 'Write a focused problem statement and identify who the project is for.',
          fields: [
            { type: 'textarea', id: 'problemStatement', label: 'Problem statement', placeholder: 'The problem we are trying to solve or explain is…', full: true, rows: 5 },
            { type: 'textarea', id: 'audienceNeed', label: 'Who is affected, and what do they need?', placeholder: 'Identify the audience, user or community and the need that matters to them.', rows: 4 },
            { type: 'textarea', id: 'projectGoal', label: 'Project goal', placeholder: 'By the end of the project, our group aims to…', rows: 4 },
            { type: 'textarea', id: 'initialScienceLinks', label: 'Initial science connections', placeholder: 'What scientific ideas might help the group understand the problem?', rows: 4 },
            { type: 'textarea', id: 'successVision', label: 'What would a successful project look like?', placeholder: 'Describe the qualities of a successful solution, model, system or communication product.', rows: 4 }
          ]
        },
        {
          title: 'Group agreement',
          help: 'Make expectations visible before the project work becomes complex.',
          fields: [
            {
              type: 'table', id: 'groupContract', label: 'Group contract', addLabel: 'Add agreement', defaultRows: 5,
              columns: [
                { key: 'agreement', label: 'We agree to…', type: 'textarea', placeholder: 'For example, listen respectfully and complete assigned tasks' },
                { key: 'evidence', label: 'How we will know', type: 'textarea', placeholder: 'Describe the behaviour or evidence' },
                { key: 'response', label: 'What happens if there is a problem?', type: 'textarea', placeholder: 'How will the group respond?' }
              ]
            },
            { type: 'textarea', id: 'conflictPlan', label: 'How will the group resolve disagreements?', placeholder: 'Explain how evidence, criteria and respectful discussion will be used.', full: true, rows: 4 }
          ]
        },
        {
          title: 'Phase completion check',
          help: 'Use this checklist before marking the phase complete.',
          fields: [
            {
              type: 'checklist', id: 'completionChecklist', items: [
                'We explored more than one project option.',
                'We used evidence, interest and feasibility to make the final choice.',
                'Every group member has a name and at least one role.',
                'Our problem statement is specific and understandable.',
                'Our group agreement explains how we will collaborate and make decisions.'
              ]
            },
            { type: 'textarea', id: 'additionalNotes', label: 'Additional notes', placeholder: 'Record questions, decisions or reminders for the next phase.', full: true, rows: 4 }
          ]
        }
      ]
    },
    {
      id: 'research',
      tabLabel: 'Investigate: Research & Learn',
      title: 'Investigate: Research and Learn',
      focus: 'Learn the science needed to understand the problem and analyse existing examples.',
      collaboration: 'Share research tasks, compare sources, identify useful ideas and agree on the science that must guide the project.',
      actions: 'Research the required science, analyse existing products or solutions and build a shared evidence base.',
      evidence: 'Research notes, science summary, source record, existing-example analysis and inspiration board notes.',
      purpose: 'Good design depends on accurate science and informed research. This phase builds the knowledge the group will use to justify later decisions.',
      sections: [
        {
          title: 'Research plan',
          help: 'Decide what the group needs to learn and allocate the research work.',
          fields: [
            { type: 'textarea', id: 'researchQuestions', label: 'What does the group need to find out?', placeholder: 'List the scientific, technical, audience and design questions that need answers.', full: true, rows: 5 },
            {
              type: 'table', id: 'researchAllocation', label: 'Research task allocation', addLabel: 'Add research task', defaultRows: 4,
              columns: [
                { key: 'question', label: 'Question / topic', type: 'textarea', placeholder: 'What needs to be researched?' },
                { key: 'person', label: 'Responsible member', type: 'text', placeholder: 'Name' },
                { key: 'sourceType', label: 'Suggested source type', type: 'text', placeholder: 'Website, book, video, expert…' },
                { key: 'deadline', label: 'Target date', type: 'date' },
                { key: 'status', label: 'Status', type: 'select', options: ['', 'Not started', 'In progress', 'Complete'] }
              ]
            }
          ]
        },
        {
          title: 'Source and evidence record',
          help: 'Record enough information to find the source again and explain why it is useful.',
          fields: [
            {
              type: 'table', id: 'sourceRecord', label: 'Research sources', addLabel: 'Add source', defaultRows: 5,
              columns: [
                { key: 'title', label: 'Source title', type: 'textarea', placeholder: 'Title of article, page, video or book' },
                { key: 'author', label: 'Author / organisation', type: 'text', placeholder: 'Who produced it?' },
                { key: 'link', label: 'Link / location', type: 'url', placeholder: 'URL or library details' },
                { key: 'keyEvidence', label: 'Key evidence or idea', type: 'textarea', placeholder: 'Summarise the useful information' },
                { key: 'quality', label: 'Why is it trustworthy or useful?', type: 'textarea', placeholder: 'Authority, evidence, currency, agreement with other sources…' }
              ]
            }
          ]
        },
        {
          title: 'Science understanding',
          help: 'Bring the research together in language the whole group understands.',
          fields: [
            { type: 'textarea', id: 'scienceSummary', label: 'Science summary', placeholder: 'Explain the main scientific ideas the project must use accurately.', full: true, rows: 7 },
            { type: 'textarea', id: 'keyTerms', label: 'Key scientific terms', placeholder: 'List and define the terms the group must use correctly.', rows: 5 },
            { type: 'textarea', id: 'evidenceLinks', label: 'How does the evidence connect to the problem?', placeholder: 'Explain how the research changes or strengthens the group’s understanding.', rows: 5 },
            { type: 'textarea', id: 'uncertainties', label: 'What remains uncertain?', placeholder: 'Record gaps, disagreements or questions that may need testing.', full: true, rows: 4 }
          ]
        },
        {
          title: 'Existing examples and inspiration',
          help: 'Analyse what already exists rather than copying it.',
          fields: [
            {
              type: 'table', id: 'existingExamples', label: 'Existing examples', addLabel: 'Add example', defaultRows: 3,
              columns: [
                { key: 'example', label: 'Example / solution', type: 'textarea', placeholder: 'Name or describe it' },
                { key: 'strengths', label: 'What works well?', type: 'textarea', placeholder: 'Useful features or ideas' },
                { key: 'limitations', label: 'What could be improved?', type: 'textarea', placeholder: 'Limitations, gaps or trade-offs' },
                { key: 'inspiration', label: 'What might inspire our project?', type: 'textarea', placeholder: 'Record the idea without copying the whole solution' }
              ]
            },
            {
              type: 'table', id: 'portfolioEvidence', label: 'External portfolio references', addLabel: 'Add portfolio reference', defaultRows: 2,
              columns: [
                { key: 'title', label: 'Evidence title', type: 'text', placeholder: 'For example, inspiration board' },
                { key: 'link', label: 'Google Docs link', type: 'url', placeholder: 'Paste link if available' },
                { key: 'location', label: 'Location / description', type: 'textarea', placeholder: 'Page, heading or brief description' }
              ]
            }
          ]
        },
        {
          title: 'Phase completion check',
          fields: [
            {
              type: 'checklist', id: 'completionChecklist', items: [
                'The research questions cover the science and the project context.',
                'The group recorded sources and explained why they are useful.',
                'The science summary is written in the group’s own words.',
                'Existing examples were analysed for strengths and limitations.',
                'Uncertainties or questions for later testing are recorded.'
              ]
            },
            { type: 'textarea', id: 'additionalNotes', label: 'Additional notes', placeholder: 'Record decisions or reminders for the Design phase.', full: true, rows: 4 }
          ]
        }
      ]
    },
    {
      id: 'design',
      tabLabel: 'Design',
      title: 'Design',
      focus: 'Plan a solution that responds to the problem, evidence and constraints.',
      collaboration: 'Agree on design criteria, constraints, materials and success measures. Generate alternatives and justify the final choice.',
      actions: 'Develop at least three ideas, compare them with a decision matrix, select one and prepare the final design plan.',
      evidence: 'Design brief, three ideas, decision matrix, final design description, materials plan and sketch reference.',
      purpose: 'Design is a deliberate decision-making process. The group should generate alternatives before selecting the strongest direction.',
      sections: [
        {
          title: 'Design brief',
          help: 'Define the purpose, audience, constraints and measurable success criteria.',
          fields: [
            { type: 'textarea', id: 'designPurpose', label: 'Purpose and intended outcome', placeholder: 'What will the project create, demonstrate, improve or communicate?', rows: 4 },
            { type: 'textarea', id: 'designAudience', label: 'Audience or user', placeholder: 'Who will use, view or benefit from the final product?', rows: 4 },
            {
              type: 'table', id: 'successCriteria', label: 'Success criteria', addLabel: 'Add criterion', defaultRows: 5,
              columns: [
                { key: 'criterion', label: 'Success criterion', type: 'textarea', placeholder: 'A specific quality the design should achieve' },
                { key: 'measure', label: 'How it will be measured', type: 'textarea', placeholder: 'Observation, measurement, feedback, comparison…' },
                { key: 'priority', label: 'Priority', type: 'select', options: ['', 'Essential', 'Important', 'Desirable'] }
              ]
            },
            {
              type: 'table', id: 'constraints', label: 'Constraints and available resources', addLabel: 'Add constraint or resource', defaultRows: 5,
              columns: [
                { key: 'type', label: 'Type', type: 'select', options: ['', 'Constraint', 'Available resource'] },
                { key: 'detail', label: 'Detail', type: 'textarea', placeholder: 'Time, materials, cost, safety, size, tools, knowledge…' },
                { key: 'designEffect', label: 'Effect on the design', type: 'textarea', placeholder: 'How must the group respond?' }
              ]
            }
          ]
        },
        {
          title: 'Generate design ideas',
          help: 'Record at least three genuinely different directions.',
          fields: [
            {
              type: 'table', id: 'designIdeas', label: 'Possible design ideas', addLabel: 'Add design idea', defaultRows: 3,
              columns: [
                { key: 'name', label: 'Idea name', type: 'text', placeholder: 'Short name' },
                { key: 'description', label: 'Description', type: 'textarea', placeholder: 'How would it work or communicate?' },
                { key: 'science', label: 'Science used', type: 'textarea', placeholder: 'Scientific ideas or evidence' },
                { key: 'strengths', label: 'Strengths', type: 'textarea', placeholder: 'Why might it succeed?' },
                { key: 'limitations', label: 'Limitations', type: 'textarea', placeholder: 'Risks, constraints or weaknesses' }
              ]
            }
          ]
        },
        {
          title: 'Decision matrix',
          help: 'Score each idea from 1 (weak) to 5 (strong). All criteria are equally weighted in Version 1.',
          fields: [
            {
              type: 'table', id: 'decisionMatrix', label: 'Compare the ideas', addLabel: 'Add idea to matrix', defaultRows: 3,
              columns: [
                { key: 'idea', label: 'Idea', type: 'text', placeholder: 'Idea name' },
                { key: 'accuracy', label: 'Scientific accuracy (1–5)', type: 'select', options: ['', '1', '2', '3', '4', '5'] },
                { key: 'testability', label: 'Testability (1–5)', type: 'select', options: ['', '1', '2', '3', '4', '5'] },
                { key: 'feasibility', label: 'Feasibility (1–5)', type: 'select', options: ['', '1', '2', '3', '4', '5'] },
                { key: 'resources', label: 'Time and materials (1–5)', type: 'select', options: ['', '1', '2', '3', '4', '5'] },
                { key: 'audience', label: 'Audience impact (1–5)', type: 'select', options: ['', '1', '2', '3', '4', '5'] },
                { key: 'total', label: 'Total / 25', type: 'calculated-total', sourceKeys: ['accuracy', 'testability', 'feasibility', 'resources', 'audience'] }
              ]
            },
            { type: 'textarea', id: 'selectedDesign', label: 'Selected design', placeholder: 'Describe the design the group has chosen.', full: true, rows: 5 },
            { type: 'textarea', id: 'designJustification', label: 'Design justification', placeholder: 'Explain why this design is stronger than the alternatives. Refer to the criteria, evidence and constraints.', full: true, rows: 6 }
          ]
        },
        {
          title: 'Final design plan',
          help: 'Prepare enough detail for the group to begin building.',
          fields: [
            { type: 'textarea', id: 'finalDesignDescription', label: 'Detailed design description', placeholder: 'Explain the parts, systems, layout, sequence or communication approach.', full: true, rows: 7 },
            {
              type: 'table', id: 'materialsList', label: 'Materials, tools and components', addLabel: 'Add item', defaultRows: 6,
              columns: [
                { key: 'item', label: 'Item', type: 'text', placeholder: 'Material, tool or component' },
                { key: 'quantity', label: 'Quantity', type: 'text', placeholder: 'Amount and unit' },
                { key: 'purpose', label: 'Purpose', type: 'textarea', placeholder: 'How will it be used?' },
                { key: 'source', label: 'Source / availability', type: 'text', placeholder: 'Where will it come from?' },
                { key: 'sustainability', label: 'Safety / sustainability note', type: 'textarea', placeholder: 'Waste, reuse, risk or responsible use' }
              ]
            },
            {
              type: 'table', id: 'taskPlan', label: 'Initial production roles and tasks', addLabel: 'Add task', defaultRows: 5,
              columns: [
                { key: 'task', label: 'Task', type: 'textarea', placeholder: 'What needs to be done?' },
                { key: 'person', label: 'Responsible member', type: 'text', placeholder: 'Name' },
                { key: 'support', label: 'Support needed', type: 'text', placeholder: 'Who or what will help?' },
                { key: 'target', label: 'Target date', type: 'date' },
                { key: 'status', label: 'Status', type: 'select', options: ['', 'Not started', 'In progress', 'Complete'] }
              ]
            },
            {
              type: 'table', id: 'portfolioEvidence', label: 'Design portfolio references', addLabel: 'Add portfolio reference', defaultRows: 2,
              columns: [
                { key: 'title', label: 'Evidence title', type: 'text', placeholder: 'For example, final design sketch' },
                { key: 'link', label: 'Google Docs link', type: 'url', placeholder: 'Paste link if available' },
                { key: 'location', label: 'Location / description', type: 'textarea', placeholder: 'Page, heading or brief description' }
              ]
            }
          ]
        },
        {
          title: 'Phase completion check',
          fields: [
            {
              type: 'checklist', id: 'completionChecklist', items: [
                'The design brief defines the purpose, audience, criteria and constraints.',
                'The group generated at least three different ideas.',
                'The decision matrix was completed honestly using agreed criteria.',
                'The final design is justified with evidence.',
                'Materials, tasks and external design evidence are recorded.'
              ]
            },
            { type: 'textarea', id: 'additionalNotes', label: 'Additional notes', placeholder: 'Record decisions or reminders before building.', full: true, rows: 4 }
          ]
        }
      ]
    },
    {
      id: 'build',
      tabLabel: 'Build / Model',
      title: 'Build / Model',
      focus: 'Create the first version of the product, model, system, display or communication piece.',
      collaboration: 'Assign production roles, manage time and materials, document decisions and respond to practical problems.',
      actions: 'Build, model, draft or construct the first version while recording progress, changes and evidence.',
      evidence: 'Prototype 1, construction or production notes, photographs or sketches in the external portfolio, and a decision log.',
      purpose: 'The first version turns the design plan into something that can be examined and tested. It does not need to be perfect.',
      sections: [
        {
          title: 'Build plan',
          help: 'Confirm the sequence, responsibilities and safety expectations before starting.',
          fields: [
            { type: 'textarea', id: 'prototypeDescription', label: 'What will Prototype 1 include?', placeholder: 'Describe the first version and what the group expects it to demonstrate.', full: true, rows: 5 },
            {
              type: 'table', id: 'buildSequence', label: 'Build / production sequence', addLabel: 'Add step', defaultRows: 6,
              columns: [
                { key: 'step', label: 'Step', type: 'textarea', placeholder: 'What will happen?' },
                { key: 'person', label: 'Responsible member', type: 'text', placeholder: 'Name' },
                { key: 'resources', label: 'Tools / materials', type: 'textarea', placeholder: 'What is needed?' },
                { key: 'safety', label: 'Safety check', type: 'textarea', placeholder: 'Risk and control' },
                { key: 'status', label: 'Status', type: 'select', options: ['', 'Not started', 'In progress', 'Complete', 'Changed'] }
              ]
            }
          ]
        },
        {
          title: 'Production log',
          help: 'Record what happened rather than relying on memory.',
          fields: [
            {
              type: 'table', id: 'productionLog', label: 'Build log', addLabel: 'Add log entry', defaultRows: 5,
              columns: [
                { key: 'date', label: 'Date', type: 'date' },
                { key: 'work', label: 'Work completed', type: 'textarea', placeholder: 'What was built, drafted or produced?' },
                { key: 'decision', label: 'Decision or change', type: 'textarea', placeholder: 'What changed from the plan?' },
                { key: 'reason', label: 'Reason / evidence', type: 'textarea', placeholder: 'Why was the decision made?' },
                { key: 'next', label: 'Next action', type: 'textarea', placeholder: 'What happens next?' }
              ]
            },
            { type: 'textarea', id: 'buildChallenges', label: 'Challenges encountered', placeholder: 'Describe practical, scientific, communication or teamwork problems.', rows: 5 },
            { type: 'textarea', id: 'challengeResponses', label: 'How did the group respond?', placeholder: 'Explain the solution, compromise or decision used.', rows: 5 }
          ]
        },
        {
          title: 'Prototype 1 record',
          help: 'Summarise the completed first version before testing begins.',
          fields: [
            { type: 'textarea', id: 'prototypeOutcome', label: 'What was completed?', placeholder: 'Describe the current prototype, model, system or draft.', full: true, rows: 6 },
            { type: 'textarea', id: 'prototypeStrengths', label: 'Initial strengths', placeholder: 'What already seems to work well?', rows: 4 },
            { type: 'textarea', id: 'prototypeWeaknesses', label: 'Initial weaknesses or uncertainties', placeholder: 'What needs testing or closer examination?', rows: 4 },
            {
              type: 'table', id: 'portfolioEvidence', label: 'Build portfolio references', addLabel: 'Add portfolio reference', defaultRows: 3,
              columns: [
                { key: 'title', label: 'Evidence title', type: 'text', placeholder: 'For example, Prototype 1 photograph' },
                { key: 'link', label: 'Google Docs link', type: 'url', placeholder: 'Paste link if available' },
                { key: 'location', label: 'Location / description', type: 'textarea', placeholder: 'Page, heading or brief description' }
              ]
            }
          ]
        },
        {
          title: 'Phase completion check',
          fields: [
            {
              type: 'checklist', id: 'completionChecklist', items: [
                'The group followed a planned production sequence.',
                'Tools and materials were used safely and responsibly.',
                'Changes from the design were documented with reasons.',
                'Prototype 1 is complete enough to test.',
                'Large evidence is stored in the external portfolio and referenced here.'
              ]
            },
            { type: 'textarea', id: 'additionalNotes', label: 'Additional notes', placeholder: 'Record anything the testing team needs to know.', full: true, rows: 4 }
          ]
        }
      ]
    },
    {
      id: 'test',
      tabLabel: 'Test',
      title: 'Test',
      focus: 'Collect useful evidence about how well the first version works.',
      collaboration: 'Agree on fair, safe and measurable testing. Allocate data roles and record observations honestly.',
      actions: 'Plan and conduct tests, collect measurable data, record observations and gather feedback.',
      evidence: 'Testing plan, fair-testing agreement, risk controls, results table, observations, feedback and preliminary conclusion.',
      purpose: 'Testing should produce evidence that can guide improvement. The goal is not to prove the design is perfect, but to find out how it performs.',
      sections: [
        {
          title: 'Testing purpose and criteria',
          help: 'Connect each test to a success criterion or important design question.',
          fields: [
            { type: 'textarea', id: 'testingPurpose', label: 'What does the group need to find out?', placeholder: 'State the main performance, accuracy, usability or communication questions.', full: true, rows: 5 },
            {
              type: 'table', id: 'testCriteria', label: 'Test plan', addLabel: 'Add test', defaultRows: 4,
              columns: [
                { key: 'criterion', label: 'Criterion / question', type: 'textarea', placeholder: 'What will be tested?' },
                { key: 'method', label: 'Method', type: 'textarea', placeholder: 'How will it be tested?' },
                { key: 'measure', label: 'Data / observation', type: 'textarea', placeholder: 'What will be measured or recorded?' },
                { key: 'success', label: 'Success benchmark', type: 'textarea', placeholder: 'What result would meet the criterion?' },
                { key: 'person', label: 'Responsible member', type: 'text', placeholder: 'Name' }
              ]
            }
          ]
        },
        {
          title: 'Fair testing and safety',
          help: 'Identify variables and controls when a fair test is appropriate.',
          fields: [
            { type: 'textarea', id: 'independentVariable', label: 'Independent variable', placeholder: 'What will be changed deliberately? Write “not applicable” if this is not an experimental test.', rows: 4 },
            { type: 'textarea', id: 'dependentVariable', label: 'Dependent variable', placeholder: 'What will be measured or observed?', rows: 4 },
            { type: 'textarea', id: 'controlledVariables', label: 'Controlled variables', placeholder: 'What must be kept the same for a fair comparison?', rows: 4 },
            { type: 'textarea', id: 'repeatsReliability', label: 'Repeats and reliability', placeholder: 'How many trials, users or observations will be used, and why?', rows: 4 },
            {
              type: 'table', id: 'riskAssessment', label: 'Testing risk assessment', addLabel: 'Add risk', defaultRows: 4,
              columns: [
                { key: 'hazard', label: 'Hazard', type: 'textarea', placeholder: 'What could cause harm?' },
                { key: 'risk', label: 'Possible harm', type: 'textarea', placeholder: 'What could happen?' },
                { key: 'control', label: 'Control measure', type: 'textarea', placeholder: 'How will risk be reduced?' },
                { key: 'person', label: 'Responsible person', type: 'text', placeholder: 'Name' }
              ]
            },
            { type: 'textarea', id: 'fairTestingAgreement', label: 'Group fair-testing agreement', placeholder: 'Explain what the group agrees to do so the evidence is fair, safe and measurable.', full: true, rows: 5 }
          ]
        },
        {
          title: 'Results and observations',
          help: 'Use the editable table for numerical data, ratings or repeated observations.',
          fields: [
            {
              type: 'table', id: 'resultsTable', label: 'Results table', addLabel: 'Add result row', defaultRows: 8,
              columns: [
                { key: 'trial', label: 'Trial / condition', type: 'text', placeholder: 'Trial number or condition' },
                { key: 'measure1', label: 'Measurement 1', type: 'text', placeholder: 'Value and unit' },
                { key: 'measure2', label: 'Measurement 2', type: 'text', placeholder: 'Value and unit' },
                { key: 'measure3', label: 'Measurement 3', type: 'text', placeholder: 'Value and unit' },
                { key: 'observation', label: 'Observation / comment', type: 'textarea', placeholder: 'Qualitative evidence or notes' }
              ]
            },
            { type: 'textarea', id: 'patterns', label: 'Patterns, trends and relationships', placeholder: 'Describe what the data shows.', rows: 5 },
            { type: 'textarea', id: 'anomalies', label: 'Anomalies and unexpected results', placeholder: 'Identify unusual results and possible explanations.', rows: 5 },
            { type: 'textarea', id: 'limitations', label: 'Limitations of the testing', placeholder: 'What reduces confidence in the evidence?', full: true, rows: 5 }
          ]
        },
        {
          title: 'Feedback and preliminary conclusion',
          help: 'Feedback is another form of evidence when it is collected purposefully.',
          fields: [
            {
              type: 'table', id: 'feedbackRecord', label: 'Peer or user feedback', addLabel: 'Add feedback', defaultRows: 4,
              columns: [
                { key: 'source', label: 'Feedback from', type: 'text', placeholder: 'Peer, teacher, intended user…' },
                { key: 'strength', label: 'Strength identified', type: 'textarea', placeholder: 'What worked well?' },
                { key: 'improvement', label: 'Suggested improvement', type: 'textarea', placeholder: 'What should change?' },
                { key: 'useful', label: 'How useful is this feedback?', type: 'textarea', placeholder: 'Explain whether it is specific, relevant and supported' }
              ]
            },
            { type: 'textarea', id: 'testConclusion', label: 'What does the evidence show?', placeholder: 'Summarise how well Prototype 1 met the success criteria.', full: true, rows: 6 }
          ]
        },
        {
          title: 'Phase completion check',
          fields: [
            {
              type: 'checklist', id: 'completionChecklist', items: [
                'Each test connects to a criterion or important question.',
                'Testing was safe and as fair as possible.',
                'Measurements include appropriate units where required.',
                'Results, observations, anomalies and limitations are recorded.',
                'The preliminary conclusion is based on evidence rather than opinion.'
              ]
            },
            { type: 'textarea', id: 'additionalNotes', label: 'Additional notes', placeholder: 'Record questions or priorities for improvement.', full: true, rows: 4 }
          ]
        }
      ]
    },
    {
      id: 'improve',
      tabLabel: 'Improve',
      title: 'Improve',
      focus: 'Refine the project using test evidence and feedback.',
      collaboration: 'Use results and peer feedback to choose the most valuable improvement, update roles and document why changes were made.',
      actions: 'Identify weaknesses, select one major evidence-based improvement, create Prototype 2 and retest or re-evaluate it.',
      evidence: 'Improvement priority, improvement log, Prototype 2 record, comparison evidence and revised evaluation.',
      purpose: 'Iteration is more than making something look better. The change should respond to evidence and improve performance, accuracy, usability or communication.',
      sections: [
        {
          title: 'Analyse the evidence',
          help: 'Bring together numerical results, observations and feedback.',
          fields: [
            { type: 'textarea', id: 'evidenceStrengths', label: 'Evidence of strengths', placeholder: 'Which criteria were met, and what evidence supports this?', rows: 5 },
            { type: 'textarea', id: 'evidenceWeaknesses', label: 'Evidence of weaknesses', placeholder: 'Which criteria were not met, and what evidence supports this?', rows: 5 },
            {
              type: 'table', id: 'improvementOptions', label: 'Possible improvements', addLabel: 'Add improvement option', defaultRows: 4,
              columns: [
                { key: 'change', label: 'Possible change', type: 'textarea', placeholder: 'What could be improved?' },
                { key: 'evidence', label: 'Evidence supporting it', type: 'textarea', placeholder: 'Result, observation or feedback' },
                { key: 'impact', label: 'Expected impact (1–5)', type: 'select', options: ['', '1', '2', '3', '4', '5'] },
                { key: 'feasibility', label: 'Feasibility (1–5)', type: 'select', options: ['', '1', '2', '3', '4', '5'] },
                { key: 'priority', label: 'Priority', type: 'select', options: ['', 'Low', 'Medium', 'High', 'Selected'] }
              ]
            },
            { type: 'textarea', id: 'majorImprovement', label: 'Selected major improvement', placeholder: 'State the main change the group will make.', full: true, rows: 4 },
            { type: 'textarea', id: 'improvementJustification', label: 'Why was this improvement selected?', placeholder: 'Use test evidence, feedback, impact and feasibility to justify the decision.', full: true, rows: 6 }
          ]
        },
        {
          title: 'Improvement plan and log',
          help: 'Plan the change and record what actually happens.',
          fields: [
            {
              type: 'table', id: 'improvementPlan', label: 'Improvement tasks', addLabel: 'Add task', defaultRows: 5,
              columns: [
                { key: 'task', label: 'Task', type: 'textarea', placeholder: 'What will change?' },
                { key: 'person', label: 'Responsible member', type: 'text', placeholder: 'Name' },
                { key: 'resources', label: 'Resources needed', type: 'textarea', placeholder: 'Tools, materials, information or support' },
                { key: 'target', label: 'Target date', type: 'date' },
                { key: 'status', label: 'Status', type: 'select', options: ['', 'Not started', 'In progress', 'Complete'] }
              ]
            },
            {
              type: 'table', id: 'improvementLog', label: 'Improvement log', addLabel: 'Add log entry', defaultRows: 4,
              columns: [
                { key: 'date', label: 'Date', type: 'date' },
                { key: 'change', label: 'Change made', type: 'textarea', placeholder: 'What changed?' },
                { key: 'reason', label: 'Reason / evidence', type: 'textarea', placeholder: 'Why was it changed?' },
                { key: 'outcome', label: 'Immediate outcome', type: 'textarea', placeholder: 'What happened after the change?' }
              ]
            }
          ]
        },
        {
          title: 'Prototype 2 and comparison',
          help: 'Compare the revised version with the original using the same criteria where possible.',
          fields: [
            { type: 'textarea', id: 'prototype2Description', label: 'Prototype 2 description', placeholder: 'Describe the revised product, model, system or communication piece.', full: true, rows: 6 },
            {
              type: 'table', id: 'comparisonEvidence', label: 'Prototype comparison', addLabel: 'Add comparison criterion', defaultRows: 5,
              columns: [
                { key: 'criterion', label: 'Criterion / measure', type: 'textarea', placeholder: 'What is being compared?' },
                { key: 'prototype1', label: 'Prototype 1 result', type: 'textarea', placeholder: 'Original evidence' },
                { key: 'prototype2', label: 'Prototype 2 result', type: 'textarea', placeholder: 'Revised evidence' },
                { key: 'change', label: 'Difference', type: 'textarea', placeholder: 'Better, worse or unchanged?' },
                { key: 'meaning', label: 'What does this mean?', type: 'textarea', placeholder: 'Interpret the comparison' }
              ]
            },
            { type: 'textarea', id: 'improvementEvaluation', label: 'Did the improvement work?', placeholder: 'Evaluate the change using the comparison evidence and identify remaining limitations.', full: true, rows: 6 },
            {
              type: 'table', id: 'portfolioEvidence', label: 'Improvement portfolio references', addLabel: 'Add portfolio reference', defaultRows: 3,
              columns: [
                { key: 'title', label: 'Evidence title', type: 'text', placeholder: 'For example, Prototype 2 photograph' },
                { key: 'link', label: 'Google Docs link', type: 'url', placeholder: 'Paste link if available' },
                { key: 'location', label: 'Location / description', type: 'textarea', placeholder: 'Page, heading or brief description' }
              ]
            }
          ]
        },
        {
          title: 'Phase completion check',
          fields: [
            {
              type: 'checklist', id: 'completionChecklist', items: [
                'The major improvement responds directly to evidence.',
                'The group justified why this improvement was prioritised.',
                'Changes and responsibilities were documented.',
                'Prototype 2 was compared with Prototype 1.',
                'The evaluation identifies both improvement and remaining limitations.'
              ]
            },
            { type: 'textarea', id: 'additionalNotes', label: 'Additional notes', placeholder: 'Record final technical decisions before preparing the communication product.', full: true, rows: 4 }
          ]
        }
      ]
    },
    {
      id: 'communicate',
      tabLabel: 'Communicate',
      title: 'Communicate',
      focus: 'Prepare the final explanation, display, pitch, poster, video, guide or exhibition.',
      collaboration: 'Decide the clearest way to explain the science, data, design choices and evidence to the intended audience.',
      actions: 'Select the communication format, organise the key message, plan visuals and ensure every claim is supported.',
      evidence: 'Communication plan, audience strategy, science explanation, data display plan, storyboard or layout and final quality check.',
      purpose: 'A strong STEAM product communicates both what was made and why the group’s decisions are supported by science, mathematics and evidence.',
      sections: [
        {
          title: 'Audience and communication purpose',
          help: 'Choose a format that suits the audience rather than simply choosing the easiest format.',
          fields: [
            { type: 'textarea', id: 'communicationAudience', label: 'Target audience', placeholder: 'Who needs to understand, use or respond to the final communication?', rows: 4 },
            { type: 'select', id: 'communicationFormat', label: 'Main communication format', options: ['', 'Live presentation', 'Pitch', 'Poster', 'Video', 'Infographic', 'Guide', 'Demonstration', 'Exhibition / display', 'Interactive product', 'Other'] },
            { type: 'textarea', id: 'formatJustification', label: 'Why is this format suitable?', placeholder: 'Explain how it matches the audience, purpose and available resources.', rows: 4 },
            { type: 'textarea', id: 'keyMessage', label: 'Central message', placeholder: 'Write the single most important idea the audience should understand.', rows: 4 }
          ]
        },
        {
          title: 'Content plan',
          help: 'Make the scientific reasoning and evidence visible.',
          fields: [
            { type: 'textarea', id: 'scienceExplanation', label: 'Science explanation', placeholder: 'Explain the scientific ideas accurately and at the right level for the audience.', full: true, rows: 7 },
            { type: 'textarea', id: 'designExplanation', label: 'Design and engineering choices', placeholder: 'Explain the chosen design, constraints, trade-offs and important decisions.', rows: 6 },
            { type: 'textarea', id: 'mathsExplanation', label: 'Mathematics and data', placeholder: 'Identify measurements, calculations, graphs or comparisons that support the message.', rows: 6 },
            { type: 'textarea', id: 'improvementStory', label: 'Testing and improvement story', placeholder: 'Explain what was tested, what changed and how the evidence improved the project.', full: true, rows: 6 }
          ]
        },
        {
          title: 'Visual and production plan',
          help: 'Use visual hierarchy, diagrams and evidence to guide the audience.',
          fields: [
            {
              type: 'table', id: 'communicationSequence', label: 'Storyboard, slide plan or display sequence', addLabel: 'Add section', defaultRows: 6,
              columns: [
                { key: 'order', label: 'Order', type: 'text', placeholder: '1, 2, 3…' },
                { key: 'section', label: 'Section / scene', type: 'text', placeholder: 'Heading or scene name' },
                { key: 'message', label: 'What will be explained?', type: 'textarea', placeholder: 'Key content' },
                { key: 'visual', label: 'Visual / evidence', type: 'textarea', placeholder: 'Diagram, photo, graph, model or demonstration' },
                { key: 'person', label: 'Responsible member', type: 'text', placeholder: 'Name' }
              ]
            },
            {
              type: 'table', id: 'visualEvidence', label: 'Planned visual evidence', addLabel: 'Add visual', defaultRows: 4,
              columns: [
                { key: 'visual', label: 'Visual', type: 'textarea', placeholder: 'Graph, table, diagram, image, model…' },
                { key: 'purpose', label: 'Purpose', type: 'textarea', placeholder: 'What will it help the audience understand?' },
                { key: 'source', label: 'Source / location', type: 'textarea', placeholder: 'Original data, external source or portfolio location' },
                { key: 'accuracy', label: 'Accuracy check', type: 'textarea', placeholder: 'Labels, units, scale, citation or explanation needed' }
              ]
            },
            {
              type: 'table', id: 'portfolioEvidence', label: 'Communication portfolio references', addLabel: 'Add portfolio reference', defaultRows: 2,
              columns: [
                { key: 'title', label: 'Evidence title', type: 'text', placeholder: 'For example, final storyboard' },
                { key: 'link', label: 'Google Docs link', type: 'url', placeholder: 'Paste link if available' },
                { key: 'location', label: 'Location / description', type: 'textarea', placeholder: 'Page, heading or brief description' }
              ]
            }
          ]
        },
        {
          title: 'Final communication quality check',
          help: 'Check clarity, evidence and audience impact before the showcase.',
          fields: [
            {
              type: 'checklist', id: 'qualityChecklist', items: [
                'The audience and purpose are clear.',
                'Scientific terms and explanations are accurate.',
                'Important claims are supported by data, observations or research.',
                'Visuals are labelled, readable and relevant.',
                'The design choices and improvement process are explained.',
                'Every group member has a clear communication role.',
                'Sources and external material are acknowledged appropriately.',
                'The final product has been rehearsed, proofread or tested.'
              ]
            },
            { type: 'textarea', id: 'finalCommunicationPlan', label: 'Final tasks before presentation', placeholder: 'Record the remaining actions, responsible members and priorities.', full: true, rows: 5 }
          ]
        },
        {
          title: 'Phase completion check',
          fields: [
            {
              type: 'checklist', id: 'completionChecklist', items: [
                'The format is appropriate for the intended audience.',
                'The science, mathematics, data and design choices are connected.',
                'The communication sequence is logical and easy to follow.',
                'Visual evidence has a clear purpose.',
                'The final product is ready to showcase.'
              ]
            },
            { type: 'textarea', id: 'additionalNotes', label: 'Additional notes', placeholder: 'Record presentation reminders or final responsibilities.', full: true, rows: 4 }
          ]
        }
      ]
    },
    {
      id: 'showcase',
      tabLabel: 'Showcase / Reflect',
      title: 'Showcase / Reflect',
      focus: 'Present the project and evaluate the outcome, collaboration and next steps.',
      collaboration: 'Reflect on group decisions, role contributions, communication, peer feedback and improvements that would strengthen the project further.',
      actions: 'Present the project, record peer review, evaluate the final outcome and complete individual reflections for each group member.',
      evidence: 'Presentation record, peer feedback, group evaluation, collaboration review, next-step plan and individual reflections.',
      purpose: 'Reflection turns the finished project into evidence of learning. Evaluate both the product and the process honestly.',
      sections: [
        {
          title: 'Showcase record',
          help: 'Record the final presentation or exhibition details.',
          fields: [
            { type: 'date', id: 'showcaseDate', label: 'Showcase date' },
            { type: 'textarea', id: 'showcaseAudience', label: 'Audience and setting', placeholder: 'Who attended, viewed or tested the final project?', rows: 4 },
            { type: 'textarea', id: 'presentationRoles', label: 'Presentation roles', placeholder: 'Explain what each member was responsible for during the showcase.', full: true, rows: 5 },
            { type: 'textarea', id: 'showcaseOutcome', label: 'What happened during the showcase?', placeholder: 'Record the response, questions, observations and important moments.', full: true, rows: 6 }
          ]
        },
        {
          title: 'Peer review and audience feedback',
          help: 'Record specific feedback rather than general praise.',
          fields: [
            {
              type: 'table', id: 'peerFeedback', label: 'Peer / audience feedback', addLabel: 'Add feedback', defaultRows: 5,
              columns: [
                { key: 'source', label: 'Feedback from', type: 'text', placeholder: 'Peer, teacher, visitor or user' },
                { key: 'strength', label: 'Strength', type: 'textarea', placeholder: 'What was effective?' },
                { key: 'question', label: 'Question or uncertainty', type: 'textarea', placeholder: 'What did they want clarified?' },
                { key: 'improvement', label: 'Suggested improvement', type: 'textarea', placeholder: 'What could be stronger?' },
                { key: 'response', label: 'Group response', type: 'textarea', placeholder: 'What will the group accept, reject or consider?' }
              ]
            }
          ]
        },
        {
          title: 'Group evaluation',
          help: 'Evaluate the final outcome against the original problem and success criteria.',
          fields: [
            { type: 'textarea', id: 'groupEvaluation', label: 'How successful was the final project?', placeholder: 'Use evidence to evaluate how well the project addressed the problem and met the criteria.', full: true, rows: 7 },
            { type: 'textarea', id: 'strongestEvidence', label: 'Strongest evidence of success', placeholder: 'Identify the most convincing data, observation, feedback or research evidence.', rows: 5 },
            { type: 'textarea', id: 'remainingLimitations', label: 'Remaining limitations', placeholder: 'What still reduces the quality, reliability or impact of the project?', rows: 5 },
            { type: 'textarea', id: 'nextSteps', label: 'What should improve next?', placeholder: 'Describe the next design change, investigation or communication improvement.', full: true, rows: 5 }
          ]
        },
        {
          title: 'Collaboration and decision-making reflection',
          help: 'Evaluate how the group worked, not just what the group produced.',
          fields: [
            { type: 'textarea', id: 'collaborationStrengths', label: 'What did the group do well?', placeholder: 'Consider roles, communication, shared responsibility, conflict management and decision-making.', rows: 5 },
            { type: 'textarea', id: 'collaborationChallenges', label: 'What collaboration challenges occurred?', placeholder: 'Describe the difficulty and how it affected the project.', rows: 5 },
            { type: 'textarea', id: 'decisionMakingEvaluation', label: 'How effective was the group’s decision-making?', placeholder: 'Explain when the group used evidence and criteria well, and when decisions could have been stronger.', full: true, rows: 6 },
            { type: 'textarea', id: 'futureCollaboration', label: 'How would the group work differently next time?', placeholder: 'Identify specific changes to roles, planning, communication or accountability.', full: true, rows: 5 }
          ]
        },
        {
          title: 'Individual reflections',
          help: 'A separate reflection is generated for each named group member.',
          fields: [
            { type: 'member-reflections', id: 'memberReflections' }
          ]
        },
        {
          title: 'Final completion check',
          fields: [
            {
              type: 'checklist', id: 'completionChecklist', items: [
                'The project was presented or showcased to an audience.',
                'Peer or audience feedback was recorded and considered.',
                'The group evaluation refers to evidence and success criteria.',
                'Collaboration and decision-making were evaluated honestly.',
                'Each named group member completed an individual reflection.',
                'A realistic next improvement has been identified.'
              ]
            },
            {
              type: 'table', id: 'portfolioEvidence', label: 'Final portfolio references', addLabel: 'Add portfolio reference', defaultRows: 2,
              columns: [
                { key: 'title', label: 'Evidence title', type: 'text', placeholder: 'For example, final presentation or peer review sheet' },
                { key: 'link', label: 'Google Docs link', type: 'url', placeholder: 'Paste link if available' },
                { key: 'location', label: 'Location / description', type: 'textarea', placeholder: 'Page, heading or brief description' }
              ]
            },
            { type: 'textarea', id: 'finalNotes', label: 'Final project notes', placeholder: 'Record any final submission or handover information.', full: true, rows: 4 }
          ]
        }
      ]
    }
  ];

  const dom = {
    tabs: document.getElementById('phase-tabs'),
    content: document.getElementById('phase-content'),
    metaFields: document.getElementById('meta-fields'),
    memberGrid: document.getElementById('member-grid'),
    progressLabel: document.getElementById('progress-label'),
    progressFill: document.getElementById('progress-fill'),
    fileName: document.getElementById('file-name'),
    autosaveStatus: document.getElementById('autosave-status'),
    fileInput: document.getElementById('load-json-input'),
    printDialog: document.getElementById('print-dialog'),
    printForm: document.getElementById('print-form'),
    selectedPhaseOptions: document.getElementById('selected-phase-options'),
    printPhaseCheckboxes: document.getElementById('print-phase-checkboxes'),
    toast: document.getElementById('toast')
  };

  let state = loadInitialState();
  let saveTimer = null;
  let toastTimer = null;

  initialise();

  function initialise() {
    renderMetaFields();
    renderMembers();
    renderTabs();
    renderPrintPhaseOptions();
    bindStaticEvents();
    setActivePhase(state.activePhase || phaseConfigs[0].id, false);
    updateFileNameInput();
    updateProgress();
    updateAutosaveMessage('Recovery copy loaded');
  }

  function createInitialState() {
    const today = new Date();
    const dateCommenced = toDateInput(today);
    const initial = {
      app: 'STEAM WEB ENGINE',
      version: APP_VERSION,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      activePhase: phaseConfigs[0].id,
      meta: {
        projectTitle: '',
        projectOption: '',
        groupName: '',
        className: '',
        teacher: '',
        dateCommenced,
        targetCompletion: '',
        portfolioUrl: '',
        portfolioLocation: '',
        fileName: '',
        fileNameAuto: true
      },
      members: Array.from({ length: 4 }, () => ({ name: '', roles: [], otherRole: '' })),
      phases: {}
    };

    phaseConfigs.forEach((phase) => {
      initial.phases[phase.id] = { status: 'not-started' };
      phase.sections.forEach((section) => {
        section.fields.forEach((field) => initialiseField(initial.phases[phase.id], field));
      });
    });

    initial.meta.fileName = suggestFileName(initial);
    return initial;
  }

  function initialiseField(phaseState, field) {
    if (field.type === 'table') {
      phaseState[field.id] = Array.from({ length: field.defaultRows || 1 }, () => emptyTableRow(field));
    } else if (field.type === 'checklist') {
      phaseState[field.id] = Object.fromEntries(field.items.map((_, index) => [String(index), false]));
    } else if (field.type === 'member-reflections') {
      phaseState[field.id] = Array.from({ length: 4 }, () => ({ contribution: '', learning: '', evidence: '', nextStep: '' }));
    } else {
      phaseState[field.id] = '';
    }
  }

  function emptyTableRow(field) {
    return Object.fromEntries(field.columns.map((column) => [column.key, '']));
  }

  function loadInitialState() {
    const fresh = createInitialState();
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return fresh;
      const parsed = JSON.parse(stored);
      return normaliseState(parsed, fresh);
    } catch (error) {
      console.warn('Could not load local recovery state.', error);
      return fresh;
    }
  }

  function normaliseState(imported, fresh = createInitialState()) {
    if (!imported || typeof imported !== 'object') throw new Error('The selected file does not contain a valid STEAM project.');

    const merged = deepMerge(fresh, imported);
    merged.app = 'STEAM WEB ENGINE';
    merged.version = APP_VERSION;
    merged.updatedAt = new Date().toISOString();
    merged.activePhase = phaseConfigs.some((phase) => phase.id === merged.activePhase) ? merged.activePhase : phaseConfigs[0].id;
    merged.meta.fileNameAuto = imported?.meta?.fileNameAuto !== false;

    merged.members = Array.from({ length: 4 }, (_, index) => {
      const member = imported.members?.[index] || {};
      return {
        name: typeof member.name === 'string' ? member.name : '',
        roles: Array.isArray(member.roles) ? member.roles.filter((role) => ROLE_OPTIONS.includes(role)) : [],
        otherRole: typeof member.otherRole === 'string' ? member.otherRole : ''
      };
    });

    phaseConfigs.forEach((phase) => {
      const phaseState = merged.phases[phase.id] || (merged.phases[phase.id] = {});
      if (!STATUS_OPTIONS.some((option) => option.value === phaseState.status)) phaseState.status = 'not-started';

      phase.sections.forEach((section) => {
        section.fields.forEach((field) => {
          if (field.type === 'table') {
            if (!Array.isArray(phaseState[field.id])) phaseState[field.id] = [];
            phaseState[field.id] = phaseState[field.id].map((row) => {
              const clean = emptyTableRow(field);
              field.columns.forEach((column) => {
                clean[column.key] = row && row[column.key] != null ? String(row[column.key]) : '';
              });
              return clean;
            });
            while (phaseState[field.id].length < (field.defaultRows || 1)) phaseState[field.id].push(emptyTableRow(field));
          } else if (field.type === 'checklist') {
            if (!phaseState[field.id] || typeof phaseState[field.id] !== 'object') phaseState[field.id] = {};
            field.items.forEach((_, index) => {
              phaseState[field.id][String(index)] = Boolean(phaseState[field.id][String(index)]);
            });
          } else if (field.type === 'member-reflections') {
            if (!Array.isArray(phaseState[field.id])) phaseState[field.id] = [];
            phaseState[field.id] = Array.from({ length: 4 }, (_, index) => {
              const current = phaseState[field.id][index] || {};
              return {
                contribution: String(current.contribution || ''),
                learning: String(current.learning || ''),
                evidence: String(current.evidence || ''),
                nextStep: String(current.nextStep || '')
              };
            });
          } else if (typeof phaseState[field.id] !== 'string') {
            phaseState[field.id] = phaseState[field.id] == null ? '' : String(phaseState[field.id]);
          }
        });
      });
    });

    if (!merged.meta.fileName) merged.meta.fileName = suggestFileName(merged);
    return merged;
  }

  function deepMerge(target, source) {
    if (Array.isArray(source)) return source.slice();
    if (!source || typeof source !== 'object') return source;

    const output = { ...target };
    Object.keys(source).forEach((key) => {
      const sourceValue = source[key];
      const targetValue = target ? target[key] : undefined;
      if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue)) {
        output[key] = deepMerge(targetValue && typeof targetValue === 'object' ? targetValue : {}, sourceValue);
      } else {
        output[key] = sourceValue;
      }
    });
    return output;
  }

  function renderMetaFields() {
    dom.metaFields.innerHTML = META_FIELDS.map((field) => {
      const type = field.type || 'text';
      const spanClass = field.span === 2 ? ' span-2' : '';
      return `
        <div class="field-group${spanClass}">
          <label class="field-label" for="meta-${field.id}">${escapeHtml(field.label)}</label>
          <input
            id="meta-${field.id}"
            type="${type}"
            data-meta-field="${field.id}"
            value="${escapeAttribute(state.meta[field.id] || '')}"
            placeholder="${escapeAttribute(field.placeholder || '')}"
            autocomplete="off"
          >
        </div>`;
    }).join('');
  }

  function renderMembers() {
    dom.memberGrid.innerHTML = state.members.map((member, index) => `
      <article class="member-card">
        <h3>Group member ${index + 1}</h3>
        <div class="field-group">
          <label class="field-label" for="member-name-${index}">Name</label>
          <input id="member-name-${index}" type="text" data-member-name="${index}" value="${escapeAttribute(member.name)}" placeholder="Student name" autocomplete="off">
        </div>
        <div class="role-grid" aria-label="Roles for group member ${index + 1}">
          ${ROLE_OPTIONS.map((role) => `
            <label class="check-label">
              <input type="checkbox" data-member-role="${index}" value="${escapeAttribute(role)}" ${member.roles.includes(role) ? 'checked' : ''}>
              <span>${escapeHtml(role)}</span>
            </label>`).join('')}
        </div>
        <div class="field-group">
          <label class="field-label" for="member-other-role-${index}">Other role</label>
          <input id="member-other-role-${index}" type="text" data-member-other-role="${index}" value="${escapeAttribute(member.otherRole)}" placeholder="Optional additional role" autocomplete="off">
        </div>
      </article>`).join('');
  }

  function renderTabs() {
    dom.tabs.innerHTML = phaseConfigs.map((phase, index) => {
      const selected = state.activePhase === phase.id;
      const status = state.phases[phase.id].status;
      return `
        <button
          class="phase-tab"
          id="tab-${phase.id}"
          type="button"
          role="tab"
          aria-selected="${selected}"
          aria-controls="phase-content"
          data-phase-tab="${phase.id}"
          tabindex="${selected ? '0' : '-1'}"
        >
          <span class="phase-number">${index + 1}</span>
          <span>${escapeHtml(phase.tabLabel)}</span>
          <span class="tab-status" data-status="${status}" aria-hidden="true"></span>
        </button>`;
    }).join('');
  }

  function renderPrintPhaseOptions() {
    dom.printPhaseCheckboxes.innerHTML = phaseConfigs.map((phase) => `
      <label>
        <input type="checkbox" name="print-phase" value="${phase.id}" checked>
        <span>${escapeHtml(phase.tabLabel)}</span>
      </label>`).join('');
  }

  function renderPhase() {
    const phaseIndex = phaseConfigs.findIndex((phase) => phase.id === state.activePhase);
    const phase = phaseConfigs[phaseIndex];
    const phaseState = state.phases[phase.id];

    dom.content.setAttribute('aria-labelledby', `tab-${phase.id}`);
    dom.content.innerHTML = `
      <div class="phase-hero">
        <div class="phase-title-block">
          <p class="eyebrow">Phase ${phaseIndex + 1} of ${phaseConfigs.length}</p>
          <h2>${escapeHtml(phase.title)}</h2>
          <p>${escapeHtml(phase.purpose)}</p>
          <div class="phase-status-control">
            <label for="status-${phase.id}">Phase status</label>
            <select id="status-${phase.id}" data-phase-status="${phase.id}">
              ${STATUS_OPTIONS.map((option) => `<option value="${option.value}" ${phaseState.status === option.value ? 'selected' : ''}>${option.label}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="phase-overview-grid">
          ${overviewCard('Focus', phase.focus)}
          ${overviewCard('Collaboration and decision-making', phase.collaboration)}
          ${overviewCard('What the group does', phase.actions)}
          ${overviewCard('Required evidence', phase.evidence)}
        </div>
      </div>
      <div class="phase-body">
        ${phase.sections.map((section) => renderSection(phase, section)).join('')}
        <div class="phase-nav" aria-label="Move between STEAM phases">
          <button type="button" class="button" data-go-phase="${phaseConfigs[Math.max(0, phaseIndex - 1)].id}" ${phaseIndex === 0 ? 'disabled' : ''}>← Previous phase</button>
          <button type="button" class="button button-primary" data-go-phase="${phaseConfigs[Math.min(phaseConfigs.length - 1, phaseIndex + 1)].id}" ${phaseIndex === phaseConfigs.length - 1 ? 'disabled' : ''}>Next phase →</button>
        </div>
      </div>`;
  }

  function overviewCard(title, text) {
    return `<article class="overview-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`;
  }

  function renderSection(phase, section) {
    return `
      <section class="planning-section">
        <header class="planning-section-header">
          <h3>${escapeHtml(section.title)}</h3>
          ${section.help ? `<p>${escapeHtml(section.help)}</p>` : ''}
        </header>
        <div class="planning-section-body">
          ${section.fields.map((field) => renderField(phase, field)).join('')}
        </div>
      </section>`;
  }

  function renderField(phase, field) {
    const phaseState = state.phases[phase.id];
    const fullClass = field.full ? ' full-width' : '';

    if (field.type === 'table') return renderTable(phase, field);
    if (field.type === 'checklist') return renderChecklist(phase, field);
    if (field.type === 'member-reflections') return renderMemberReflections(phase, field);

    const value = phaseState[field.id] || '';
    if (field.type === 'textarea') {
      return `
        <div class="field-group${fullClass}">
          <label class="field-label" for="${phase.id}-${field.id}">${escapeHtml(field.label)}</label>
          <textarea id="${phase.id}-${field.id}" rows="${field.rows || 4}" data-phase-field="${phase.id}" data-field-id="${field.id}" placeholder="${escapeAttribute(field.placeholder || '')}">${escapeHtml(value)}</textarea>
          ${field.help ? `<p class="field-help">${escapeHtml(field.help)}</p>` : ''}
        </div>`;
    }

    if (field.type === 'select') {
      return `
        <div class="field-group${fullClass}">
          <label class="field-label" for="${phase.id}-${field.id}">${escapeHtml(field.label)}</label>
          <select id="${phase.id}-${field.id}" data-phase-field="${phase.id}" data-field-id="${field.id}">
            ${(field.options || []).map((option) => `<option value="${escapeAttribute(option)}" ${value === option ? 'selected' : ''}>${escapeHtml(option || 'Select…')}</option>`).join('')}
          </select>
        </div>`;
    }

    const inputType = field.type === 'date' || field.type === 'url' || field.type === 'number' ? field.type : 'text';
    return `
      <div class="field-group${fullClass}">
        <label class="field-label" for="${phase.id}-${field.id}">${escapeHtml(field.label)}</label>
        <input id="${phase.id}-${field.id}" type="${inputType}" data-phase-field="${phase.id}" data-field-id="${field.id}" value="${escapeAttribute(value)}" placeholder="${escapeAttribute(field.placeholder || '')}" autocomplete="off">
      </div>`;
  }

  function renderTable(phase, field) {
    const rows = state.phases[phase.id][field.id];
    return `
      <div class="table-field">
        <div class="table-heading-row">
          <div>
            <div class="field-label">${escapeHtml(field.label)}</div>
            ${field.help ? `<p class="field-help">${escapeHtml(field.help)}</p>` : ''}
          </div>
          <button type="button" class="button button-small add-row-button" data-add-row="${phase.id}" data-table-id="${field.id}">+ ${escapeHtml(field.addLabel || 'Add row')}</button>
        </div>
        <div class="table-scroll">
          <table class="editable-table">
            <thead>
              <tr>
                ${field.columns.map((column) => `<th scope="col">${escapeHtml(column.label)}</th>`).join('')}
                <th scope="col" aria-label="Row actions"></th>
              </tr>
            </thead>
            <tbody>
              ${rows.map((row, rowIndex) => `
                <tr>
                  ${field.columns.map((column) => `<td>${renderTableCell(phase, field, column, row, rowIndex)}</td>`).join('')}
                  <td><button type="button" class="row-delete" data-delete-row="${phase.id}" data-table-id="${field.id}" data-row-index="${rowIndex}" aria-label="Delete row ${rowIndex + 1}">×</button></td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
  }

  function renderTableCell(phase, field, column, row, rowIndex) {
    const value = row[column.key] || '';
    const common = `data-table-cell="${phase.id}" data-table-id="${field.id}" data-row-index="${rowIndex}" data-column-key="${column.key}"`;

    if (column.type === 'textarea') {
      return `<textarea rows="2" ${common} placeholder="${escapeAttribute(column.placeholder || '')}">${escapeHtml(value)}</textarea>`;
    }
    if (column.type === 'select') {
      return `<select ${common}>${(column.options || []).map((option) => `<option value="${escapeAttribute(option)}" ${value === option ? 'selected' : ''}>${escapeHtml(option || 'Select…')}</option>`).join('')}</select>`;
    }
    if (column.type === 'calculated-total') {
      const total = calculateRowTotal(row, column.sourceKeys || []);
      return `<input type="text" value="${total || ''}" readonly tabindex="-1" aria-label="Calculated total">`;
    }
    const inputType = ['date', 'url', 'number'].includes(column.type) ? column.type : 'text';
    return `<input type="${inputType}" ${common} value="${escapeAttribute(value)}" placeholder="${escapeAttribute(column.placeholder || '')}" autocomplete="off">`;
  }

  function renderChecklist(phase, field) {
    const values = state.phases[phase.id][field.id];
    return `
      <div class="checklist-box full-width">
        ${field.items.map((item, index) => `
          <label class="check-label">
            <input type="checkbox" data-checklist-phase="${phase.id}" data-checklist-id="${field.id}" data-checklist-item="${index}" ${values[String(index)] ? 'checked' : ''}>
            <span>${escapeHtml(item)}</span>
          </label>`).join('')}
      </div>`;
  }

  function renderMemberReflections(phase, field) {
    const reflections = state.phases[phase.id][field.id];
    return `
      <div class="member-reflections full-width">
        ${state.members.map((member, index) => {
          const reflection = reflections[index];
          const name = member.name.trim() || `Group member ${index + 1}`;
          return `
            <article class="reflection-card">
              <h4>${escapeHtml(name)}</h4>
              ${reflectionTextarea(phase.id, field.id, index, 'contribution', 'My contribution', 'Describe the tasks, decisions and responsibilities you completed.', reflection.contribution)}
              ${reflectionTextarea(phase.id, field.id, index, 'learning', 'What I learnt', 'Explain the science, design, mathematics, communication or teamwork learning that mattered most.', reflection.learning)}
              ${reflectionTextarea(phase.id, field.id, index, 'evidence', 'Evidence of my contribution', 'Refer to a product, decision, data set, portfolio item or group outcome.', reflection.evidence)}
              ${reflectionTextarea(phase.id, field.id, index, 'nextStep', 'My next step', 'Identify one specific skill or behaviour you would improve next time.', reflection.nextStep)}
            </article>`;
        }).join('')}
      </div>`;
  }

  function reflectionTextarea(phaseId, fieldId, memberIndex, key, label, placeholder, value) {
    return `
      <div class="field-group">
        <label class="field-label" for="reflection-${memberIndex}-${key}">${escapeHtml(label)}</label>
        <textarea id="reflection-${memberIndex}-${key}" rows="4" data-reflection-phase="${phaseId}" data-reflection-id="${fieldId}" data-member-index="${memberIndex}" data-reflection-key="${key}" placeholder="${escapeAttribute(placeholder)}">${escapeHtml(value || '')}</textarea>
      </div>`;
  }

  function bindStaticEvents() {
    document.getElementById('new-project-btn').addEventListener('click', createNewProject);
    document.getElementById('save-json-btn').addEventListener('click', exportJson);
    document.getElementById('load-json-btn').addEventListener('click', () => dom.fileInput.click());
    document.getElementById('print-btn').addEventListener('click', openPrintDialog);
    document.getElementById('reset-file-name-btn').addEventListener('click', resetFileName);
    document.getElementById('cancel-print-btn').addEventListener('click', () => dom.printDialog.close());

    dom.fileInput.addEventListener('change', importJson);
    dom.fileName.addEventListener('input', handleFileNameInput);
    dom.printForm.addEventListener('submit', handlePrintSubmit);

    document.addEventListener('input', handleInputEvent);
    document.addEventListener('change', handleChangeEvent);
    document.addEventListener('click', handleClickEvent);
    document.addEventListener('keydown', handleTabKeyboard);

    document.querySelectorAll('input[name="print-mode"]').forEach((radio) => {
      radio.addEventListener('change', () => {
        dom.selectedPhaseOptions.hidden = document.querySelector('input[name="print-mode"]:checked')?.value !== 'selected';
      });
    });
  }

  function handleInputEvent(event) {
    const target = event.target;

    if (target.matches('[data-meta-field]')) {
      const field = target.dataset.metaField;
      state.meta[field] = target.value;
      if (state.meta.fileNameAuto) {
        state.meta.fileName = suggestFileName(state);
        updateFileNameInput();
      }
      scheduleSave();
      return;
    }

    if (target.matches('[data-member-name]')) {
      const index = Number(target.dataset.memberName);
      state.members[index].name = target.value;
      if (state.meta.fileNameAuto) {
        state.meta.fileName = suggestFileName(state);
        updateFileNameInput();
      }
      scheduleSave();
      if (state.activePhase === 'showcase') renderPhasePreservingFocus(target);
      return;
    }

    if (target.matches('[data-member-other-role]')) {
      state.members[Number(target.dataset.memberOtherRole)].otherRole = target.value;
      scheduleSave();
      return;
    }

    if (target.matches('[data-phase-field]')) {
      state.phases[target.dataset.phaseField][target.dataset.fieldId] = target.value;
      scheduleSave();
      return;
    }

    if (target.matches('[data-table-cell]')) {
      updateTableCell(target);
      scheduleSave();
      return;
    }

    if (target.matches('[data-reflection-phase]')) {
      const phaseId = target.dataset.reflectionPhase;
      const fieldId = target.dataset.reflectionId;
      const memberIndex = Number(target.dataset.memberIndex);
      const key = target.dataset.reflectionKey;
      state.phases[phaseId][fieldId][memberIndex][key] = target.value;
      scheduleSave();
    }
  }

  function handleChangeEvent(event) {
    const target = event.target;

    if (target.matches('[data-member-role]')) {
      const member = state.members[Number(target.dataset.memberRole)];
      if (target.checked && !member.roles.includes(target.value)) member.roles.push(target.value);
      if (!target.checked) member.roles = member.roles.filter((role) => role !== target.value);
      scheduleSave();
      return;
    }

    if (target.matches('[data-phase-status]')) {
      state.phases[target.dataset.phaseStatus].status = target.value;
      scheduleSave();
      renderTabs();
      updateProgress();
      return;
    }

    if (target.matches('[data-checklist-phase]')) {
      const phaseId = target.dataset.checklistPhase;
      const checklistId = target.dataset.checklistId;
      const item = target.dataset.checklistItem;
      state.phases[phaseId][checklistId][item] = target.checked;
      scheduleSave();
      return;
    }

    if (target.matches('[data-table-cell]')) {
      updateTableCell(target);
      scheduleSave();
    }
  }

  function handleClickEvent(event) {
    const tab = event.target.closest('[data-phase-tab]');
    if (tab) {
      setActivePhase(tab.dataset.phaseTab, true);
      return;
    }

    const goButton = event.target.closest('[data-go-phase]');
    if (goButton && !goButton.disabled) {
      setActivePhase(goButton.dataset.goPhase, true);
      return;
    }

    const addButton = event.target.closest('[data-add-row]');
    if (addButton) {
      addTableRow(addButton.dataset.addRow, addButton.dataset.tableId);
      return;
    }

    const deleteButton = event.target.closest('[data-delete-row]');
    if (deleteButton) {
      deleteTableRow(deleteButton.dataset.deleteRow, deleteButton.dataset.tableId, Number(deleteButton.dataset.rowIndex));
    }
  }

  function handleTabKeyboard(event) {
    const tab = event.target.closest('[data-phase-tab]');
    if (!tab || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;

    event.preventDefault();
    const index = phaseConfigs.findIndex((phase) => phase.id === tab.dataset.phaseTab);
    let nextIndex = index;
    if (event.key === 'ArrowLeft') nextIndex = Math.max(0, index - 1);
    if (event.key === 'ArrowRight') nextIndex = Math.min(phaseConfigs.length - 1, index + 1);
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = phaseConfigs.length - 1;
    setActivePhase(phaseConfigs[nextIndex].id, false);
    document.getElementById(`tab-${phaseConfigs[nextIndex].id}`)?.focus();
  }

  function setActivePhase(phaseId, scroll) {
    if (!phaseConfigs.some((phase) => phase.id === phaseId)) return;
    state.activePhase = phaseId;
    renderTabs();
    renderPhase();
    scheduleSave();

    if (scroll) {
      dom.content.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.setTimeout(() => dom.content.focus({ preventScroll: true }), 250);
    }
  }

  function renderPhasePreservingFocus(target) {
    const selectionStart = target.selectionStart;
    const index = Number(target.dataset.memberName);
    renderPhase();
    const replacement = document.querySelector(`[data-member-name="${index}"]`);
    if (replacement) {
      replacement.focus();
      replacement.setSelectionRange?.(selectionStart, selectionStart);
    }
  }

  function updateTableCell(target) {
    const phaseId = target.dataset.tableCell;
    const tableId = target.dataset.tableId;
    const rowIndex = Number(target.dataset.rowIndex);
    const key = target.dataset.columnKey;
    state.phases[phaseId][tableId][rowIndex][key] = target.value;

    const config = findTableField(phaseId, tableId);
    if (config?.columns.some((column) => column.type === 'calculated-total')) {
      const activeElement = document.activeElement;
      const caret = activeElement?.selectionStart;
      renderPhase();
      const replacement = document.querySelector(`[data-table-cell="${phaseId}"][data-table-id="${tableId}"][data-row-index="${rowIndex}"][data-column-key="${key}"]`);
      if (replacement) {
        replacement.focus();
        if (typeof caret === 'number') replacement.setSelectionRange?.(caret, caret);
      }
    }
  }

  function addTableRow(phaseId, tableId) {
    const field = findTableField(phaseId, tableId);
    if (!field) return;
    state.phases[phaseId][tableId].push(emptyTableRow(field));
    renderPhase();
    scheduleSave();
    showToast('A new row was added.');
  }

  function deleteTableRow(phaseId, tableId, rowIndex) {
    const field = findTableField(phaseId, tableId);
    if (!field) return;
    const rows = state.phases[phaseId][tableId];
    if (rows.length <= 1) {
      rows[0] = emptyTableRow(field);
    } else {
      rows.splice(rowIndex, 1);
    }
    renderPhase();
    scheduleSave();
  }

  function findTableField(phaseId, tableId) {
    const phase = phaseConfigs.find((item) => item.id === phaseId);
    if (!phase) return null;
    for (const section of phase.sections) {
      const field = section.fields.find((item) => item.id === tableId && item.type === 'table');
      if (field) return field;
    }
    return null;
  }

  function calculateRowTotal(row, keys) {
    const values = keys.map((key) => Number(row[key])).filter((value) => Number.isFinite(value));
    if (!values.length) return '';
    return values.reduce((sum, value) => sum + value, 0);
  }

  function scheduleSave() {
    updateAutosaveMessage('Saving…');
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(saveLocal, 350);
  }

  function saveLocal() {
    state.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      const time = new Intl.DateTimeFormat('en-AU', { hour: 'numeric', minute: '2-digit', second: '2-digit' }).format(new Date());
      updateAutosaveMessage(`Recovery copy saved at ${time}`);
    } catch (error) {
      console.error('Autosave failed.', error);
      updateAutosaveMessage('Autosave unavailable — save the JSON file now');
      showToast('The browser recovery copy could not be saved. Download the JSON file to protect the group’s work.');
    }
  }

  function updateAutosaveMessage(message) {
    dom.autosaveStatus.textContent = message;
  }

  function createNewProject() {
    const confirmed = window.confirm('Start a new project? Save the current JSON file first if the group needs to keep this work.');
    if (!confirmed) return;

    state = createInitialState();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn('Could not reset the local recovery copy.', error);
    }
    renderMetaFields();
    renderMembers();
    renderTabs();
    setActivePhase(phaseConfigs[0].id, false);
    updateFileNameInput();
    updateProgress();
    showToast('A new STEAM project has been created.');
  }

  function exportJson() {
    saveLocal();
    const fileName = ensureJsonExtension(cleanFileName(state.meta.fileName || suggestFileName(state)));
    const payload = JSON.stringify(state, null, 2);
    const blob = new Blob([payload], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast(`Saved ${fileName}`);
  }

  async function importJson(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      if (parsed.app && parsed.app !== 'STEAM WEB ENGINE') {
        throw new Error('This JSON file was not created by the STEAM WEB ENGINE.');
      }
      state = normaliseState(parsed);
      if (!state.meta.fileName || state.meta.fileNameAuto) {
        state.meta.fileName = file.name.replace(/\.json$/i, '') || suggestFileName(state);
        state.meta.fileNameAuto = false;
      }
      saveLocal();
      renderMetaFields();
      renderMembers();
      renderTabs();
      renderPhase();
      updateFileNameInput();
      updateProgress();
      showToast(`Loaded ${file.name}`);
    } catch (error) {
      console.error(error);
      window.alert(error.message || 'The JSON file could not be loaded.');
    }
  }

  function handleFileNameInput(event) {
    state.meta.fileName = event.target.value;
    state.meta.fileNameAuto = false;
    scheduleSave();
  }

  function resetFileName() {
    state.meta.fileNameAuto = true;
    state.meta.fileName = suggestFileName(state);
    updateFileNameInput();
    scheduleSave();
    showToast('The suggested file name has been restored.');
  }

  function updateFileNameInput() {
    dom.fileName.value = state.meta.fileName || suggestFileName(state);
  }

  function suggestFileName(currentState) {
    const parts = [
      'Year-7-STEAM',
      currentState.meta.className,
      currentState.meta.projectTitle || currentState.meta.projectOption,
      currentState.meta.groupName || currentState.members.map((member) => member.name).filter(Boolean).slice(0, 2).join('-'),
      formatFileDate(currentState.meta.dateCommenced)
    ].filter(Boolean).map(slugPart);
    return parts.join('_') || 'Year-7-STEAM_Project';
  }

  function slugPart(value) {
    return String(value)
      .trim()
      .replace(/[\\/:*?"<>|]+/g, '-')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^[-_.]+|[-_.]+$/g, '')
      .slice(0, 60);
  }

  function cleanFileName(value) {
    return String(value || 'Year-7-STEAM_Project')
      .replace(/[\\/:*?"<>|]+/g, '-')
      .trim()
      .slice(0, 180) || 'Year-7-STEAM_Project';
  }

  function ensureJsonExtension(value) {
    return /\.json$/i.test(value) ? value : `${value}.json`;
  }

  function updateProgress() {
    const complete = phaseConfigs.filter((phase) => state.phases[phase.id].status === 'complete').length;
    dom.progressLabel.textContent = `${complete} of ${phaseConfigs.length} phases complete`;
    dom.progressFill.style.width = `${(complete / phaseConfigs.length) * 100}%`;
  }

  function openPrintDialog() {
    dom.selectedPhaseOptions.hidden = true;
    dom.printDialog.showModal();
  }

  function handlePrintSubmit(event) {
    event.preventDefault();
    const mode = new FormData(dom.printForm).get('print-mode') || 'all';
    const selected = Array.from(dom.printForm.querySelectorAll('input[name="print-phase"]:checked')).map((input) => input.value);
    dom.printDialog.close();

    if (mode === 'selected' && selected.length === 0) {
      showToast('Select at least one phase to print.');
      return;
    }
    createPrintView(mode, selected);
  }

  function createPrintView(mode, selectedIds) {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      window.alert('The print view was blocked. Allow pop-ups for this site and try again.');
      return;
    }
    try { printWindow.opener = null; } catch (error) { /* Browser-controlled. */ }

    const blank = mode === 'blank';
    const title = mode === 'summary' ? 'STEAM Project Summary' : blank ? 'STEAM Planning Workbook' : 'STEAM Project Portfolio';
    const phasesToPrint = mode === 'current'
      ? phaseConfigs.filter((phase) => phase.id === state.activePhase)
      : mode === 'selected'
        ? phaseConfigs.filter((phase) => selectedIds.includes(phase.id))
        : phaseConfigs;

    const body = mode === 'summary'
      ? buildSummaryPrintHtml()
      : `${buildProjectInfoPrintHtml(blank)}${phasesToPrint.map((phase, index) => buildPhasePrintHtml(phase, blank, index > 0)).join('')}`;

    printWindow.document.open();
    printWindow.document.write(`<!doctype html>
      <html lang="en-AU">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${escapeHtml(title)} — ${escapeHtml(state.meta.projectTitle || 'Year 7 STEAM')}</title>
        <style>${printStyles()}</style>
      </head>
      <body>
        <header class="print-toolbar">
          <div><strong>${escapeHtml(title)}</strong><span>Check the preview, then print or save as PDF.</span></div>
          <button onclick="window.print()">Print / Save PDF</button>
        </header>
        <main>${body}</main>
        <script>window.addEventListener('load', () => setTimeout(() => window.print(), 350));<\/script>
      </body>
      </html>`);
    printWindow.document.close();
  }

  function buildProjectInfoPrintHtml(blank) {
    const metaValue = (key) => blank ? '' : state.meta[key] || '';
    const memberRows = state.members.map((member, index) => {
      const roles = blank ? '' : [...member.roles, member.otherRole].filter(Boolean).join(', ');
      return `<tr><td>${index + 1}</td><td>${printValue(blank ? '' : member.name, 1)}</td><td>${printValue(roles, 1)}</td></tr>`;
    }).join('');

    return `
      <section class="print-cover">
        <p class="print-kicker">Year 7 collaborative project planner</p>
        <h1>STEAM WEB ENGINE</h1>
        <p class="print-subtitle">Project planning portfolio</p>
        <div class="info-grid">
          ${printInfo('Project title', metaValue('projectTitle'))}
          ${printInfo('Selected project option', metaValue('projectOption'))}
          ${printInfo('Group name', metaValue('groupName'))}
          ${printInfo('Class', metaValue('className'))}
          ${printInfo('Teacher', metaValue('teacher'))}
          ${printInfo('Date commenced', formatDisplayDate(metaValue('dateCommenced')))}
          ${printInfo('Target completion date', formatDisplayDate(metaValue('targetCompletion')))}
          ${printInfo('Google Docs portfolio', metaValue('portfolioUrl'), true)}
          ${printInfo('Portfolio location notes', metaValue('portfolioLocation'), true)}
        </div>
        <h2>Group members and roles</h2>
        <table><thead><tr><th>#</th><th>Name</th><th>Role or roles</th></tr></thead><tbody>${memberRows}</tbody></table>
      </section>`;
  }

  function buildPhasePrintHtml(phase, blank, pageBreak) {
    const phaseState = state.phases[phase.id];
    const status = blank ? '' : STATUS_OPTIONS.find((option) => option.value === phaseState.status)?.label || '';
    return `
      <section class="print-phase ${pageBreak ? 'page-break' : ''}">
        <div class="phase-heading">
          <div>
            <p class="print-kicker">STEAM phase</p>
            <h1>${escapeHtml(phase.title)}</h1>
          </div>
          <div class="status-box"><strong>Status</strong>${printValue(status, 1)}</div>
        </div>
        <div class="phase-overview">
          ${printOverview('Focus', phase.focus)}
          ${printOverview('Collaboration and decision-making', phase.collaboration)}
          ${printOverview('What the group does', phase.actions)}
          ${printOverview('Required evidence', phase.evidence)}
        </div>
        ${phase.sections.map((section) => `
          <section class="print-section">
            <h2>${escapeHtml(section.title)}</h2>
            ${section.help ? `<p class="help">${escapeHtml(section.help)}</p>` : ''}
            ${section.fields.map((field) => buildFieldPrintHtml(phase, field, blank)).join('')}
          </section>`).join('')}
      </section>`;
  }

  function buildFieldPrintHtml(phase, field, blank) {
    const value = state.phases[phase.id][field.id];

    if (field.type === 'table') {
      const rows = blank
        ? Array.from({ length: Math.max(field.defaultRows || 1, 3) }, () => emptyTableRow(field))
        : value;
      return `
        <div class="print-field">
          <h3>${escapeHtml(field.label)}</h3>
          <table>
            <thead><tr>${field.columns.map((column) => `<th>${escapeHtml(column.label)}</th>`).join('')}</tr></thead>
            <tbody>${rows.map((row) => `<tr>${field.columns.map((column) => {
              const cellValue = column.type === 'calculated-total' ? calculateRowTotal(row, column.sourceKeys || []) : row[column.key];
              return `<td>${printValue(cellValue, column.type === 'textarea' ? 2 : 1)}</td>`;
            }).join('')}</tr>`).join('')}</tbody>
          </table>
        </div>`;
    }

    if (field.type === 'checklist') {
      return `
        <div class="print-field checklist-print">
          ${field.items.map((item, index) => {
            const checked = !blank && value[String(index)];
            return `<div><span class="check-box">${checked ? '✓' : ''}</span><span>${escapeHtml(item)}</span></div>`;
          }).join('')}
        </div>`;
    }

    if (field.type === 'member-reflections') {
      return `
        <div class="reflection-print-grid">
          ${state.members.map((member, index) => {
            const reflection = blank ? {} : value[index];
            const name = blank ? `Group member ${index + 1}` : (member.name || `Group member ${index + 1}`);
            return `<article class="reflection-print-card">
              <h3>${escapeHtml(name)}</h3>
              ${printLabelledValue('My contribution', reflection.contribution, 4)}
              ${printLabelledValue('What I learnt', reflection.learning, 4)}
              ${printLabelledValue('Evidence of my contribution', reflection.evidence, 4)}
              ${printLabelledValue('My next step', reflection.nextStep, 4)}
            </article>`;
          }).join('')}
        </div>`;
    }

    const lines = field.type === 'textarea' ? Math.max(3, Math.ceil((field.rows || 4) / 1.6)) : 1;
    return printLabelledValue(field.label, blank ? '' : value, lines);
  }

  function buildSummaryPrintHtml() {
    const summaryItems = [
      ['Problem and project direction', state.phases.choose.problemStatement || state.phases.choose.projectGoal],
      ['Science understanding', state.phases.research.scienceSummary],
      ['Selected design', state.phases.design.selectedDesign || state.phases.design.finalDesignDescription],
      ['Prototype 1', state.phases.build.prototypeOutcome || state.phases.build.prototypeDescription],
      ['Testing conclusion', state.phases.test.testConclusion],
      ['Major improvement', state.phases.improve.majorImprovement],
      ['Communication plan', [state.phases.communicate.communicationFormat, state.phases.communicate.keyMessage].filter(Boolean).join(' — ')],
      ['Final evaluation', state.phases.showcase.groupEvaluation],
      ['Next step', state.phases.showcase.nextSteps]
    ];

    return `
      ${buildProjectInfoPrintHtml(false)}
      <section class="print-phase page-break">
        <p class="print-kicker">Concise project report</p>
        <h1>Project summary</h1>
        <h2>Phase status</h2>
        <table>
          <thead><tr><th>Phase</th><th>Status</th></tr></thead>
          <tbody>${phaseConfigs.map((phase) => `<tr><td>${escapeHtml(phase.tabLabel)}</td><td>${escapeHtml(STATUS_OPTIONS.find((item) => item.value === state.phases[phase.id].status)?.label || '')}</td></tr>`).join('')}</tbody>
        </table>
        ${summaryItems.map(([label, value]) => printLabelledValue(label, value, 4)).join('')}
        <h2>Individual contribution overview</h2>
        ${state.members.map((member, index) => {
          if (!member.name && !state.phases.showcase.memberReflections[index].contribution) return '';
          const reflection = state.phases.showcase.memberReflections[index];
          return `<div class="summary-member"><h3>${escapeHtml(member.name || `Group member ${index + 1}`)}</h3>${printLabelledValue('Contribution', reflection.contribution, 2)}${printLabelledValue('Next step', reflection.nextStep, 2)}</div>`;
        }).join('')}
      </section>`;
  }

  function printInfo(label, value, wide = false) {
    return `<div class="info-item ${wide ? 'wide' : ''}"><strong>${escapeHtml(label)}</strong>${printValue(value, wide ? 2 : 1)}</div>`;
  }

  function printOverview(label, value) {
    return `<div><strong>${escapeHtml(label)}</strong><p>${escapeHtml(value)}</p></div>`;
  }

  function printLabelledValue(label, value, lines = 2) {
    return `<div class="print-field"><h3>${escapeHtml(label)}</h3>${printValue(value, lines)}</div>`;
  }

  function printValue(value, lines = 1) {
    const text = String(value || '').trim();
    if (text) return `<div class="filled-value">${escapeHtml(text).replace(/\n/g, '<br>')}</div>`;
    return `<div class="blank-lines">${Array.from({ length: lines }, () => '<span></span>').join('')}</div>`;
  }

  function printStyles() {
    return `
      :root{--teal:#12494d;--teal2:#0f6f73;--sand:#f4ead6;--line:#9db2af;--ink:#173033}
      *{box-sizing:border-box} body{margin:0;color:var(--ink);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;font-size:10.5pt;line-height:1.35;background:#fff}
      main{width:100%;max-width:210mm;margin:0 auto;padding:14mm}
      .print-toolbar{position:sticky;top:0;z-index:10;display:flex;justify-content:space-between;align-items:center;gap:18px;padding:10px 16px;background:var(--teal);color:#fff;box-shadow:0 4px 18px rgba(0,0,0,.18)}
      .print-toolbar strong,.print-toolbar span{display:block}.print-toolbar span{font-size:9pt;opacity:.8}.print-toolbar button{border:0;border-radius:7px;background:var(--sand);color:var(--teal);font-weight:800;padding:9px 14px;cursor:pointer}
      h1{margin:0 0 5px;color:var(--teal);font-size:24pt;line-height:1.05} h2{margin:16px 0 7px;color:var(--teal);font-size:15pt} h3{margin:10px 0 5px;color:var(--teal);font-size:10.5pt}
      p{margin:4px 0}.print-kicker{margin:0 0 4px;color:var(--teal2);font-size:8pt;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.print-subtitle{margin:0 0 22px;color:#586b6d;font-size:13pt}
      .print-cover{min-height:250mm}.info-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:18px 0}.info-item{border:1px solid var(--line);border-radius:6px;padding:8px}.info-item.wide{grid-column:1/-1}.info-item strong,.status-box strong{display:block;margin-bottom:5px;color:var(--teal);font-size:8.5pt;text-transform:uppercase;letter-spacing:.04em}
      .phase-heading{display:flex;justify-content:space-between;gap:18px;align-items:start}.status-box{width:48mm;border:1px solid var(--line);border-radius:7px;padding:8px}.phase-overview{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:14px 0}.phase-overview>div{border:1px solid var(--line);border-radius:6px;padding:8px;background:#f7fbfa}.phase-overview strong{color:var(--teal);font-size:8.5pt;text-transform:uppercase}.phase-overview p{margin-top:4px}
      .print-section{margin:13px 0 0;padding-top:3px;border-top:2px solid var(--sand)}.print-section>.help{color:#5a6a6c;font-style:italic}.print-field{break-inside:avoid;margin:10px 0}.filled-value{min-height:8mm;padding:6px 7px;border:1px solid var(--line);border-radius:5px;white-space:normal}.blank-lines{display:grid;gap:7px}.blank-lines span{display:block;height:7mm;border-bottom:1px solid var(--line)}
      table{width:100%;border-collapse:collapse;table-layout:auto;margin:7px 0 12px;font-size:8.6pt;break-inside:auto}thead{display:table-header-group}tr{break-inside:avoid}th,td{border:1px solid var(--line);padding:5px;vertical-align:top}th{background:#eef7f5;color:var(--teal);text-align:left}.checklist-print{display:grid;gap:6px}.checklist-print>div{display:flex;gap:7px;align-items:flex-start}.check-box{display:inline-grid;place-items:center;flex:0 0 5mm;width:5mm;height:5mm;border:1px solid var(--teal);font-weight:900}.reflection-print-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.reflection-print-card{border:1px solid var(--line);border-radius:7px;padding:9px;break-inside:avoid}.summary-member{margin:10px 0;padding:8px;border:1px solid var(--line);border-radius:7px}.page-break{break-before:page;page-break-before:always}
      @page{size:A4;margin:10mm}@media print{.print-toolbar{display:none}main{max-width:none;padding:0}.print-cover{min-height:auto}.page-break{break-before:page;page-break-before:always}}
    `;
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    dom.toast.textContent = message;
    dom.toast.classList.add('show');
    toastTimer = window.setTimeout(() => dom.toast.classList.remove('show'), 3000);
  }

  function formatDisplayDate(value) {
    if (!value) return '';
    const [year, month, day] = value.split('-');
    if (!year || !month || !day) return value;
    return `${day}/${month}/${year}`;
  }

  function formatFileDate(value) {
    if (!value) return '';
    const [year, month, day] = value.split('-');
    if (!year || !month || !day) return value;
    return `${day}-${month}-${year}`;
  }

  function toDateInput(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replace(/`/g, '&#096;');
  }
})();
