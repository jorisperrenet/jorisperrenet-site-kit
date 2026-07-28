# Joris Perrenet Site Kit

The shared Svelte and Tailwind shell for projects published on [`jorisperrenet.com`](https://jorisperrenet.com).

NOTE: A lot of this is AI generated, it was created to help me with my website.

## Sync existing projects

```sh
npm run sync -- ../practice-math ../pet-detective/web
```

The command copies the versioned source into `src/lib/site-kit`. Projects remain
self-contained and deploy independently.

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
