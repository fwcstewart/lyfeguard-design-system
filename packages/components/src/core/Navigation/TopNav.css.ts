import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const topNav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '72px',
  padding: `0 ${vars.spacing[7]}` as unknown as string,
  background: vars.color.theme.surface,
  color: vars.color.theme.text.primary,
  borderBottom: `1px solid ${vars.color.theme.border}`,
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
  color: vars.color.neutral0,
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
  color: vars.color.theme.text.primary,
  textDecoration: 'none',
  cursor: 'pointer',
  padding: `${vars.spacing[2]} ${vars.spacing[4]}` as unknown as string,
  borderRadius: vars.radius.md,
  position: 'relative',
  transition: `color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&:hover': {
      color: vars.color.accentMint,
      backgroundColor: vars.color.theme.surfaceHover,
    },
    '&[data-active="true"]': {
      color: vars.color.accentMint,
      backgroundColor: vars.color.accentMint_10,
      fontWeight: vars.font.weight.semiBold,
    },
    '&[data-active="true"]::after': {
      content: '""',
      position: 'absolute',
      bottom: '-1px',
      left: vars.spacing[4] as unknown as string,
      right: vars.spacing[4] as unknown as string,
      height: '2px',
      background: vars.color.accentMint,
      borderRadius: vars.radius.round,
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.accentMint}`,
      outlineOffset: '2px',
    },
  },
});

export const right = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[4] as unknown as string,
});