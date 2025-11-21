---
id: theming-token-hardening
title: Theming & token hardening
description: Action plan to strengthen dark mode, enforce token-first styling, and raise every component to an exceptional standard.
---

## Why focus on theming and token discipline?

The current theme primitives are thin: the dark mode palette mainly reuses brand-tinted overlays and duplicates text colours, leaving little neutral structure for surfaces, borders, and states.
"rgba" fallbacks still appear in component styles (e.g., Button shadows and Navigation/Toast hover states), which breaks the token-first rule and complicates future theme expansion.

## Step 1: Strengthen theming & tokens

- Define a **neutral-led dark palette** (background, surface, hover, active, border, overlay, primary/secondary/tertiary text) that is independent of brand tinting and meets contrast guidelines.
- Add **stateful theme tokens** for focus rings, subtle borders, elevations, and overlays so components can swap states between light/dark without ad-hoc RGBA values.
- Extend the **shadow token scale** (e.g., hover vs. resting vs. focus) so components can reference semantic elevation tokens instead of bespoke shadows.
- Document how to consume the new tokens from `globals.css.ts` and the generated token outputs, including guidance for Storybook themes and Figma token mappings.

## Step 2: Enforce token-first implementation

- Replace remaining literal RGBA values with token references and add missing tokens where needed:
  - **Button**: convert box shadows to tokenized elevation values for base, hover, active, and dark states.
  - **Navigation (TopNav/Sidebar)**: swap hard-coded border/hover overlays for neutral theme tokens; ensure dark mode uses neutral surfaces instead of translucent white overlays.
  - **Toast**: replace hover backgrounds with token-based overlays and expose hover/active tokens for toast controls.
- Introduce **linting or review gates** (e.g., stylelint custom rule or PR checklist) to block new hard-coded colours/shadows.
- Add a **token usage checklist** to component templates (stories/tests) so new work defaults to tokens and verifies dark-mode coverage.

### Quick token lint

Run `npm run lint:tokens` to scan all component style files for literal colour or shadow declarations. The script fails the build when it detects `rgb(a)`, `hsl(a)`, or hex values so teams catch violations before review.

## Component upgrade checklist (make every component exceptional)

Use this per-component list to drive refactors. Each item assumes token-first styling, dark-mode parity, documented variants, and test coverage.

- **Accessibility**: Confirm SkipLink uses theme-aware focus styles and tokenized spacing; document keyboard-first usage.
- **Alert**: Align background/border/text colours to tokenised semantic states (info/success/warning/error) for both themes; add ARIA role examples in docs and tests.
- **Avatar**: Ensure initials/backgrounds pull from neutral/brand tokens; support dark surfaces with proper contrast and add fallback image loading tests.
- **Badge**: Map all variants to semantic tokens; verify pill radii and spacing respect radius/spacing tokens and add dark-mode snapshots.
- **Button**: Tokenize all shadows/overlays, expand focus ring tokens, and document interaction states in stories; add accessibility tests for focus handling.
- **Card**: Use elevation tokens for resting/hover states; add dark-surface stories and interaction tests for header/footer slots.
- **Chart**: Bind palette and gridlines to tokens; include dark-theme demos and snapshot tests for colour blindness-friendly schemes.
- **Checkbox**: Ensure checkmark, hover, and focus styles reference tokens; add RTL stories and keyboard interaction tests.
- **DateInput**: Tokenize calendar popover shadows/borders; verify dark popover contrast and write tests for keyboard navigation.
- **FileUpload**: Replace any literal drop-zone colours with tokens; add stories for drag-over states in both themes and tests for accessible announcements.
- **Input/Textarea**: Use theme tokens for borders, fills, and focus rings; include dark mode/error state snapshots and interactive tests (focus/blur, disabled).
- **Layout**: Ensure grid spacing/gutters map to layout tokens and surface colours respect theme.background; document responsive tokens usage.
- **Modal**: Tokenize overlay opacity/colour and panel elevation; add dark-theme stories and tests for focus trap/esc/overlay click.
- **Navigation (Sidebar/TopNav)**: Replace translucent overlays with theme tokens; add stories for compact/expanded modes in both themes and tests for active state sync.
- **ProgressBar**: Use semantic tokens for track/fill; add dark-mode stories and motion tokens for animations; test aria-valuenow/valuemin/valuemax.
- **RadioGroup**: Tokenize checked/hover/focus states; add RTL/dark stories and keyboard selection tests.
- **Select**: Ensure menu/option states use theme tokens; add dark stories and tests for keyboard navigation and disabled options.
- **Spinner**: Map strokes/animation timing to tokens; include dark-surface demonstrations.
- **Table**: Tokenize header/body backgrounds, borders, and hover states; add density tokens; test pagination/sorting and keyboard focus outlines.
- **Tabs**: Use token-based indicator/hover colours; add dark-theme stories and tests for keyboard activation and aria relationships.
- **Toast**: Replace hover/active overlays with tokens; add dark-mode stories and tests for auto-dismiss timers and focus restoration.
- **Toggle**: Tokenize track/thumb colours for all states; include dark and high-contrast stories and keyboard interaction tests.

Track completion of these tasks alongside changesets and Storybook updates so the system consistently reflects token-first, theme-rich behaviour.
