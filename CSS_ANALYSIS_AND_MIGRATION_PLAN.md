# CSS Analysis and Component Migration Plan

## Executive Summary

The `currentcss.css` file contains **9,926 lines** of CSS defining a comprehensive design system with components, utilities, and styles. This document outlines a plan to migrate these styles into the existing Lyfeguard Design System architecture using Vanilla Extract and design tokens.

## Component Inventory

### 1. Form Components
**Current CSS Classes:**
- `.form-bordered` - Main form container
- `.input-group` - Input wrapper
- `.input-field` - Text inputs
- `.input-field-white` - White variant inputs
- `.input-checkbox` - Checkbox inputs
- `.input-radios` - Radio button groups
- `.checkbox-list` - Checkbox groups
- `.input-date` - Date inputs
- `.select-input` - Select dropdowns
- `.input-link` - Input with prefix (e.g., URL)
- `.pincode-input` - PIN code inputs
- `.currency` - Currency inputs
- `.upload-container` - File upload
- `.error-message` - Error states
- `.readonly-input` - Read-only inputs

**Existing Components:**
- ✅ `Input` - Basic text input
- ✅ `Textarea` - Multi-line input
- ✅ `Select` - Dropdown select
- ✅ `Checkbox` - Checkbox input
- ✅ `RadioGroup` - Radio button group
- ✅ `DateInput` - Date picker
- ✅ `FileUpload` - File upload
- ✅ `Toggle` - Switch component

**Action Required:**
- Enhance existing components to support all variants (white, readonly, error states)
- Add prefix/suffix support to Input component
- Create specialized components: `PincodeInput`, `CurrencyInput`
- Improve error message handling across all form components

### 2. Button Components
**Current CSS Classes:**
- `.btn` - Base button
- `.btn-primary` - Primary action (mint green)
- `.btn-primary-inverted` - Inverted primary
- `.btn-secondary` - Secondary action
- `.btn-tertiary` - Tertiary action
- `.btn-outline` - Outline variant
- `.btn-outline-secondary` - Outline secondary
- `.btn-outline-white` - Outline white
- `.btn-outline-modal` - Outline for modals
- `.btn-dark` - Dark background
- `.btn-dark-secondary` - Dark secondary
- `.btn-white` - White background
- `.btn-black` - Black background
- `.btn-alert` - Alert/destructive action
- `.btn-edit` - Edit action
- `.btn-inactive` - Disabled state

**Existing Components:**
- ✅ `Button` - Has primary, secondary, tertiary variants

**Action Required:**
- Add missing variants: `inverted`, `outline-white`, `outline-modal`, `dark`, `dark-secondary`, `white`, `black`, `alert`, `edit`
- Ensure all variants use design tokens
- Add icon support improvements
- Improve disabled/inactive states

### 3. Card Components
**Current CSS Classes:**
- `.card` - Base card
- `.card-section` - Card sections
- `.card-data` - Data display cards
- `.hub-box` - Hub selection card
- `.hub-item` - Hub list item
- `.subscription-plan-box` - Subscription plan card
- `.choose-subscription` - Subscription selector

**Existing Components:**
- ✅ `Card` - Basic card
- ✅ `HubCard` - Hub-specific card
- ✅ `FeatureCard` - Feature card
- ✅ `ImageCard` - Image card

**Action Required:**
- Enhance `Card` with section support
- Create `SubscriptionPlanCard` component
- Improve `HubCard` to match `.hub-box` styles
- Add card variants for different use cases

### 4. Modal Components
**Current CSS Classes:**
- `.modal` - Modal overlay
- `.modal-wrapper` - Modal container
- `.modal-box` - Modal content box
- `.modal-dialog` - Dialog container
- `.modal-content` - Content area
- `.modal-header` - Header section
- `.modal-body` - Body section
- `.modal-footer` - Footer section
- `.modal-close` - Close button
- `.modal-white` - White variant
- `.modal-dark` - Dark variant
- `.modal-wide` - Wide variant

**Existing Components:**
- ✅ `Modal` - Basic modal

**Action Required:**
- Enhance `Modal` with header/body/footer structure
- Add variants: `white`, `dark`, `wide`
- Improve close button styling
- Add proper focus management

### 5. Alert/Toast Components
**Current CSS Classes:**
- `.flash-message` - Base flash message
- `.flash-message .success` - Success variant
- `.flash-message .error` - Error variant
- `.flash-message .warning` - Warning variant
- `.flash-message .info` - Info variant

