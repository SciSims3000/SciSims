# SciSims 3000 — Interactive Periodic Table

**Version 1.3 · classroom beta · 25 October 2026**

Open [SciSims-3000-Periodic-Table-v1.2.html](SciSims-3000-Periodic-Table-v1.2.html) in a modern browser. Download the HTML file to use it offline; no installation, account, external libraries, fonts or network data are required. Reference links require internet access. This versioned HTML is the canonical simulator in this folder.

## Element pop-up navigation

Each information section can be expanded or collapsed independently. Electron shells start open; the remaining sections start collapsed. Expand all / Collapse all controls offer quick navigation, and section choices are retained while browsing elements during the session. Native disclosure controls support keyboard access.

## Version 1.3 changes

- Light and dark appearance selector; follows the system preference initially and remembers the selected theme when browser storage is available.
- Visible neutral-atom electron shell diagram near the top of every element pop-up, with shell populations, outermost-shell highlighting and accessible text.
- All 118 shell populations derived from [PubChem electron configurations](https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON), retrieved 25 October 2026. Predicted configurations retain their source label. Exceptions such as chromium and copper use the supplied configurations rather than a simple filling rule.
- First-20 prediction/ion activities retain their existing introductory scope. The versioned HTML filename is retained to preserve all existing links.

## Features

- All 118 elements: identity, relative atomic weights or isotope mass-number labels, groups/periods, classification, discovery milestones, etymology, alternative names and applications.
- State at 0, 25 and 100 °C at 1 atm, with uncertain bulk properties labelled honestly.
- Teacher and Student modes; identity reveal/hide controls; classroom display and fit-whole-table option.
- Name/symbol/atomic-number/historical-name search; classification, state, period, group and family filters.
- First 20 view with a labelled gap for omitted groups 3–12; full details open when a tile is selected.
- Neutral-atom electron-shell diagrams, occupied-shell and outer-electron pattern colouring, predict/reveal and guided investigations.
- Side-by-side comparison of two elements.
- Interactive first-ionisation-energy graph with keyboard-selectable points, eV and kJ mol⁻¹ units, uncertainties, theoretical/estimated flags and separate CSV export.
- Ten selected ion-formation examples showing unchanged proton counts and changes in electron number.
- Element-data CSV export and an expandable version history.

## Quick start

1. Select **First 20 elements** for introductory shell patterns, or retain **All 118 elements**.
2. Change **Colour by** to occupied shells or outer-shell electrons. Select a tile for full information; the shell explorer also follows that selection. Use its Previous/Next buttons to step through atoms without opening a dialog.
3. Select **Compare elements**, **Ionisation graph** or **Form ions** to open the corresponding workspace below the table.
4. For projection, try **Classroom display**, then **Fit whole table**. Fit prioritises the whole table and hides masses; exit fit for larger text and full information. Visibility controls support recall, not secure assessment.
5. Export element data or graph data as needed. Element export always contains all 118 elements; graph export follows its selected range and records whether each value is plotted.

## Three short classroom activities

### 1. Discover a shell pattern

Use First 20 and colour by occupied shells. Compare lithium, sodium and potassium, then switch to outer-shell electrons. Ask what stays constant down group 1 and what changes. Compare helium, neon and argon to explain helium's full two-electron first shell.

### 2. Explain exceptions in a graph

Open the ionisation graph and choose First 20. Predict the overall pattern across a period, then compare Be/B and N/O. Use selected-point values as evidence. Discuss why the general trend is not a strict rule, and why a precise theoretical value is not automatically poor-quality data: NIST flags hydrogen's value as theoretical.

### 3. Account for electron transfer

Open Form ions and choose sodium, magnesium, oxygen or chlorine. Predict the ion's shell arrangement before revealing it. Check that electron number changes while proton number stays constant. Explain that this diagram does not establish whether a reaction is energetically favourable.

## Scientific scope and limitations

