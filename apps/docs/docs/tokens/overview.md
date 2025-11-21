---
id: tokens-overview
title: Design Tokens
description: The single source of truth for raw design values such as colours, spacing and typography.
---

# Tokens Overview

Design tokens are the **atomic values** that drive the visual and behavioural consistency of the Lyfeguard design system.  They live in the `packages/tokens/src` folder as JSON files and are compiled into CSS variables, TypeScript constants and JSON outputs.  By changing a token value and rebuilding the tokens package, you can propagate updates to every component without editing individual files.

## Token Categories

Our tokens are grouped by category:

- **Colour** – Defines the brand palette (primary, secondary and accent colours), neutrals and semantic colours (success, warning, error and info).  Use semantic colours to communicate state.
- **Spacing** – A consistent scale based on increments of 4 px.  Tokens like `spacing.2` (`8px`) or `spacing.6` (`24px`) ensure harmonious spacing across layouts.
- **Typography** – Font family (we use Epilogue by default), sizes, weights and line heights for headings, body text, labels and captions.  Tokens such as `font.headingLg.size` and `font.bodySm.weight` help maintain typographic hierarchy.
- **Radius** – Border radii for sharp, rounded and pill shapes.  For example, `radius.sm` (`4px`), `radius.md` (`8px`) and `radius.lg` (`20px`) control the curvature of components.
- **Shadows** – Elevation levels for cards, modals and overlays.  Light shadows provide subtle depth while heavier shadows communicate focus.
- **Motion** – Duration and easing values for transitions and animations.  Tokens such as `motion.duration.fast` (`150ms`) and `motion.easing.easeInOut` ensure consistent animation timing.
- **Breakpoints** – Media query thresholds for responsive design.  The system uses min‑width breakpoints at **544 px**, **768 px**, **1012 px**, **1280 px**, **1366 px** and **1640 px**【776650149927649†L69-L81】.  Tokens like `breakpoint.md` correspond to these values.
- **Layout** – Grid column count, container max‑width and gutter sizes.  For example, `layout.columns` is `12` and `layout.containerMaxWidth` is `1024px` to align with our 12‑column grid.

## Using Tokens

Tokens are consumed in two primary ways:

1. **CSS variables** – After building the tokens package (`npm run build` in `packages/tokens`), CSS variables are output to `dist/css/tokens.css`.  Import this file once in your application and reference tokens via `var(--color-brand-500)` or `var(--spacing-4)`.
2. **TypeScript constants** – The build pipeline also generates a TypeScript file (`dist/ts/tokens.ts`) which exports the token values.  This is useful when you need tokens in JavaScript logic (e.g. setting chart colours or computing spacings programmatically).

For example, to use the primary brand colour in a component:

```tsx
import { vars } from '@lyfeguard/design-system';

const styles = {
  backgroundColor: vars.color.brand500,
  padding: vars.spacing[4],
  borderRadius: vars.radius.md,
};
```

Or in CSS:

```css
.alert {
  background: var(--color-warning-100);
  color: var(--color-warning-700);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
}
```

## Extending Tokens

All tokens live in JSON files under `packages/tokens/src`.  To add a new token:

1. Open the appropriate JSON file (e.g. `color.json` or `motion.json`).
2. Add a new key with a `value` property.
3. Run `npm run build` in the `packages/tokens` directory to regenerate the CSS, TS and JSON outputs.

Tokens keep the system flexible and themeable.  For instance, adding a `dark` theme could be achieved by generating an alternative set of colour tokens and swapping themes at runtime.