**Existing Components:**
- ✅ `Alert` - Alert component
- ✅ `Toast` - Toast notification system

**Action Required:**
- Ensure `Alert` matches flash message styles
- Enhance `Toast` to support all variants
- Add proper icon support
- Improve animation/transition

### 6. Navigation Components
**Current CSS Classes:**
- `.nav-item` - Navigation item
- `.nav-item-active` - Active state
- `.nav-tabs` - Tab navigation
- `.tab-item` - Tab item
- `.tabs` - Tabs container
- `.tabs-nav` - Tab navigation bar

**Existing Components:**
- ✅ `TopNav` - Top navigation
- ✅ `Sidebar` - Sidebar navigation
- ✅ `Tabs` - Tab component

**Action Required:**
- Review and align with existing navigation components
- Ensure active states match
- Improve tab styling

### 7. Badge Components
**Current CSS Classes:**
- `.badge` - Base badge
- `.badge-active` - Active state
- `.badge-pending` - Pending state
- `.badge-error` - Error state

**Existing Components:**
- ✅ `Badge` - Badge component

**Action Required:**
- Add missing variants: `active`, `pending`
- Ensure error variant matches
- Review all badge states

### 8. Dropdown Components
**Current CSS Classes:**
- `.dropdown` - Dropdown container
- `.dropdown-menu` - Dropdown menu
- `.dropdown-item` - Dropdown item
- `.dropdown-toggle` - Toggle button

**Existing Components:**
- ✅ `Dropdown` - Dropdown component

**Action Required:**
- Review and enhance `Dropdown` component
- Ensure menu positioning matches
- Improve keyboard navigation

### 9. Progress Components
**Current CSS Classes:**
- `.progress-bar` - Progress bar container
- `.progress-item` - Progress segment

**Existing Components:**
- ✅ `ProgressBar` - Progress bar

**Action Required:**
- Review and enhance `ProgressBar`
- Add segment support if needed

### 10. Table Components
**Current CSS Classes:**
- Various table styles in `.html-content table`
- `.modal-table` - Modal table variant

**Existing Components:**
- ✅ `Table` - Table component

**Action Required:**
- Review table styles
- Ensure all variants are supported

### 11. Filter Components
**Current CSS Classes:**
- `.transactions-filter-view` - Filter view toggle
- `.input-filter` - Filter input
- `.filter-icon` - Filter icon
- `.transactions-date-period` - Date period filter

**Existing Components:**
- ✅ `Filters` - Filter component
- ✅ `DateRange` - Date range filter

**Action Required:**
- Review and enhance filter components
- Add view toggle support
- Improve date period filter

### 12. Datepicker
**Current CSS Classes:**
- `.datepicker` - Datepicker container
- `.datepicker-controls` - Control buttons
- `.datepicker-grid` - Calendar grid
- `.datepicker .selected` - Selected date

**Existing Components:**
- ✅ `DateInput` - Date input with picker

**Action Required:**
- Review datepicker styling
- Ensure selected states match
- Improve calendar grid styling

## Utility Classes

The CSS file also contains many utility classes (spacing, typography, colors, etc.). These should be:
1. **Removed** - If they duplicate design token functionality
2. **Migrated to tokens** - Convert hard-coded values to token references
3. **Kept as utilities** - Only if they provide unique functionality not covered by tokens

## Migration Strategy

### Phase 1: Analysis & Planning (Current)
- ✅ Document all components
- ✅ Identify existing vs. new components
- ✅ Create migration plan

### Phase 2: Token Extraction
- Extract hard-coded colors to design tokens
- Extract spacing values to spacing tokens
- Extract typography to font tokens
- Extract border-radius to radius tokens
- Extract shadows to shadow tokens

### Phase 3: Component Enhancement
1. **Priority 1 (High Impact):**
   - Button variants
   - Form input enhancements
   - Modal improvements
   - Alert/Toast enhancements

2. **Priority 2 (Medium Impact):**
   - Card variants
   - Badge variants
   - Navigation improvements
   - Dropdown enhancements

3. **Priority 3 (Lower Impact):**
   - Specialized inputs (Pincode, Currency)
   - Filter improvements
   - Table enhancements

### Phase 4: Component Creation
- Create new components where needed
- Follow component structure guidelines
- Add tests and stories
- Update documentation

### Phase 5: Cleanup
- Remove old CSS classes
- Update all references
- Delete `currentcss.css` file
- Update documentation

## Key Design Patterns Identified

