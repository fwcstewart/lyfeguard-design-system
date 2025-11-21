# Playground App

This package contains a simple React application configured with Vite.  It serves as a sandbox for experimenting with components from the Lyfeguard design system outside of Storybook or production environments.

## Getting started

Install dependencies and run the development server:

```bash
npm install
npm run dev --workspace=apps/playground
```

The app will automatically import the CSS tokens from `@lyfeguard/tokens` when you import any component from `@lyfeguard/design-system`.  Use the playground to prototype new layouts, test responsiveness and validate interactions.

## Directory Structure

```
playground/
  src/
    App.tsx      # Main application component
    index.tsx    # Entry point that renders App
  vite.config.ts # Vite configuration
  tsconfig.json
  package.json
```
