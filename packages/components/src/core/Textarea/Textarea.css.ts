import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

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
  fontWeight: vars.font.weight.regular,
  lineHeight: vars.font.lineHeight.ui.label,
  color: vars.color.theme.text.primary,
  transition: `color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
});

export const textarea = style({
  padding: `${vars.spacing[3]} ${vars.spacing[4]}`,
  fontFamily: vars.font.sans,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.neutral200}`,
  background: vars.color.neutral100,
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
  color: vars.color.theme.text.primary,
  minHeight: `calc(${vars.spacing[10]} * 2)`, // 128px (64px * 2) - closest to 120px using spacing tokens
  resize: 'vertical',
  transition: `border-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, box-shadow ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&:focus-visible': {
      outline: 'none',
      borderColor: vars.color.accentMint,
      boxShadow: `0 0 0 ${focusRingWidth} ${focusRingColor}`,
      background: vars.color.neutral0,
    },
    '&:hover:not(:disabled):not(:focus-visible)': {
      borderColor: vars.color.neutral300,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      background: vars.color.neutral200,
      borderColor: vars.color.neutral200,
      color: vars.color.theme.text.disabled,
    },
    '&[readonly]': {
      background: vars.color.neutral100,
      borderColor: vars.color.neutral300,
      color: vars.color.neutral500,
      cursor: 'default',
    },
    '&:focus-visible[readonly]': {
      borderColor: vars.color.neutral300,
      boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.neutral300}`,
      background: vars.color.neutral100,
    },
    '&:hover[readonly]': {
      borderColor: vars.color.neutral300,
      boxShadow: 'none',
    },
    '&::placeholder': {
      color: vars.color.theme.text.tertiary,
      opacity: 1,
    },
    '.dark &': {
      borderColor: vars.color.brand500_20,
      background: vars.color.brand500_10,
      color: vars.color.theme.text.primary,
      selectors: {
        '&:focus-visible': {
          borderColor: vars.color.accentMint,
          boxShadow: `0 0 0 ${focusRingWidth} ${focusRingColorDark}`,
        },
        '&:hover:not(:disabled):not(:focus-visible)': {
          borderColor: vars.color.brand500_20,
        },
        '&:disabled': {
          background: vars.color.brand500_10,
          borderColor: vars.color.brand500_10,
          color: vars.color.theme.text.disabled,
        },
        '&[readonly]': {
          background: vars.color.theme.surfaceHover,
          borderColor: vars.color.theme.border,
          color: vars.color.theme.text.tertiary,
        },
        '&:focus-visible[readonly]': {
          borderColor: vars.color.theme.border,
          boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.theme.border}`,
          background: vars.color.theme.surfaceHover,
        },
      },
    },
  },
});

export const textareaWhite = style({
  background: vars.color.neutral0,
  borderColor: vars.color.neutral100,
  selectors: {
    '&:focus-visible': {
      borderColor: vars.color.accentMint,
      boxShadow: `0 0 0 ${focusRingWidth} ${focusRingColor}`,
      background: vars.color.neutral0,
    },
    '&:hover:not(:disabled):not(:focus-visible)': {
      borderColor: vars.color.neutral200,
    },
    '.dark &': {
      background: vars.color.neutral0,
      selectors: {
        '&:focus-visible': {
          borderColor: vars.color.accentMint,
          boxShadow: `0 0 0 ${focusRingWidth} ${focusRingColorDark}`,
        },
      },
    },
  },
});

export const textareaError = style({
  background: vars.color.neutral0,
  borderColor: vars.color.error500,
  boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.error500_15}`,
  selectors: {
    '&:focus-visible': {
      borderColor: vars.color.error500,
      boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.error500_15}`,
      background: vars.color.neutral0,
    },
    '.dark &': {
      borderColor: vars.color.error500,
      boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.error500_15}`,
      background: vars.color.brand500_10,
    },
  },
});

export const textareaReadOnly = style({
  background: vars.color.neutral100,
  borderColor: vars.color.neutral300,
  color: vars.color.neutral500,
  selectors: {
    '.dark &': {
      background: vars.color.theme.surfaceHover,
      borderColor: vars.color.theme.border,
      color: vars.color.theme.text.tertiary,
    },
  },
});

export const textareaDisabled = style({
  color: vars.color.theme.text.disabled,
});

export const footer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: vars.spacing[2],
  marginTop: vars.spacing[1],
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
