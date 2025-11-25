import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

const selectPaddingY = vars.spacing[3];
const selectPaddingX = vars.spacing[4];
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

const shake = keyframes({
  '0%, 100%': { transform: 'translateX(0)' },
  '10%, 30%, 50%, 70%, 90%': { transform: `translateX(calc(-1 * ${vars.spacing[1]} / 2))` },
  '20%, 40%, 60%, 80%': { transform: `translateX(calc(${vars.spacing[1]} / 2))` },
});

export const select = style({
  width: '100%',
  paddingInline: selectPaddingX,
  paddingBlock: selectPaddingY,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.neutral200}`,
  background: vars.color.neutral100,
  color: vars.color.theme.text.primary,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
  transition: `border-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, box-shadow ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: vars.color.accentMint,
      boxShadow: `0 0 0 ${focusRingWidth} ${focusRingColor}`,
      background: vars.color.neutral0,
    },
    '&:hover:not(:disabled):not([data-readonly="true"])': {
      borderColor: vars.color.neutral300,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      background: vars.color.neutral200,
      borderColor: vars.color.neutral200,
      color: vars.color.theme.text.disabled,
    },
    '&[data-readonly="true"]': {
      background: vars.color.neutral100,
      borderColor: vars.color.neutral300,
      color: vars.color.neutral500,
      cursor: 'default',
      boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.neutral300}`,
      selectors: {
        '&:hover': {
          borderColor: vars.color.neutral300,
          boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.neutral300}`,
        },
      },
    },
    '.dark &': {
      borderColor: vars.color.brand500_20,
      background: vars.color.brand500_10,
      color: vars.color.theme.text.primary,
      selectors: {
        '&:focus': {
          borderColor: vars.color.accentMint,
          boxShadow: `0 0 0 ${focusRingWidth} ${focusRingColorDark}`,
          background: vars.color.brand500_10,
        },
        '&:hover:not(:disabled):not([data-readonly="true"])': {
          borderColor: vars.color.brand500_20,
        },
        '&:disabled': {
          background: vars.color.brand500_10,
          borderColor: vars.color.brand500_10,
          color: vars.color.theme.text.disabled,
        },
        '&[data-readonly="true"]': {
          background: vars.color.brand500_10,
          borderColor: vars.color.theme.border,
          color: vars.color.theme.text.tertiary,
          boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.theme.border}`,
        },
      },
    },
  },
});

export const selectWhite = style({
  background: vars.color.neutral0,
  borderColor: vars.color.neutral100,
  selectors: {
    '&:focus': {
      borderColor: vars.color.accentMint,
      boxShadow: `0 0 0 ${focusRingWidth} ${focusRingColor}`,
      background: vars.color.neutral0,
    },
    '&:hover:not(:disabled):not([data-readonly="true"])': {
      borderColor: vars.color.neutral200,
    },
    '.dark &': {
      background: vars.color.neutral0,
      borderColor: vars.color.neutral100,
      selectors: {
        '&:focus': {
          borderColor: vars.color.accentMint,
          boxShadow: `0 0 0 ${focusRingWidth} ${focusRingColorDark}`,
        },
        '&:hover:not(:disabled):not([data-readonly="true"])': {
          borderColor: vars.color.neutral200,
        },
      },
    },
  },
});

export const selectError = style({
  background: vars.color.neutral0,
  borderColor: vars.color.error500,
  boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.error500_15}`,
  selectors: {
    '&:focus': {
      borderColor: vars.color.error500,
      boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.error500_15}`,
      background: vars.color.neutral0,
    },
    '.dark &': {
      background: vars.color.brand500_10,
      borderColor: vars.color.error500,
      boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.error500_15}`,
    },
  },
});

export const selectDisabled = style({});

export const selectReadOnly = style({});

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

globalStyle(`${select} option`, {
  padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
  backgroundColor: vars.color.neutral100,
  color: vars.color.theme.text.primary,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
});

globalStyle(`${select}[data-variant="white"] option`, {
  backgroundColor: vars.color.neutral0,
  color: vars.color.theme.text.primary,
});

globalStyle(`${select} option:hover:not(:disabled)`, {
  backgroundColor: vars.color.neutral200,
});

globalStyle(`${select}[data-variant="white"] option:hover:not(:disabled)`, {
  backgroundColor: vars.color.neutral100,
});

globalStyle(`${select} option:checked`, {
  backgroundColor: vars.color.neutral200,
  color: vars.color.theme.text.primary,
});

globalStyle(`${select} option:disabled`, {
  color: vars.color.theme.text.disabled,
});

globalStyle(`.dark ${select} option`, {
  backgroundColor: vars.color.brand500_10,
  color: vars.color.theme.text.primary,
});

globalStyle(`.dark ${select}[data-variant="white"] option`, {
  backgroundColor: vars.color.neutral0,
  color: vars.color.theme.text.primary,
});

globalStyle(`.dark ${select} option:hover:not(:disabled)`, {
  backgroundColor: vars.color.brand500_20,
});

globalStyle(`.dark ${select}[data-variant="white"] option:hover:not(:disabled)`, {
  backgroundColor: vars.color.neutral100,
});

globalStyle(`.dark ${select} option:checked`, {
  backgroundColor: vars.color.brand500_20,
});
