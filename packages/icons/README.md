# @lyfeguard/icons

This package exports a set of SVG icons as React components.  Icons share a consistent API and can be styled inline via props or via CSS.  Adding icons to your interface helps communicate actions and statuses clearly.

## Installation

```bash
npm install @lyfeguard/icons
```

## Usage

Each icon is exported individually.  Icons accept optional `size`, `color` and `title` props.  `size` specifies the width and height in pixels (default `24`).  `color` sets the `fill` colour; by default icons inherit `currentColor`, meaning they match the text colour of their parent.

```tsx
import { CheckIcon, InfoIcon, ArrowRightIcon } from "@lyfeguard/icons";

export default function Example() {
  return (
    <div style={{ color: "#177B9A" }}>
      <CheckIcon size={16} /> Success!
      <InfoIcon size={16} title="Information" /> Please read the docs.
      <ArrowRightIcon size={12} />
    </div>
  );
}
```

## Adding icons

To add a new icon:

1. Create a new file in `packages/icons/src` named `YourIconName.tsx`.
2. Define a functional component that returns an `<svg>` with `width`, `height`, `viewBox` and `fill` attributes.  Accept optional props `size` (number), `color` (string) and `title` (string).
3. Import and re‑export the icon in `packages/icons/src/index.ts`.
4. Add documentation and usage examples in the docs site under `apps/docs/docs/components`.
