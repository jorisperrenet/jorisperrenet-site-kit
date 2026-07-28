# Joris Perrenet Site Kit

The shared Svelte and Tailwind shell for projects published on [`jorisperrenet.com`](https://jorisperrenet.com).

NOTE: A lot of this is AI generated, it was created to help me with my website.

## Sync existing projects

```sh
npm run sync -- ../practice-math ../pet-detective/web
```

The command copies the versioned components into `src/lib/site-kit` and the
shared logo/favicon into `static`. Projects remain self-contained and deploy
independently.

## Create a project

```sh
npm run create -- ../my-new-project
cd ../my-new-project
npm install
npm run dev
```

## Design boundary

`SiteShell` owns the global navigation, theme, canvas, and footer. A project owns
the workspace rendered inside it. Specialized app interfaces may use their own
colors inside that workspace.

VectorMation is intentionally excluded because its documentation uses Sphinx.

## Shared navigation

`SiteHeader` and `SiteShell` include the global Projects, Blog and About links
plus a responsive project drawer. Set `projectName` for the drawer heading and
`currentProjectId` to highlight the active entry. The IDs are defined in
`components/projects.ts`.

The canonical project list matches the cards on
`jorisperrenet.com/projects/`. Update both lists together when selected work
changes.
