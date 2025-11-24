import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

// Breakpoint queries for responsive behavior - matching Layout spacing.ts
const breakpointQueries = {
  lg: 'screen and (min-width: 1012px)',
} as const;

export const header = style({
  width: '100%',
  flexShrink: 0,
  background: vars.color.theme.surface,
  borderBottom: `1px solid ${vars.color.theme.border}`,
  padding: `${vars.spacing[4]} ${vars.spacing[4]}`,
  '@media': {
    [breakpointQueries.lg]: {
      padding: `${vars.spacing[5]} ${vars.spacing[10]}`,
    },
  },
});

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const left = style({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
});

export const logoLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'auto',
  maxHeight: '64px',
  width: '144px',
  textDecoration: 'none',
  color: 'inherit',
  '@media': {
    [breakpointQueries.lg]: {
      width: '256px',
    },
  },
});

export const logoText = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.heading.md,
  fontWeight: vars.font.weight.bold,
  color: vars.color.theme.text.primary,
});

export const right = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[4] as unknown as string,
});

export const notificationButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
  border: 'none',
  padding: vars.spacing[2] as unknown as string,
  cursor: 'pointer',
  color: vars.color.theme.text.secondary,
  transition: `color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover': {
      color: vars.color.theme.text.primary,
    },
  },
});

export const desktopProfile = style({
  display: 'none',
  '@media': {
    [breakpointQueries.lg]: {
      display: 'block',
    },
  },
});

export const profileTrigger = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[3] as unknown as string,
  background: 'transparent',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.lg,
  color: vars.color.theme.text.secondary,
  transition: `color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover': {
      color: vars.color.theme.text.primary,
    },
  },
});

export const userName = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.lg,
  color: 'inherit',
});

export const mobileMenuButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
  border: 'none',
  padding: vars.spacing[3] as unknown as string,
  cursor: 'pointer',
  color: vars.color.theme.text.primary,
  '@media': {
    [breakpointQueries.lg]: {
      display: 'none',
    },
  },
});

