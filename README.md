# Lyfeguard Design System

The **Lyfeguard Design System** is a modular, token‑driven UI library designed to provide a cohesive, accessible and scalable user experience across Lyfeguard’s products.  It packages a set of design tokens and React components, along with a few layout primitives and accessibility utilities, to help you build products quickly while staying on brand and maintaining consistency.

## Overview

This monorepo contains two main packages:

- **`@lyfeguard/tokens`** – The single source of truth for design tokens.  These JSON files define colours, spacing, typography, motion, breakpoints and layout values.  A build step (powered by [Style Dictionary](https://amzn.github.io/style-dictionary/)) transforms the JSON into CSS custom properties and TypeScript/JSON modules.
- **`@lyfeguard/design-system`** – A library of accessible, themeable React components built with [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) and [Vanilla Extract](https://vanilla-extract.style/).  Each component is fully typed, styled with design tokens and follows WCAG guidelines wherever possible.  Layout primitives (Container, Grid and GridItem) are included to simplify responsive page structure.

### Key Features

- **Design Tokens** – Colour palette (brand, neutrals, success, warning, error, info), spacing scale, typography (font families, sizes, weights and line heights), radii, motion durations/easing and responsive breakpoints.  Additional layout tokens define the number of grid columns, the gutter size and the container max‑width.
- **Core Components** – Buttons, inputs, selects, textareas, modals, cards, tabs, table, toast notifications, alerts, navigation (top bar & sidebar), checkbox, radio group, toggle, date input, file upload, avatar, badge, spinner, progress bar and charts.  All components accept sensible props and expose accessible attributes.
- **Accessibility Utilities** – `SkipLink` (hidden until focused, allowing keyboard users to bypass navigation) and `VisuallyHidden` (hides content visually while keeping it available to screen readers).  These adhere to guidelines like providing text alternatives and keyboard navigation【880714660275785†L185-L204】.
- **Layout System** – `Container`, `Grid` and `GridItem` primitives implement a simple responsive grid.  The system uses a mobile‑first 12‑column layout with configurable gaps and leverages breakpoint tokens derived from the U.S. Web Design System grid rules【524513706448689†L272-L286】.  These breakpoints map to common viewport widths (sm = 544 px, md = 768 px, lg = 1012 px, xl = 1280 px, xxl = 1366 px and widescreen = 1640 px)【776650149927649†L69-L81】.
- **Motion Tokens** – Standardised animation durations (`fast`, `normal`, `slow`) and easing curves (`ease`, `easeInOut`, `spring`), ensuring interactions feel consistent across all components.

## Getting Started

### Prerequisites

* **Node 18+** – Install Node.js from [nodejs.org](https://nodejs.org/) if you don’t have it.  All commands below assume `npm`, but you can substitute `pnpm` or `yarn` if preferred.

### Installing Dependencies

First, install dependencies in the root of the monorepo:

```bash
npm install
```

This installs `turbo`, TypeScript and other dev dependencies, then hoists package dependencies for the token and component packages.

### Building the Tokens

The tokens are defined in the `packages/tokens/src` folder.  To generate CSS custom properties and JS/TS modules from these JSON files, run:

```bash
cd packages/tokens
npm run build
```

This invokes Style Dictionary via `scripts/build-tokens.js` and writes the output to `packages/tokens/dist/css/tokens.css` and `packages/tokens/dist/js/tokens.js`.  The CSS file exposes variables like `--color-brand-500` and `--motion-duration-fast` that you can import globally in your applications.

### Building the Component Library

From the repository root, run:

```bash
cd packages/components
npm run build
```

This bundles the design system into both CommonJS and ES modules in the `dist` directory using [Tsup](https://tsup.egoist.dev/).  Ensure that your tokens have been built first, as the components reference token variables via the `vars` object.

### Local Development

To develop components and view them in Storybook:

```bash
# From the repository root
npm run story
```

This starts [Storybook](https://storybook.js.org/) on port 6006 and hot‑reloads as you edit component files.  Use it to explore component variants, props and documentation.

To run the playground application, which showcases how to use the design system in a real React app:

```bash
cd apps/playground
npm install
npm run dev
```

This starts a [Vite](https://vitejs.dev/) server on port 5173 (default) so you can experiment with components in context.

### Importing the Design System

To use the design system in your own project:

```bash
import '@lyfeguard/tokens/dist/css/tokens.css';
import { Button, Input, Container, Grid, GridItem, SkipLink } from '@lyfeguard/design-system';

function Example() {
  return (
    <Container>
      <SkipLink />
      <Grid gap="var(--spacing-4)">
        <GridItem span={12}>
          <Button variant="primary">Save</Button>
        </GridItem>
      </Grid>
    </Container>
  );
}
```

If you’re using a bundler like Vite or Next.js, ensure that CSS custom properties from the token package are imported before any components.  This is most easily done by importing the token CSS in your root or layout file.

### Contributing & Development Workflow

The monorepo uses [Turborepo](https://turbo.build/) to orchestrate tasks.  Each package defines its own build script.  Running `npm run build` in the root executes the `build` script for dependent packages in the correct order.  Use the following guidelines when contributing:

* **Building Tokens:** Run `npm run build` inside `packages/tokens` whenever you change JSON token files.  Commit both the source JSON and the generated files under `dist`.
* **Component Dev:** Develop components in `packages/components/src/core`.  Each component should have its own folder with a `.tsx` file, `.css.ts` styles (using Vanilla Extract) and a `.stories.tsx` file for Storybook.  Components should accept props for variants, sizes and states.  Follow WCAG guidelines: provide labels for inputs, support keyboard navigation and use appropriate ARIA attributes【880714660275785†L185-L204】.
* **Imports:** Components should import CSS variables from the token package via the `vars` object (`import { vars } from '../../globals.css'`).  Never hard‑code colours, spacing or typography values.
* **Running Tests:** The design system currently doesn’t include a test suite, but we recommend adding unit tests with [Vitest](https://vitest.dev/) and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) for future contributions.
* **Semantic Versioning:** When publishing packages, use semver (major/minor/patch) and document changes in the changelog.  Tools like [semantic-release](https://semantic-release.gitbook.io/) can automate versioning and publishing.

## Deployment Instructions

### Building a Static Documentation Site

Although this MVP does not include a full documentation site, you can easily turn your Storybook into a static site and host it on Vercel or GitHub Pages.  To do this, install Storybook’s CLI (if you haven’t already) and run:

```bash
npx build-storybook -c .storybook -o storybook-static
```

This command generates a `storybook-static` directory containing a fully static version of the component documentation.  You can then deploy this folder to any static hosting provider.  For example, to deploy to GitHub Pages:

```bash
npm install -D gh-pages

# Add a deploy script to package.json:
# "scripts": { "deploy-storybook": "gh-pages -d storybook-static" }

npm run deploy-storybook
```

Alternatively, [Vercel](https://vercel.com/) can be configured to build and serve your Storybook.  Create a new Vercel project, connect it to your GitHub repo and set the build command to `npm run build-storybook` with the output directory `storybook-static`.

### Publishing the Packages

Both the token and component packages are prepared for publication on npm.  To publish a new version:

1. Bump the version numbers in `packages/tokens/package.json` and `packages/components/package.json` appropriately.
2. Run `npm run build` in the root to build tokens and components.
3. Log in to npm (`npm login`) if you haven’t already.
4. Publish each package from its directory:

   ```bash
   cd packages/tokens
   npm publish --access public
   
   cd ../components
   npm publish --access public
   ```

Note: you can automate versioning and publishing using `semantic-release` in GitHub Actions.  See `.github/workflows/release.yml` for an example CI configuration.

## Layout & Breakpoints

The design system’s grid is inspired by the U.S. Web Design System.  A `Grid` component creates a 12‑column layout by default【524513706448689†L272-L286】.  Use the `GridItem` component’s `span` prop to control how many columns an item occupies.  Breakpoint tokens allow you to adjust layouts for different viewports; these breakpoints correspond to min‑width values (544 px, 768 px, 1012 px, 1280 px, 1366 px and 1640 px)【776650149927649†L69-L81】.  You can reference them directly in your CSS, e.g.:

```ts
import { vars } from '@lyfeguard/design-system/globals.css';

const styles = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gap: vars.spacing[4],
  '@media': {
    [`screen and (min-width: ${vars.breakpoint.md})`]: {
      gridTemplateColumns: 'repeat(6, 1fr)',
    },
  },
});
```

Use `Container` to wrap your page content and maintain a comfortable maximum width for readability.

## Accessibility & Motion

Following WCAG’s four principles (perceivable, operable, understandable and robust) means providing text alternatives for non‑text content, ensuring keyboard navigation, giving users control over interactions and supporting assistive technologies【880714660275785†L185-L204】.  The design system offers `SkipLink` and `VisuallyHidden` utilities to help meet these requirements.  Components use semantic HTML, proper ARIA attributes and focus management to ensure they are usable by everyone.  Motion tokens allow you to animate elements at a consistent speed; you can reference `vars.motion.duration.fast` or `vars.motion.easing.spring` when writing CSS transitions.

## License

This project is licensed under the MIT License.