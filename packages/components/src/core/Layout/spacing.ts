import { vars } from '../../globals.css';

export const spacingTokens = {
  none: vars.spacing[0],
  xs: vars.spacing[1],
  sm: vars.spacing[2],
  md: vars.spacing[4],
  lg: vars.spacing[6],
  xl: vars.spacing[7],
  '2xl': vars.spacing[8],
  '3xl': vars.spacing[9],
  '4xl': vars.spacing[10],
} as const;

export type SpacingToken = keyof typeof spacingTokens;

export interface ResponsiveValue<T> {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
  widescreen?: T;
}

export type ResponsiveSpacing = SpacingToken | ResponsiveValue<SpacingToken>;

export const breakpointQueries: Record<Exclude<keyof ResponsiveValue<SpacingToken>, 'base'>, string> = {
  sm: `screen and (min-width: ${vars.breakpoint.sm})`,
  md: `screen and (min-width: ${vars.breakpoint.md})`,
  lg: `screen and (min-width: ${vars.breakpoint.lg})`,
  xl: `screen and (min-width: ${vars.breakpoint.xl})`,
  xxl: `screen and (min-width: ${vars.breakpoint.xxl})`,
  widescreen: `screen and (min-width: ${vars.breakpoint.widescreen})`,
};

export const defaultSpacing: SpacingToken = 'md';

export const resolveSpacing = (value?: SpacingToken): string => {
  if (!value) {
    return spacingTokens[defaultSpacing];
  }

  return spacingTokens[value];
};

export const buildSpacingVars = (variableName: string, value?: ResponsiveSpacing, fallback?: SpacingToken) => {
  const styles: Record<string, string> = {};

  if (!value) {
    if (fallback) {
      styles[`--${variableName}`] = resolveSpacing(fallback);
    }
    return styles;
  }

  if (typeof value === 'string') {
    styles[`--${variableName}`] = resolveSpacing(value);
    return styles;
  }

  if (value.base) {
    styles[`--${variableName}`] = resolveSpacing(value.base);
  } else if (fallback) {
    styles[`--${variableName}`] = resolveSpacing(fallback);
  }

  (Object.keys(value) as Array<keyof ResponsiveValue<SpacingToken>>).forEach((breakpoint) => {
    if (breakpoint === 'base') {
      return;
    }

    const spacingValue = value[breakpoint];

    if (spacingValue) {
      styles[`--${variableName}-${breakpoint}`] = resolveSpacing(spacingValue);
    }
  });

  return styles;
};
