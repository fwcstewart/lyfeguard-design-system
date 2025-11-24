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
  paddingLeft: resolveSpacing('md'),
  paddingRight: resolveSpacing('md'),
  '@media': {
    [breakpointQueries.sm]: {
      paddingLeft: resolveSpacing('lg'),
      paddingRight: resolveSpacing('lg'),
    },
    [breakpointQueries.md]: {
      paddingLeft: resolveSpacing('lg'),
      paddingRight: resolveSpacing('lg'),
    },
    [breakpointQueries.lg]: {
      paddingLeft: resolveSpacing('xl'),
      paddingRight: resolveSpacing('xl'),
    },
    [breakpointQueries.xl]: {
      paddingLeft: resolveSpacing('xl'),
      paddingRight: resolveSpacing('xl'),
    },
    [breakpointQueries.widescreen]: {
      paddingLeft: resolveSpacing('2xl'),
      paddingRight: resolveSpacing('2xl'),
    },
  },
});

/**
 * Container with responsive max-width support. Uses CSS custom properties
 * to apply breakpoint-specific max-width values via inline styles.
 */
export const containerResponsive = style([
  container,
  {
    '@media': {
      [breakpointQueries.sm]: {
        maxWidth: 'var(--container-max-width-sm)',
      },
      [breakpointQueries.md]: {
        maxWidth: 'var(--container-max-width-md)',
      },
      [breakpointQueries.lg]: {
        maxWidth: 'var(--container-max-width-lg)',
      },
      [breakpointQueries.xl]: {
        maxWidth: 'var(--container-max-width-xl)',
      },
      [breakpointQueries.xxl]: {
        maxWidth: 'var(--container-max-width-xxl)',
      },
      [breakpointQueries.widescreen]: {
        maxWidth: 'var(--container-max-width-widescreen)',
      },
    },
  },
]);

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
 * GridItem with responsive span support. Uses CSS variables to apply
 * breakpoint-specific column spans.
 */
