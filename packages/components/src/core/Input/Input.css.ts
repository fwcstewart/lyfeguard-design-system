import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

const inputPaddingY = vars.spacing[3];
const inputPaddingX = vars.spacing[4];
const focusRingWidth = vars.spacing[1];
const focusRingColor = vars.color.accentMint_20;
const focusRingColorDark = vars.color.accentMint_30;

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
  transition: `color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
});

const shake = keyframes({
  '0%, 100%': { transform: 'translateX(0)' },
  '10%, 30%, 50%, 70%, 90%': { transform: `translateX(calc(-1 * ${vars.spacing[1]} / 2))` }, // -2px
  '20%, 40%, 60%, 80%': { transform: `translateX(calc(${vars.spacing[1]} / 2))` }, // 2px
});

export const field = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[2],
  paddingInline: inputPaddingX,
  paddingBlock: inputPaddingY,
  borderRadius: vars.radius.md,
  border: `1.5px solid ${vars.color.theme.border}`,
  background: `linear-gradient(90deg, ${vars.color.theme.surface} 0%, ${vars.color.theme.surfaceHover} 100%)`,
  transition: `border-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, box-shadow ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:focus-within': {
      borderColor: vars.color.accentMint,
      boxShadow: `0 0 0 ${focusRingWidth} ${focusRingColor}`,
      background: vars.color.theme.surface,
    },
    '&:hover:not([data-disabled="true"])': {
      borderColor: vars.color.theme.borderHover,
      boxShadow: `0 10px 26px ${vars.color.brand500_15}`,
    },
    '&[data-disabled="true"]': {
      opacity: 0.65,
      cursor: 'not-allowed',
      background: vars.color.theme.surfaceHover,
    },
    '.dark &': {
      borderColor: vars.color.theme.border,
      background: vars.color.theme.surface,
      selectors: {
        '&:focus-within': {
          borderColor: vars.color.accentMint,
          boxShadow: `0 0 0 ${focusRingWidth} ${focusRingColorDark}`,
        },
        '&:hover:not([data-disabled="true"])': {
          borderColor: vars.color.theme.borderHover,
          boxShadow: `0 10px 26px ${vars.color.accentMint_20}`,
        },
      },
    },
  },
});

export const fieldError = style({
  borderColor: vars.color.error500,
  boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.error500_15}`,
  selectors: {
    '&:focus-within': {
      borderColor: vars.color.error500,
      boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.error500_15}`,
      background: vars.color.error100,
    },
    '.dark &': {
      borderColor: vars.color.error500,
      boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.error500_15}`,
      background: vars.color.theme.surface,
    },
  },
});

export const fieldDisabled = style({
  background: vars.color.theme.surfaceHover,
});

export const fieldWhite = style({
  background: vars.color.neutral0,
  borderColor: 'transparent',
  selectors: {
    '&:focus-within': {
      borderColor: vars.color.accentMint,
      boxShadow: `0 0 0 ${focusRingWidth} ${focusRingColor}`,
      background: vars.color.neutral0,
    },
    '&:hover:not([data-disabled="true"])': {
      borderColor: 'transparent',
      boxShadow: `0 0 0 ${focusRingWidth} ${focusRingColor}`,
    },
    '.dark &': {
      background: vars.color.neutral0,
      selectors: {
        '&:focus-within': {
          borderColor: vars.color.accentMint,
          boxShadow: `0 0 0 ${focusRingWidth} ${focusRingColorDark}`,
        },
      },
    },
  },
});

export const fieldReadOnly = style({
  background: vars.color.neutral100,
  borderColor: vars.color.neutral300,
  color: vars.color.neutral500,
  cursor: 'default',
  selectors: {
    '&:focus-within': {
      borderColor: vars.color.neutral300,
      boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.neutral300}`,
      background: vars.color.neutral100,
    },
    '&:hover': {
      borderColor: vars.color.neutral300,
      boxShadow: 'none',
    },
    '.dark &': {
      background: vars.color.theme.surfaceHover,
      borderColor: vars.color.theme.border,
      color: vars.color.theme.text.tertiary,
      selectors: {
        '&:focus-within': {
          borderColor: vars.color.theme.border,
          boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.theme.border}`,
        },
      },
    },
  },
});

export const input = style({
  appearance: 'none',
  paddingBlock: 0,
  paddingInline: 0,
  fontFamily: vars.font.sans,
  borderRadius: vars.radius.md,
  border: 'none',
  background: 'transparent',
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
  color: vars.color.theme.text.primary,
  width: '100%',
  selectors: {
    '&:focus': {
      outline: 'none',
    },
    '&:disabled': {
      opacity: 1,
      color: vars.color.theme.text.disabled,
      WebkitTextFillColor: vars.color.theme.text.disabled,
    },
    '&[readonly]': {
      color: vars.color.neutral500,
      WebkitTextFillColor: vars.color.neutral500,
      cursor: 'default',
    },
    '&::placeholder': {
      color: vars.color.theme.text.tertiary,
      opacity: 1,
    },
    '.dark &': {
      color: vars.color.theme.text.primary,
    },
    '.dark &:disabled': {
      color: vars.color.theme.text.disabled,
      WebkitTextFillColor: vars.color.theme.text.disabled,
    },
    '.dark &[readonly]': {
      color: vars.color.theme.text.tertiary,
      WebkitTextFillColor: vars.color.theme.text.tertiary,
    },
    '.dark &::placeholder': {
      color: vars.color.theme.text.tertiary,
    },
  },
});

export const affix = style({
  color: vars.color.theme.text.secondary,
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing[1],
});

export const helperText = style({
  fontSize: vars.font.size.body.xs,
  lineHeight: vars.font.lineHeight.body.xs,
  color: vars.color.theme.text.tertiary,
  marginTop: vars.spacing[1],
  transition: `opacity ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
});

export const errorText = style({
  fontSize: vars.font.size.body.xs,
  lineHeight: vars.font.lineHeight.body.xs,
  color: vars.color.error500,
  marginTop: vars.spacing[1],
  fontWeight: vars.font.weight.medium,
  animation: `${shake} ${vars.motion.duration.normal} ${vars.motion.easing.ease}`,
});

export const footer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: vars.spacing[2],
});

export const characterCount = style({
  marginLeft: 'auto',
  fontSize: vars.font.size.body.xs,
  lineHeight: vars.font.lineHeight.body.xs,
  color: vars.color.theme.text.secondary,
});
