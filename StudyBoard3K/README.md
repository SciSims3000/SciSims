# StudyBoard3000 Core 0.4

StudyBoard3000 is a reusable static-site engine for collaborative knowledge boards across any faculty, course, project or professional-learning context.

## Folder structure

```text
StudyBoard3000/
├── index.html
├── app.js
├── styles.css
├── README.md
├── config/
│   ├── app.json
│   ├── boards.json
│   └── access.json
├── templates/
│   ├── y12-investigating-science.json
│   └── cross-faculty-demo.json
├── instances/
│   ├── 2027-12is1.json
│   └── demo-cross-faculty.json
└── schemas/
    ├── studyboard-template-1.0.schema.json
    ├── studyboard-instance-1.0.schema.json
    └── studyboard-access-1.0.schema.json
```

## Design model

- `templates/` contains reusable structures such as courses, projects, diaries, faculty boards or professional-learning boards.
- `instances/` contains the changing data for a particular class, group, year or implementation.
- `config/boards.json` connects each visible board to one template, one instance and one access profile.
- `config/access.json` provides centrally managed annual access profiles.

## Run locally

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

Do not open `index.html` directly because the browser must fetch the JSON files.

## Demo access

Investigating Science:
- Student: `investigate`
- Teacher: `studyboard`

Cross-faculty demo:
- Student: `contribute`
- Teacher: `studyboard`

## Direct board links

```text
?board=2027-12is1
?board=demo-cross-faculty
```

## Static-site security

The access profiles are suitable for lightweight classroom control only. Public static sites cannot provide secure authentication because the browser receives the verification logic and hashes.
