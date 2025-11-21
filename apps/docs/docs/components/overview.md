---
id: components-overview
title: Components
description: Overview of the core UI components provided by the Lyfeguard design system.
---

# Components

The Lyfeguard design system ships with a comprehensive set of UI components tailored for life‑management and financial applications.  Each component is built with accessibility, responsiveness and modularity in mind.  Components are organised into functional groups; you can import them individually from `@lyfeguard/design-system`.

## Form Controls

These components make it easy to capture user input consistently:

- **Button** – Primary, secondary and tertiary variants with support for icons and loading states.
- **Input** – Single‑line text inputs with labels, helper text and error messages.
- **Select** – Native select wrapper with support for labels and custom options.
- **Textarea** – Multi‑line text areas with adjustable height.
- **Checkbox** – Accessible checkboxes with labels and controlled/uncontrolled state.
- **RadioGroup** – Group of radio buttons with inline or stacked layout.
- **Toggle** – Switch component for binary choices.
- **DateInput** – Single date input with placeholder and native date picker.
- **FileUpload** – Drag‑and‑drop file upload with list of selected files.

## Layout & Navigation

These components structure pages and navigation:

- **Container, Grid & GridItem** – Layout primitives for building responsive grids.  Container centres content and constrains max width; Grid defines a 12‑column layout; GridItem sets column spans and offsets.
- **Card** – Bordered container with optional header and footer, used for grouping related content.
- **Tabs** – Horizontal tab bar with content panels.  Supports keyboard navigation and dynamic tab content.
- **Navigation** – Includes a top navigation bar (`TopNav`) and a collapsible sidebar (`Sidebar`).  Menus are keyboard accessible and responsive.

## Data & Visualisation

Components for presenting data clearly:

- **Table** – Flexible table supporting custom columns, custom cell rendering and row click callbacks.  Includes row hover and selection states.
- **BarChart** – Wrapper around Recharts for simple bar charts.  Accepts custom series definitions and uses design system colours.
- **ProgressBar** – Horizontal progress indicator with configurable percentage.

## Feedback & Indicators

- **Alert** – Informational, success, warning and error messages with icons and dismiss actions.
- **Toast** – Temporary notification that appears at the bottom right and dismisses automatically.
- **Badge** – Small status indicator with variant colours (primary, success, warning, error, info).
- **Spinner** – Animated spinner for loading states with configurable size.

## Utilities

- **Avatar** – Displays user initials or an image, with configurable size and background colour.
- **SkipLink & VisuallyHidden** – Accessibility helpers to improve keyboard navigation and screen‑reader output.
- **Layout primitives** – `Box` for basic layout, `Flex` and `Stack` coming soon.

Each component includes dedicated Storybook stories under `storybook/` so you can explore states and variants.  Refer to the development docs for information on importing and using these components in your application.