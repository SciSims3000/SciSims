# Simulation index audit — 17 October 2026

Audited SciSims3000/SciSims from main at fe6ec149c612fffac62e98377a4c47b7f6869eca.

All 181 activity directories containing a primary index.html now appear in the main catalogue (189 cards; some activities intentionally appear in multiple collections). All catalogue paths resolve locally.

Added 10 missing main-catalogue entries: Earth in Motion; Combination Circuits and Kirchhoff’s Laws; Work–Energy Theorem; Biology, Chemistry, Earth and Environmental Science, Investigating Science, Physics and Science Extension Jeopardy; Practice Exam Builder.

Added the two physics activities to the shared Stage 4/5 data as supporting resources and to Stage 6 Physics Year 11 (Electricity and Magnetism / Dynamics). Earth in Motion was already present in the shared Stage 4/5 data. Subject Jeopardy games were already mapped in Stage 6. Practice Exam Builder already had a dedicated Stage 6 link.

Added Presentation Player and Practice Exam Builder to Teacher Tools. More remains a collection gateway; HSC remains a Stage 6 redirect. Curriculum indexes retain their subject/stage scope rather than listing every activity indiscriminately.

Alternate files ChemicalReactionReactor/index1.html, SolarSystemShowdown/offline.html and PhySims/MagForce.html are not separate primary activities; their primary activity directories are indexed.

Validation: tools/verify-index-coverage.mjs passes for 181 activity entry points, 121 shared junior resources, 138 senior resources and Teacher Tools coverage. git diff --check passes. This audit verifies catalogue coverage and local targets, not every simulation’s behaviour or deployed-site availability.

## Follow-up audit — 25 October 2026

Base: `a098bc4ad50a0695304c7f23b697d3cac23d79c2` (current main).

Inventory: 182 folder-based activity entry points plus the named Interactive Periodic Table HTML page, for **183 distinct activities and 191 main catalogue cards**. See `INDEX_INVENTORY.tsv` for every entry point, main subject/collection and Stage 4/5/6 placement. The main page's subject sections are the subject indexes; More is a collection gateway, Teacher Tools is a dedicated index, and HSC redirects to Stage 6.

Exact corrections:

- `index.html`: add Interactive Periodic Table v1.2 under Chemistry → Elements and Atomic Structure, linking directly to `ChemSims/PeriodicTable/SciSims-3000-Periodic-Table-v1.2.html`. All 182 folder-based activities were already listed.
- `shared/stage45-data.js`: add Interactive Periodic Table to Stage 4 module 8.2 (Core) and Stage 5 module 9.3 (Supporting); add Science Formula Deconstructor to Stage 5 modules 9.1 and 10.3 (Supporting). Stage 4 and 5 pages already load this shared data.
- `Stage6index.html`: add Interactive Periodic Table and Ion Formation to Year 11 Chemistry Module 1; Chemical Equation Balancer and Avogadro’s Law to Year 11 Chemistry Module 2; Earth in Motion and Solar System Model Showdown to Year 11 Investigating Science Module 3. All six are Supporting resources with descriptions and mapping notes. Science Formula Deconstructor already has a dedicated Stage 6 panel.
- `tools/verify-index-coverage.mjs`: discover named HTML activity pages, resolve direct HTML links, validate the complete dynamically extended Stage 6 catalogue, and check static links/assets and cross-page fragments in all seven index/gateway pages.

No broken local index targets or unintended same-collection duplicates were found. Eight intentional cross-listings remain: Drift, Doppler, Marshall and Warren, Science Word Match, Mystery Science Word, Science Odd One Out, Science Connections and Chain Reaction. They serve distinct subject or classroom collections.

Excluded alternate entry files: `ChemSims/ChemicalReactionReactor/index1.html`, `EarthSims/SolarSystemShowdown/offline.html`, and `PhySims/MagForce.html`; each has an indexed primary activity. Senior specialist physics resources remain scoped to Stage 6; games and teacher utilities retain their appropriate collections rather than being forced into curriculum modules. Avogadro’s amount-of-substance gas model is placed in Stage 6.

Validation passed: 183 activity entry points, 124 shared junior resources, 146 senior resources (including the runtime-added Science Web), Teacher Tools coverage, duplicate/path checks, all index static local links/assets and cross-page fragments, and `git diff --check`. Styles, layout markup and navigation were not changed. Validation checks repository targets and catalogue data, not all simulation behaviour, external services or live deployed HTTP availability.

## Animation Lab publication — 25 October 2026

