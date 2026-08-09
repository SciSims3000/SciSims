/* Shared Stage 4 and Stage 5 curriculum mapping | Version 1.0.0 */
window.SCISIMS_STAGE45 = {
  "modules": [
    {
      "code": "7.1",
      "stage": 4,
      "year": "Year 7",
      "title": "Observing the Universe",
      "outcome": "SC4-OTU-01",
      "outcomeText": "Explains how observations are used by scientists to increase knowledge and understanding of the Universe.",
      "colour": "#0b2f6f"
    },
    {
      "code": "7.2",
      "stage": 4,
      "year": "Year 7",
      "title": "Forces",
      "outcome": "SC4-FOR-01",
      "outcomeText": "Describes the effects of forces in everyday contexts.",
      "colour": "#164a9b"
    },
    {
      "code": "7.3",
      "stage": 4,
      "year": "Year 7",
      "title": "Cells and classification",
      "outcome": "SC4-CLS-01",
      "outcomeText": "Describes the unique features of cells in living things and how structural features can be used to classify organisms.",
      "colour": "#2563eb"
    },
    {
      "code": "7.4",
      "stage": 4,
      "year": "Year 7",
      "title": "Solutions and mixtures",
      "outcome": "SC4-SOL-01",
      "outcomeText": "Explains how the properties of substances enable separation in a range of techniques.",
      "colour": "#0f766e"
    },
    {
      "code": "8.1",
      "stage": 4,
      "year": "Year 8",
      "title": "Living systems",
      "outcome": "SC4-LIV-01",
      "outcomeText": "Describes the role, structure and function of a range of living systems and their components.",
      "colour": "#7c3aed"
    },
    {
      "code": "8.2",
      "stage": 4,
      "year": "Year 8",
      "title": "Periodic table and atomic structure",
      "outcome": "SC4-PRT-01",
      "outcomeText": "Explains how uses of elements and compounds are influenced by scientific understanding and discoveries relating to their properties.",
      "colour": "#b45309"
    },
    {
      "code": "8.3",
      "stage": 4,
      "year": "Year 8",
      "title": "Change",
      "outcome": "SC4-CHG-01",
      "outcomeText": "Explains how energy causes geological and chemical change.",
      "colour": "#be123c"
    },
    {
      "code": "8.4",
      "stage": 4,
      "year": "Year 8",
      "title": "Data science 1",
      "outcome": "SC4-DA1-01",
      "outcomeText": "Explains how data is used by scientists to model and predict scientific phenomena.",
      "colour": "#0369a1"
    },
    {
      "code": "9.1",
      "stage": 5,
      "year": "Year 9",
      "title": "Energy",
      "outcome": "SC5-EGY-01",
      "outcomeText": "Evaluates current and alternative energy use based on ethical and sustainability considerations.",
      "colour": "#0b2f6f"
    },
    {
      "code": "9.2",
      "stage": 5,
      "year": "Year 9",
      "title": "Disease",
      "outcome": "SC5-DIS-01",
      "outcomeText": "Explains how an understanding of the causes of disease can be used to prevent and manage the spread of disease.",
      "colour": "#164a9b"
    },
    {
      "code": "9.3",
      "stage": 5,
      "year": "Year 9",
      "title": "Materials",
      "outcome": "SC5-MAT-01",
      "outcomeText": "Assesses the uses of materials based on their physical and chemical properties.",
      "colour": "#2563eb"
    },
    {
      "code": "9.4",
      "stage": 5,
      "year": "Year 9",
      "title": "Environmental sustainability",
      "outcome": "SC5-ENV-01",
      "outcomeText": "Analyses the impact of human activity on the natural world.",
      "colour": "#0f766e"
    },
    {
      "code": "10.1",
      "stage": 5,
      "year": "Year 10",
      "title": "Genetics and evolutionary change",
      "outcome": "SC5-GEV-01 / SC5-GEV-02",
      "outcomeText": "Links biological diversity with evolution and explains how DNA transmits heritable characteristics and can be manipulated through genetic technologies.",
      "colour": "#7c3aed"
    },
    {
      "code": "10.2",
      "stage": 5,
      "year": "Year 10",
      "title": "Reactions",
      "outcome": "SC5-RXN-01 / SC5-RXN-02",
      "outcomeText": "Describes a range of reaction types and explains the factors that affect the rate of chemical reactions.",
      "colour": "#b45309"
    },
    {
      "code": "10.3",
      "stage": 5,
      "year": "Year 10",
      "title": "Waves and motion",
      "outcome": "SC5-WAM-01 / SC5-WAM-02",
      "outcomeText": "Describes the features and applications of waves and explains the motion of objects using Newton’s laws.",
      "colour": "#be123c"
    },
    {
      "code": "10.4",
      "stage": 5,
      "year": "Year 10",
      "title": "Data science 2",
      "outcome": "SC5-DA2-01",
      "outcomeText": "Assesses the use of scientific knowledge and data in evidence-based decisions and when verifying the legitimacy of claims.",
      "colour": "#0369a1"
    }
  ],
  "resources": [
    {
      "id": "invsci-var",
      "title": "Accuracy, Reliability and Validity Lab",
      "path": "InvSci/VAR/",
      "description": "Generate experimental datasets by adjusting sample size, equipment precision, random error, systematic error and controlled variables, then interpret graphs and data tables to judge accuracy, reliability and validity.",
      "type": "Simulation",
      "tags": [
        "Accuracy",
        "Reliability",
        "Validity",
        "Experimental design",
        "Data analysis",
        "Scientific investigations"
      ],
      "workingScientifically": [
        "Planning investigations",
        "Conducting investigations",
        "Processing data and information",
        "Analysing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.4",
          "relevance": "Supporting"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-airflow",
      "title": "Air Flow Around Objects Simulator",
      "path": "PhySims/AirFlow/",
      "description": "Explore how object shape, size, angle and flow speed affect particle paths, wake patterns and visible flow disruption.",
      "type": "Simulation",
      "tags": [
        "Forces",
        "Motion",
        "Air flow"
      ],
      "workingScientifically": [
        "Observing",
        "Analysing data and information"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Core"
        },
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "chemsims-alkaneformulabuilder",
      "title": "Alkane Formula Builder",
      "path": "ChemSims/AlkaneFormulaBuilder/",
      "description": "Build straight-chain alkane models from methane to octane, identify carbon counts, predict molecular formulas and complete condensed structural formulas using the CnH2n+2 pattern.",
      "type": "Activity",
      "tags": [
        "Alkanes",
        "Organic chemistry",
        "Hydrocarbons",
        "Molecular formula",
        "Condensed structural formula",
        "Methane",
        "Ethane",
        "Propane"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Analysing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "9.3",
          "relevance": "Core"
        },
        {
          "module": "10.2",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "physims-al",
      "title": "Al’s Relativistic Adventures",
      "path": "PhySims/Al/",
      "description": "Run the original Flash-based relativity adventure using Ruffle. Students explore ideas linked to special relativity through an interactive story-based simulation.",
      "type": "Archived activity",
      "tags": [
        "Relativity",
        "Special relativity",
        "Light",
        "Time dilation",
        "Modern physics",
        "Flash",
        "Ruffle"
      ],
      "workingScientifically": [
        "Observing"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "7.1",
          "relevance": "Supporting"
        },
        {
          "module": "10.3",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "biosims-biosecurityoutbreak",
      "title": "Biosecurity Outbreak Simulator",
      "path": "BioSims/BiosecurityOutbreak/",
      "description": "Respond to an invasive species or agricultural disease outbreak. Choose monitoring, quarantine, treatment, culling, public communication and research strategies while balancing uncertainty, economic impacts, ecological effects and public trust.",
      "type": "Simulation",
      "tags": [
        "Biosecurity",
        "Invasive species",
        "Agricultural disease",
        "Disease control",
        "Quarantine",
        "Monitoring",
        "Evidence",
        "Uncertainty"
      ],
      "workingScientifically": [
        "Analysing data and information",
        "Problem-solving",
        "Communicating"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.1",
          "relevance": "Supporting"
        },
        {
          "module": "9.2",
          "relevance": "Core"
        },
        {
          "module": "9.4",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "chemsims-bonding",
      "title": "Bonding Simulator",
      "path": "ChemSims/Bonding/",
      "description": "Explore how atoms interact through ionic and covalent bonding.",
      "type": "Simulation",
      "tags": [
        "Bonding",
        "Ionic",
        "Covalent"
      ],
      "workingScientifically": [
        "Observing"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "8.2",
          "relevance": "Core"
        },
        {
          "module": "9.3",
          "relevance": "Core"
        },
        {
          "module": "10.2",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "biosims-cellsorter",
      "title": "Build-a-Cell Sorter",
      "path": "BioSims/CellSorter/",
      "description": "Sort cell structures into plant, animal, fungal and bacterial cells. Includes an easy Plant vs Animal mode and a standard four-cell classification challenge.",
      "type": "Activity",
      "tags": [
        "Cells",
        "Classification",
        "Cell structure",
        "Organelles",
        "Plant cells",
        "Animal cells",
        "Fungal cells",
        "Bacterial cells"
      ],
      "workingScientifically": [
        "Planning investigations",
        "Problem-solving"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "7.3",
          "relevance": "Core"
        },
        {
          "module": "8.1",
          "relevance": "Supporting"
        },
        {
          "module": "10.1",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "physims-cars",
      "title": "Car Motion and Ticker Tape Simulator",
      "path": "PhySims/Cars/",
      "description": "Model car motion and generate matching ticker-timer tape. Compare constant speed, acceleration, braking, delayed starts and two-car motion using measurable dot patterns.",
      "type": "Simulation",
      "tags": [
        "Motion",
        "Speed",
        "Acceleration",
        "Ticker tape",
        "Average speed",
        "Data analysis"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Conducting investigations",
        "Processing data and information",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Supporting"
        },
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "10.3",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-cro",
      "title": "Cathode Ray Oscilloscope and Audio Oscillator",
      "path": "PhySims/CRO/",
      "description": "Generate audio tones and view their waveform on a simulated oscilloscope. Adjust frequency, volume and presets, then compare wave period, pitch and signal shape.",
      "type": "Simulation",
      "tags": [
        "Waves",
        "Sound",
        "Frequency",
        "Oscilloscope",
        "Waveform",
        "Period"
      ],
      "workingScientifically": [
        "Observing",
        "Conducting investigations",
        "Processing data and information",
        "Analysing data and information"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "chemsims-cationsanions",
      "title": "Cations and Anions Simulator",
      "path": "ChemSims/CationsAnions/",
      "description": "Model how atoms gain or lose electrons to form positive and negative ions.",
      "type": "Simulation",
      "tags": [
        "Ions",
        "Electrons",
        "Cations",
        "Anions"
      ],
      "workingScientifically": [
        "Questioning and predicting"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.2",
          "relevance": "Core"
        },
        {
          "module": "9.3",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "biosims-cellsiege",
      "title": "Cell Siege",
      "path": "BioSims/CellSiege/",
      "description": "Defend the body in a Space Invaders-style immune system game by using antibodies, macrophages, killer T cells, complement, fever and immune memory against pathogens and infected cells.",
      "type": "Simulation",
      "tags": [
        "Immune system",
        "Pathogens",
        "Antibodies",
        "White blood cells",
        "Vaccines",
        "Disease",
        "Infected cells",
        "Scientific models"
      ],
      "workingScientifically": [
        "Questioning and predicting",
        "Processing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.1",
          "relevance": "Supporting"
        },
        {
          "module": "9.2",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-magforce2",
      "title": "Changing the Magnitude of Force",
      "path": "PhySims/MagForce2/",
      "description": "Investigate how changing a lever or pulley setup affects the effort force needed to lift the same load. Students run repeated trials, calculate averages, compare range and graph the average force for each setup.",
      "type": "Simulation",
      "tags": [
        "Forces",
        "Simple Machines",
        "Levers",
        "Pulleys",
        "Mechanical Advantage",
        "Scientific Investigation"
      ],
      "workingScientifically": [
        "Observing",
        "Conducting investigations",
        "Processing data and information",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "biosims-characteristicslivingthings",
      "title": "Characteristics of Living Things",
      "path": "BioSims/CharacteristicsLivingThings/",
      "description": "Use MRS GREN evidence to classify examples as living, once-living or non-living.",
      "type": "Simulation",
      "tags": [
        "Classification",
        "Living things",
        "MRS GREN",
        "Life processes",
        "Evidence",
        "Cells and classification"
      ],
      "workingScientifically": [
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.3",
          "relevance": "Core"
        },
        {
          "module": "8.1",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "chemsims-bondtestlab",
      "title": "Chemical Bonding: Structure & Property Test Lab",
      "path": "ChemSims/BondTestLab/",
      "description": "Build bonding models, test unknown materials and use evidence from conductivity, melting point, solubility and molten-state tests to identify ionic, covalent molecular, covalent network and metallic bonding models.",
      "type": "Simulation",
      "tags": [
        "Chemical bonding",
        "Ionic bonding",
        "Covalent bonding",
        "Metallic bonding",
        "Conductivity",
        "Melting point",
        "Solubility",
        "Properties"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Analysing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.4",
          "relevance": "Supporting"
        },
        {
          "module": "8.2",
          "relevance": "Core"
        },
        {
          "module": "9.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "chemsims-equationbalancer",
      "title": "Chemical Equation Balancer",
      "path": "ChemSims/EquationBalancer/",
      "description": "Learn and practise balancing chemical equations using guided examples that increase in difficulty, then complete challenge questions with immediate feedback while preserving atoms on both sides of each equation.",
      "type": "Simulation",
      "tags": [
        "Chemical equations",
        "Balancing equations",
        "Conservation of atoms",
        "Coefficients",
        "Learn mode",
        "Challenge mode"
      ],
      "workingScientifically": [
        "Problem-solving",
        "Communicating"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "10.2",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "chemsims-chemicalreactionreactor",
      "title": "Chemical Reaction Reactor",
      "path": "ChemSims/ChemicalReactionReactor/",
      "description": "Explore synthesis, decomposition, displacement, combustion and acid–base reactions using particle models, laboratory observations, balanced equations and evidence of chemical change.",
      "type": "Simulation",
      "tags": [
        "Chemical reactions",
        "Synthesis",
        "Decomposition",
        "Single displacement",
        "Double displacement",
        "Combustion",
        "Neutralisation",
        "Balanced equations"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Conducting investigations",
        "Analysing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.3",
          "relevance": "Core"
        },
        {
          "module": "9.3",
          "relevance": "Supporting"
        },
        {
          "module": "10.2",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "brainbreak-pong",
      "title": "Classic Pong Focus Challenge",
      "path": "BrainBreak/Pong/",
      "description": "Play classic Pong against the computer and collect repeated trial data on score, best rally, difficulty and performance.",
      "type": "Game",
      "tags": [
        "Pong",
        "Reaction time",
        "Focus",
        "Practice",
        "Data"
      ],
      "workingScientifically": [
        "Conducting investigations",
        "Processing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.4",
          "relevance": "Supporting"
        },
        {
          "module": "10.4",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "brainbreak-stroop",
      "title": "Colour-Word Interference Challenge",
      "path": "BrainBreak/Stroop/",
      "description": "Name the ink colour rather than the written word, then collect data on accuracy, errors and mean response time.",
      "type": "Game",
      "tags": [
        "Stroop effect",
        "Reaction time",
        "Focus",
        "Interference",
        "Data"
      ],
      "workingScientifically": [
        "Conducting investigations",
        "Processing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "physims-drumsizes",
      "title": "Compare Drum Sizes",
      "path": "PhySims/DrumSizes/",
      "description": "Compare two drums by changing diameter, membrane tension, damping and strike position. Strike the drums to see vibration patterns, wave traces and estimated pitch.",
      "type": "Simulation",
      "tags": [
        "Sound",
        "Vibration",
        "Frequency",
        "Pitch",
        "Drums",
        "Damping",
        "Tension",
        "Waves"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Analysing data and information"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "biosims-dnaprofiling",
      "title": "DNA Profiling Gel Electrophoresis Simulator",
      "path": "BioSims/DNAProfiling/",
      "description": "Compare DNA banding patterns from a mother, child and possible fathers to identify the biological father.",
      "type": "Simulation",
      "tags": [
        "DNA",
        "Gel electrophoresis",
        "Genetics"
      ],
      "workingScientifically": [
        "Observing",
        "Analysing data and information"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "10.1",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "invsci-dnaxray",
      "title": "DNA X-ray Diffraction Evidence Builder",
      "path": "InvSci/DNAXRay/",
      "description": "Test DNA structure models against evidence from chemical composition, Chargaff’s ratios, X-ray diffraction, Photograph 51-style patterns, model building and ethical acknowledgement.",
      "type": "Activity",
      "tags": [
        "DNA",
        "X-ray diffraction",
        "Photograph 51",
        "Rosalind Franklin",
        "Chargaff’s ratios",
        "Double helix",
        "Model building",
        "Evidence"
      ],
      "workingScientifically": [
        "Questioning and predicting",
        "Processing data and information",
        "Analysing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "10.1",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-doppler",
      "title": "Doppler Effect Simulator",
      "path": "PhySims/Doppler/",
      "description": "Visualise how waves bunch together or spread out when a source moves, then investigate how relative motion changes observed frequency and wavelength.",
      "type": "Simulation",
      "tags": [
        "Doppler effect",
        "Waves",
        "Frequency",
        "Wavelength",
        "Relative motion",
        "Scientific models"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Conducting investigations"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "biosims-punnettsq",
      "title": "Drag-and-Drop Punnett Square",
      "path": "BioSims/PunnettSq/",
      "description": "Build simple genetic crosses and compare predicted genotype and phenotype ratios with simulated offspring data.",
      "type": "Simulation",
      "tags": [
        "Genetics",
        "Punnett squares",
        "Inheritance"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Processing data and information",
        "Analysing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "10.1",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "interestingsims-dualosc",
      "title": "Dual Oscillator Stereo Simulator — Advanced",
      "path": "InterestingSims/DualOsc/",
      "description": "Generate and compare two independent tones using frequency, waveform, level, stereo panning and phase controls. Visualise individual, combined and superposition waveforms, investigate beats and use a dedicated binaural-beat mode.",
      "type": "Simulation",
      "tags": [
        "Sound",
        "Waves",
        "Oscillators",
        "Frequency",
        "Superposition",
        "Beats",
        "Binaural beats",
        "Stereo"
      ],
      "workingScientifically": [
        "Observing",
        "Conducting investigations",
        "Processing data and information",
        "Analysing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "interestingsims-twotoneosc",
      "title": "Dual Oscillator Stereo Simulator — Standard",
      "path": "InterestingSims/TwoToneOsc/",
      "description": "Explore two independent tone generators with live waveform displays, stereo panning, phase offsets and waveform selection. Compare stereo output with the mathematical sum and investigate beats produced by nearby frequencies.",
      "type": "Simulation",
      "tags": [
        "Sound",
        "Waves",
        "Oscillators",
        "Frequency",
        "Superposition",
        "Beats",
        "Stereo",
        "Phase"
      ],
      "workingScientifically": [
        "Observing",
        "Conducting investigations",
        "Processing data and information",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "invsci-earthevidence",
      "title": "Earth History Evidence Builder",
      "path": "InvSci/EarthEvidence/",
      "description": "Build a model of Earth’s geological history by adding technology-based evidence layers, including fossils, seafloor mapping, magnetic striping, radiometric dating, GPS, computer reconstruction, tomography and palaeoclimate data.",
      "type": "Activity",
      "tags": [
        "Earth history",
        "Geological models",
        "Plate tectonics",
        "Continental drift",
        "Seafloor spreading",
        "Computer models",
        "Evidence",
        "Radiometric dating"
      ],
      "workingScientifically": [
        "Questioning and predicting",
        "Processing data and information",
        "Analysing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.3",
          "relevance": "Core"
        },
        {
          "module": "9.4",
          "relevance": "Supporting"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "earthsims-quakeforces",
      "title": "Earthquake Building Protection Simulator",
      "path": "EarthSims/QuakeForces/",
      "description": "Test engineering devices designed to reduce earthquake damage. Compare base isolation, cross bracing, dampers, shear walls and tuned mass dampers using roof sway, acceleration, damage risk and collapse behaviour.",
      "type": "Simulation",
      "tags": [
        "Earthquakes",
        "Engineering",
        "Buildings",
        "Base isolation",
        "Dampers",
        "Shear walls",
        "Resonance",
        "Forces"
      ],
      "workingScientifically": [
        "Observing",
        "Analysing data and information",
        "Problem-solving"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Supporting"
        },
        {
          "module": "8.3",
          "relevance": "Core"
        },
        {
          "module": "10.3",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "physims-reltrain",
      "title": "Einstein Train Thought Experiment Simulator",
      "path": "PhySims/RelTrain/",
      "description": "Explore the relativity of simultaneity using a moving train, two lightning strikes, observer frames, wavefronts and an event timeline.",
      "type": "Simulation",
      "tags": [
        "Relativity",
        "Simultaneity",
        "Modern physics",
        "Light"
      ],
      "workingScientifically": [
        "Observing",
        "Conducting investigations",
        "Processing data and information"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "7.1",
          "relevance": "Supporting"
        },
        {
          "module": "10.3",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "earthsims-elnino",
      "title": "El Niño and La Niña Simulator",
      "path": "EarthSims/ElNino/",
      "description": "Explore how trade winds, warm surface water, ocean upwelling, rainfall and atmospheric circulation change during neutral, El Niño and La Niña conditions across the tropical Pacific.",
      "type": "Simulation",
      "tags": [
        "Climate",
        "El Niño",
        "La Niña",
        "ENSO",
        "Trade winds",
        "Ocean currents",
        "Upwelling",
        "Rainfall"
      ],
      "workingScientifically": [
        "Observing",
        "Conducting investigations"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "8.3",
          "relevance": "Supporting"
        },
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "9.1",
          "relevance": "Supporting"
        },
        {
          "module": "9.4",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-electromag",
      "title": "Electromagnet Simulator",
      "path": "PhySims/Electromag/",
      "description": "Investigate how current, coil turns and core material affect the strength, polarity and magnetic field pattern of an electromagnet.",
      "type": "Simulation",
      "tags": [
        "Magnetism",
        "Electromagnets",
        "Fields",
        "Circuits"
      ],
      "workingScientifically": [
        "Conducting investigations",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Supporting"
        },
        {
          "module": "9.1",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "chemsims-elementconnections",
      "title": "Element Connections",
      "path": "ChemSims/ElementConnections/",
      "description": "Sort 16 element-related terms into four connected groups. Use available information and complexity settings to explore periodic-table categories, properties and relationships.",
      "type": "Game",
      "tags": [
        "Science vocabulary",
        "Years 7–10",
        "Connections game",
        "Elements",
        "Concept relationships",
        "Module revision",
        "Year review",
        "Mega Mix"
      ],
      "workingScientifically": [
        "Observing",
        "Processing data and information",
        "Analysing data and information",
        "Communicating"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "8.2",
          "relevance": "Core"
        },
        {
          "module": "9.3",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "chemsims-element-game",
      "title": "Element Symbol and Name Matching Game",
      "path": "ChemSims/Element_Game/",
      "description": "Match chemical symbols to their correct element names.",
      "type": "Game",
      "tags": [
        "Elements",
        "Symbols",
        "Matching"
      ],
      "workingScientifically": [
        "Observing"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "8.2",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "chemsims-equilibriumexplorer",
      "title": "Equilibrium Explorer: Open and Closed Systems",
      "path": "ChemSims/EquilibriumExplorer/",
      "description": "Model dynamic equilibrium using a reversible A ⇌ B particle system. Compare open and closed systems, concentration changes, reaction events and product loss.",
      "type": "Simulation",
      "tags": [
        "Chemical equilibrium",
        "Dynamic equilibrium",
        "Open system",
        "Closed system",
        "Reversible reactions",
        "Concentration",
        "Reaction rates",
        "Chemistry models"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Conducting investigations",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.3",
          "relevance": "Supporting"
        },
        {
          "module": "9.3",
          "relevance": "Supporting"
        },
        {
          "module": "10.2",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "invsci-eratosthenes",
      "title": "Eratosthenes Experiment Simulator",
      "path": "InvSci/Eratosthenes/",
      "description": "Model Eratosthenes’ method for estimating Earth’s circumference by comparing shadow angles and distance between locations, including NSW town examples and measurement uncertainty.",
      "type": "Simulation",
      "tags": [
        "Eratosthenes",
        "Earth circumference",
        "Scientific models",
        "Measurement uncertainty",
        "Angles",
        "Data analysis"
      ],
      "workingScientifically": [
        "Questioning and predicting",
        "Conducting investigations",
        "Processing data and information",
        "Communicating"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.1",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "biosims-evolutiontimeline",
      "title": "Evolution Timeline Table",
      "path": "BioSims/EvolutionTimeline/",
      "description": "Complete a table showing how life on Earth has changed in complexity and diversity over geological time.",
      "type": "Activity",
      "tags": [
        "Evolution",
        "Geological time",
        "Timeline"
      ],
      "workingScientifically": [
        "Conducting investigations",
        "Processing data and information"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "10.1",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "workingscientifically-variables",
      "title": "Experimental Variables Sorter",
      "path": "WorkingScientifically/Variables/",
      "description": "Identify independent variables, dependent variables, controlled variables and irrelevant factors using a drag-and-drop fair testing activity.",
      "type": "Activity",
      "tags": [
        "Variables",
        "Fair testing",
        "Drag and drop"
      ],
      "workingScientifically": [
        "Observing",
        "Planning investigations",
        "Conducting investigations",
        "Problem-solving"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "8.4",
          "relevance": "Supporting"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "invsci-fairtest",
      "title": "Fair Test Builder",
      "path": "InvSci/FairTest/",
      "description": "Build valid investigations by identifying independent, dependent and controlled variables across plant growth, pendulum motion, friction, reaction time and dissolving rate scenarios.",
      "type": "Activity",
      "tags": [
        "Fair testing",
        "Variables",
        "Validity",
        "Reliability",
        "Experimental design"
      ],
      "workingScientifically": [
        "Observing",
        "Planning investigations",
        "Conducting investigations",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Supporting"
        },
        {
          "module": "7.4",
          "relevance": "Supporting"
        },
        {
          "module": "8.4",
          "relevance": "Supporting"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "interestingsims-fractal",
      "title": "Fractal Infinite Zoom Simulator",
      "path": "InterestingSims/Fractal/",
      "description": "Explore the Mandelbrot set using guided zoom, infinite zoom, preset fractal regions, colour palettes and live coordinate data.",
      "type": "Simulation",
      "tags": [
        "Fractals",
        "Mathematics",
        "Patterns",
        "Visual model"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Processing data and information",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.4",
          "relevance": "Supporting"
        },
        {
          "module": "10.4",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "chemsims-fracdist",
      "title": "Fractional Distillation Simulator",
      "path": "ChemSims/FracDist/",
      "description": "Heat crude oil and observe how different fractions vaporise, move through a cooler fractionating column, and collect according to boiling point range. Includes a prediction check and live collection data.",
      "type": "Simulation",
      "tags": [
        "Fractional distillation",
        "Crude oil",
        "Hydrocarbons",
        "Boiling point",
        "Separation techniques",
        "Organic chemistry",
        "Fuels",
        "Refinery"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Processing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.4",
          "relevance": "Core"
        },
        {
          "module": "8.3",
          "relevance": "Supporting"
        },
        {
          "module": "9.1",
          "relevance": "Supporting"
        },
        {
          "module": "9.3",
          "relevance": "Core"
        },
        {
          "module": "9.4",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "math-galton",
      "title": "Galton Board Simulator",
      "path": "Math/Galton/",
      "description": "Drop balls through a Galton board to model random pathways, binomial distributions, variation, repeated trials and the emergence of a bell-shaped pattern.",
      "type": "Simulation",
      "tags": [
        "Maths",
        "Probability",
        "Statistics",
        "Galton board",
        "Binomial distribution",
        "Randomness",
        "Data"
      ],
      "workingScientifically": [
        "Questioning and predicting",
        "Conducting investigations",
        "Processing data and information",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "invsci-gaslaws",
      "title": "Gas Laws Technology Simulator",
      "path": "InvSci/GasLaws/",
      "description": "Use a virtual syringe, pressure sensor and temperature control to investigate Boyle’s Law, Charles’ Law and the Combined Gas Law, including graphing, data collection and sensor uncertainty.",
      "type": "Simulation",
      "tags": [
        "Gas laws",
        "Boyle’s Law",
        "Charles’ Law",
        "Combined Gas Law",
        "Pressure",
        "Volume",
        "Temperature",
        "Sensors"
      ],
      "workingScientifically": [
        "Questioning and predicting",
        "Conducting investigations",
        "Processing data and information",
        "Problem-solving",
        "Communicating"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.3",
          "relevance": "Supporting"
        },
        {
          "module": "9.3",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "biosims-gingerdawn",
      "title": "Ginger Dawn: Genetics Game",
      "path": "BioSims/GingerDawn/",
      "description": "Run an archived Flash-based genetics game using Ruffle. Students explore inheritance, variation, recessive traits and population genetics through a simple arcade-style model.",
      "type": "Archived activity",
      "tags": [
        "Genetics",
        "Inheritance",
        "Recessive traits",
        "Variation",
        "Population genetics",
        "Ginger Dawn",
        "Routes",
        "Flash"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "10.1",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "brainbreak-gravityslingshot",
      "title": "Gravity Slingshot Challenge",
      "path": "BrainBreak/GravitySlingshot/",
      "description": "Launch a probe past a planet and collect data on launch angle, speed, gravity strength, trajectory and closest distance to a target.",
      "type": "Game",
      "tags": [
        "Gravity",
        "Forces",
        "Motion",
        "Trajectory",
        "Data"
      ],
      "workingScientifically": [
        "Planning investigations",
        "Conducting investigations",
        "Processing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.1",
          "relevance": "Supporting"
        },
        {
          "module": "7.2",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "earthsims-greenhouse",
      "title": "Greenhouse Effect Energy Balance Simulator",
      "path": "EarthSims/GreenHouse/",
      "description": "Model how incoming sunlight, reflected energy, outgoing infrared radiation and greenhouse gases affect Earth’s surface temperature.",
      "type": "Simulation",
      "tags": [
        "Climate",
        "Greenhouse effect",
        "Energy balance"
      ],
      "workingScientifically": [
        "Questioning and predicting",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.3",
          "relevance": "Supporting"
        },
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "9.1",
          "relevance": "Core"
        },
        {
          "module": "9.4",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-guitarstring",
      "title": "Guitar String Vibration",
      "path": "PhySims/GuitarString/",
      "description": "Pluck a virtual guitar string and explore how frequency, pluck position, damping, harmonics and brightness affect string shape, sustain, tone and sound.",
      "type": "Simulation",
      "tags": [
        "Sound",
        "Waves",
        "Guitar",
        "String vibration",
        "Frequency",
        "Pitch",
        "Harmonics",
        "Standing waves"
      ],
      "workingScientifically": [
        "Observing"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "brainbreak-immunedefender",
      "title": "Immune Defender: Pathogen Chase",
      "path": "BrainBreak/ImmuneDefender/",
      "description": "Control a white blood cell, remove pathogens and avoid toxins while comparing how immune protection mode affects response data.",
      "type": "Game",
      "tags": [
        "Immune system",
        "Pathogens",
        "Vaccination",
        "White blood cells",
        "Data"
      ],
      "workingScientifically": [
        "Processing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.1",
          "relevance": "Supporting"
        },
        {
          "module": "9.2",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "chemsims-ionform",
      "title": "Ion Formation Simulator",
      "path": "ChemSims/IonForm/",
      "description": "Visualise how atoms from the first 20 elements gain or lose electrons to form ions. Watch electron transfer animations, compare neutral atoms with ions and explore charge formation in light or dark mode.",
      "type": "Simulation",
      "tags": [
        "Ion formation",
        "Electrons",
        "Cations",
        "Anions",
        "Atomic structure",
        "First 20 elements"
      ],
      "workingScientifically": [
        "Observing",
        "Analysing data and information"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "8.2",
          "relevance": "Core"
        },
        {
          "module": "9.3",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "invsci-lhc",
      "title": "Large Hadron Collider Model Simulator",
      "path": "InvSci/LHC/",
      "description": "Model how counter-rotating particle beams are steered by magnets, collide inside detectors, and produce event data selected by a trigger system.",
      "type": "Simulation",
      "tags": [
        "Large Hadron Collider",
        "Particle accelerator",
        "Particle physics",
        "Magnetic fields",
        "Detectors",
        "Trigger systems",
        "Event data",
        "Scientific models"
      ],
      "workingScientifically": [
        "Questioning and predicting",
        "Conducting investigations",
        "Processing data and information",
        "Communicating"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.2",
          "relevance": "Supporting"
        },
        {
          "module": "10.4",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "interestingsims-lemstand",
      "title": "Lemonade Stand Lab",
      "path": "InterestingSims/LemStand/",
      "description": "Run a virtual lemonade stand and investigate how price, stock, advertising, weather and random variation affect sales and profit. Use controlled comparisons, repeated trials, graphs, CSV export and a CER scaffold to justify an evidence-based strategy.",
      "type": "Simulation",
      "tags": [
        "Data science",
        "Working scientifically",
        "Variables",
        "Fair testing",
        "Repeated trials",
        "Reliability",
        "Modelling",
        "Decision making"
      ],
      "workingScientifically": [
        "Questioning and predicting",
        "Planning investigations",
        "Conducting investigations",
        "Processing data and information",
        "Analysing data and information",
        "Problem-solving",
        "Communicating"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "chemsims-lewisstructure",
      "title": "Lewis Structure Builder",
      "path": "ChemSims/LewisStructure/",
      "description": "Build Lewis electron-dot structures for atoms, molecules and polyatomic ions. Explore valence electrons, lone pairs, multiple bonds, resonance, octets and formal charge.",
      "type": "Activity",
      "tags": [
        "Chemical bonding",
        "Lewis structures",
        "Valence electrons",
        "Covalent bonding",
        "Lone pairs",
        "Multiple bonds",
        "Formal charge",
        "Resonance"
      ],
      "workingScientifically": [
        "Observing",
        "Problem-solving"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "8.2",
          "relevance": "Supporting"
        },
        {
          "module": "9.3",
          "relevance": "Core"
        },
        {
          "module": "10.2",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "biosims-rats",
      "title": "Lick Your Rats",
      "path": "BioSims/Rats/",
      "description": "Explore how maternal licking and grooming in rats can affect gene expression, brain development and stress responses through epigenetic changes.",
      "type": "Simulation",
      "tags": [
        "Epigenetics",
        "Gene expression",
        "Inheritance",
        "Environment",
        "Stress response",
        "Rats",
        "Maternal care",
        "Genetics"
      ],
      "workingScientifically": [
        "Observing",
        "Conducting investigations"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "10.1",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-simplemachines",
      "title": "Lift the Load: Simple Machines Challenge",
      "path": "PhySims/SimpleMachines/",
      "description": "Compare levers, pulleys, ramps, wheels and axles, wedges and screws by lifting the same load. Students explore effort force, load force, distance, work, efficiency and mechanical advantage.",
      "type": "Game",
      "tags": [
        "Forces",
        "Simple Machines",
        "Mechanical Advantage",
        "Work",
        "Energy"
      ],
      "workingScientifically": [
        "Observing",
        "Analysing data and information",
        "Problem-solving"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Core"
        },
        {
          "module": "9.1",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "physims-longwave",
      "title": "Longitudinal Wave Simulator",
      "path": "PhySims/LongWave/",
      "description": "Model a longitudinal wave by showing particles moving left and right as compressions and rarefactions travel through the medium.",
      "type": "Simulation",
      "tags": [
        "Waves",
        "Longitudinal waves",
        "Compression",
        "Rarefaction",
        "Sound"
      ],
      "workingScientifically": [
        "Questioning and predicting"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "math-lottery",
      "title": "Lottery Probability Simulator",
      "path": "Math/Lottery/",
      "description": "Model lottery-style random draws to compare combinations, odds, rare events and the difference between possible outcomes and likely outcomes.",
      "type": "Simulation",
      "tags": [
        "Maths",
        "Probability",
        "Combinations",
        "Randomness",
        "Odds",
        "Statistics"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-staticwire",
      "title": "Magnetic Field Around a Wire",
      "path": "PhySims/StaticWire/",
      "description": "Explore the circular magnetic field produced by a straight current-carrying wire. Change current and wire position, then use a probe to compare distance, direction and relative field strength.",
      "type": "Simulation",
      "tags": [
        "Magnetism",
        "Current",
        "Magnetic field",
        "Right-hand rule",
        "Field strength"
      ],
      "workingScientifically": [
        "Observing",
        "Conducting investigations",
        "Analysing data and information"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Supporting"
        },
        {
          "module": "9.1",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "physims-twowire",
      "title": "Magnetic Field Around Two Wires",
      "path": "PhySims/TwoWire/",
      "description": "Explore how magnetic fields from two current-carrying wires combine. Compare same-direction and opposite-direction currents using resultant field arrows and a probe point.",
      "type": "Simulation",
      "tags": [
        "Magnetism",
        "Current",
        "Magnetic fields",
        "Superposition",
        "Vector addition"
      ],
      "workingScientifically": [
        "Observing",
        "Analysing data and information"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Supporting"
        },
        {
          "module": "9.1",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "physims-magfield",
      "title": "Magnetic Field Visualiser",
      "path": "PhySims/MagField/",
      "description": "Visualise the magnetic field around a bar magnet using compass needles, field lines, an iron filings view and a movable field probe.",
      "type": "Simulation",
      "tags": [
        "Magnets",
        "Fields",
        "Forces",
        "Compass"
      ],
      "workingScientifically": [
        "Observing"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-magforce",
      "title": "Magnetic Force Visualiser",
      "path": "PhySims/MagForce/",
      "description": "Explore attraction, repulsion and how magnetic force changes with distance by adjusting magnet strength, pole arrangement and the gap between magnets.",
      "type": "Simulation",
      "tags": [
        "Magnets",
        "Forces",
        "Fields",
        "Distance"
      ],
      "workingScientifically": [
        "Observing",
        "Conducting investigations",
        "Processing data and information"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "invsci-helicobacter",
      "title": "Marshall and Warren: Peptic Ulcer Evidence Simulator",
      "path": "InvSci/Helicobacter/",
      "description": "Investigate how evidence changed the scientific explanation for peptic ulcers by comparing stress and acid explanations with evidence for H. pylori infection, NSAID use, treatment outcomes and scientific consensus.",
      "type": "Simulation",
      "tags": [
        "Marshall and Warren",
        "H. pylori",
        "Helicobacter pylori",
        "Peptic ulcers",
        "Scientific evidence",
        "Scientific models",
        "Scientific consensus",
        "Medical science"
      ],
      "workingScientifically": [
        "Questioning and predicting",
        "Planning investigations",
        "Conducting investigations",
        "Analysing data and information",
        "Communicating"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "9.2",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "biosims-abundance",
      "title": "Measuring Abundance Simulator",
      "path": "BioSims/Abundance/",
      "description": "Compare quadrat sampling and capture-mark-recapture methods for estimating population size.",
      "type": "Simulation",
      "tags": [
        "Ecology",
        "Abundance",
        "Sampling"
      ],
      "workingScientifically": [
        "Observing",
        "Conducting investigations",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.1",
          "relevance": "Core"
        },
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "9.4",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "invsci-medscan",
      "title": "Medical Imaging Comparison Simulator",
      "path": "InvSci/MedScan/",
      "description": "Compare X-ray, CT, MRI and ultrasound in different medical scenarios, weighing image detail, cost, risk, radiation exposure, accessibility and ethical considerations.",
      "type": "Simulation",
      "tags": [
        "Medical imaging",
        "X-ray",
        "CT",
        "MRI",
        "Ultrasound",
        "Radiation",
        "Technology",
        "Risk-benefit"
      ],
      "workingScientifically": [
        "Observing",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "9.2",
          "relevance": "Supporting"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-microscope",
      "title": "Microscope Focus and Magnification Explorer",
      "path": "PhySims/Microscope/",
      "description": "Explore how a compound light microscope uses lenses, light, focus and magnification. Practise centring a specimen, adjusting focus and comparing field of view at different magnifications.",
      "type": "Simulation",
      "tags": [
        "Light",
        "Lenses",
        "Microscopes",
        "Magnification",
        "Focus",
        "Field of view",
        "Cells",
        "Scientific equipment"
      ],
      "workingScientifically": [
        "Observing",
        "Conducting investigations"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "7.3",
          "relevance": "Core"
        },
        {
          "module": "10.3",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "biosims-negativefeedback",
      "title": "Negative Feedback System Challenge",
      "path": "BioSims/NegativeFeedback/",
      "description": "Respond to random events and maintain homeostasis in temperature, glucose and water balance systems.",
      "type": "Game",
      "tags": [
        "Homeostasis",
        "Negative feedback",
        "Human body"
      ],
      "workingScientifically": [
        "Problem-solving"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "8.1",
          "relevance": "Core"
        },
        {
          "module": "9.2",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "physims-newtonsapples",
      "title": "Newton's Angry Apples",
      "path": "PhySims/NewtonsApples/",
      "description": "Launch apples using angle, launch power, gravity, wind and air resistance to solve projectile-motion puzzles, complete guided missions and collect modelled science data.",
      "type": "Simulation",
      "tags": [
        "Science games",
        "Projectile motion",
        "Forces",
        "Gravity",
        "Energy",
        "Motion",
        "Air resistance",
        "Wind"
      ],
      "workingScientifically": [
        "Questioning and predicting",
        "Processing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Core"
        },
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-newtonslaws",
      "title": "Newton's Laws Explorer",
      "path": "PhySims/NewtonsLaws/",
      "description": "Start with guided explainer animations, then switch to prediction mode to test inertia, F = ma and action-reaction force pairs using carts, forces, mass, friction and graphs.",
      "type": "Simulation",
      "tags": [
        "Forces",
        "Motion",
        "Newton’s laws",
        "Inertia",
        "F = ma",
        "Action-reaction",
        "Net force",
        "Mass"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Processing data and information",
        "Communicating"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Core"
        },
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-newtonscradle",
      "title": "Newton’s Cradle Simulator",
      "path": "PhySims/NewtonsCradle/",
      "description": "Investigate momentum and energy transfer through a virtual Newton’s cradle. Change the number of released balls, observe collisions and compare motion and energy graphs over the full running time.",
      "type": "Simulation",
      "tags": [
        "Forces",
        "Motion",
        "Newton’s cradle",
        "Momentum",
        "Kinetic energy",
        "Collisions",
        "Conservation of momentum",
        "Energy transfer"
      ],
      "workingScientifically": [
        "Observing",
        "Conducting investigations",
        "Processing data and information",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Core"
        },
        {
          "module": "9.1",
          "relevance": "Supporting"
        },
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-nucleardecayhalflife",
      "title": "Nuclear Decay and Half-Life Simulator",
      "path": "PhySims/NuclearDecayHalfLife/",
      "description": "Watch individual nuclei decay randomly while a predictable exponential half-life curve emerges across a large sample. Compare real isotopes, sample sizes, theoretical and experimental curves, decay constants and logarithmic graphs.",
      "type": "Simulation",
      "tags": [
        "Nuclear physics",
        "Radioactivity",
        "Radioactive decay",
        "Half-life",
        "Exponential decay",
        "Decay constant",
        "Isotopes",
        "Probability"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Conducting investigations",
        "Processing data and information",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.2",
          "relevance": "Supporting"
        },
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "9.1",
          "relevance": "Supporting"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-nuclearreactor",
      "title": "Nuclear Reactor Simulator",
      "path": "PhySims/NuclearReactor/",
      "description": "Model a controlled nuclear fission reactor. Adjust control rods, coolant flow and turbine load to manage neutron activity, core temperature, electrical output, safety margin and random fault events.",
      "type": "Simulation",
      "tags": [
        "Nuclear",
        "Fission",
        "Chain reaction",
        "Control rods",
        "Coolant",
        "Reactor",
        "Energy transfer",
        "Electricity"
      ],
      "workingScientifically": [
        "Questioning and predicting",
        "Planning investigations",
        "Conducting investigations",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "9.1",
          "relevance": "Core"
        },
        {
          "module": "9.4",
          "relevance": "Supporting"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-ohm",
      "title": "Ohm’s Law Simulator",
      "path": "PhySims/Ohm/",
      "description": "Investigate voltage, current and resistance by comparing ohmic and non-ohmic components, including resistors, filament lamps, diodes, thermistors, LEDs and unknown challenge components.",
      "type": "Simulation",
      "tags": [
        "Electricity",
        "Ohm’s law",
        "Circuits"
      ],
      "workingScientifically": [
        "Questioning and predicting",
        "Conducting investigations",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "9.1",
          "relevance": "Core"
        },
        {
          "module": "9.3",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "invsci-opticaltech",
      "title": "Optical Instrument Technology Builder",
      "path": "InvSci/OpticalTech/",
      "description": "Use reflection, refraction, lens models and mirror models to design and compare microscopes, refracting telescopes, reflecting telescopes and optical fibres. Includes ray models, law matching, performance metrics, trial data, graphing, CSV export and CER response prompts.",
      "type": "Activity",
      "tags": [
        "Optics",
        "Optical instruments",
        "Reflection",
        "Refraction",
        "Lenses",
        "Mirrors",
        "Microscopes",
        "Telescopes"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Conducting investigations",
        "Processing data and information",
        "Analysing data and information",
        "Problem-solving",
        "Communicating"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.1",
          "relevance": "Supporting"
        },
        {
          "module": "10.3",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "physims-optics",
      "title": "Optics Ray Diagram Simulator",
      "path": "PhySims/Optics/",
      "description": "Explore convex, concave and bifocal lenses by moving an object, changing focal length, tracing ray diagrams and identifying real, virtual, upright, inverted, enlarged and reduced images.",
      "type": "Simulation",
      "tags": [
        "Optics",
        "Lenses",
        "Ray diagrams"
      ],
      "workingScientifically": [
        "Observing"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "7.1",
          "relevance": "Supporting"
        },
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "chemsims-organicpatternbuilder",
      "title": "Organic Pattern Builder",
      "path": "ChemSims/OrganicPatternBuilder/",
      "description": "Build and compare straight-chain organic molecules up to ten carbons, including alkanes, alkenes, alkynes and common functional groups. Students connect structure, bonding, molecular formulae, condensed structural formulae, locants and IUPAC-style names.",
      "type": "Activity",
      "tags": [
        "Organic chemistry",
        "Hydrocarbons",
        "Alkanes",
        "Alkenes",
        "Alkynes",
        "Functional groups",
        "Alcohols",
        "Haloalkanes"
      ],
      "workingScientifically": [
        "Observing",
        "Analysing data and information",
        "Problem-solving"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "9.3",
          "relevance": "Core"
        },
        {
          "module": "10.2",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "biosims-organisingdiversity",
      "title": "Organising the Diversity of Life on Earth",
      "path": "BioSims/OrganisingDiversity/",
      "description": "Use observable characteristics to classify organisms into major groups such as animals, plants, fungi, protists and bacteria.",
      "type": "Simulation",
      "tags": [
        "Classification",
        "Diversity of life",
        "Animals",
        "Plants",
        "Fungi",
        "Protists",
        "Bacteria",
        "Shared characteristics"
      ],
      "workingScientifically": [
        "Planning investigations",
        "Communicating"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "7.3",
          "relevance": "Core"
        },
        {
          "module": "8.1",
          "relevance": "Supporting"
        },
        {
          "module": "10.1",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "biosims-pandemic",
      "title": "Pandemic Simulation",
      "path": "BioSims/Pandemic/",
      "description": "Model how an infectious disease can spread through a population.",
      "type": "Simulation",
      "tags": [
        "Disease",
        "Pandemic",
        "Biosecurity",
        "Population model"
      ],
      "workingScientifically": [
        "Questioning and predicting"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.1",
          "relevance": "Supporting"
        },
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "9.2",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-parachute",
      "title": "Parachute Drop Parameter Simulator",
      "path": "PhySims/Parachute/",
      "description": "Change mass, drop height, parachute size, air density and gravity to investigate drag force, terminal velocity and impact speed.",
      "type": "Simulation",
      "tags": [
        "Forces",
        "Motion",
        "Drag"
      ],
      "workingScientifically": [
        "Planning investigations",
        "Conducting investigations"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Core"
        },
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "brainbreak-particlepanic",
      "title": "Particle Panic: Kinetic Energy Challenge",
      "path": "BrainBreak/ParticlePanic/",
      "description": "Control a particle, collect tokens and avoid high-energy particles while investigating how temperature affects particle motion, collisions and survival time.",
      "type": "Game",
      "tags": [
        "Particles",
        "Kinetic energy",
        "Temperature",
        "Collisions",
        "Data"
      ],
      "workingScientifically": [
        "Processing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.3",
          "relevance": "Supporting"
        },
        {
          "module": "8.4",
          "relevance": "Supporting"
        },
        {
          "module": "9.1",
          "relevance": "Core"
        },
        {
          "module": "10.2",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "biosims-eye",
      "title": "Path of Light Through the Eye",
      "path": "BioSims/Eye/",
      "description": "Trace light rays through the cornea, pupil, lens and retina. Compare normal vision, myopia, hyperopia, accommodation, pupil size and corrective lenses.",
      "type": "Simulation",
      "tags": [
        "Human body",
        "Eye",
        "Vision",
        "Light",
        "Refraction",
        "Lens",
        "Retina",
        "Myopia"
      ],
      "workingScientifically": [
        "Observing",
        "Analysing data and information"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "8.1",
          "relevance": "Core"
        },
        {
          "module": "10.3",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "biosims-pedigree",
      "title": "Pedigree Simulator",
      "path": "BioSims/Pedigree/",
      "description": "Explore family pedigrees to identify affected individuals, carriers and likely inheritance patterns.",
      "type": "Simulation",
      "tags": [
        "Genetics",
        "Pedigree",
        "Inheritance"
      ],
      "workingScientifically": [
        "Observing",
        "Analysing data and information"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "10.1",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "biosims-moths",
      "title": "Peppered Moth Evolution Simulator",
      "path": "BioSims/Moths/",
      "description": "Model natural selection as the environment changes from clean to polluted, and back again.",
      "type": "Simulation",
      "tags": [
        "Evolution",
        "Natural selection",
        "Data"
      ],
      "workingScientifically": [
        "Questioning and predicting",
        "Conducting investigations",
        "Processing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "9.4",
          "relevance": "Supporting"
        },
        {
          "module": "10.1",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "biosims-petribacteria",
      "title": "Petri Dish Bacterial Growth Simulator",
      "path": "BioSims/PetriBacteria/",
      "description": "Explore how bacteria grow in a petri dish under different conditions.",
      "type": "Simulation",
      "tags": [
        "Bacteria",
        "Growth",
        "Microbes"
      ],
      "workingScientifically": [
        "Observing"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "7.3",
          "relevance": "Supporting"
        },
        {
          "module": "8.1",
          "relevance": "Supporting"
        },
        {
          "module": "9.2",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-photoelectric",
      "title": "Photoelectric Effect Simulator",
      "path": "PhySims/PhotoElectric/",
      "description": "Change metal threshold frequency, light intensity and stopping potential to investigate photoelectron emission.",
      "type": "Simulation",
      "tags": [
        "Light",
        "Photoelectric effect",
        "Modern physics"
      ],
      "workingScientifically": [
        "Conducting investigations"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.1",
          "relevance": "Supporting"
        },
        {
          "module": "8.2",
          "relevance": "Supporting"
        },
        {
          "module": "9.3",
          "relevance": "Supporting"
        },
        {
          "module": "10.3",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "biosims-predprey",
      "title": "Predator–Prey Population Simulator",
      "path": "BioSims/PredPrey/",
      "description": "Model prey, predator and plant populations while adjusting food supply, reproduction and hunting pressure. Explore population cycles, carrying capacity, limiting factors, feedback loops and ecosystem stability, then export the data as CSV.",
      "type": "Simulation",
      "tags": [
        "Ecology",
        "Predator–prey",
        "Population cycles",
        "Carrying capacity",
        "Limiting factors",
        "Feedback loops",
        "Ecosystem stability",
        "Data"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Planning investigations",
        "Conducting investigations",
        "Processing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.1",
          "relevance": "Core"
        },
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "9.4",
          "relevance": "Core"
        },
        {
          "module": "10.1",
          "relevance": "Supporting"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "invsci-priestley",
      "title": "Priestley’s Air Experiments Simulator",
      "path": "InvSci/Priestley/",
      "description": "Explore Priestley’s candle, plant, animal and mercuric oxide experiments to compare historical interpretations of “air” with the modern oxygen model.",
      "type": "Simulation",
      "tags": [
        "Scientific investigations",
        "Priestley",
        "Oxygen",
        "Combustion",
        "Respiration",
        "Plants",
        "Phlogiston theory",
        "Scientific models"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Planning investigations",
        "Conducting investigations",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.1",
          "relevance": "Core"
        },
        {
          "module": "8.3",
          "relevance": "Core"
        },
        {
          "module": "10.2",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-projectilepanic",
      "title": "Projectile Panic",
      "path": "PhySims/ProjectilePanic/",
      "description": "A projectile motion challenge where students adjust launch angle, initial velocity, gravity and target distance, then launch to test their calculations. Results and data appear only after landing to encourage prediction before trial-and-error.",
      "type": "Game",
      "tags": [
        "Projectile motion",
        "Kinematics",
        "Motion",
        "Gravity",
        "Data"
      ],
      "workingScientifically": [
        "Questioning and predicting",
        "Conducting investigations",
        "Processing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Supporting"
        },
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "biosims-punnettsq2",
      "title": "Punnett Square Simulator",
      "path": "BioSims/PunnettSq2/",
      "description": "Practise completing Punnett squares by dragging allele tiles into the correct offspring boxes.",
      "type": "Simulation",
      "tags": [
        "Genetics",
        "Alleles",
        "Inheritance"
      ],
      "workingScientifically": [
        "Observing"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "10.1",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "invsci-radioactivityevidence",
      "title": "Radioactivity Detector Evidence Builder",
      "path": "InvSci/RadioactivityEvidence/",
      "description": "Explore how radiation detection technologies made invisible radiation measurable, allowing scientists to classify radiation types and develop models of atomic structure, decay and the nuclear atom.",
      "type": "Activity",
      "tags": [
        "Radioactivity",
        "Radiation detection",
        "Atomic theory",
        "Nuclear atom",
        "Alpha radiation",
        "Beta radiation",
        "Gamma radiation",
        "Geiger counter"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Analysing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.2",
          "relevance": "Supporting"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "brainbreak-target",
      "title": "Reaction and Accuracy Target Lab",
      "path": "BrainBreak/Target/",
      "description": "Click targets under timed conditions, collect repeated trial data and compare scores, hits per second, best score and mean performance.",
      "type": "Game",
      "tags": [
        "Reaction time",
        "Accuracy",
        "Focus",
        "Data"
      ],
      "workingScientifically": [
        "Observing",
        "Conducting investigations",
        "Processing data and information",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "biosims-reactiontime",
      "title": "Reaction Time Challenge",
      "path": "BioSims/ReactionTime/",
      "description": "Measure and compare student reaction times across repeated trials, including false starts, mean reaction time, best time, range and CSV export.",
      "type": "Game",
      "tags": [
        "Reaction time",
        "Nervous system",
        "Data"
      ],
      "workingScientifically": [
        "Observing",
        "Conducting investigations",
        "Processing data and information",
        "Analysing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.1",
          "relevance": "Core"
        },
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-lightlaws",
      "title": "Reflection and Refraction Law Simulator",
      "path": "PhySims/LightLaws/",
      "description": "Investigate the law of reflection, Snell’s law and total internal reflection by changing angles, materials, refractive indices and measurement uncertainty.",
      "type": "Simulation",
      "tags": [
        "Light",
        "Waves",
        "Reflection",
        "Refraction",
        "Snell’s law",
        "Total internal reflection",
        "Critical angle",
        "Refractive index"
      ],
      "workingScientifically": [
        "Conducting investigations",
        "Communicating"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.1",
          "relevance": "Supporting"
        },
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "earthsims-renewablegrid",
      "title": "Renewable Energy Grid Simulator",
      "path": "EarthSims/RenewableGrid/",
      "description": "Balance electricity demand with solar, wind, battery storage and backup power. Explore renewable variability, storage limits, cost, emissions, reliability, grid faults and trade-offs in a continuously running electricity grid model.",
      "type": "Simulation",
      "tags": [
        "Energy",
        "Electricity",
        "Renewable energy",
        "Solar",
        "Wind",
        "Battery storage",
        "Fossil fuels",
        "Electricity grid"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "9.1",
          "relevance": "Core"
        },
        {
          "module": "9.4",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "biosims-greatspermrace",
      "title": "Reproduction Race: Fertilisation Simulation",
      "path": "BioSims/GreatSpermRace/",
      "description": "Run an archived Flash-based educational game about fertilisation using Ruffle. Students explore specialised reproductive cells, survival challenges and the biological process leading to fertilisation.",
      "type": "Archived activity",
      "tags": [
        "Reproduction",
        "Fertilisation",
        "Specialised cells",
        "Human body",
        "Flash",
        "Ruffle",
        "Archived resource"
      ],
      "workingScientifically": [
        "Observing",
        "Problem-solving"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "8.1",
          "relevance": "Core"
        },
        {
          "module": "10.1",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "earthsims-seismograph",
      "title": "Seismograph Simulator",
      "path": "EarthSims/Seismograph/",
      "description": "Model how a seismograph records earthquake waves. Compare P-wave and S-wave arrival times, read the S–P interval, and estimate distance to the epicentre.",
      "type": "Simulation",
      "tags": [
        "Earthquakes",
        "Seismograph",
        "Seismogram",
        "P-waves",
        "S-waves",
        "Epicentre",
        "Geology"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Processing data and information",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.3",
          "relevance": "Core"
        },
        {
          "module": "10.3",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "brainbreak-snake",
      "title": "Snake Decision-Time Challenge",
      "path": "BrainBreak/Snake/",
      "description": "Guide the snake, collect food and record score and survival time to investigate practice, attention, decision-making and repeated trial data.",
      "type": "Game",
      "tags": [
        "Decision-making",
        "Reaction time",
        "Practice",
        "Data"
      ],
      "workingScientifically": [
        "Conducting investigations",
        "Processing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "biosims-sneeze",
      "title": "Sneeze: Infection Spread Game",
      "path": "BioSims/Sneeze/",
      "description": "Run an archived Flash-based disease transmission game using Ruffle. Students explore how an infection can spread through a population depending on movement, timing, contact and transmission.",
      "type": "Archived activity",
      "tags": [
        "Disease",
        "Infection",
        "Transmission",
        "Virus",
        "Sneeze",
        "Population spread",
        "Outbreaks",
        "Flash"
      ],
      "workingScientifically": [
        "Observing"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "8.1",
          "relevance": "Supporting"
        },
        {
          "module": "9.2",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "biosims-ear",
      "title": "Sound Through the Ear",
      "path": "BioSims/Ear/",
      "description": "Follow sound as it travels through the outer ear, ear canal, eardrum, ossicles and cochlea, then becomes nerve signals. Includes frequency, amplitude, pathway steps and a cochlear hair-cell damage-risk model.",
      "type": "Simulation",
      "tags": [
        "Human body",
        "Ear",
        "Hearing",
        "Sound",
        "Waves",
        "Cochlea",
        "Eardrum",
        "Ossicles"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.1",
          "relevance": "Core"
        },
        {
          "module": "10.3",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "physims-soundgen",
      "title": "Sound Wave Generator",
      "path": "PhySims/SoundGen/",
      "description": "Generate sine, square, sawtooth and triangle waves in the browser. Adjust frequency and volume, use preset tones and compare waveform shape on a live scope.",
      "type": "Simulation",
      "tags": [
        "Sound",
        "Waves",
        "Frequency",
        "Pitch",
        "Waveform",
        "Oscillator"
      ],
      "workingScientifically": [
        "Observing",
        "Conducting investigations",
        "Processing data and information",
        "Analysing data and information"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-specrel",
      "title": "Special Relativity Light Clock Simulator",
      "path": "PhySims/SpecRel/",
      "description": "Explore time dilation using a moving light clock by comparing the traveller frame with a stationary observer frame and graphing the Lorentz factor.",
      "type": "Simulation",
      "tags": [
        "Light",
        "Relativity",
        "Time dilation",
        "Modern physics"
      ],
      "workingScientifically": [
        "Observing",
        "Processing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.1",
          "relevance": "Supporting"
        },
        {
          "module": "10.3",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "physims-spectrometer",
      "title": "Spectrometer Simulator",
      "path": "PhySims/Spectrometer/",
      "description": "Explore continuous, emission and absorption spectra by measuring wavelengths, comparing spectral lines and identifying unknown elements.",
      "type": "Simulation",
      "tags": [
        "Light",
        "Spectra",
        "Waves"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "7.1",
          "relevance": "Core"
        },
        {
          "module": "8.2",
          "relevance": "Supporting"
        },
        {
          "module": "9.3",
          "relevance": "Supporting"
        },
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "invsci-speedvdist",
      "title": "Speed vs Distance Investigation Simulator",
      "path": "InvSci/SpeedVDist/",
      "description": "Design a practical investigation using available technologies to measure speed and distance travelled, collect quantitative data, repeat trials, calculate means and evaluate measurement uncertainty.",
      "type": "Simulation",
      "tags": [
        "Speed",
        "Distance travelled",
        "Quantitative data",
        "Independent variable",
        "Dependent variable",
        "Photogate",
        "Motion sensor",
        "Technology"
      ],
      "workingScientifically": [
        "Conducting investigations",
        "Processing data and information",
        "Analysing data and information",
        "Problem-solving",
        "Communicating"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Supporting"
        },
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "10.3",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-suvat",
      "title": "SUVAT Prediction Explorer",
      "path": "PhySims/SUVAT/",
      "description": "Predict final velocity and displacement for constant-acceleration motion, then run the model to compare the prediction with SUVAT equations, graphs and actual results.",
      "type": "Simulation",
      "tags": [
        "Motion",
        "Kinematics",
        "SUVAT",
        "Constant acceleration",
        "Prediction",
        "Displacement",
        "Velocity",
        "Acceleration"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Processing data and information",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-telescope",
      "title": "Telescope Light Path Explorer",
      "path": "PhySims/Telescope/",
      "description": "Explore how refracting and reflecting telescopes collect, focus and magnify light. Compare aperture, eyepiece focal length, focus, brightness and image quality.",
      "type": "Simulation",
      "tags": [
        "Light",
        "Waves",
        "Telescopes",
        "Optics",
        "Reflection",
        "Refraction",
        "Concave mirrors",
        "Lenses"
      ],
      "workingScientifically": [
        "Observing",
        "Analysing data and information"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "7.1",
          "relevance": "Core"
        },
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "invsci-temprate",
      "title": "Temperature and Reaction Rate Simulator",
      "path": "InvSci/TempRate/",
      "description": "Investigate how temperature affects reaction rate using a virtual reaction vessel, particle collisions, graphing, data collection and model evaluation.",
      "type": "Simulation",
      "tags": [
        "Reaction rate",
        "Temperature",
        "Collision theory",
        "Particle model",
        "Successful collisions",
        "Activation energy",
        "Catalyst",
        "Concentration"
      ],
      "workingScientifically": [
        "Questioning and predicting",
        "Conducting investigations",
        "Processing data and information",
        "Communicating"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.3",
          "relevance": "Core"
        },
        {
          "module": "10.2",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "physims-tickertimer",
      "title": "Ticker Timer Simulator",
      "path": "PhySims/TickerTimer/",
      "description": "Generate ticker-timer tapes at 50 Hz and analyse the spacing between dots. Compare constant speed, acceleration and slowing-down motion using one or two virtual tapes.",
      "type": "Simulation",
      "tags": [
        "Motion",
        "Ticker timer",
        "Speed",
        "Acceleration",
        "Data analysis",
        "CSV export"
      ],
      "workingScientifically": [
        "Observing",
        "Conducting investigations",
        "Processing data and information",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "7.2",
          "relevance": "Supporting"
        },
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "10.3",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "interestingsims-koas",
      "title": "Touch Pad Synth Simulator",
      "path": "InterestingSims/KOAS/",
      "description": "Use an X–Y touch pad to control scale-quantised pitch and filter brightness. Explore keys, scales, octaves, timbre, delay and envelope release, then record and replay short performance loops.",
      "type": "Simulation",
      "tags": [
        "Sound",
        "Synthesiser",
        "Frequency",
        "Pitch",
        "Timbre",
        "Scales",
        "Audio technology",
        "Interactive media"
      ],
      "workingScientifically": [
        "Observing",
        "Processing data and information",
        "Problem-solving"
      ],
      "depthStudy": false,
      "mappings": [
        {
          "module": "10.3",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "physims-transwave",
      "title": "Transverse Wave Simulator",
      "path": "PhySims/TransWave/",
      "description": "Model a transverse wave by changing amplitude, wavelength, frequency and wave speed. Toggle labels and vectors to compare crests, troughs and particle motion.",
      "type": "Simulation",
      "tags": [
        "Waves",
        "Transverse waves",
        "Amplitude",
        "Wavelength",
        "Frequency"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Analysing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "10.3",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "invsci-vanh",
      "title": "Van Helmont Willow Tree Experiment Simulator",
      "path": "InvSci/VanH/",
      "description": "Recreate Van Helmont’s willow tree experiment, compare plant and soil mass changes, and evaluate how historical interpretations differed from modern explanations of plant growth.",
      "type": "Simulation",
      "tags": [
        "Van Helmont",
        "Willow tree experiment",
        "Historical science",
        "Observations",
        "Inferences",
        "Plant growth",
        "Mass balance",
        "Water"
      ],
      "workingScientifically": [
        "Observing",
        "Planning investigations",
        "Conducting investigations",
        "Analysing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.1",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "chemsims-molmod",
      "title": "Virtual Molecular Model Kit",
      "path": "ChemSims/MolMod/",
      "description": "Build, check and inspect common molecules using an interactive virtual molecular model kit. Add atoms, create bonds, rotate models freely or automatically, and compare clear space-filling three-dimensional structures.",
      "type": "Simulation",
      "tags": [
        "Molecular models",
        "Covalent bonding",
        "Molecular shape",
        "Space-filling model",
        "3D model",
        "Atoms",
        "Molymod"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Analysing data and information",
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.2",
          "relevance": "Supporting"
        },
        {
          "module": "9.3",
          "relevance": "Core"
        },
        {
          "module": "10.2",
          "relevance": "Supporting"
        }
      ]
    },
    {
      "id": "earthsims-watermanage",
      "title": "Water Management Simulator",
      "path": "EarthSims/WaterManage/",
      "description": "Manage a Sydney NSW-style water system week by week across multiple years. Balance reservoir storage, rainfall, demand, restrictions, recycling, environmental flow, flood risk, cost and long-term resilience.",
      "type": "Simulation",
      "tags": [
        "Water management",
        "Sydney",
        "Climate",
        "Drought",
        "Floods",
        "Catchments",
        "Reservoirs",
        "Sustainability"
      ],
      "workingScientifically": [
        "Problem-solving"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "9.4",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "biosims-darwin",
      "title": "Who Wants to Live a Million Years?",
      "path": "BioSims/Darwin/",
      "description": "Run the original Flash-based natural selection game using Ruffle. Students investigate variation, selection pressures, survival and how populations can change over long periods of time.",
      "type": "Archived activity",
      "tags": [
        "Evolution",
        "Natural selection",
        "Variation",
        "Selection pressure",
        "Adaptation",
        "Populations",
        "Flash",
        "Ruffle"
      ],
      "workingScientifically": [
        "Conducting investigations"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "9.4",
          "relevance": "Supporting"
        },
        {
          "module": "10.1",
          "relevance": "Core"
        }
      ]
    },
    {
      "id": "biosims-zombie",
      "title": "Zombie Outbreak Model",
      "path": "BioSims/Zombie/",
      "description": "Use a fictional outbreak model to explore how contact rate, infection rate, response rate, safe zones and removal affect the spread of an infection-like population system.",
      "type": "Simulation",
      "tags": [
        "Disease modelling",
        "Population model",
        "Outbreak",
        "Infection spread",
        "Compartment model",
        "Data"
      ],
      "workingScientifically": [
        "Observing",
        "Questioning and predicting",
        "Processing data and information"
      ],
      "depthStudy": true,
      "mappings": [
        {
          "module": "8.4",
          "relevance": "Core"
        },
        {
          "module": "9.2",
          "relevance": "Core"
        },
        {
          "module": "10.4",
          "relevance": "Core"
        }
      ]
    }
  ],
  "sharedTools": [
    {
      "id": "games-mysteryscienceword",
      "title": "Mystery Science Word",
      "path": "Games/MysteryScienceWord/",
      "description": "Guess hidden Years 7–10 science vocabulary using clues before the mystery meter fills. Choose individual modules, complete Year Review banks, or attempt the bright-pink Mega Mix containing words from every available module.",
      "type": "Game",
      "tags": [
        "Science vocabulary",
        "Years 7–10",
        "Brain break",
        "Word game",
        "Module revision",
        "Year review",
        "Mega Mix",
        "Definitions"
      ],
      "workingScientifically": [
        "Observing",
        "Communicating"
      ],
      "depthStudy": false,
      "mappings": []
    },
    {
      "id": "games-sciencewordmatch",
      "title": "Science Word Match",
      "path": "Games/ScienceWordMatch/",
      "description": "Match Years 7–10 science terms with their meanings or descriptions. Choose individual modules, Year Review banks or the Mega Mix, then play rounds of four, six or eight vocabulary pairs.",
      "type": "Game",
      "tags": [
        "Science vocabulary",
        "Years 7–10",
        "Matching game",
        "Brain break",
        "Module revision",
        "Year review",
        "Mega Mix",
        "Definitions"
      ],
      "workingScientifically": [
        "Observing",
        "Processing data and information",
        "Communicating"
      ],
      "depthStudy": false,
      "mappings": []
    },
    {
      "id": "games-scienceconnections",
      "title": "Science Connections",
      "path": "Games/ScienceConnections/",
      "description": "Sort 16 science terms into four connected groups of four. Choose individual modules, Year Review banks or the Mega Mix, then identify the scientific relationship linking each group.",
      "type": "Game",
      "tags": [
        "Science vocabulary",
        "Years 7–10",
        "Connections game",
        "Classification",
        "Concept relationships",
        "Module revision",
        "Year review",
        "Mega Mix"
      ],
      "workingScientifically": [
        "Observing",
        "Analysing data and information",
        "Communicating"
      ],
      "depthStudy": false,
      "mappings": []
    },
    {
      "id": "games-oddoneout",
      "title": "Science Odd One Out",
      "path": "Games/OddOneOut/",
      "description": "Choose the science term that does not belong with the other three, then review the shared connection and the meaning of every term. Includes module, Year Review and Mega Mix modes.",
      "type": "Game",
      "tags": [
        "Science vocabulary",
        "Years 7–10",
        "Odd one out",
        "Classification",
        "Scientific reasoning",
        "Module revision",
        "Year review",
        "Mega Mix"
      ],
      "workingScientifically": [
        "Observing",
        "Processing data and information",
        "Communicating"
      ],
      "depthStudy": false,
      "mappings": []
    },
    {
      "id": "games-chainreactions",
      "title": "Chain Reactions",
      "path": "Games/ChainReactions/",
      "description": "Use two connected science reasoning modes: arrange vocabulary into valid scientific sequences, or build the longest possible chain by linking terms through accepted scientific relationships.",
      "type": "Game",
      "tags": [
        "Science vocabulary",
        "Years 7–10",
        "Science sequence",
        "Chain reaction",
        "Systems thinking",
        "Cause and effect",
        "Module revision",
        "Year review"
      ],
      "workingScientifically": [
        "Observing",
        "Processing data and information",
        "Analysing data and information",
        "Problem-solving",
        "Communicating"
      ],
      "depthStudy": false,
      "mappings": []
    },
    {
      "id": "games-scienceweb",
      "title": "Science Web — Years 7–12",
      "path": "Games/ScienceWeb/",
      "description": "Build, explain and share interactive science concept maps using module banks from Years 7–10 and every Stage 6 science course. Add relationship labels, explanations and examples, then export or import editable JSON webs.",
      "type": "Game",
      "tags": [
        "Science Web",
        "Concept mapping",
        "Years 7–10",
        "Revision",
        "Scientific connections",
        "Systems thinking",
        "JSON sharing"
      ],
      "workingScientifically": [
        "Planning investigations",
        "Processing data and information",
        "Analysing data and information",
        "Problem-solving",
        "Communicating"
      ],
      "depthStudy": false,
      "mappings": []
    }
  ],
  "workingScientificallyToolkit": {
    "4": [
      {
        "id": "workingscientifically-variables",
        "title": "Experimental Variables Sorter",
        "path": "WorkingScientifically/Variables/",
        "description": "Identify independent variables, dependent variables, controlled variables and irrelevant factors using a drag-and-drop fair testing activity.",
        "type": "Activity",
        "tags": [
          "Variables",
          "Fair testing",
          "Drag and drop"
        ],
        "workingScientifically": [
          "Observing",
          "Planning investigations",
          "Conducting investigations",
          "Problem-solving"
        ],
        "depthStudy": false,
        "mappings": [
          {
            "module": "8.4",
            "relevance": "Supporting"
          },
          {
            "module": "10.4",
            "relevance": "Core"
          }
        ]
      },
      {
        "id": "invsci-fairtest",
        "title": "Fair Test Builder",
        "path": "InvSci/FairTest/",
        "description": "Build valid investigations by identifying independent, dependent and controlled variables across plant growth, pendulum motion, friction, reaction time and dissolving rate scenarios.",
        "type": "Activity",
        "tags": [
          "Fair testing",
          "Variables",
          "Validity",
          "Reliability",
          "Experimental design"
        ],
        "workingScientifically": [
          "Observing",
          "Planning investigations",
          "Conducting investigations",
          "Problem-solving"
        ],
        "depthStudy": true,
        "mappings": [
          {
            "module": "7.2",
            "relevance": "Supporting"
          },
          {
            "module": "7.4",
            "relevance": "Supporting"
          },
          {
            "module": "8.4",
            "relevance": "Supporting"
          },
          {
            "module": "10.4",
            "relevance": "Core"
          }
        ]
      },
      {
        "id": "interestingsims-lemstand",
        "title": "Lemonade Stand Lab",
        "path": "InterestingSims/LemStand/",
        "description": "Run a virtual lemonade stand and investigate how price, stock, advertising, weather and random variation affect sales and profit. Use controlled comparisons, repeated trials, graphs, CSV export and a CER scaffold to justify an evidence-based strategy.",
        "type": "Simulation",
        "tags": [
          "Data science",
          "Working scientifically",
          "Variables",
          "Fair testing",
          "Repeated trials",
          "Reliability",
          "Modelling",
          "Decision making"
        ],
        "workingScientifically": [
          "Questioning and predicting",
          "Planning investigations",
          "Conducting investigations",
          "Processing data and information",
          "Analysing data and information",
          "Problem-solving",
          "Communicating"
        ],
        "depthStudy": true,
        "mappings": [
          {
            "module": "8.4",
            "relevance": "Core"
          },
          {
            "module": "10.4",
            "relevance": "Core"
          }
        ]
      }
    ],
    "5": [
      {
        "id": "workingscientifically-variables",
        "title": "Experimental Variables Sorter",
        "path": "WorkingScientifically/Variables/",
        "description": "Identify independent variables, dependent variables, controlled variables and irrelevant factors using a drag-and-drop fair testing activity.",
        "type": "Activity",
        "tags": [
          "Variables",
          "Fair testing",
          "Drag and drop"
        ],
        "workingScientifically": [
          "Observing",
          "Planning investigations",
          "Conducting investigations",
          "Problem-solving"
        ],
        "depthStudy": false,
        "mappings": [
          {
            "module": "8.4",
            "relevance": "Supporting"
          },
          {
            "module": "10.4",
            "relevance": "Core"
          }
        ]
      },
      {
        "id": "invsci-fairtest",
        "title": "Fair Test Builder",
        "path": "InvSci/FairTest/",
        "description": "Build valid investigations by identifying independent, dependent and controlled variables across plant growth, pendulum motion, friction, reaction time and dissolving rate scenarios.",
        "type": "Activity",
        "tags": [
          "Fair testing",
          "Variables",
          "Validity",
          "Reliability",
          "Experimental design"
        ],
        "workingScientifically": [
          "Observing",
          "Planning investigations",
          "Conducting investigations",
          "Problem-solving"
        ],
        "depthStudy": true,
        "mappings": [
          {
            "module": "7.2",
            "relevance": "Supporting"
          },
          {
            "module": "7.4",
            "relevance": "Supporting"
          },
          {
            "module": "8.4",
            "relevance": "Supporting"
          },
          {
            "module": "10.4",
            "relevance": "Core"
          }
        ]
      },
      {
        "id": "invsci-var",
        "title": "Accuracy, Reliability and Validity Lab",
        "path": "InvSci/VAR/",
        "description": "Generate experimental datasets by adjusting sample size, equipment precision, random error, systematic error and controlled variables, then interpret graphs and data tables to judge accuracy, reliability and validity.",
        "type": "Simulation",
        "tags": [
          "Accuracy",
          "Reliability",
          "Validity",
          "Experimental design",
          "Data analysis",
          "Scientific investigations"
        ],
        "workingScientifically": [
          "Planning investigations",
          "Conducting investigations",
          "Processing data and information",
          "Analysing data and information",
          "Problem-solving"
        ],
        "depthStudy": true,
        "mappings": [
          {
            "module": "8.4",
            "relevance": "Supporting"
          },
          {
            "module": "10.4",
            "relevance": "Core"
          }
        ]
      },
      {
        "id": "interestingsims-lemstand",
        "title": "Lemonade Stand Lab",
        "path": "InterestingSims/LemStand/",
        "description": "Run a virtual lemonade stand and investigate how price, stock, advertising, weather and random variation affect sales and profit. Use controlled comparisons, repeated trials, graphs, CSV export and a CER scaffold to justify an evidence-based strategy.",
        "type": "Simulation",
        "tags": [
          "Data science",
          "Working scientifically",
          "Variables",
          "Fair testing",
          "Repeated trials",
          "Reliability",
          "Modelling",
          "Decision making"
        ],
        "workingScientifically": [
          "Questioning and predicting",
          "Planning investigations",
          "Conducting investigations",
          "Processing data and information",
          "Analysing data and information",
          "Problem-solving",
          "Communicating"
        ],
        "depthStudy": true,
        "mappings": [
          {
            "module": "8.4",
            "relevance": "Core"
          },
          {
            "module": "10.4",
            "relevance": "Core"
          }
        ]
      }
    ]
  },
  "workingScientificallyProcesses": [
    "Observing",
    "Questioning and predicting",
    "Planning investigations",
    "Conducting investigations",
    "Processing data and information",
    "Analysing data and information",
    "Problem-solving",
    "Communicating"
  ]
};
