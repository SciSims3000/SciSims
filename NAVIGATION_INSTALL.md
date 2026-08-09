# SciSims stage-index and navigation update

Upload the contents of this folder to the root of the SciSims repository while preserving the `shared` folder.

## Included

- Updated `index.html` with the shared sticky menu and the redundant Stage 6 promotional panel removed.
- `Stage4index.html` using the confirmed 7.1–8.4 teaching sequence.
- `Stage5index.html` using the confirmed 9.1–10.4 teaching sequence.
- `Stage6index.html`, converted from the supplied HSC curriculum index and retaining the Year 11/Year 12 course filters.
- `TeacherToolsindex.html` containing the six current TeacherSims tools found in the supplied repository tree.
- `Moreindex.html` linking to broader catalogue collections.
- Shared navigation CSS and JavaScript in `shared/`.
- Temporary `HSCindex.html` redirect so old bookmarks continue to work. Delete this file later when the old HSC address is no longer required.

## Global menu

`SciSims | Stage 4 | Stage 5 | Stage 6 | Teacher Tools | More`

The menu lists only the major indexes. Individual simulations remain in their original folders and may be linked from multiple curriculum indexes.

## Adding the menu to another root-level page

Place these lines in `<head>`:

```html
<link rel="stylesheet" href="shared/scisims-nav.css">
<script defer src="shared/scisims-nav.js"></script>
```

Place this immediately after `<body>`:

```html
<div id="scisimsSiteNav"></div>
```

For a simulation page two folders below the repository root, use `../../shared/` in the two asset paths. The JavaScript derives the site root from its own file location, so the navigation links still point to the correct index pages.

## Current scope

The Stage 4 and Stage 5 pages establish the confirmed module sequence and section structure. Mapping individual resources into 7.1–10.4 is the next content pass.