1. **Color Scheme:**
   - Primary: `rgb(0 255 178)` (mint green) - matches `accentMint` token
   - Secondary: `rgb(8 37 46)` (dark teal) - matches `brand900` token
   - Background: `rgb(245 245 245)` - light gray
   - Dark mode support via `.dark` class

2. **Border Radius:**
   - Small: `.375rem` (6px)
   - Medium: `.5rem` (8px)
   - Large: `.75rem` (12px)
   - Round: `1rem` (16px) or `9999px` for fully round

3. **Spacing:**
   - Uses Tailwind-style spacing scale
   - Should map to design system spacing tokens

4. **Typography:**
   - Display font: `Epilogue`
   - Body font: `Raleway`
   - Font weights: 300, 400, 500, 600, 700, 800

5. **Focus States:**
   - Ring color: Primary mint green
   - Ring width: 2px
   - Consistent across all interactive elements

## Recommendations

1. **Use Design Tokens:** All hard-coded values should reference tokens from `globals.css.ts`
2. **Maintain Consistency:** Ensure all components follow the same patterns
3. **Accessibility First:** All components must be accessible (ARIA, keyboard navigation)
4. **Dark Mode:** Ensure all components support dark mode via the `.dark` class
5. **TypeScript First:** All components must be fully typed
6. **Test Coverage:** All new/enhanced components need tests
7. **Documentation:** Update Storybook stories and docs

## Next Steps

1. Review this analysis with the team
2. Prioritize components based on usage
3. Start with Phase 2 (Token Extraction)
4. Begin component enhancements in priority order
5. Create a tracking issue/board for migration progress

## Mirroring `currentcss.css` – Execution Plan

To mirror the legacy styles before making improvements, execute the migration in **small, shippable increments**. Each step should land with stories and tests so we can validate parity against `currentcss.css`.

### Wave 1: High-visibility surfaces
- **Buttons:** Finalize all legacy variants (primary, secondary, tertiary, dark, dark-secondary, alert/edit/inactive, outline white/modal, white/black) with token-based colours and hover/active rings that match the CSS focus/hover states.
- **Badges:** Recreate `.btn-badge-*` states (`active`, `pending`, `secondary`, `error`) with matching sizing, radii, and typography. Ensure dark-mode tokens mirror legacy contrast rules.
- **Form Inputs:** Align input, select, radio/checkbox, and textarea containers with white/readonly/error states plus prefix/suffix affordances. Add error helper text spacing consistent with `currentcss.css`.
- **Modal Shell:** Implement header/body/footer slots and size variants (default, wide, dark/white backgrounds) while keeping overlay colour and close-button placement consistent.

### Wave 2: Layout and data display
- **Cards:** Add sectioned card layouts, subscription plan cards, and hub card styling that mirror `.card`, `.hub-box`, and `.subscription-plan-box` patterns.
- **Navigation:** Match tab/active states and spacing from `.nav-item`, `.tabs-nav`, and `.tab-item` while preserving keyboard navigation.
- **Alerts/Toasts:** Ensure success/error/warning/info banners reuse the flash-message spacing, icon sizing, and transition timings from the legacy file.

### Wave 3: Specialized experiences
- **Specialised Inputs:** Build `PincodeInput` and `CurrencyInput` variants that mirror `.pincode-input` and `.currency` behaviour (fixed spacing, monospace digits, locale-aware separators).
- **Filters & Tables:** Bring the `.transactions-*` filters and `.modal-table` spacing/striping into the existing Filter and Table components.
- **Datepicker:** Align grid spacing, selected/hover states, and control buttons with `.datepicker` rules.

### Delivery checkpoints
- After each wave, run a **visual spot check in Storybook** against `currentcss.css` screenshots and record deltas in the docs.
- Track remaining gaps in a migration checklist so teams know which components are parity-complete before enhancements begin.

## Progress log

- **2024-06-03** – Mirrored legacy `.input-field`/`.input-field-white` affordances in `Input` by using neutral backgrounds, larger radii, and mint focus rings. Added stories and tests for white/read-only/disabled states. **Next:** extend the same treatment to `Textarea` and `Select`, then tackle input error/helper spacing across grouped form fields.
- **2024-06-04** – Aligned `Textarea` with legacy `.input-field` styles, including neutral/white surfaces, mint focus rings, readonly and disabled styling, and data markers. Expanded stories to cover white/read-only/disabled usage and added tests. **Next:** carry the neutral/white surface and focus updates into `Select`, then revisit shared helper/error spacing for grouped form fields.

