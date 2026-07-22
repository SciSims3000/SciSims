# STEAM WEB ENGINE

A static Year 7 STEAM project-planning portfolio designed for GitHub Pages.

## Recommended repository location

Upload the complete `STEAMWeb` folder to:

```text
SciSims/Games/STEAMWeb/
```

The main page will then be:

```text
https://scisims3000.github.io/SciSims/Games/STEAMWeb/
```

The **Back to SciSims** link assumes this folder is located inside `Games/STEAMWeb/`.

## Files

- `index.html` — page structure and controls
- `styles.css` — responsive teal-and-sand interface and print styling
- `app.js` — phase content, autosave, JSON import/export, editable tables and print generation
- `steam-web-engine-preview.png` — development preview; not required for deployment

## Student workflow

1. Enter the shared project and group information.
2. Assign one or more roles to each group member.
3. Select any phase tab and complete the structured planning fields.
4. Update the phase status as work progresses.
5. Select **Save JSON** at the end of every session.
6. In a later session, open the site and select **Load JSON** to continue.
7. Use **Print** to create the complete portfolio, the current phase, selected phases, a concise summary or a blank planning workbook.

## Data behaviour

- The app stores one recovery copy in the current browser using `localStorage`.
- The downloaded JSON file is the portable shared project file.
- The app does not upload data to a server.
- One active project is stored in the browser at a time.
- **New project** replaces the browser recovery copy after a warning.
- There is intentionally no general clear button.

## External evidence

Large evidence such as photographs, sketches, diagrams and finished products should remain in the group’s Google Docs portfolio. Each phase includes fields for recording the evidence title, link and location.

## Version

Version 1.0.0
