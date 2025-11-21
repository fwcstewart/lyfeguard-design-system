# Lyfeguard Design System AI Manual

Welcome to the Lyfeguard design system. This repository has been curated to support autonomous AI agents, developers, and designers working together to build a secure, accessible and maintainable web experience.  The design system provides a cohesive, scalable and human‑centred component library backed by a robust token infrastructure.

## Mission

Our mission is to **simplify life management through design and code**.  Every component, token and utility in this repository exists to help users handle sensitive life information with clarity, confidence and care.

## Tech Stack

| Technology            | Purpose                                                      |
|----------------------|--------------------------------------------------------------|
| **Node.js & TypeScript** | Write strongly typed JavaScript for both server and client side. |
| **React (18)**        | Build declarative UI components for web applications.       |
| **Vanilla Extract**   | Compile‑time CSS styling with tokens for zero‑runtime cost. |
| **Style Dictionary**  | Source of truth for design tokens (colour, spacing, etc.).  |
| **Tsup**              | Bundle TypeScript into distributable packages.              |
| **Storybook**         | Develop and document components in isolation.               |
| **Docusaurus**        | Host design system documentation.                          |
| **Vitest**            | Unit testing framework with React Testing Library.          |
| **Turborepo**         | Monorepo build orchestrator for parallel builds and caching.|

## Personality & Coding Style

This repository has been designed to be **AI‑native**, meaning agentic tools should be able to navigate and contribute to it with minimal noise. When writing code or documentation, follow these principles:

* **Terse & Functional:** Favour simple, functional components and utilities. Avoid unnecessary abstractions.
* **Typed by Default:** Use TypeScript interfaces (not type aliases) for public APIs and props. Explicit types aid AI reasoning.
* **Token‑Driven:** Never hard‑code colours, spacing or typography. Import tokens from `@lyfeguard/tokens` via the `vars` object or CSS variables.
* **Accessible:** Components must include appropriate ARIA attributes, keyboard navigation and focus states. See the foundations docs for guidance.
* **Documented:** Write JSDoc for functions and components describing their purpose, expected use cases and edge cases. Include examples when helpful.
* **Tested:** Every component or utility should have a corresponding test covering its public API and key behaviours.

## Contribution Workflow

1. **Identify the package** you intend to work on (`tokens`, `components`, `icons`, `utils`, `docs`, `playground`).
2. **Plan your changes** by reading existing documentation and reviewing similar implementations. Ensure your work aligns with the mission and design principles.
3. **Follow the rules** in `.cursorrules` — always use TypeScript interfaces, tokens, JSDoc comments and tests. Never commit lockfiles or compiled artefacts.
4. **Write code and tests:** Implement your feature or fix with thoughtful JSDoc, accessibility considerations and adequate test coverage.
5. **Run checks:** Execute `npm run build`, `npm run test` and `npm run storybook` (if relevant) to confirm everything passes locally.
6. **Document your changes:** Update or add READMEs and docs in `apps/docs` to reflect new components or tokens.
7. **Create a changeset** (see `.changeset` directory) to bump package versions appropriately.
8. **Open a pull request:** Summarise your changes, reference any relevant issues and request review. Ensure continuous integration passes.

## Component Structure & Implementation Guidelines

To help both human and AI contributors write consistent, high‑quality components, the design system follows a **standard folder and implementation structure**.  This structure reduces guesswork and ensures that all pieces of a component live in predictable places.

### Folder Structure

Each component lives in its own folder inside `packages/components/src/core`.  The folder name and main file should use **PascalCase** matching the component’s exported name.

Inside a component folder, files are organised as follows:

| File | Purpose |
|------|---------|
| `Component.tsx` | The main React component. Use `forwardRef` for any element that exposes a DOM node.  Render a root element with a `data-lyfeguard` attribute set to a descriptive identifier (e.g. `data-lyfeguard="Button"`) to aid testing. |
| `Component.css.ts` | Styles for the component using Vanilla Extract. Import design tokens via the `vars` object rather than hard‑coding values. |
| `types.ts` (optional) | Define interfaces for complex props or data structures. Simple components can define props inline, but complex types should live here. |
| `constants.ts` (optional) | Export constant values (e.g. status enums, variant maps). Avoid re‑declaring strings or numbers throughout your component. |
| `index.ts` | Re‑export the public API: the component itself, its types, hooks and constants.  Keeping a clean index simplifies imports for consumers. |
| `Component.stories.tsx` | Storybook stories demonstrating usage and variants.  Stories serve as live documentation and help catch visual regressions. |
| `Component.test.tsx` | Unit tests using Vitest and React Testing Library.  Tests should cover rendering, props, events and accessibility. |

If the component has subcomponents, hooks or utility functions, create sub‑directories:

* `components/` for internal subcomponents.
* `hooks/` for custom hooks (named with `use…`).
* `utils/` for helper functions used only by this component.
* `__tests__/` for additional test files.

### Implementation Order

When building a new component, follow this recommended sequence:

1. **Define types and props**: Identify all props and their types up front.  For complex props, create a `types.ts` file so that type definitions are easy to locate and reuse.
2. **Implement the component**: Write `Component.tsx` using `forwardRef` where appropriate.  Add a `data-lyfeguard` attribute to the root element and wire up events and state.  Keep logic minimal; defer complex calculations to hooks or utils.
3. **Create constants**: If your component uses strings, enums or configuration maps, extract them into `constants.ts` so they are not duplicated.
4. **Style with tokens**: Build `Component.css.ts` using Vanilla Extract.  Import tokens from `globals.css.ts` via the `vars` object.  Never hard‑code colours, spacing or typography.
5. **Export**: Update `index.ts` to export the component, its props type (if defined), and any constants or hooks.
6. **Write tests**: Add a `Component.test.tsx` file covering expected behaviour, accessibility and edge cases.  Use `data-lyfeguard` selectors or screen queries rather than brittle DOM selectors.
7. **Write stories**: Create a `Component.stories.tsx` file that demonstrates different variants, states and sizes.  Stories act as documentation and support visual regression testing.
8. **Update documentation**: Add a section under `apps/docs` explaining how to use the component, its props and examples.

Following this sequence ensures that types, implementation, styling, tests and documentation stay in sync and that AI agents know exactly where to add or modify code.

### Naming Conventions

To keep the codebase predictable:

* **Component folders and files** use **PascalCase** (e.g. `Button`, `DatePicker`).
* **Prop names** use **camelCase** and should read as boolean questions when appropriate (e.g. `isDisabled`, `hasIcon`).
* **Event handler props** should be prefixed with `on` (e.g. `onClick`, `onChange`).
* **Custom hooks** live in a `hooks/` folder and start with `use` (e.g. `useForm`, `usePagination`).
* **Constant values** use **UPPER_SNAKE_CASE** and live in `constants.ts` (e.g. `DEFAULT_SIZE`, `STATUS_VARIANTS`).
* **Types and interfaces** are suffixed with `Props`, `Options` or `State` as appropriate (e.g. `ButtonProps`).

Adhering to these conventions helps AI agents and developers quickly locate definitions and reduces cognitive overhead.
