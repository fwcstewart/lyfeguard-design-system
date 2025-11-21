import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[3],
});

export const list = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing[2],
  padding: 0,
  margin: 0,
  listStyle: 'none',
});

export const filter = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing[2],
  padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
  borderRadius: vars.radius.round,
  border: `1px solid ${vars.color.theme.border}`,
  background: vars.color.theme.surface,
  color: vars.color.theme.text.secondary,
  cursor: 'pointer',
  transition: `background ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}, border-color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}, color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&:hover:not(:disabled)': {
      background: vars.color.theme.surfaceHover,
      color: vars.color.theme.text.primary,
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${vars.color.accentMint_20}`,
    },
    '&:disabled': {
      opacity: 0.55,
      cursor: 'not-allowed',
    },
  },
});

export const selected = style({
  background: vars.color.brand500_15,
  borderColor: vars.color.brand500,
  color: vars.color.theme.text.primary,
});

export const label = style({
  fontSize: vars.font.size.body.sm,
  fontWeight: vars.font.weight.medium,
});

export const helper = style({
  fontSize: vars.font.size.body.xs,
  color: vars.color.theme.text.tertiary,
});

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: vars.spacing[5],
  padding: `0 ${vars.spacing[1]}`,
  height: vars.spacing[5],
  borderRadius: vars.radius.round,
  background: vars.color.theme.surfaceHover,
  border: `1px solid ${vars.color.theme.border}`,
  color: vars.color.theme.text.secondary,
  fontSize: vars.font.size.body.xs,
  fontWeight: vars.font.weight.semiBold,
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing[2],
});

export const actions = style({
  display: 'flex',
  gap: vars.spacing[2],
});

export const action = style({
  background: 'transparent',
  border: `1px solid ${vars.color.theme.border}`,
  borderRadius: vars.radius.round,
  padding: `${vars.spacing[1]} ${vars.spacing[3]}`,
  cursor: 'pointer',
  color: vars.color.theme.text.secondary,
  fontSize: vars.font.size.body.sm,
  transition: `background ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}, border-color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}, color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&:hover:not(:disabled)': {
      background: vars.color.theme.surfaceHover,
      color: vars.color.theme.text.primary,
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${vars.color.accentMint_20}`,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.55,
    },
  },
});
