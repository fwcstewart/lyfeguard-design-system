---
id: governance-overview
title: Governance
description: Processes for proposing changes, versioning and maintaining the design system.
---

# Governance

Maintaining a healthy design system requires clear processes for proposing changes, reviewing contributions and releasing new versions.  This section outlines how the Lyfeguard design system is governed.

## Proposing a component

If you need a new component or a significant enhancement to an existing one, please open an issue using the **Component Proposal** template located under `.github/ISSUE_TEMPLATE/component-proposal.md`.  Provide:

- A description of the problem the component solves.
- A proposed API (props, states and variants).
- Visual references or examples, if available.
- Any accessibility considerations.

The design system team will review proposals to ensure they align with our principles, naming conventions and accessibility standards.  Once approved, you can start implementing the component under `packages/components/src/core`.

## Versioning and Releases

We use **semantic versioning** and **semantic‑release** to automate releases.  Version numbers follow the pattern `MAJOR.MINOR.PATCH`:

- **MAJOR** – Breaking changes (e.g. removing a prop or changing default behaviour)
- **MINOR** – Backwards‑compatible additions (e.g. new component, new prop)
- **PATCH** – Bug fixes or internal improvements

When you contribute a change, create a **changeset** in the `.changeset` folder.  The changeset file describes the nature of the change and which packages are affected.  On merge, the CI pipeline publishes a new version to npm and generates a changelog.

## Code review

All pull requests undergo review by the design system maintainers.  Reviews cover:

- **API design** – Prop names, defaults and extensibility
- **Styling** – Using tokens and Vanilla Extract correctly
- **Accessibility** – Ensuring components are operable by keyboard and screen readers, with appropriate ARIA attributes
- **Tests** – Unit tests covering common and edge cases
- **Documentation** – Updating MDX docs and Storybook stories

## Documentation updates

Every change that affects the public API or guidelines must be reflected in the documentation.  Add or update files under `apps/docs/docs` accordingly.  The docs site is built with Docusaurus and can be previewed locally using `npm run docs` in the root directory.

## Deprecation policy

When deprecating a component or API, follow these steps:

1. Mark the component or prop as deprecated in the docs and code comments.
2. Provide a recommended migration path and timeline.
3. Remove the deprecated feature in the next major release.

Governance ensures the design system remains consistent, sustainable and aligned with Lyfeguard’s mission.