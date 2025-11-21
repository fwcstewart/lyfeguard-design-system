# @lyfeguard/design-system

This package provides a comprehensive set of React components for the Lyfeguard platform.  Each component is built with **TypeScript**, styled using **Vanilla Extract**, and designed to be **accessible by default**.

## Installation

```bash
npm install @lyfeguard/design-system
```

You will also need to import the design tokens at the root of your application to initialise CSS variables:

```ts
// index.tsx or App.tsx
import "@lyfeguard/tokens/dist/css/tokens.css";
```

## Usage

Import the components you need directly from the package:

```tsx
import { Button, Input, Card, Tabs } from "@lyfeguard/design-system";

export default function Example() {
  return (
    <Card>
      <Tabs
        tabs={[{ label: "Overview", content: <p>…</p> }, { label: "Details", content: <p>…</p> }]}
        defaultIndex={0}
      />
      <Input label="Name" placeholder="Enter name" />
      <Button variant="primary">Save</Button>
    </Card>
  );
}
```

## Directory structure

```
components/
  src/
    core/         # All high‑level UI components (Buttons, Inputs, Selects, Tabs, etc.)
      DataVisuals/ # Chart components (AreaChart, BarChart, LineChart, PieChart)
    primitives/   # Low‑level building blocks (Box, Flex, Stack)
    helpers/      # Helper functions that wrap utilities from @lyfeguard/utils
    themes/       # Theme definitions (light, dark)
    globals.css.ts # Global CSS variables loaded via Vanilla Extract
    tokens.css.ts  # Generates global CSS variables from tokens
    index.ts      # Re-exports all public components and helpers
```

## Contributing

When adding a new component:

1. Create a folder under `src/core` with the component name.
2. Add `Component.tsx`, `Component.css.ts`, `Component.stories.tsx` and `Component.test.tsx`.
3. Import tokens via `vars` from `globals.css.ts` and avoid hard‑coding values.
4. Write tests using Vitest and React Testing Library.
5. Document the component usage in the docs site (`apps/docs`).