Imported the latest Animation Lab package from the 17 October output folder, last updated 18 October 2026 at 11:08 am; its 11:09 am ZIP contains the identical player. Includes 221 animations, the ready-made MP4 catalogue, Year 7 topic guides, visual review examples and local export helper. Source files on the Mac were left unchanged.

Added Animation Lab immediately after Periodic Table in Featured Learning Tools; retained Cosmic Journey, Formula Deconstructor and Drift. Added a searchable main-catalogue entry under Working Scientifically, Stage 4 mappings for modules 7.1–7.4 and supporting Year 12 Stage 6 mappings for the five represented courses, modules 5–8.

Website integration adds shared navigation to the player and explains that custom MP4 rendering needs the local helper; hosted users can play animations and use the existing downloadable MP4s. Auxiliary HTML catalogues/guides are validated as supporting pages rather than counted as independent simulations.

Checks: all 221 registry entries match library metadata, all catalogue video targets exist, the final top-down Jupiter correction is present, local index validation covers 184 activities / 125 junior / 147 senior resources, JavaScript syntax checks and git diff --check pass.


## Latest ten distinct sims and featured styling — 25 October 2026

Checked 25 October 2026 against `main` at `c6d82e2e7e0a21c522c6e3b7bdf166c0eaec2f4e`.

Scope: the ten distinct interactive pages most recently changed, counting repeat commits to a page once. This includes classroom tools and Animation Lab; individual MP4 files and supporting guides are not counted as separate sims.

| Sim/tool | Standard menu before | Correction | Appropriate index coverage after changes |
| --- | --- | --- | --- |
| Interactive Periodic Table | Missing | Added shared menu | Main Chemistry; featured; Stage 4 8.2; Stage 5 9.3; Stage 6 Chemistry Year 11 Module 1 |
| Animation Lab | Missing | Added shared menu; added Teacher Tools listing and matching main collection entry | Main Working Scientifically and Teacher Tools; featured; Stage 4 7.1–7.4; Stage 6 Year 12 Modules 5–8 across its five represented courses |
| Drift | Present | None needed | Main Brain Breaks and Teacher Tools; featured; Teacher Tools page; More via Brain Breaks gateway |
| Cosmic Journey | Missing | Added shared menu | Main Earth & Space; featured; Stage 4 7.1/8.4; Stage 5 10.4; Stage 6 Physics Year 12 Module 8 and Investigating Science Year 11 Module 3 / Year 12 Module 7 |
| Earth in Motion | Missing | Added shared menu; adjusted self-check to allow bundled navigation files | Main Earth & Space; Stage 4 7.1; Stage 6 Investigating Science Year 11 Module 3 |
| Solar System Model Showdown | Present | None needed | Main Earth & Space; Stage 4 7.1; Stage 6 Investigating Science Year 11 Module 3 |
| Presentation Player | Missing | Added shared menu | Main Teacher Tools collection; Teacher Tools page |
| Seating Plan Maker | Present | None needed | Main Teacher Tools collection; Teacher Tools page |
| Science Letters | Present | None needed | Main Brain Breaks collection; Teacher Tools page; More direct link |
| Target Reactor | Present | None needed | Main Brain Breaks collection; Teacher Tools page; More direct link |

The main catalogue's subject sections serve as subject indexes. Stage 4/5 share curriculum data; HSC redirects to Stage 6. More is a collection gateway. Classroom utilities have not been forced into unrelated curriculum modules.

The five new menus use the existing shared menu, including Home, Stage 4, Stage 5, Stage 6, Teacher Tools and More, mobile toggle and Escape/outside-click closing. Fixed menu mounts use the standard content offset. All ten pages now have exactly one menu mount and valid shared CSS/JavaScript paths.

Featured Learning Tools now has a bright yellow-to-apricot background, stronger amber border and pale-yellow cards. Changes are scoped to this section; the same sims' normal catalogue cards keep their existing styling.

Validation passed: inline JavaScript parses in all seven changed pages; actual shared-menu code passes open/Escape/outside-click and route checks for all ten sim paths; all 193 main, 125 junior and 147 senior resource paths resolve in the repository tree, without unintended same-collection duplicates; expected curriculum, Teacher Tools and More mappings pass. The additional Animation Lab cross-listing is intentional. No sim models or calculations were changed.

Limits: browser visual layout, mobile rendering, full simulation behaviour and live deployment were not tested. Menu behaviour was exercised in a lightweight DOM harness; path checks use repository targets, not deployed HTTP responses.
