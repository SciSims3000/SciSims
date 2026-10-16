# Simulation index audit — 17 October 2026

Audited SciSims3000/SciSims from main at fe6ec149c612fffac62e98377a4c47b7f6869eca.

All 181 activity directories containing a primary index.html now appear in the main catalogue (189 cards; some activities intentionally appear in multiple collections). All catalogue paths resolve locally.

Added 10 missing main-catalogue entries: Earth in Motion; Combination Circuits and Kirchhoff’s Laws; Work–Energy Theorem; Biology, Chemistry, Earth and Environmental Science, Investigating Science, Physics and Science Extension Jeopardy; Practice Exam Builder.

Added the two physics activities to the shared Stage 4/5 data as supporting resources and to Stage 6 Physics Year 11 (Electricity and Magnetism / Dynamics). Earth in Motion was already present in the shared Stage 4/5 data. Subject Jeopardy games were already mapped in Stage 6. Practice Exam Builder already had a dedicated Stage 6 link.

Added Presentation Player and Practice Exam Builder to Teacher Tools. More remains a collection gateway; HSC remains a Stage 6 redirect. Curriculum indexes retain their subject/stage scope rather than listing every activity indiscriminately.

Alternate files ChemicalReactionReactor/index1.html, SolarSystemShowdown/offline.html and PhySims/MagForce.html are not separate primary activities; their primary activity directories are indexed.

Validation: tools/verify-index-coverage.mjs passes for 181 activity entry points, 121 shared junior resources, 138 senior resources and Teacher Tools coverage. git diff --check passes. This audit verifies catalogue coverage and local targets, not every simulation’s behaviour or deployed-site availability.
