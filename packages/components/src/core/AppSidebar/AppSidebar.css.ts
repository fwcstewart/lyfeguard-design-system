import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';
import {
  navigationActiveBackground,
  navigationActiveText,
  navigationHover,
  navigationMutedText,
  navigationSeparator,
  navigationSurface,
  navigationText,
} from '../Navigation/navigationTokens.css';

// Breakpoint queries for responsive behavior - matching Layout spacing.ts
const breakpointQueries = {
  lg: 'screen and (min-width: 1012px)',
} as const;

export const sidebar = style({
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  height: '100%',
  background: navigationSurface,
  color: navigationText,
  borderRight: `1px solid ${navigationSeparator}`,
  overflow: 'hidden',
  selectors: {
    '&[data-collapsed="true"]': {
      display: 'none',
      '@media': {
        [breakpointQueries.lg]: {
          display: 'flex',
        },
      },
    },
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
  padding: `${vars.spacing[6]} 0`,
  overflowY: 'auto',
  overflowX: 'hidden',
});

export const mainSection = style({
  width: '100%',
  padding: `0 ${vars.spacing[2]}`,
});

export const hubSection = style({
  width: '100%',
  padding: `0 ${vars.spacing[2]}`,
  paddingTop: vars.spacing[6] as unknown as string,
  borderTop: `1px solid ${navigationSeparator}`,
  marginTop: 'auto',
});

export const hubList = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[1] as unknown as string,
});

export const hubItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[3] as unknown as string,
  minHeight: `calc(${vars.spacing[8]} + ${vars.spacing[1]})`,
  padding: `${vars.spacing[3]} ${vars.spacing[4]}`,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  lineHeight: vars.font.lineHeight.ui.label,
  fontWeight: vars.font.weight.medium,
  color: navigationMutedText,
  cursor: 'pointer',
  borderLeft: `3px solid transparent`,
  transition: `background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, border-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  margin: `0 ${vars.spacing[1]}` as unknown as string,
  borderRadius: vars.radius.lg,
  textDecoration: 'none',
  background: 'transparent',
  border: 'none',
  width: '100%',
  textAlign: 'left',
  selectors: {
    '&[data-active="true"]': {
      background: navigationActiveBackground,
      borderLeftColor: navigationActiveText,
      color: navigationActiveText,
      fontWeight: vars.font.weight.semiBold,
    },
    '&:hover:not([data-active="true"])': {
      background: navigationHover,
      color: navigationText,
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${vars.color.accentMint}`,
    },
  },
});

export const hubIcon = style({
  width: vars.spacing[5],
  height: vars.spacing[5],
  minWidth: vars.spacing[5],
  maxWidth: vars.spacing[5],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  fontSize: '1.125rem',
  color: 'inherit',
});

