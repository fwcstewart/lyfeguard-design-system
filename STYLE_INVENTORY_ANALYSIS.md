# Lyfeguard Design System - Style Inventory Analysis

This document compares the existing Lyfeguard theme CSS conventions (from the style inventory) with the current design system implementation, identifying gaps, inconsistencies, and opportunities for improvement.

## Executive Summary

The current design system has a solid foundation with token-driven architecture, but there are several gaps when compared to the legacy theme's component patterns. Key areas needing attention:

1. **Missing color tokens** - Several theme colors (Secondary `#08252E`, Tertiary `#F0EFEF`, Dark `#051A22`, Page `#F5F5F5`, Pac(y)fic `#177B9A`, Daintree `#07252f`, Mercury `#EBEBEB`, Medusa Green `#928500`, Pending `#FFA800`, Active `#03E2A0`) are not properly mapped or missing
2. **Typography gaps** - Raleway font family for body text is not defined; only Epilogue is present
3. **Component variants** - Missing several button variants (Dark, Black, White, alert, edit, danger, badge chips, text/icon-only links)
4. **Form patterns** - Missing specialized input patterns (currency padding, address/contact composites, subscription selectors, datepicker theming)
5. **Utility helpers** - Missing radial gradient utility, scrollbar overrides, and other global helpers
6. **Layout tokens** - Missing extended sizing tokens (fractional heights, percentage widths, dashboard widget dimensions)

---

## Color Palette Analysis

