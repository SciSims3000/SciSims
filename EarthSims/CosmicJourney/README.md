# SciSims · Cosmic Journey

Version 1.8 · 17 October 2026

An interactive, animated explanation of cosmic history, from uncertain earliest conditions to the present Universe. Designed for classroom exploration and teacher-led presentation.

## Open the resource

Open `index.html` in a modern browser. The resource is a single standalone HTML file with no installation, build step, external libraries, or internet connection required. Scientific source links require internet access.

## Features and controls

- Ten milestones, with explanations, evidence, uncertainties, temperatures, and questions.
- Begin journey, automatic playback, previous/next, and individual milestone selection.
- Pause animation suspends both animation and any active journey; resume restores the prior playback state.
- Logarithmic and linear timelines, labelled in years; the slider snaps to representative milestone times.
- Full screen and Focus view. Escape exits full screen; browser restrictions may require opening the HTML outside an embedded browser.
- Optional scientific labels, colour legends, and an expansion grid.
- Expandable evidence badges and a teacher guide.
- Reduced motion follows the operating system preference and can be selected manually. It removes the opening flare and moving scene effects while preserving milestone playback.
- Arrow keys navigate when the simulator panel has focus; form controls retain their normal keyboard behavior.

## Scientific scope

The animations are schematic teaching illustrations, not a quantitative reconstruction. Blackness represents unknown origins, not evidence that the Universe began from nothing. The opening flare is an artistic transition. Expansion occurs throughout space rather than as an explosion into a surrounding void. Inflation, its mechanism, and the earliest timing remain uncertain.

The separate expansion readout integrates a simplified flat Friedmann model with matter fraction 0.315, radiation fraction 0.000092, and the remaining fraction in a cosmological constant. Its age is calibrated to 13.8 billion years. From the neutral-atom era onward, it reports relative distance scale `a` and volume `a³` for a fixed comoving patch, with today set to 1. These values do not specify the total Universe's size, the observable horizon, or expansion of gravitationally bound systems. They do not drive the animations.

Milestone dates represent broad eras. Colours, particle paths, apparent sizes, and animation durations are illustrative. The nuclei sample shows an approximate primordial 75% hydrogen / 25% helium mixture by mass, omitting trace isotopes. The first stars end the cosmic dark ages; reionisation continues afterward. Existing radiation becomes largely free-streaming near recombination and is observed today as the cosmic microwave background.

## Scientific references

- [NASA · Universe overview](https://science.nasa.gov/universe/overview/)
- [NASA · Early Universe](https://science.nasa.gov/mission/webb/early-universe/)
- [NASA · Primordial helium](https://cosmicopia.gsfc.nasa.gov/ed-acecosmo.html)
- [NASA · Big Bang and the evolution of the Universe](https://science.nasa.gov/astrophysics/programs/physics-of-the-cosmos/big-bang-and-the-evolution-of-the-universe/)
- [NASA · First stars](https://science.nasa.gov/mission/webb/science-overview/science-explainers/what-were-the-first-stars-like/)
- [ESA · Planck science highlights](https://www.esa.int/Science_Exploration/Space_Science/Planck/Planck_science_highlights)

## Validation

JavaScript syntax, scene execution paths, navigation, playback, pause/resume, reduced motion, quiz interactions, timeline mappings, expansion-model checks, presentation controls, and fullscreen success/fallback logic passed simulated DOM and canvas checks. Native fullscreen and the complete v1.8 visual presentation have not been independently browser-verified. The resource is a teaching prototype.
