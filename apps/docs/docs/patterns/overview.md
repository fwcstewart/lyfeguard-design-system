---
id: patterns-overview
title: UI Patterns
description: Guidance on common UI patterns built from Lyfeguard components.
---

# Patterns

Patterns describe how multiple components combine to solve common user‑interface challenges.  While the design system provides individual components, these patterns illustrate best practices for assembling them into meaningful workflows.  Adhering to these patterns improves consistency and usability across Lyfeguard products.

## Forms

Use the form controls (Input, Select, Checkbox, RadioGroup, Toggle, DateInput, Textarea, FileUpload) together with **form layout** primitives to build forms.  Group related fields in **Cards** and use `Grid` to arrange fields in one or two columns.  Provide clear labels, helper text and validation messages.  Break long forms into **Tabs** or **Multistep flows** to reduce cognitive load.

## Lists and Tables

When displaying collections of items such as documents, contacts or transactions, use the **Table** component.  Each row should be interactive (e.g. clicking to view details) and provide visual feedback on hover.  For mobile layouts, consider switching to card‑based lists using **Card** and **GridItem** to stack the content.

## Modals and Dialogs

Use **Modal** for tasks that interrupt the user flow, such as confirming an action or inputting a small amount of data.  Keep modals focused; avoid loading entire forms inside them.  For confirmation dialogs, pair the **Alert** component with action buttons (e.g. _Cancel_ and _Confirm_).  Ensure modals trap focus and are dismissible via the Esc key or close button.

## Navigation

Combine **TopNav** and **Sidebar** to create the primary navigation shell.  Use **Tabs** for secondary navigation within a page, such as switching between “Summary”, “Documents” and “Contacts” sections.  Ensure active states are clearly indicated and keyboard navigation is supported throughout the navigation hierarchy.

## Feedback

Communicate system status using **Alert** and **Toast**.  Alerts are persistent messages that display inline and remain visible until dismissed, whereas Toasts appear temporarily and disappear automatically.  Choose the appropriate semantic variant (info, success, warning, error) to match the message context.  Use **Spinner** or **ProgressBar** to indicate ongoing operations.

## Responsive Layout

Our layout primitives support responsive design using the breakpoint tokens.  Wrap page content in a **Container** to centre it and constrain its width.  Use **Grid** and **GridItem** to create a 12‑column grid.  Adjust `span` properties at different breakpoints to reflow content from multiple columns to a single column on small screens.  Avoid horizontal scrolling and ensure interactive elements remain tap‑friendly on touch devices.

For additional pattern guidance, refer to the upcoming sections on **Search**, **Filtering**, **Data visualisation** and **Multi‑step onboarding**.