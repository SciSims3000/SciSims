# SciSims Stage Navigation and Curriculum Mapping

## Files to place in the repository root

- `index.html`
- `Stage4index.html`
- `Stage5index.html`
- `Stage6index.html`
- `TeacherToolsindex.html`
- `Moreindex.html`
- `HSCindex.html` — temporary redirect only
- `shared/scisims-nav.css`
- `shared/scisims-nav.js`
- `shared/scisims-index-pages.css`
- `shared/stage45-data.js`
- `shared/stage45-index.js`

Keep the existing image files, favicon, simulation folders and worksheet folders in their current locations.

## Navigation

The shared sticky menu contains:

**SciSims | Stage 4 | Stage 5 | Stage 6 | Teacher Tools | More**

The menu is generated from the two shared navigation files. Future menu changes therefore need to be made only once.

## Stage 4 and Stage 5 mapping

The two junior indexes now share one mapping database:

`shared/stage45-data.js`

The renderer:

`shared/stage45-index.js`

uses that database to generate:

- the confirmed 7.1–10.4 teaching sequence
- focus-area counts
- Core and Supporting curriculum links
- resource-type filters
- Working scientifically filters
- depth-study filtering
- repeated appearances of shared simulations without duplicating the actual simulation files
- module revision and concept-mapping tools
- a Working scientifically toolkit

To update a mapping, edit the resource or its `mappings` entries in `stage45-data.js`. Both Stage 4 and Stage 5 pages update automatically.

## Temporary HSC redirect

`HSCindex.html` redirects old links to `Stage6index.html`. It is deliberately temporary and can be removed after old bookmarks and internal links have been migrated.

## Audit

See `STAGE45_MAPPING_AUDIT.md` for the complete module-by-module mapping summary and current catalogue gaps.


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
