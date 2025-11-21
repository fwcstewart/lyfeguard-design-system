---
id: foundations-overview
title: Foundations Overview
description: Core foundations, principles and philosophy of the Lyfeguard design system.
---

# Foundations

This overview defines the guiding philosophy behind the Lyfeguard design system.  It outlines the reasons the system exists, the design principles and brand attributes that shape its tone, and the accessibility and usability standards that influence every component we build.

## Purpose

The Lyfeguard Design System exists to provide **a cohesive, scalable, and human design foundation that elevates every Lyfeguard experience** — from insight to interface — with clarity, confidence and care.  It standardises how we design and build across the organisation, ensuring:

- A unified visual language
- Consistent patterns and interactions
- Faster development and smoother collaboration
- Better accessibility and usability
- A calm, trustworthy experience for users handling important life information

This is not just a library of components — it is the **source of truth** for how Lyfeguard builds product, communicates visually and expresses its purpose.

## Design Principles

These principles act as guardrails for every design and product decision.  They ensure that interfaces remain trustworthy and human‑centred, reduce cognitive load and scale gracefully across contexts.

1. **Trust Through Clarity** – Every interface should help users feel grounded and informed.  Information is organised, legible and predictable.  Clarity reinforces trust — the foundation of meaningful life and financial decisions.
2. **Human, Not Corporate** – Lyfeguard is built for people navigating real‑life complexity.  Our design language is warm, empathetic and supportive — never cold or bureaucratic.
3. **Simple Over Clever** – We reduce friction and avoid unnecessary complexity.  Simplicity isn’t minimalism; it’s intentional clarity.
4. **Consistency Creates Confidence** – When components, spacing and behaviours feel familiar, users feel safe.  Consistency enhances reliability and reduces cognitive load.
5. **Accessible by Default** – Our products must be usable by everyone.  Accessibility isn’t an extra step — it’s a starting point.
6. **Flexible, Not Fragile** – The system adapts to new features and contexts without breaking.  Components scale gracefully across devices, content types and use cases.
7. **Built for Speed** – Both designers and developers should be able to work faster and with fewer decisions.  The system removes guesswork.

## Brand Attributes

Our brand attributes define the emotional impression our design system should convey.  They influence colour choices, spacing rhythm, iconography and interaction patterns.

- **Reassuring** – Calm, organised and low‑friction.  Interfaces that reduce stress.
- **Intelligent** – Smart layouts, thoughtful defaults and meaningful insights.
- **Uncluttered** – Breathing space, deliberate typography and quiet surfaces.
- **Human** – Warmth in tone and visual rhythm.  User‑friendly microcopy.
- **Modern** – Crisp, contemporary and future‑ready.
- **Secure** – Subtle cues reinforcing safety, trust and stability.

## Tone & Voice

Tone helps users feel in control, supported and respected.  Lyfeguard’s tone is:

- **Empathetic** – We recognise that life admin involves sensitive, sometimes emotional topics.  We use language that acknowledges this gently.
- **Clear & Direct** – We say what we mean.  No jargon, no filler.
- **Supportive** – We guide users with helpful prompts and explainers without overwhelming them.
- **Calmly Confident** – We speak with expertise, not arrogance.
- **Human but Professional** – Conversational enough to be relatable; formal enough to feel trustworthy.

### Error Messages

When something goes wrong, provide constructive guidance:

- State the problem clearly.
- Explain what happened.
- Provide the exact next step.
- Avoid blame (e.g. “We couldn’t process that because …” instead of “You did X wrong”).

### Success Messages

Celebrating success doesn’t have to be loud:

- Keep messages short.
- Be congratulatory but subtle.
- Reaffirm progress (e.g. “Document added successfully”).

## Accessibility Standards

Lyfeguard follows WCAG AA as the baseline.  Our interfaces must be:

- **Perceivable** – Provide text alternatives for images, charts, icons and media so assistive technologies can interpret them【880714660275785†L185-L204】.  Text alternatives also serve as labels for controls and improve keyboard navigation.
- **Operable** – UI components and navigation must be operable via keyboard, mouse and assistive technologies.  Components such as buttons, inputs, tabs and modals should support keyboard interactions and provide visible focus indicators.
- **Understandable** – Use clear language, consistent layouts and predictable interactions.  Forms should provide helper text, error messages and appropriate labels.
- **Robust** – Use semantic HTML and ARIA attributes to ensure content works with current and future browsers, devices and assistive technologies.

Accessibility is treated as a requirement, not an enhancement.  For example, the GOV.UK design system requires a skip link at the start of every page so keyboard users can bypass repeated navigation【741524233813948†L273-L291】.  The `SkipLink` and `VisuallyHidden` utilities in our component library make it easy to achieve this.

## Product Experience Principles

These internal principles guide the design of complex workflows — documents, life events, contacts and other multi‑step journeys:

- **Show users where they are** – Clear page titles, breadcrumbs and tab structures help users understand their current context.
- **Explain what’s expected** – Provide helper text and examples built into forms.
- **Break down complexity** – Use progressive disclosure and step‑by‑step flows.
- **Minimise irreversible actions** – Require confirmation for destructive actions.
- **Provide meaningful defaults** – Users shouldn’t need to think about structure; the product guides them with sensible defaults.

## How to Use This System

- **Design** – Use the Figma component library and tokens to build consistent layouts.
- **Develop** – Install the component library and tokens package from `@lyfeguard/design-system` and import the components and CSS variables into your codebase.
- **Contribute** – Follow the governance process to propose improvements or new components.  Use our issue template for component proposals.
- **Document** – Update the documentation site whenever something changes.  The docs live in the `apps/docs/docs` directory and are auto‑generated by Docusaurus.

By adhering to these foundations you’ll create experiences that are clear, human and trustworthy – a reflection of Lyfeguard’s mission to simplify life management.