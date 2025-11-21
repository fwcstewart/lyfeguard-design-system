import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const card = style({
  background: vars.color.theme.surface,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.theme.border}`,
  boxShadow: vars.shadow.sm,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  backdropFilter: 'blur(8px)',
  transition: `box-shadow ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, transform ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, border-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${vars.color.accentMint_20}`,
    },
  },
});

globalStyle(`.dark ${card}`, {
  background: vars.color.theme.surface,
  borderColor: vars.color.theme.border,
  boxShadow: vars.shadow.md,
});

export const clickable = style({
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      boxShadow: vars.shadow.lg,
      transform: `translateY(calc(-1 * ${vars.spacing[1]}))`, // -4px
      background: vars.color.theme.surfaceHover,
      borderColor: vars.color.theme.borderHover,
    },
    '&:active': {
      transform: `translateY(calc(-1 * ${vars.spacing[1]} / 2))`, // -2px
      boxShadow: vars.shadow.md,
      background: vars.color.theme.surfaceActive,
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${vars.color.accentMint_20}, ${vars.shadow.lg}`,
    },
  },
});

globalStyle(`.dark ${clickable}`, {
  boxShadow: vars.shadow.md,
  background: vars.color.theme.surface,
});

globalStyle(`.dark ${clickable}:hover`, {
  boxShadow: vars.shadow.lg,
  background: vars.color.theme.surfaceHover,
  borderColor: vars.color.theme.borderHover,
});

globalStyle(`.dark ${clickable}:active`, {
  boxShadow: vars.shadow.md,
  background: vars.color.theme.surfaceActive,
});

globalStyle(`.dark ${clickable}:focus-visible`, {
  boxShadow: `0 0 0 3px ${vars.color.accentMint_20}, ${vars.shadow.lg}`,
});

export const header = style({
  padding: `${vars.spacing[5]} ${vars.spacing[6]}`,
  borderBottom: `1px solid ${vars.color.theme.border}`,
  fontSize: vars.font.size.body.base,
  fontWeight: vars.font.weight.semiBold,
  lineHeight: vars.font.lineHeight.body.base,
  color: vars.color.theme.text.primary,
  background: 'transparent',
});

export const body = style({
  padding: vars.spacing[6],
  flex: 1,
  color: vars.color.theme.text.secondary,
});

export const footer = style({
  padding: `${vars.spacing[5]} ${vars.spacing[6]}`,
  borderTop: `1px solid ${vars.color.theme.border}`,
  background: vars.color.theme.surfaceHover,
});
