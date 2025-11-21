---
id: development-overview
title: Development
description: How to install, build and contribute to the Lyfeguard design system.
---

# Development

This section provides guidance for engineers integrating the Lyfeguard design system into their projects or contributing back to the library.

## Installation

### Install the packages

The design system is published as scoped packages:

- `@lyfeguard/tokens` – Compiled design tokens as CSS variables and TS constants.
- `@lyfeguard/design-system` – React components styled with Vanilla Extract.
- `@lyfeguard/icons` – Icon components.
- `@lyfeguard/utils` – Utility functions (e.g. currency/Date formatting).

Install them via your package manager:

```bash
npm install @lyfeguard/tokens @lyfeguard/design-system @lyfeguard/icons @lyfeguard/utils
# or
yarn add @lyfeguard/tokens @lyfeguard/design-system @lyfeguard/icons @lyfeguard/utils
```

### Include the CSS variables

Import the compiled tokens CSS file once at the root of your application so CSS variables are available:

```ts
// e.g. src/main.tsx
import '@lyfeguard/tokens/dist/css/tokens.css';
```

Then import components as needed:

```tsx
import { Button, Input, Card } from '@lyfeguard/design-system';

function Example() {
  return (
    <Card>
      <Input label="Name" placeholder="Enter your name" />
      <Button variant="primary">Save</Button>
    </Card>
  );
}

### Theming & dark mode

The design system supports a dark colour scheme via a `ThemeProvider`.  Wrap
your application (or a subtree) with the provider and set the `theme` prop
to `'dark'` to enable the dark variables defined in `globals.css.ts`:

```tsx
import { ThemeProvider, Button, Card } from '@lyfeguard/design-system';

function App() {
  const [dark, setDark] = React.useState(false);
  return (
    <ThemeProvider theme={dark ? 'dark' : 'light'}>
      <Card>
        <Button onClick={() => setDark(!dark)}>Toggle theme</Button>
      </Card>
    </ThemeProvider>
  );
}
```

When the `.dark` class is applied to the root element, the neutral palette
is inverted and components automatically adapt to dark backgrounds while
retaining brand and accent colours.  You can refine the dark palette by
adjusting the token values in `globals.css.ts` or supplying custom themes in
the `themes` directory.
```

## Building the packages

If you’re developing the design system locally, clone the monorepo and run:

```bash
npm install
npm run build
```

This command uses Turborepo to build the tokens package (generating CSS/TS/JSON outputs) and then compile the component library with tsup.  Storybook can be launched locally via:

```bash
npm run story
```

### Running Tests

The component library includes unit tests powered by [Vitest](https://vitest.dev/) and [@testing-library/react](https://testing-library.com/).  To run the test suite, execute:

```bash
cd packages/components
npm test
```

This command runs tests in watch mode using the `jsdom` environment configured in `vitest.config.ts`.  You can add new tests alongside your components (e.g. `Button.test.tsx`) to verify behaviour, accessibility and interactions.  Tests are an important part of the contribution process.

When adding new components, be sure to include unit tests that cover both
rendering and interactive behaviour.  For example, the card component
includes a simple test that verifies it renders its children correctly.  See
`packages/components/src/core/Card/Card.test.tsx` for an example.

### Figma integration

Design tokens and UI components should stay aligned between Figma and the
codebase.  To synchronise tokens and ensure designers and engineers are
working from the same source of truth:

1. **Install the Tokens Studio plugin** (previously known as Figma Tokens) in
   your Figma workspace.  This plugin imports JSON token files and
   exposes them as colour, spacing, typography and radius variables in
   Figma.
2. **Import the generated token JSON** (`packages/tokens/dist/json/tokens.json`)
   via Tokens Studio.  The plugin will automatically create Figma variables
   for each design token defined in the codebase.
3. **Apply tokens in your Figma components** using Tokens Studio.  When
   designers apply these variables, the values correspond exactly to the
   CSS variables in the codebase.  This ensures colours, spacing and
   typography remain consistent.
4. **Sync changes back to code** by re-exporting the token JSON from
   Tokens Studio whenever designers add or update variables.  Commit the
   updated JSON into `packages/tokens/src/` and run `npm run build` to
   regenerate the CSS/TS outputs.

In addition to Tokens Studio, you can leverage Figma’s **Dev Mode** and
**Code Connect** features to link Figma components directly to their
implementation in this repository.  When a designer inspects a component in
Dev Mode, links back to the React implementation and Storybook examples can
provide context on props, behaviour and usage.

### Component structure and naming guidelines

To help contributors build new components consistently, the design system uses a
standard folder layout and naming convention.  Each component lives in its own
folder under `packages/components/src/core` with files for the React
implementation (`Component.tsx`), styles (`Component.css.ts`), optional
types (`types.ts`), optional constants (`constants.ts`), an index file for
exports, Storybook stories (`Component.stories.tsx`) and tests
(`Component.test.tsx`).  Subcomponents, hooks and utils should be placed in
`components/`, `hooks/` and `utils/` subdirectories respectively.  Use
PascalCase for component names and folders, camelCase for props, `use…` for
hook names, and UPPER_SNAKE_CASE for constants.  See the **Component
Structure & Implementation Guidelines** section in the root `AGENTS.md` file for a detailed description and recommended implementation order.
for a detailed description and recommended implementation order.

## Contribution workflow

Contributions are welcome!  To propose a new component or change:

1. **Open an issue** using the `component-proposal.md` issue template in `.github/ISSUE_TEMPLATE`.  Describe the use‑case, API and rationale.
2. **Fork and create a feature branch**.
3. **Implement the component** under `packages/components/src/core/<ComponentName>` with accompanying CSS, Storybook stories and tests.
4. **Update the docs** in `apps/docs/docs` and add tokens if necessary.
5. **Create a changeset** in the `.changeset` folder describing your changes.  Changesets drive semantic versioning and publishing.
6. **Open a pull request**.  The CI workflow runs linting, type checking, tests and builds Storybook previews.  Once approved and merged, semantic‑release publishes a new version and updates the changelog automatically.

Refer to the root `README.md` and the `apps/docs/README.md` for detailed instructions on building, testing and deploying the docs site.