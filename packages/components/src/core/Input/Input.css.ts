import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[1] as unknown as string,
});

export const label = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.ui.label,
  color: vars.color.theme.text.primary,
  transition: `color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
});

const shake = keyframes({
  '0%, 100%': { transform: 'translateX(0)' },
  '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
  '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
});

export const input = style({
  appearance: 'none',
  padding: `${vars.spacing[3]} ${vars.spacing[4]}`,
  fontFamily: vars.font.sans,
  borderRadius: vars.radius.md,
  border: `1.5px solid ${vars.color.theme.border}`,
  background: vars.color.theme.surface,
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
  color: vars.color.theme.text.primary,
  transition: `border-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, box-shadow ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover:not(:disabled):not(:focus)': {
      borderColor: vars.color.theme.borderHover,
    },
    '&:focus': {
      outline: 'none',
      borderColor: vars.color.accentMint,
      boxShadow: `0 0 0 3px ${vars.color.accentMint_20}`,
      background: vars.color.theme.surface,
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
      background: vars.color.theme.surfaceHover,
      color: vars.color.theme.text.disabled,
    },
    '&::placeholder': {
      color: vars.color.theme.text.tertiary,
      opacity: 1,
    },
  },
});

export const inputError = style({
  borderColor: vars.color.error500,
  boxShadow: `0 0 0 3px ${vars.color.error100}`,
  animation: `${shake} ${vars.motion.duration.normal} ${vars.motion.easing.ease}`,
  selectors: {
    '&:focus': {
      borderColor: vars.color.error500,
      boxShadow: `0 0 0 3px ${vars.color.error100}`,
    },
  },
});

export const helperText = style({
  fontSize: vars.font.size.body.xs,
  lineHeight: vars.font.lineHeight.body.xs,
  color: vars.color.theme.text.tertiary,
  marginTop: vars.spacing[1] as unknown as string,
  transition: `opacity ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
});

export const errorText = style({
  fontSize: vars.font.size.body.xs,
  lineHeight: vars.font.lineHeight.body.xs,
  color: vars.color.error500,
  marginTop: vars.spacing[1] as unknown as string,
  fontWeight: vars.font.weight.medium,
  animation: `${shake} ${vars.motion.duration.normal} ${vars.motion.easing.ease}`,
});