### Current Token Structure
The design system uses a semantic token structure:
- `brand` (900, 800, 500 + opacity variants)
- `accent.mint` (#00FFB2) + opacity variants
- `neutral` (0-900 scale)
- `success`, `warning`, `error`, `info` (semantic colors)
- `theme.light` / `theme.dark` (contextual tokens)

### Legacy Theme Colors (from inventory)
- **Primary**: `#00FFB2` ✅ (mapped to `accent.mint`)
- **Secondary**: `#08252E` ⚠️ (similar to `brand.800` `#08282E` but not exact)
- **Tertiary**: `#F0EFEF` ❌ (not in tokens - light gray)
- **Dark**: `#051A22` ✅ (mapped to `brand.900`)
- **Page**: `#F5F5F5` ✅ (mapped to `neutral.50`)
- **Pac(y)fic**: `#177B9A` ✅ (mapped to `brand.500`)
- **Daintree**: `#07252f` ⚠️ (very close to `brand.900` `#051A22` but different)
- **Mercury**: `#EBEBEB` ❌ (not in tokens - light border color)
- **Error**: `#FD5353` ⚠️ (current `error.500` is `#E24C4B` - different shade)
- **Medusa Green**: `#928500` ❌ (not in tokens - muted green/yellow)
- **Warning**: `#BCB25A` ⚠️ (current `warning.500` is `#F7B539` - different shade)
- **Pending**: `#FFA800` ❌ (not in tokens - orange/yellow)
- **Active**: `#03E2A0` ⚠️ (close to `success.500` `#00FFB2` but different)

### Recommendations
1. **Add missing color tokens**:
   - `tertiary` → `#F0EFEF` (light surface color)
   - `mercury` → `#EBEBEB` (border/subtle background)
   - `pending` → `#FFA800` (orange status indicator)
   - `medusaGreen` → `#928500` (muted accent, if still needed)
   - Consider adding `daintree` if it's distinct from `brand.900`

2. **Review semantic color mappings**:
   - Verify if `error.500` should be `#FD5353` or keep `#E24C4B`
   - Verify if `warning.500` should be `#BCB25A` or keep `#F7B539`
   - Verify if `success.500` should be `#03E2A0` or keep `#00FFB2`

3. **Add opacity variants** for new colors where needed (following existing pattern)

---

## Typography Analysis

### Current Token Structure
- **Font family**: Only `Epilogue` defined
- **Sizes**: Heading (xl, lg, md, sm, xs), Body (lg, base, sm, xs), UI (label, button, overline)
- **Weights**: regular (400), medium (500), semiBold (600), bold (700)
- **Line heights**: Defined per category and size

### Legacy Theme Typography
- **Body copy**: Light-weight Raleway with relaxed leading and dark gray text
- **Headings**: Epilogue display family with tight leading
- **Sizes**: H1 (5xl/extra-bold) → H5 (lg/medium)
- **HTML content helpers**: `.html-content` with standardized CMS content styles

### Gaps
1. **Missing Raleway font family** - Body text should use Raleway, not Epilogue
2. **Missing font weight "light"** - Legacy uses light-weight for body
3. **Missing HTML content utility classes** - No equivalent for `.html-content` styling
4. **Missing typography utility classes** - No `.oc-text-gray`, `.oc-link-strong` equivalents

### Recommendations
1. **Add Raleway to font tokens**:
   ```json
   "font": {
     "family": {
       "sans": { "value": "\"Epilogue\", -apple-system, BlinkMacSystemFont, sans-serif" },
       "body": { "value": "\"Raleway\", -apple-system, BlinkMacSystemFont, sans-serif" }
     }
   }
   ```

2. **Add light weight**:
   ```json
   "weight": {
     "light": { "value": "300" },
     "regular": { "value": "400" },
     // ... existing
   }
   ```

3. **Create HTMLContent component or utility styles** for CMS content rendering

---

## Component Patterns Analysis

### Buttons

#### Current Implementation
- Variants: `primary`, `secondary`, `tertiary`
- Sizes: `sm`, `md`, `lg`
- States: loading, disabled, hover, focus, active
- Icons: `iconLeft`, `iconRight` support

#### Legacy Theme Variants
- Primary/Secondary (filled) ✅
- Tertiary/Outline (borders) ✅
- **Dark/Black/White fills** ❌
- **Alert/edit/danger treatments** ❌
- **Badge chips** ❌
- **Text/icon-only links** ❌

#### Recommendations
1. **Add button variants**:
   - `dark` - Dark background with light text
   - `black` - Black background variant
   - `white` - White background with dark text
   - `danger` - Error/warning state button
   - `ghost` - Text-only button (enhancement of `tertiary`)

2. **Add badge chip variant** - Small, pill-shaped button for tags

3. **Consider icon-only button** - Square/circular button with just an icon

### Form Inputs

#### Current Implementation
- Standard input with label, helper text, error states
- Prefix/suffix support
- Character counter
- Disabled states
- Focus rings with Primary color

#### Legacy Theme Patterns
- `.form-bordered` - Label + input grouping ✅ (similar to current)
- **Secondary variation** - Light surface backgrounds ❌
- **Currency padding** - Specialized currency input styling ❌
- **Address/contact composites** - Multi-field input groups ❌
- **Subscription selectors** - Specialized select styling ❌
- **Datepicker theming** - Custom date input styling ⚠️ (DateInput exists but may need styling updates)

#### Recommendations
1. **Add input variant prop**:
   - `default` - Current bordered style
   - `secondary` - Light surface background variant

2. **Create specialized input components**:
   - `CurrencyInput` - With currency symbol and formatting
   - `AddressInput` - Composite field group for addresses
   - `ContactInput` - Composite field group for contact info

3. **Enhance DateInput styling** - Review if it matches legacy datepicker theming

### Cards and Badges

#### Current Implementation
- Card with header/footer support
- Clickable variant
- Badge with status variants (primary, success, warning, error, info)
- Badge appearances (pill, solid, outline)

#### Legacy Theme
- White (or dark transparent) backgrounds ✅
- Rounded corners ✅
- Grid-based account items ⚠️ (may need layout examples)
- Badges with active/pending/error semantic fills ✅

#### Gaps
- **Missing "pending" badge variant** (orange/yellow status)
- **Missing grid-based card layouts** (account items pattern)

#### Recommendations
1. **Add "pending" badge variant** using the new `pending` color token

2. **Create CardGrid or AccountCard component** for grid-based account item layouts

### Navigation

#### Current Implementation
- `TopNav` - Top navigation bar
- `Sidebar` - Collapsible sidebar navigation
- Keyboard accessible
- Responsive

#### Legacy Theme
- `.nav-item` - Sidebar entries with muted Secondary tone ✅
- Icon spacing ✅
- Active gradient highlight ⚠️ (needs verification)
- Dashboard switcher tabs with bold active states and underline accents ⚠️

#### Recommendations
1. **Review Sidebar active state styling** - Ensure gradient highlight matches legacy
2. **Add dashboard switcher tab variant** - Bold active states with underline accents

### Tabs

#### Current Implementation
- Horizontal tab bar
- Content panels
- Keyboard navigation (Arrow keys, Home, End)
- Disabled tab support

#### Legacy Theme
- Grid-based tab headers ⚠️
- Plan boxes with Secondary backgrounds ⚠️
- White text on Secondary ⚠️
- Hidden radios/checkboxes for plan selection ⚠️
- Feature lists and price headers ⚠️
- Mobile/bulk tab treatments with bordered bottoms ⚠️
- Active Primary underlines ⚠️

#### Gaps
- **Missing plan/selection tab variant** - For pricing/plan selection UI
- **Missing mobile tab variant** - Bordered bottom style
- **Missing underline accent** - Primary color underline for active tab

#### Recommendations
1. **Add tab variant prop**:
   - `default` - Current style
   - `underline` - Active tab has Primary color underline
   - `bordered` - Bordered bottom style for mobile
   - `plan` - Secondary background with white text for plan selection

2. **Create PlanTabs component** - Specialized component for pricing/plan selection with radio/checkbox integration

### Tables

#### Current Implementation
- Basic table component
- Accessible structure

#### Legacy Theme
- DataTables integration ⚠️
- Bordered headers/footers ⚠️
- Divided rows ⚠️
- Centered utilities ⚠️
- Custom pagination with Primary-highlighted current pages ⚠️
- White pill controls for next/previous buttons ⚠️

#### Gaps
- **Missing table variants** - Bordered, divided, etc.
- **Missing pagination component** - Custom styled pagination
- **Missing DataTables integration** - If still needed

#### Recommendations
1. **Enhance Table component** with variants:
   - `bordered` - Bordered headers/footers
   - `divided` - Divided rows
   - `centered` - Centered content variant

2. **Create Pagination component** - With Primary-highlighted current page and pill-styled controls

### Modals

#### Current Implementation
- Overlay with backdrop
- Rounded modal container
- Header with title/description
- Footer support
- Focus trap
- Keyboard navigation (Escape to close)
- ARIA support

#### Legacy Theme
- Translucent black backdrops ✅
- Rounded `modal-box` containers ✅
- Header/paragraph typography ✅
- Primary hover close buttons ✅
- Light and dark variants ⚠️
- Footer alignment ⚠️
- Expanded widths for table-heavy content ⚠️

#### Gaps
- **Missing size variants** - Default, expanded (for tables)
- **Missing explicit light/dark variants** - Currently uses theme

#### Recommendations
1. **Add modal size prop**:
   - `default` - Current size
   - `expanded` - Wider for table-heavy content

2. **Review close button styling** - Ensure Primary hover state matches legacy

---

## Utility Helpers Analysis

### Current Implementation
- `SkipLink` - Accessibility utility ✅
- `VisuallyHidden` - Accessibility utility ✅
- `cx` helper - Class name utility ✅

### Legacy Theme Utilities
- `.oc-hide`, `.hide` - Visibility helpers ❌
- Password-eye positioning ❌
- Iframe resets ❌
- Material Symbols fill settings ❌
- Tooltip skinning ❌
- `.bg-radial-gradient` - Radial gradient helper ❌
- Scrollbar overrides ❌
- HR overrides ❌

### Recommendations
1. **Create utility styles file** for:
   - Visibility helpers (`.hide`, `.oc-hide`)
   - Scrollbar styling
   - HR styling
   - Iframe resets

2. **Add radial gradient utility**:
   ```css
   .bg-radial-gradient {
     background: radial-gradient(circle, var(--color-secondary) 0%, var(--color-dark) 100%);
   }
   ```

3. **Create Tooltip component** if not already present

---

## Layout & Spacing Analysis

### Current Token Structure
- Spacing: 0-10 scale (0px to 64px, 4px increments)
- Radius: none, sm, md, lg, xl, full
- Layout: Grid columns (12), container max-width, gutter sizes

### Legacy Theme Extensions
- **Fractional heights**: `3/4-screen`, `half-screen` ❌
- **Percentage widths**: 0-100% ❌
- **Additional inset dimensions** ❌
- **Min/max dimensions for dashboard widgets** ❌
- **Container responsive overrides** at sm, md, xl breakpoints ⚠️

### Recommendations
1. **Add extended sizing tokens** if needed for dashboard/widget layouts:
   ```json
   "sizing": {
     "height": {
       "halfScreen": { "value": "50vh" },
       "threeQuarterScreen": { "value": "75vh" }
     },
     "width": {
       // Percentage widths if commonly used
     }
   }
   ```

2. **Review container implementation** - Ensure responsive max-width overrides match legacy behavior

---

## Missing Components

Based on the style inventory, these components/patterns are referenced but may not exist:

1. **Tooltip** - Referenced in utilities but not found in components
2. **Dropdown** - Referenced in component partials but not found
3. **Address Book** - Referenced in component partials
4. **Widgets** - Dashboard widget components
5. **Payment** - Payment form components
6. **Pincode Input** - Specialized numeric input
7. **Transactions** - Transaction list/table component

### Recommendations
1. **Audit component partials** in legacy theme to identify which patterns are still needed
2. **Prioritize component creation** based on current product needs
3. **Document component gaps** in design system roadmap

---

## Action Items Priority

### High Priority
1. ✅ Add missing color tokens (tertiary, mercury, pending)
2. ✅ Add Raleway font family for body text
3. ✅ Add missing button variants (dark, danger, ghost)
4. ✅ Add "pending" badge variant
5. ✅ Enhance Table component with variants (bordered, divided)
6. ✅ Create Pagination component

### Medium Priority
1. ⚠️ Review and align semantic colors (error, warning, success) with legacy if needed
2. ⚠️ Add input secondary variant
3. ⚠️ Create specialized input components (Currency, Address, Contact)
4. ⚠️ Add tab variants (underline, bordered, plan)
5. ⚠️ Create PlanTabs component
6. ⚠️ Add modal size variants

### Low Priority
1. 📋 Add utility helpers (visibility, scrollbar, HR, radial gradient)
2. 📋 Create HTMLContent component/utilities
3. 📋 Add extended sizing tokens if needed
4. 📋 Audit and create missing components (Tooltip, Dropdown, etc.)

---

## Notes

- This analysis is based on the provided style inventory document
- Some legacy patterns may be outdated or no longer needed
- Prioritize based on current product requirements
- Consider creating a migration guide for teams moving from legacy theme to design system
- Regular audits should be conducted to ensure design system stays aligned with product needs

