# Storybook

This directory contains the configuration for [Storybook](https://storybook.js.org/), a development environment for building UI components in isolation. Storybook allows you to visually test and document components without needing to run an entire application.

## Running Storybook

Install dependencies and launch Storybook locally:

```bash
npm install
npm run storybook
```

The Storybook UI will open in your browser at `http://localhost:6006`. Use the sidebar to browse the available components and adjust their props interactively. Stories live alongside their components in the `packages/components/src` directory with the `.stories.tsx` extension.

## Directory Structure

- `main.ts` – Locates stories and registers addons.
- `preview.ts` – Applies global decorators, CSS imports, layout controls, and toolbar globals.
- `manager.ts` – Customises the Storybook UI chrome.
- `theme.ts` – Shared theme tokens for both the manager and docs surfaces.
- `docs/` – MDX content that introduces the design system foundations, layout patterns, and component guidance.

## GitHub Pages deployment

Storybook is published automatically to GitHub Pages from the `main` branch. The workflow builds static assets with a repository-scoped base path so the UI loads correctly under `https://<org>.github.io/lyfeguard-design-system/`.

1. Enable GitHub Pages for the repository and choose **GitHub Actions** as the source.
2. Push to `main` (or manually dispatch) to trigger the **Deploy Storybook to GitHub Pages** workflow.
3. The workflow runs `npm run storybook:build -- --quiet`, uploads `storybook-static` as a Pages artifact, and deploys it to the Pages environment.
4. If you host the site under a custom domain, update `STORYBOOK_BASE_PATH` in `.github/workflows/storybook-pages.yml` to match your desired base path.

## UI & Theming

Storybook is themed with Lyfeguard tokens so the manager, docs, and preview iframe share the same colours, fonts, and spacings. Use the toolbar toggle to switch between **light** and **dark** themes; the preview backgrounds menu offers canvas, surface, and brand-aligned backdrops for quickly testing contrast.

## Docs Content

The `docs/` folder complements component stories with higher-level guidance:

- **Welcome** – Quickstart links and an overview of the Lyfeguard design language.
- **Foundations** – Accessibility, typography, and colour principles.
- **Components** – Usage advice for common UI elements.
- **Layout** – How spacing, grid, and container primitives work together.
- **Technical Patterns** – Implementation tips for themes, tokens, and responsive props.

Extend these MDX files as new components or patterns are added so Storybook remains a complete reference for designers and engineers.
