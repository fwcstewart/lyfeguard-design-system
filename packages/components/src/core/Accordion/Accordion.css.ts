import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const accordion = style({
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.theme.border}`,
  background: vars.color.theme.surface,
  overflow: 'hidden',
  boxShadow: vars.shadow.sm,
});

export const item = style({
  borderBottom: `1px solid ${vars.color.theme.border}`,
  selectors: {
    '&:last-of-type': {
      borderBottom: 'none',
    },
  },
});

export const disabled = style({
  opacity: 0.6,
});

export const trigger = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing[4],
  padding: `${vars.spacing[4]} ${vars.spacing[5]}`,
  background: 'transparent',
  border: 'none',
  color: vars.color.theme.text.primary,
  cursor: 'pointer',
  transition: `background ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}, color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&:hover': {
      background: vars.color.theme.surfaceHover,
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.accentMint_30}`,
      outlineOffset: 2,
    },
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});

globalStyle(`.dark ${trigger}:hover`, {
  background: vars.color.theme.surfaceHover,
});

export const triggerText = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: vars.spacing[1],
  textAlign: 'left',
});

export const title = style({
  margin: 0,
  fontSize: vars.font.size.heading.sm,
  fontWeight: vars.font.weight.semiBold,
  color: vars.color.theme.text.primary,
});

export const description = style({
  margin: 0,
  fontSize: vars.font.size.body.sm,
  color: vars.color.theme.text.secondary,
});

export const chevron = style({
  width: vars.spacing[4],
  height: vars.spacing[4],
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.theme.text.secondary,
  transition: `transform ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}`,
});

export const chevronOpen = style({
  transform: 'rotate(180deg)',
});

export const panel = style({
  overflow: 'hidden',
  maxHeight: 0,
  opacity: 0,
  transition: `max-height ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, opacity ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
});

export const panelOpen = style({
  opacity: 1,
});

export const panelInner = style({
  padding: `${vars.spacing[4]} ${vars.spacing[5]} ${vars.spacing[5]}`,
  background: vars.color.theme.surface,
  color: vars.color.theme.text.secondary,
  lineHeight: vars.font.lineHeight.body.base,
});
