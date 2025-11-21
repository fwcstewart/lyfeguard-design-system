# Applications

The `apps` directory contains runnable applications that demonstrate and consume the design system.

## Docs

The `apps/docs` package is a [Docusaurus](https://docusaurus.io/) site that hosts the design system documentation.  The documentation is divided into sections such as Foundations, Tokens, Components, Patterns, Development and Governance.  It is the primary reference for designers and developers using the Lyfeguard design system.

To run the docs locally:

```bash
npm install
npm run dev --workspace=apps/docs
```

## Playground

The `apps/playground` package is a minimal [Vite](https://vitejs.dev/) + React application used as a sandbox for testing and experimenting with components.  Use it to prototype real layouts and interactions outside of Storybook.

To run the playground locally:

```bash
npm install
npm run dev --workspace=apps/playground
```