globalStyle('.grid-item-responsive', {
  '@media': {
    [breakpointQueries.sm]: {
      gridColumn: 'span var(--grid-item-span-sm) / span var(--grid-item-span-sm)',
    },
    [breakpointQueries.md]: {
      gridColumn: 'span var(--grid-item-span-md) / span var(--grid-item-span-md)',
    },
    [breakpointQueries.lg]: {
      gridColumn: 'span var(--grid-item-span-lg) / span var(--grid-item-span-lg)',
    },
    [breakpointQueries.xl]: {
      gridColumn: 'span var(--grid-item-span-xl) / span var(--grid-item-span-xl)',
    },
    [breakpointQueries.xxl]: {
      gridColumn: 'span var(--grid-item-span-xxl) / span var(--grid-item-span-xxl)',
    },
    [breakpointQueries.widescreen]: {
      gridColumn: 'span var(--grid-item-span-widescreen) / span var(--grid-item-span-widescreen)',
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

/**
 * Section provides semantic sectioning with consistent spacing and optional
 * dividers. Uses CSS variables for responsive spacing and padding.
 */
export const section = style({
  width: '100%',
  marginTop: `var(--section-spacing, ${spacingTokens.none})`,
  marginBottom: `var(--section-spacing, ${spacingTokens.none})`,
  padding: `var(--section-padding, ${spacingTokens.none})`,
  '@media': {
    [breakpointQueries.sm]: {
      marginTop: `var(--section-spacing-sm, var(--section-spacing, ${spacingTokens.none}))`,
      marginBottom: `var(--section-spacing-sm, var(--section-spacing, ${spacingTokens.none}))`,
      padding: `var(--section-padding-sm, var(--section-padding, ${spacingTokens.none}))`,
    },
    [breakpointQueries.md]: {
      marginTop: `var(--section-spacing-md, var(--section-spacing-sm, var(--section-spacing, ${spacingTokens.none})))`,
      marginBottom: `var(--section-spacing-md, var(--section-spacing-sm, var(--section-spacing, ${spacingTokens.none})))`,
      padding: `var(--section-padding-md, var(--section-padding-sm, var(--section-padding, ${spacingTokens.none})))`,
    },
    [breakpointQueries.lg]: {
      marginTop: `var(--section-spacing-lg, var(--section-spacing-md, var(--section-spacing, ${spacingTokens.none})))`,
      marginBottom: `var(--section-spacing-lg, var(--section-spacing-md, var(--section-spacing, ${spacingTokens.none})))`,
      padding: `var(--section-padding-lg, var(--section-padding-md, var(--section-padding, ${spacingTokens.none})))`,
    },
    [breakpointQueries.xl]: {
      marginTop: `var(--section-spacing-xl, var(--section-spacing-lg, var(--section-spacing, ${spacingTokens.none})))`,
      marginBottom: `var(--section-spacing-xl, var(--section-spacing-lg, var(--section-spacing, ${spacingTokens.none})))`,
      padding: `var(--section-padding-xl, var(--section-padding-lg, var(--section-padding, ${spacingTokens.none})))`,
    },
    [breakpointQueries.xxl]: {
      marginTop: `var(--section-spacing-xxl, var(--section-spacing-xl, var(--section-spacing, ${spacingTokens.none})))`,
      marginBottom: `var(--section-spacing-xxl, var(--section-spacing-xl, var(--section-spacing, ${spacingTokens.none})))`,
      padding: `var(--section-padding-xxl, var(--section-padding-xl, var(--section-padding, ${spacingTokens.none})))`,
    },
    [breakpointQueries.widescreen]: {
      marginTop: `var(--section-spacing-widescreen, var(--section-spacing-xxl, var(--section-spacing, ${spacingTokens.none})))`,
      marginBottom: `var(--section-spacing-widescreen, var(--section-spacing-xxl, var(--section-spacing, ${spacingTokens.none})))`,
      padding: `var(--section-padding-widescreen, var(--section-padding-xxl, var(--section-padding, ${spacingTokens.none})))`,
    },
  },
});

export const sectionWithDivider = style({});

globalStyle(`${sectionWithDivider}:not(:last-child)`, {
  borderBottom: `1px solid ${vars.color.theme.border}`,
  paddingBottom: resolveSpacing('lg'),
  marginBottom: resolveSpacing('lg'),
});

globalStyle(`.dark ${sectionWithDivider}:not(:last-child)`, {
  borderBottomColor: darkVars.color.theme.border,
});

/**
 * AspectRatio maintains a consistent aspect ratio for its content.
 * Uses CSS aspect-ratio property. The container's height is automatically
 * calculated based on the width and aspect ratio.
 */
export const aspectRatio = style({
  position: 'relative',
  width: '100%',
  display: 'block',
});

export const aspectRatioContain = style({});

// For images, videos, and other media elements - fill container and apply object-fit
globalStyle(`${aspectRatio} > img, ${aspectRatio} > video, ${aspectRatio} > iframe`, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

globalStyle(`${aspectRatioContain} > img, ${aspectRatioContain} > video, ${aspectRatioContain} > iframe`, {
  objectFit: 'contain',
});

// For div and other block elements - fill container
globalStyle(`${aspectRatio} > div`, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

/**
 * Center horizontally centers its children within the available space.
 */
export const center = style({
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: `var(--center-padding, ${spacingTokens.none})`,
  '@media': {
    [breakpointQueries.sm]: {
      padding: `var(--center-padding-sm, var(--center-padding, ${spacingTokens.none}))`,
    },
    [breakpointQueries.md]: {
      padding: `var(--center-padding-md, var(--center-padding-sm, var(--center-padding, ${spacingTokens.none})))`,
    },
    [breakpointQueries.lg]: {
      padding: `var(--center-padding-lg, var(--center-padding-md, var(--center-padding, ${spacingTokens.none})))`,
    },
    [breakpointQueries.xl]: {
      padding: `var(--center-padding-xl, var(--center-padding-lg, var(--center-padding, ${spacingTokens.none})))`,
    },
    [breakpointQueries.xxl]: {
      padding: `var(--center-padding-xxl, var(--center-padding-xl, var(--center-padding, ${spacingTokens.none})))`,
    },
    [breakpointQueries.widescreen]: {
      padding: `var(--center-padding-widescreen, var(--center-padding-xxl, var(--center-padding, ${spacingTokens.none})))`,
    },
  },
});

export const centerAndText = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100%',
});

/**
 * Cluster groups items horizontally with consistent spacing and automatic wrapping.
 */
export const cluster = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  gap: `var(--cluster-gap, ${spacingTokens.md})`,
  '@media': {
    [breakpointQueries.sm]: {
      gap: `var(--cluster-gap-sm, var(--cluster-gap, ${spacingTokens.md}))`,
    },
    [breakpointQueries.md]: {
      gap: `var(--cluster-gap-md, var(--cluster-gap-sm, var(--cluster-gap, ${spacingTokens.md})))`,
    },
    [breakpointQueries.lg]: {
      gap: `var(--cluster-gap-lg, var(--cluster-gap-md, var(--cluster-gap, ${spacingTokens.md})))`,
    },
    [breakpointQueries.xl]: {
      gap: `var(--cluster-gap-xl, var(--cluster-gap-lg, var(--cluster-gap, ${spacingTokens.md})))`,
    },
    [breakpointQueries.xxl]: {
      gap: `var(--cluster-gap-xxl, var(--cluster-gap-xl, var(--cluster-gap, ${spacingTokens.md})))`,
    },
    [breakpointQueries.widescreen]: {
      gap: `var(--cluster-gap-widescreen, var(--cluster-gap-xxl, var(--cluster-gap, ${spacingTokens.md})))`,
    },
  },
});