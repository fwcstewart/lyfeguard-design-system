import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';
import {
  navigationActiveBackground,
  navigationActiveText,
  navigationHover,
  navigationIndicator,
  navigationMutedText,
  navigationSeparator,
  navigationSurface,
  navigationText,
} from './navigationTokens.css';

export const topNav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: `calc(${vars.spacing[10]} + ${vars.spacing[2]})`,
  padding: `0 ${vars.spacing[7]}` as unknown as string,
  background: navigationSurface,
  color: navigationText,
  borderBottom: `1px solid ${navigationSeparator}`,
  boxShadow: vars.shadow.sm,
});

export const left = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[6] as unknown as string,
});

export const logo = style({
  fontSize: vars.font.size.heading.sm,
  fontWeight: vars.font.weight.bold,
  lineHeight: vars.font.lineHeight.heading.sm,
  color: navigationText,
  fontFamily: vars.font.sans,
  letterSpacing: '-0.02em',
});

export const navLinks = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[1] as unknown as string,
});

export const navLink = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  lineHeight: vars.font.lineHeight.ui.label,
  fontWeight: vars.font.weight.medium,
  color: navigationMutedText,
  textDecoration: 'none',
  cursor: 'pointer',
  padding: `${vars.spacing[2]} ${vars.spacing[4]}` as unknown as string,
  borderRadius: vars.radius.md,
  position: 'relative',
  transition: `color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&:hover': {
      color: navigationText,
      backgroundColor: navigationHover,
    },
    '&[data-active="true"]': {
      color: navigationActiveText,
      backgroundColor: navigationActiveBackground,
      fontWeight: vars.font.weight.semiBold,
    },
    '&[data-active="true"]::after': {
      content: '""',
      position: 'absolute',
      bottom: '-1px',
      left: vars.spacing[4] as unknown as string,
      right: vars.spacing[4] as unknown as string,
      height: `calc(${vars.spacing[1]} / 2)`,
      background: navigationIndicator,
      borderRadius: vars.radius.round,
    },
    '&:focus-visible': {
      outline: `2px solid ${navigationIndicator}`,
      outlineOffset: '2px',
    },
  },
});

export const right = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[4] as unknown as string,
});