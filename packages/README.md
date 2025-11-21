# Packages

This directory contains the core libraries that make up the Lyfeguard design system.  Each package is independent and can be published to npm under the `@lyfeguard` scope.  Use these packages in your applications or other libraries to build on top of a consistent, accessible foundation.

## Subpackages

| Package              | Description |
|----------------------|-------------|
| **tokens**           | Design tokens defined with Style Dictionary. Includes colour palettes, spacing scales, typography settings, radii, shadows, motion durations, breakpoints and layout definitions. Build scripts generate CSS variables and TypeScript constants. |
| **components**       | Core React component library built with TypeScript and Vanilla Extract. Includes primitives (Box, Flex, Stack), form controls (Button, Input, Select, Checkbox, Radio, Toggle, Textarea), layout components (Card, Grid, Modal), navigation elements, feedback components (Alert, Toast, Spinner, ProgressBar) and data visualisation wrappers. |
| **icons**            | SVG icons exported as React components. Each icon accepts optional `size`, `color` and `title` props. |
| **utils**            | Shared utility functions for formatting numbers/dates, combining class names, generating IDs and merging refs. These utilities are framework‑agnostic and can be used in any project. |

## Usage

To install a specific package in your application, run for example:

```bash
npm install @lyfeguard/design-system
npm install @lyfeguard/tokens
```

Refer to the README.md inside each package for detailed usage instructions.
