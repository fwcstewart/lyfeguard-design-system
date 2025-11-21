# @lyfeguard/utils

This package contains framework‑agnostic utility functions used throughout the Lyfeguard design system.  Utilities help reduce boilerplate and make it easier to build consistent UIs.  All functions are exported from `src/index.ts`.

## Available utilities

- **cx(...classes: (string | undefined | false)[]): string** – Combines multiple class names into a single string, filtering out falsy values. Useful for conditional class application.
- **formatCurrency(amount: number, options?: Intl.NumberFormatOptions): string** – Formats a numeric value as a currency string using the browser's locale (default) or an optional `Intl.NumberFormatOptions` object.
- **formatDate(date: Date | number | string, options?: Intl.DateTimeFormatOptions): string** – Formats a date into a human readable string using the browser's locale or an optional `Intl.DateTimeFormatOptions` object.
- **generateId(prefix?: string): string** – Generates a deterministic unique ID based on an optional prefix.  Useful for associating labels with inputs in accessibility APIs.
- **mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]): React.RefCallback<T>** – Merges multiple React refs into a single callback ref.  Helps when forwarding refs and using external hooks simultaneously.

## Installation

```bash
npm install @lyfeguard/utils
```

## Usage

```tsx
import { cx, formatCurrency, formatDate, generateId, mergeRefs } from "@lyfeguard/utils";

// Example: Conditionally apply classes
const buttonClass = cx(
  "base", 
  isActive && "active", 
  isDisabled && "disabled"
);

// Format amounts and dates
const total = formatCurrency(1234.56); // e.g. "$1,234.56" in en-US locale
const today = formatDate(new Date());  // e.g. "Nov 20, 2025" in en-US locale

// Generate unique IDs for labels
const id = generateId("input");
```

All functions are implemented in TypeScript and include JSDoc comments describing their purpose, parameters and return values.
