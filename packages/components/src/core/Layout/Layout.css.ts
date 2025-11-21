import { globalStyle, style } from '@vanilla-extract/css';
import { darkVars, vars } from '../../globals.css';
import { breakpointQueries, resolveSpacing, spacingTokens } from './spacing';

/**
 * Container provides a responsive wrapper for page content. It centers
 * children horizontally and applies horizontal padding based on the spacing
 * scale. A max-width can be set via inline styles on the consuming
 * component.
 */
export const container = style({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: resolveSpacing('xl'),
  paddingRight: resolveSpacing('xl'),
});

/**
 * Grid is a lightweight CSS grid wrapper. The number of columns and the gap
 * between grid items can be customized via inline styles on the component.
 */
export const grid = style({
  display: 'grid',
  width: '100%',
  gap: `var(--grid-gap, ${spacingTokens.md})`,
  '@media': {
    [breakpointQueries.sm]: {
      gap: `var(--grid-gap-sm, var(--grid-gap, ${spacingTokens.md}))`,
    },
    [breakpointQueries.md]: {
      gap: `var(--grid-gap-md, var(--grid-gap-sm, var(--grid-gap, ${spacingTokens.md})))`,
    },
    [breakpointQueries.lg]: {
      gap: `var(--grid-gap-lg, var(--grid-gap-md, var(--grid-gap, ${spacingTokens.md})))`,
    },
    [breakpointQueries.xl]: {
      gap: `var(--grid-gap-xl, var(--grid-gap-lg, var(--grid-gap, ${spacingTokens.md})))`,
    },
    [breakpointQueries.xxl]: {
      gap: `var(--grid-gap-xxl, var(--grid-gap-xl, var(--grid-gap, ${spacingTokens.md})))`,
    },
    [breakpointQueries.widescreen]: {
      gap: `var(--grid-gap-widescreen, var(--grid-gap-xxl, var(--grid-gap, ${spacingTokens.md})))`,
    },
  },
});

/**
 * Stack provides a flexible flexbox wrapper with configurable direction,
 * spacing, optional dividers and responsive margin/padding.
 */
export const stack = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: `var(--stack-gap, ${spacingTokens.md})`,
  padding: `var(--stack-padding, ${spacingTokens.none})`,
  margin: `var(--stack-margin, ${spacingTokens.none})`,
  '@media': {
    [breakpointQueries.sm]: {
      gap: `var(--stack-gap-sm, var(--stack-gap, ${spacingTokens.md}))`,
      padding: `var(--stack-padding-sm, var(--stack-padding, ${spacingTokens.none}))`,
      margin: `var(--stack-margin-sm, var(--stack-margin, ${spacingTokens.none}))`,
    },
    [breakpointQueries.md]: {
      gap: `var(--stack-gap-md, var(--stack-gap-sm, var(--stack-gap, ${spacingTokens.md})))`,
      padding: `var(--stack-padding-md, var(--stack-padding-sm, var(--stack-padding, ${spacingTokens.none})))`,
      margin: `var(--stack-margin-md, var(--stack-margin-sm, var(--stack-margin, ${spacingTokens.none})))`,
    },
    [breakpointQueries.lg]: {
      gap: `var(--stack-gap-lg, var(--stack-gap-md, var(--stack-gap, ${spacingTokens.md})))`,
      padding: `var(--stack-padding-lg, var(--stack-padding-md, var(--stack-padding, ${spacingTokens.none})))`,
      margin: `var(--stack-margin-lg, var(--stack-margin-md, var(--stack-margin, ${spacingTokens.none})))`,
    },
    [breakpointQueries.xl]: {
      gap: `var(--stack-gap-xl, var(--stack-gap-lg, var(--stack-gap, ${spacingTokens.md})))`,
      padding: `var(--stack-padding-xl, var(--stack-padding-lg, var(--stack-padding, ${spacingTokens.none})))`,
      margin: `var(--stack-margin-xl, var(--stack-margin-lg, var(--stack-margin, ${spacingTokens.none})))`,
    },
    [breakpointQueries.xxl]: {
      gap: `var(--stack-gap-xxl, var(--stack-gap-xl, var(--stack-gap, ${spacingTokens.md})))`,
      padding: `var(--stack-padding-xxl, var(--stack-padding-xl, var(--stack-padding, ${spacingTokens.none})))`,
      margin: `var(--stack-margin-xxl, var(--stack-margin-xl, var(--stack-margin, ${spacingTokens.none})))`,
    },
    [breakpointQueries.widescreen]: {
      gap: `var(--stack-gap-widescreen, var(--stack-gap-xxl, var(--stack-gap, ${spacingTokens.md})))`,
      padding: `var(--stack-padding-widescreen, var(--stack-padding-xxl, var(--stack-padding, ${spacingTokens.none})))`,
      margin: `var(--stack-margin-widescreen, var(--stack-margin-xxl, var(--stack-margin, ${spacingTokens.none})))`,
    },
  },
});

export const stackRow = style({
  flexDirection: 'row',
});

export const stackWithColumnDividers = style({});

// Use globalStyle for selectors that target child elements
globalStyle(`${stackWithColumnDividers} > *:not(:last-child)`, {
  borderBottom: `1px solid ${vars.color.theme.border}`,
  paddingBottom: resolveSpacing('sm'),
});

globalStyle(`.dark ${stackWithColumnDividers} > *:not(:last-child)`, {
  borderBottomColor: darkVars.color.theme.border,
});

export const stackWithRowDividers = style({});

// Use globalStyle for selectors that target child elements
globalStyle(`${stackWithRowDividers} > *:not(:last-child)`, {
  borderRight: `1px solid ${vars.color.theme.border}`,
  paddingRight: resolveSpacing('sm'),
});

globalStyle(`.dark ${stackWithRowDividers} > *:not(:last-child)`, {
  borderRightColor: darkVars.color.theme.border,
});