- Shell diagrams cover neutral ground-state atoms of the first 20 elements. Rings are schematic energy levels, not fixed electron paths, and are not to scale. The third shell can hold more than eight electrons in later elements.
- Ion examples illustrate selected common monatomic ions. They do not model bonding, a complete chemical reaction, energetics or ionic radii. Isolated atoms do not simply lose electrons spontaneously to obtain a full shell.
- States assume equilibrium at 1 atm, without supercooling or reaction with the surroundings. Phosphorus is represented by **white phosphorus**; red and black phosphorus remain solid at 100 °C. Astatine, francium and elements 100–118 are conservatively labelled Unknown for bulk state.
- Abridged standard atomic weights include uncertainties in element details. Square-bracketed integers identify selected isotopes and are not average relative atomic masses. Natural isotopic composition can vary.
- The 15-element detached rows have no individual group assignment in this layout; Group 3 filtering selects Sc and Y. Metalloid boundaries vary between references. Predicted family relationships do not establish bulk physical properties.
- Discovery entries summarise recognition, isolation, publication and validation milestones, which can differ between sources. They are educational summaries, not exhaustive histories.
- NIST supplies 108 neutral-atom first-ionisation energies in this extract: 98 unbracketed evaluated values, 3 theoretical values and 7 estimates. Elements 109–118 have no value supplied here. Status follows NIST notation, not an invented confidence score. Blank uncertainty means not supplied, not zero. The graph displays uncertainty in its readout/export, not as error bars.
- Graph conversion uses 1 eV per atom = 96.48533212331002 kJ mol⁻¹ from exact SI constants; displayed conversions are rounded, while the CSV retains the source eV strings.

## References and attribution

The simulator contains original educational summaries and factual data, not copies of source-page narratives or artwork. Sources were checked during preparation on 17 October 2026:

- [IUPAC periodic table](https://iupac.org/what-we-do/periodic-table-of-elements/): names, symbols, layout and selected isotope labels (2022 convention; technetium [97] follows NIST 2024).
- [CIAAW abridged standard atomic weights 2024](https://ciaaw.org/abridged-atomic-weights.htm): 84 standard atomic weights and stated uncertainties.
- [Royal Society of Chemistry periodic table](https://periodic-table.rsc.org/): element references for history, naming, applications, electron configurations and transition temperatures. Each element links to its RSC page.
- [NIST periodic table](https://www.nist.gov/pml/periodic-table-elements) and [2024 reference sheet](https://www.nist.gov/system/files/documents/2024/06/25/NIST_periodictable_June24_iupac.pdf): independent identity and isotope-label checks.
- [NIST Atomic Spectra Database ionisation energies](https://physics.nist.gov/PhysRefData/ASD/ionEnergy.html), [notation guide](https://physics.nist.gov/PhysRefData/ASD/Html/iehelp.html) and [neutral-atom CSV query](https://physics.nist.gov/cgi-bin/ASD/ie.pl?spectra=H-Og%20I&units=1&format=2&order=0&at_num_out=on&ion_charge_out=on&e_out=0&unc_out=on&biblio=on): energy values, uncertainties and reference identifiers. NIST reference IDs are preserved in graph CSV exports.
- [Scottish Qualifications Authority chemistry data booklet](https://www.sqa.org.uk/files/nq/chemdata_h_ah.pdf), electron-arrangement table: cross-check for the first 20 shell populations; SQA is acknowledged as the source of that reference table.
- [RSC Education: ion formation](https://edu.rsc.org/lesson-plans/how-do-atoms-form-the-ions-in-ionic-compounds-16-18-years/111.article): educational cautions concerning electron transfer and energetics.
- [PubChem periodic table](https://pubchem.ncbi.nlm.nih.gov/periodic-table/): initial identity index, subsequently checked and curated against the sources above.

No repository-wide licence was present when this folder was added. This addition assigns no new licence to the repository or third-party materials. Source links and attribution do not replace the publishers' applicable terms. No third-party artwork or downloaded reference pages are included in this folder.

## Validation and remaining review

Automated browser checks passed for all 118 detail panels, search/filters, temperature changes, identity controls, Teacher/Student modes, classroom layout, First 20 selection, shell diagrams, comparison, graph interaction/units/CSV, mobile containment and offline operation. Every first-20 shell population was cross-checked against orbital configurations. All ten ion examples passed electron/proton accounting checks. Full-table fit was checked at 1280 × 720. CSV checks preserve NIST values, uncertainty strings and flags.

These checks do not replace independent scientific or accessibility review. Before treating this as a fully reviewed release:

- [ ] Obtain an independent chemistry-teacher review of historical and scientific explanations.
- [ ] Trial readability on a real projector from the back of a classroom.
- [ ] Observe a short student usability trial.
- [ ] Complete screen-reader, contrast and 200% zoom accessibility checks.

Only the canonical HTML and this README belong to this release folder. Temporary scripts, downloaded references, screenshots and earlier experimental versions are excluded.
