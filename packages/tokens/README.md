# @lyfeguard/tokens

This package defines the **design tokens** used throughout the Lyfeguard design system.  Tokens act as the single source of truth for colours, spacing, typography, motion, breakpoints, layout values and more.  They enable consistency across applications and make it easy to theme components.

## Token categories

The tokens are defined in JSON files under `src/` and are grouped into categories:

- **colour.json** – Brand, accent, neutral and semantic colour palettes.
- **spacing.json** – A 4 px based spacing scale (`spacing-1` through `spacing-10`).
- **typography.json** – Font families and sizes for headings, body text and UI labels.
- **radius.json** – Border radii for components.
- **shadows.json** – Elevation levels for cards, modals and overlays.
- **motion.json** – Animation durations and easing curves (fast, normal, slow).
- **breakpoints.json** – Responsive breakpoints (sm, md, lg, xl, xxl, widescreen) defined according to USWDS guidance【776650149927649†L69-L81】.
- **layout.json** – Number of grid columns, container widths and spacing for the responsive grid system.

## Building tokens

Tokens are processed by [Style Dictionary](https://amzn.github.io/style-dictionary/) to generate multiple output formats.  Use the build script to compile tokens into CSS variables and TypeScript constants:

```bash
npm run build --workspace=@lyfeguard/tokens
```

This command runs `node scripts/build-tokens.js`, which reads the `style-dictionary.config.js` file to output:

- `dist/css/tokens.css` – CSS custom properties that can be imported globally.
- `dist/ts/tokens.ts` – TypeScript constants for JavaScript/TypeScript usage.
- `dist/json/tokens.json` – A consolidated JSON file for use in other tools.

## Using tokens

In a React application, import the CSS variables once at the root:

```tsx
import "@lyfeguard/tokens/dist/css/tokens.css";
```

Within Vanilla Extract, you can import token values via the `vars` object from `globals.css.ts` in `@lyfeguard/design-system`:

```ts
import { vars } from "@lyfeguard/design-system/src/globals.css";

const buttonStyle = style({
  backgroundColor: vars.color.brand500,
  padding: vars.spacing[4],
  borderRadius: vars.radius.md
});
```

To add a new token, edit or create the appropriate JSON file under `src/` and run the build script.  Document the token in the docs site under `apps/docs/docs/tokens`.
