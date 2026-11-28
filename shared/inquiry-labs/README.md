# SciSims inquiry labs — 1.0.0

Four standalone browser investigations, added 28/11/2026:

- `BioSims/MicroscopeMeasurement/`: calibrated field of view, specimen estimates, mm/µm conversion and a separate resolution experiment.
- `ChemSims/SeparationChallenge/`: four recoverable-mixture missions with independent fractions, mass tracking and undo.
- `PhySims/HeatTransferHouse/`: constant-condition thermal model, baseline comparison and recorded time series.
- `WorkingScientifically/SamplingBias/`: known populations, three selection methods and repeated-sampling distributions.

Each folder contains `index.html`, `app.js` and `teacher-guide.html`. Shared presentation, browser persistence and pure models are in `shared/inquiry-labs/`. The main catalogue, Stage 4/5 mapping, More index and teacher-guide directory link the new resources.

## Verification

Run `node tests/inquiry-labs.test.cjs` from the repository. Tests cover optics calibration, heat-flow direction and equilibrium, separation mass conservation, sampling uniqueness and census results, control bindings, unit conversion, JSON backup restoration, mission completion/undo and CSV shape. The DOM contract harness does not replace browser visual testing.

## Data and limits

No backend or student account is required. Browser storage is local. JSON imports validate lab identity and state before replacing data. CSV exports contain recorded results; print includes investigation notes. Sampling CSV contains the population truth even when it is hidden on screen.

The interfaces and teacher guides describe each model's assumptions and link to Nikon MicroscopyU, Royal Society of Chemistry, Australian Government Your Home and Australian Bureau of Statistics sources. These are teaching models, not practical risk assessments, building ratings or full optical simulations.
