/* SciSims Stage 6 Year 11 revision banks | Version 1.0.0 */
(() => {
  'use strict';

  const courses = {
    Biology: [
      ['Module 1 — Cells as the Basis of Life', [
        ['Cell structures', [['Cell membrane','A selectively permeable boundary controlling exchange.'],['Cytoplasm','The fluid interior where many reactions occur.'],['Nucleus','The organelle containing most eukaryotic DNA.'],['Ribosome','The site of protein synthesis.']]],
        ['Cell types', [['Prokaryotic cell','A cell lacking a membrane-bound nucleus.'],['Eukaryotic cell','A cell with membrane-bound organelles.'],['Plant cell','A eukaryotic cell with a wall and chloroplasts.'],['Animal cell','A eukaryotic cell without a cellulose wall.']]],
        ['Membrane transport', ['Diffusion','Osmosis','Active transport','Facilitated diffusion']],
        ['Cell requirements', ['Nutrients','Gas exchange','Waste removal','Energy supply']]
      ]],
      ['Module 2 — Organisation of Living Things', [
        ['Levels of organisation', [['Cell','The smallest structural unit of life.'],['Tissue','Similar cells working together.'],['Organ','Different tissues performing a coordinated function.'],['Organ system','Organs cooperating in a major body function.']]],
        ['Transport systems', [['Xylem','Plant tissue transporting water and minerals.'],['Phloem','Plant tissue transporting organic solutes.'],['Artery','A vessel carrying blood away from the heart.'],['Vein','A vessel carrying blood toward the heart.']]],
        ['Digestive processes', ['Ingestion','Digestion','Absorption','Egestion']],
        ['Gas exchange features', ['Large surface area','Thin membrane','Moist surface','Concentration gradient']]
      ]],
      ['Module 3 — Biological Diversity', [
        ['Evidence for evolution', [['Fossil record','Preserved evidence of organisms through time.'],['Comparative anatomy','Comparison of structures among organisms.'],['Molecular evidence','DNA or protein similarities indicating relatedness.'],['Biogeography','Geographical distribution evidence for evolutionary history.']]],
        ['Natural selection', [['Variation','Differences among individuals in a population.'],['Selection pressure','An environmental factor affecting reproductive success.'],['Differential survival','Unequal survival associated with inherited traits.'],['Inheritance','Transmission of genetic information to offspring.']]],
        ['Classification ranks', ['Kingdom','Phylum','Class','Order']],
        ['Species interactions', ['Competition','Predation','Mutualism','Parasitism']]
      ]],
      ['Module 4 — Ecosystem Dynamics', [
        ['Ecosystem components', [['Population','Members of one species in an area.'],['Community','Interacting populations in an area.'],['Habitat','The place where an organism lives.'],['Niche','A species role and resource use in an ecosystem.']]],
        ['Population measures', [['Abundance','The number of organisms present.'],['Distribution','The spatial pattern of a population.'],['Quadrat','A frame used to sample stationary organisms.'],['Transect','A sampling line across an environmental gradient.']]],
        ['Energy transfer', ['Producer','Primary consumer','Secondary consumer','Decomposer']],
        ['Population change', ['Birth rate','Death rate','Immigration','Emigration']]
      ]]
    ],
    Chemistry: [
      ['Module 1 — Properties and Structure of Matter', [
        ['Atomic particles', [['Proton','A positively charged particle in the nucleus.'],['Neutron','An uncharged particle in the nucleus.'],['Electron','A negatively charged particle outside the nucleus.'],['Nucleus','The dense central region of an atom.']]],
        ['Chemical bonding', [['Ionic bond','Electrostatic attraction between oppositely charged ions.'],['Covalent bond','A bond formed by a shared electron pair.'],['Metallic bond','Attraction between metal ions and delocalised electrons.'],['Intermolecular force','An attraction between separate particles.']]],
        ['Periodic trends', ['Atomic radius','Ionisation energy','Electronegativity','Metallic character']],
        ['Matter types', ['Element','Compound','Homogeneous mixture','Heterogeneous mixture']]
      ]],
      ['Module 2 — Introduction to Quantitative Chemistry', [
        ['Amount of substance', [['Mole','The amount containing Avogadro’s number of entities.'],['Avogadro constant','The number of entities in one mole.'],['Molar mass','The mass of one mole of a substance.'],['Empirical formula','The simplest whole-number atom ratio in a compound.']]],
        ['Solution quantities', [['Concentration','Amount of solute per volume of solution.'],['Solute','The substance dissolved in a solution.'],['Solvent','The substance that dissolves the solute.'],['Dilution','Lowering concentration by adding solvent.']]],
        ['Stoichiometric tools', ['Balanced equation','Mole ratio','Limiting reagent','Percentage yield']],
        ['Gas quantities', ['Gas volume','Molar volume','Temperature','Pressure']]
      ]],
      ['Module 3 — Reactive Chemistry', [
        ['Reaction evidence', [['Colour change','A visible change that may indicate new substances.'],['Gas production','Formation of a gaseous reaction product.'],['Precipitate','An insoluble solid formed from solution.'],['Temperature change','Evidence of energy transfer during reaction.']]],
        ['Reaction types', [['Synthesis','Two or more reactants forming one product.'],['Decomposition','One compound breaking into simpler substances.'],['Combustion','Rapid reaction with oxygen releasing energy.'],['Displacement','A more reactive element replacing another.']]],
        ['Redox language', ['Oxidation','Reduction','Oxidising agent','Reducing agent']],
        ['Reaction rate factors', ['Concentration','Temperature','Surface area','Catalyst']]
      ]],
      ['Module 4 — Drivers of Reactions', [
        ['Energy changes', [['Exothermic reaction','A reaction releasing heat to the surroundings.'],['Endothermic reaction','A reaction absorbing heat from the surroundings.'],['Activation energy','The minimum energy required for reaction.'],['Enthalpy change','Heat change at constant pressure.']]],
        ['Collision theory', [['Collision','An encounter between reacting particles.'],['Effective collision','A collision with enough energy and suitable orientation.'],['Reaction rate','Change in reactant or product amount per time.'],['Catalyst','A substance providing a lower-energy pathway.']]],
        ['Calorimetry', ['Calorimeter','Specific heat capacity','Temperature change','Heat transfer']],
        ['Spontaneity ideas', ['Entropy','Energy dispersal','System','Surroundings']]
      ]]
    ],
    EarthEnvironmentalScience: [
      ['Module 1 — Earth’s Resources', [
        ['Resource categories', [['Renewable resource','A resource replenished on a human timescale.'],['Non-renewable resource','A finite resource replenished very slowly.'],['Reserve','A known resource that can be economically extracted.'],['Sustainability','Meeting needs without undermining future capacity.']]],
        ['Resource extraction', [['Exploration','Searching for potentially useful deposits.'],['Mining','Removing valuable geological material.'],['Ore','Rock containing economically useful material.'],['Rehabilitation','Restoring land after disturbance.']]],
        ['Water resources', ['Catchment','Aquifer','Groundwater','Water treatment']],
        ['Resource evaluation', ['Grade','Accessibility','Economic value','Environmental impact']]
      ]],
      ['Module 2 — Plate Tectonics', [
        ['Earth layers', [['Crust','Earth’s thin outer solid layer.'],['Mantle','The thick silicate layer beneath the crust.'],['Outer core','The liquid metallic layer surrounding the inner core.'],['Inner core','Earth’s solid central metallic region.']]],
        ['Plate boundaries', [['Divergent boundary','A boundary where plates move apart.'],['Convergent boundary','A boundary where plates move together.'],['Transform boundary','A boundary where plates slide past.'],['Subduction zone','A region where one plate sinks beneath another.']]],
        ['Tectonic evidence', ['Continental fit','Fossil correlation','Palaeomagnetism','Seafloor spreading']],
        ['Boundary hazards', ['Earthquake','Volcano','Tsunami','Landslide']]
      ]],
      ['Module 3 — Energy Transformations', [
        ['Earth energy sources', [['Solar radiation','Electromagnetic energy received from the Sun.'],['Geothermal energy','Heat originating within Earth.'],['Gravitational energy','Energy driving tides and mass movement.'],['Chemical energy','Energy stored in chemical bonds.']]],
        ['Atmospheric transfer', [['Conduction','Heat transfer through particle collisions.'],['Convection','Heat transfer by bulk fluid movement.'],['Radiation','Energy transfer by electromagnetic waves.'],['Latent heat','Energy absorbed or released during a state change.']]],
        ['Water cycle', ['Evaporation','Condensation','Precipitation','Runoff']],
        ['Earth systems', ['Atmosphere','Hydrosphere','Geosphere','Biosphere']]
      ]],
      ['Module 4 — Human Impacts', [
        ['Pollution types', [['Air pollution','Harmful substances introduced into the atmosphere.'],['Water pollution','Contamination degrading water quality.'],['Soil contamination','Harmful substances accumulating in soil.'],['Noise pollution','Harmful or disruptive environmental sound.']]],
        ['Impact assessment', [['Baseline data','Measurements made before a proposed change.'],['Indicator species','A species whose condition reflects environmental quality.'],['Risk assessment','Evaluation of likelihood and consequence.'],['Mitigation','Action that reduces an adverse impact.']]],
        ['Climate forcing', ['Greenhouse gas','Carbon dioxide','Methane','Radiative forcing']],
        ['Management responses', ['Regulation','Conservation','Remediation','Monitoring']]
      ]]
    ],
    InvSci: [
      ['Module 1 — Cause and Effect: Observing', [
        ['Observation tools', [['Qualitative data','Descriptive, non-numerical observations.'],['Quantitative data','Numerical measurements or counts.'],['Instrument','A device used to extend or quantify observation.'],['Calibration','Comparison with a standard to improve measurement.']]],
        ['Question development', [['Observation','Information gathered with senses or instruments.'],['Pattern','A repeated or systematic feature in data.'],['Research question','A focused question suitable for investigation.'],['Hypothesis','A testable proposed explanation or relationship.']]],
        ['Measurement quality', ['Accuracy','Precision','Reliability','Validity']],
        ['Variable types', ['Independent variable','Dependent variable','Controlled variable','Extraneous variable']]
      ]],
      ['Module 2 — Cause and Effect: Inferences and Generalisations', [
        ['Data patterns', [['Correlation','A measured association between variables.'],['Causation','A relationship where one factor produces change.'],['Trend','A general direction shown by data.'],['Outlier','A value notably separated from the pattern.']]],
        ['Sampling', [['Population','The complete group of interest.'],['Sample','A subset studied to represent a population.'],['Random sampling','Selection giving members an unbiased chance.'],['Sample size','The number of observations or participants.']]],
        ['Statistical summaries', ['Mean','Median','Range','Standard deviation']],
        ['Inference limits', ['Bias','Confounding variable','Uncertainty','Overgeneralisation']]
      ]],
      ['Module 3 — Scientific Models', [
        ['Model types', [['Physical model','A tangible representation of a system.'],['Mathematical model','A representation using equations and quantities.'],['Conceptual model','An explanatory representation of relationships.'],['Computer model','A digital simulation of system behaviour.']]],
        ['Model evaluation', [['Assumption','A condition accepted when constructing a model.'],['Prediction','An expected result generated by a model.'],['Evidence','Information used to test a model.'],['Limitation','A boundary on a model’s usefulness.']]],
        ['Model cycle', ['Construct','Test','Evaluate','Refine']],
        ['Representation features', ['Scale','Analogy','Simplification','Visualisation']]
      ]],
      ['Module 4 — Theories and Laws', [
        ['Knowledge forms', [['Scientific law','A concise description of a consistent relationship.'],['Scientific theory','A well-supported explanatory framework.'],['Hypothesis','A testable proposed explanation.'],['Model','A representation used to explain or predict.']]],
        ['Evidence processes', [['Peer review','Expert evaluation before or after publication.'],['Replication','Repeating a study to test consistency.'],['Falsifiability','Capacity for evidence to show a claim false.'],['Consensus','Broad expert agreement supported by evidence.']]],
        ['Knowledge change', ['Anomaly','New evidence','Theory revision','Paradigm shift']],
        ['Scientific values', ['Transparency','Objectivity','Scepticism','Reproducibility']]
      ]]
    ],
    Physics: [
      ['Module 1 — Kinematics', [
        ['Motion quantities', [['Distance','The total path length travelled.'],['Displacement','Change in position with direction.'],['Speed','Distance travelled per unit time.'],['Velocity','Rate of change of displacement.']]],
        ['Graph features', [['Gradient','The slope representing a rate of change.'],['Area under graph','A accumulated quantity found by integration.'],['Position–time graph','A graph whose gradient represents velocity.'],['Velocity–time graph','A graph whose gradient represents acceleration.']]],
        ['Vector operations', ['Magnitude','Direction','Resultant','Components']],
        ['Constant acceleration', ['Initial velocity','Final velocity','Acceleration','Time']]
      ]],
      ['Module 2 — Dynamics', [
        ['Newton’s laws', [['Inertia','Resistance to a change in motion.'],['Net force','The vector sum of forces on an object.'],['Acceleration','Rate of change of velocity.'],['Action–reaction pair','Equal opposite forces on different objects.']]],
        ['Common forces', [['Weight','The gravitational force on a mass.'],['Normal force','A perpendicular contact force from a surface.'],['Friction','A contact force opposing relative motion.'],['Tension','A pulling force transmitted by a string or cable.']]],
        ['Momentum', ['Mass','Velocity','Impulse','Conservation of momentum']],
        ['Energy transfers', ['Work','Kinetic energy','Gravitational potential energy','Power']]
      ]],
      ['Module 3 — Waves and Thermodynamics', [
        ['Wave quantities', [['Amplitude','Maximum displacement from equilibrium.'],['Wavelength','Distance between matching points on consecutive waves.'],['Frequency','Number of cycles passing per second.'],['Wave speed','Distance travelled by a wave per unit time.']]],
        ['Wave behaviours', [['Reflection','A wave returning from a boundary.'],['Refraction','Change in direction caused by changed wave speed.'],['Diffraction','Spreading around obstacles or through openings.'],['Interference','Superposition producing reinforcement or cancellation.']]],
        ['Thermal transfer', ['Conduction','Convection','Radiation','Latent heat']],
        ['Sound features', ['Pitch','Loudness','Resonance','Standing wave']]
      ]],
      ['Module 4 — Electricity and Magnetism', [
        ['Circuit quantities', [['Electric current','Rate of flow of electric charge.'],['Potential difference','Energy transferred per unit charge.'],['Resistance','Opposition to electric current.'],['Electrical power','Rate of electrical energy transfer.']]],
        ['Circuit arrangements', [['Series circuit','Components connected along one current path.'],['Parallel circuit','Components connected across common junctions.'],['Ammeter','An instrument measuring current.'],['Voltmeter','An instrument measuring potential difference.']]],
        ['Magnetic effects', ['Magnetic field','Field line','Electromagnet','Motor effect']],
        ['Charge concepts', ['Electron','Conductor','Insulator','Electrostatic force']]
      ]]
    ]
  };

  const slug = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const moduleKey = index => `module${index + 1}`;
  const normaliseGroup = group => ({
    connection: group[0],
    pairs: group[1].map(item => Array.isArray(item) ? item : [item, `A syllabus concept used when explaining ${group[0].toLowerCase()}.`])
  });

  const courseModules = course => (courses[course] || []).map((module, index) => ({
    key: moduleKey(index), label: module[0], groups: module[1].map(normaliseGroup)
  }));

  const wordMatch = course => Object.fromEntries(courseModules(course).map(module => [module.key, {
    label: module.label,
    short: `M${module.key.slice(-1)}`,
    items: module.groups.slice(0, 2).flatMap(group => group.pairs)
  }]));

  const connections = course => courseModules(course).flatMap(module => {
    const groups = [...module.groups,
      { connection: 'Scientific reasoning', pairs: [['Course observation',''],['Course evidence',''],['Course model',''],['Course conclusion','']] },
      { connection: 'Investigation cycle', pairs: [['Focused question',''],['Planned method',''],['Recorded data',''],['Critical evaluation','']] }
    ];
    return ['easy','hard','insane'].flatMap(complexity =>
    groups.map((group, index) => ({
      id: `${module.key}-${complexity}-y11-${index + 1}`,
      bank: module.key,
      complexity,
      connection: group.connection,
      explanation: `These ideas are connected through ${group.connection.toLowerCase()} in ${module.label}.`,
      terms: group.pairs.map(pair => pair[0])
    })));
  });

  const sequences = course => courseModules(course).map(module => {
    const pairs = module.groups.slice(0, 2).flatMap(group => group.pairs);
    return {
      id: `${slug(course)}-${module.key}-y11-sequence`, bank: module.key,
      title: `${module.label} — Concept Sequence`,
      hint: 'Order the concepts from foundation to application.',
      summary: `A revision pathway through ${module.label}.`,
      steps: pairs
    };
  });

  const chains = course => courseModules(course).map(module => {
    const terms = module.groups.slice(0, 2).flatMap(group => group.pairs.map(pair => pair[0]));
    return {
      id: `${slug(course)}-${module.key}-y11-chain`, bank: module.key,
      title: `${module.label} — Connected Chain`, start: terms[0], bestPath: terms,
      nodes: terms,
      edges: terms.slice(0, -1).map((term, index) => [term, terms[index + 1], `Within ${module.label}, ${term} connects to ${terms[index + 1]}.`]),
      distractors: ['Unrelated variable','Unsupported claim','Incorrect unit'],
      summary: `A connected revision chain for ${module.label}.`
    };
  });

  const year11Review = course => {
    const modules = courseModules(course);
    const reviewTerms = modules.map(module => module.label);
    return {
      wordMatch: {
        label: 'Year 11 Review with Glossary', short: 'Y11',
        items: modules.flatMap(module => module.groups[0].pairs.slice(0, 2))
      },
      sequence: {
        id: `${slug(course)}-year11-review-sequence`, bank: 'year11review', title: 'Whole Year 11 Course Review',
        hint: 'Move from Module 1 foundations through Module 4 applications.', summary: 'A whole-course Year 11 revision pathway.',
        steps: modules.flatMap(module => [[module.label, `Review the central evidence, models and applications in ${module.label}.`]])
      },
      chain: {
        id: `${slug(course)}-year11-review-chain`, bank: 'year11review', title: 'Whole Year 11 Course Review Chain',
        start: reviewTerms[0], bestPath: reviewTerms, nodes: reviewTerms,
        edges: reviewTerms.slice(0, -1).map((term, index) => [term, reviewTerms[index + 1], 'Stage 6 Year 11 learning builds across the four syllabus modules.']),
        distractors: ['Year 12 extension','Unsupported claim','Unrelated topic'],
        summary: 'A whole-course chain linking Modules 1–4.'
      }
    };
  };

  document.addEventListener('DOMContentLoaded', () => {
    const bank = document.getElementById('bank');
    if (!bank) return;
    const currentPath = decodeURIComponent(location.pathname);
    const course = Object.keys(courses).find(name => currentPath.includes(`/${name}/`));
    if (!course) return;
    courseModules(course).forEach(module => {
      const option = bank.querySelector(`option[value="${module.key}"]`);
      if (option) option.textContent = module.label;
    });
  });

  window.SCISIMS_YEAR11_GAMES = { courseModules, wordMatch, connections, sequences, chains, year11Review };
})();
