import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

const focusRingWidth = vars.spacing[1];

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

export const textarea = style({
  padding: `${vars.spacing[3]} ${vars.spacing[4]}`,
  fontFamily: vars.font.sans,
  borderRadius: vars.radius.md,
  border: `1.5px solid ${vars.color.theme.border}`,
  background: vars.color.theme.surface,
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
  color: vars.color.theme.text.primary,
  minHeight: `calc(${vars.spacing[10]} * 2)`, // 128px (64px * 2) - closest to 120px using spacing tokens
  resize: 'vertical',
  transition: `border-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, box-shadow ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover:not(:disabled):not(:focus-visible)': {
      borderColor: vars.color.theme.borderHover,
    },
    '&:focus-visible': {
      outline: 'none',
      borderColor: vars.color.accentMint,
      boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.accentMint_20}`,
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
    '.dark &': {
      background: vars.color.theme.surface,
      borderColor: vars.color.theme.border,
      color: vars.color.theme.text.primary,
    },
    '.dark &:hover:not(:disabled):not(:focus-visible)': {
      borderColor: vars.color.theme.borderHover,
    },
    '.dark &:focus-visible': {
      borderColor: vars.color.accentMint,
      boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.accentMint_20}`,
    },
    '.dark &:disabled': {
      background: vars.color.theme.surfaceHover,
      color: vars.color.theme.text.disabled,
    },
    '.dark &::placeholder': {
      color: vars.color.theme.text.tertiary,
    },
  },
});

export const textareaError = style({
  borderColor: vars.color.error500,
  boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.error500_15}`,
  selectors: {
    '&:focus-visible': {
      borderColor: vars.color.error500,
      boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.error500_15}`,
    },
    '.dark &': {
      borderColor: vars.color.error500,
      boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.error500_15}`,
    },
    '.dark &:focus-visible': {
      borderColor: vars.color.error500,
      boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.error500_15}`,
    },
  },
});

export const footer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: vars.spacing[2] as unknown as string,
  marginTop: vars.spacing[1] as unknown as string,
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

export const characterCount = style({
  marginLeft: 'auto',
  fontSize: vars.font.size.body.xs,
  lineHeight: vars.font.lineHeight.body.xs,
  color: vars.color.theme.text.secondary,
});
