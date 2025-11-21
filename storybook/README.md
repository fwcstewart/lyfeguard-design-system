# Storybook

This directory contains the configuration for [Storybook](https://storybook.js.org/), a development environment for building UI components in isolation.  Storybook allows you to visually test and document components without needing to run an entire application.

## Running Storybook

Install dependencies and launch Storybook locally:

```bash
npm install
npm run storybook
```

The Storybook UI will open in your browser at `http://localhost:6006`.  Use the sidebar to browse the available components and adjust their props interactively.  Stories live alongside their components in the `packages/components/src` directory with the `.stories.tsx` extension.

## Configuration

Storybook is configured in the `storybook` directory.  Key files include:

- `main.ts` – Defines how Storybook locates stories and which addons are enabled.
- `preview.ts` – Applies global decorators, CSS imports and parameters.
- `manager.ts` – (Optional) Customises the Storybook UI theme.

You can extend Storybook by adding addons or customising the manager theme to match the Lyfeguard brand.
