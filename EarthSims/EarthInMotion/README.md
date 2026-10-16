# Earth in Motion · SciSims

Version 2.1.0 — Year 7, Stage 4 Science, Module 7.1 Observing the Universe.

Open `index.html` directly in a modern browser. The simulation is a single self-contained file and needs no server, network, build step or libraries. The embedded Teacher guide explains lesson sequencing, scientific assumptions and assessment.

The title-banner appearance switch offers light and dark modes. It follows the device preference initially and saves explicit choices separately from student work. Both modes work offline and printing uses light surfaces.

Three investigation tabs cover daily rotation and apparent solar motion, seasons, and conceptual predictions. The notebook keeps a separate local draft for each of five investigations and exports observations as UTF-8 CSV. Browser storage is local to the current browser/origin; export before clearing data, changing devices or switching between the offline and hosted versions.

## Release verification

The application itself has no dependencies. The optional automated test runner requires Node.js and Playwright:

```sh
npm install --no-save playwright
npx playwright install chromium
node tests/verify.cjs
node tests/theme.cjs
```

You can pass another file/HTTP URL as the first argument. `CHROME_PATH` can select an installed Chrome executable; `PLAYWRIGHT_MODULE` can select an installed Playwright package. Tests use an isolated temporary browser context with synthetic notes. They do not open the user's existing browser profile or clear its storage. Reports and screenshots are written to the system temporary directory.

See `acceptance-report.md` for the tested release scope and limitations.
