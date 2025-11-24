import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[2],
});

export const label = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.ui.label,
  color: vars.color.theme.text.primary,
});

export const inputsContainer = style({
  display: 'flex',
  gap: vars.spacing[2],
  justifyContent: 'flex-start',
});

export const input = style({
  width: '45px',
  height: '45px',
  textAlign: 'center',
  fontSize: vars.font.size.body.lg,
  fontWeight: vars.font.weight.semiBold,
  fontFamily: vars.font.sans,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.theme.border}`,
  background: vars.color.theme.surface,
  color: vars.color.theme.text.primary,
  transition: `border-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, box-shadow ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: vars.color.accentMint,
      boxShadow: `0 0 0 2px ${vars.color.accentMint_20}`,
    },
    '&:disabled': {
      opacity: 0.65,
      cursor: 'not-allowed',
      background: vars.color.theme.surfaceHover,
    },
    '.dark &': {
      background: vars.color.theme.surface,
      borderColor: vars.color.theme.border,
      selectors: {
        '&:focus': {
          borderColor: vars.color.accentMint,
          boxShadow: `0 0 0 2px ${vars.color.accentMint_30}`,
        },
      },
    },
  },
});

export const inputError = style({
  borderColor: vars.color.error500,
  selectors: {
    '&:focus': {
      borderColor: vars.color.error500,
      boxShadow: `0 0 0 2px ${vars.color.error500_15}`,
    },
  },
});

export const footer = style({
  display: 'flex',
  justifyContent: 'flex-start',
});

export const helperText = style({
  fontSize: vars.font.size.body.xs,
  lineHeight: vars.font.lineHeight.body.xs,
  color: vars.color.theme.text.tertiary,
});

export const errorText = style({
  fontSize: vars.font.size.body.xs,
  lineHeight: vars.font.lineHeight.body.xs,
  color: vars.color.error500,
  fontWeight: vars.font.weight.medium,
});

