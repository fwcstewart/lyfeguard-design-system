import { createVar, style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

const trackColorVar = createVar();
const handleColorVar = createVar();
const handleTranslateVar = createVar();
const focusRingColorVar = createVar();

const trackWidth = vars.spacing[8];
const trackHeight = vars.spacing[5];
const handleSize = vars.spacing[4];
const focusRingWidth = vars.spacing[1];
const handleOffset = `calc((${trackHeight} - ${handleSize}) / 2)`;
const handleTranslateOn = `calc(${trackWidth} - ${trackHeight})`;

export const track = style({
  width: trackWidth,
  height: trackHeight,
  borderRadius: `calc(${trackHeight} / 2)`,
  position: 'relative',
  backgroundColor: trackColorVar,
  transition: `background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
});

export const handle = style({
  position: 'absolute',
  top: handleOffset,
  left: handleOffset,
  width: handleSize,
  height: handleSize,
  borderRadius: '50%',
  backgroundColor: handleColorVar,
  boxShadow: vars.shadow.xs,
  transform: `translateX(${handleTranslateVar})`,
  transition: `transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}, background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
});

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[2],
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
  padding: 0,
  vars: {
    [trackColorVar]: vars.color.theme.border,
    [handleColorVar]: vars.color.neutral0,
    [handleTranslateVar]: '0',
    [focusRingColorVar]: vars.color.accentMint_20,
  },
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
      vars: {
        [trackColorVar]: vars.color.theme.border,
        [handleColorVar]: vars.color.theme.text.disabled,
      },
    },
    '&[aria-checked="true"]': {
      vars: {
        [trackColorVar]: vars.color.accentMint,
        [handleColorVar]: vars.color.neutral0,
        [handleTranslateVar]: handleTranslateOn,
      },
    },
    '&[aria-checked="true"]:disabled': {
      vars: {
        [trackColorVar]: vars.color.accentMint_20,
        [handleColorVar]: vars.color.theme.text.disabled,
      },
    },
    '&:focus-visible': {
      outline: 'none',
    },
    [`&:focus-visible ${track}`]: {
      boxShadow: `0 0 0 ${focusRingWidth} ${focusRingColorVar}`,
    },
    '.dark &': {
      vars: {
        [trackColorVar]: vars.color.theme.border,
        [handleColorVar]: vars.color.neutral0,
        [focusRingColorVar]: vars.color.accentMint_30,
      },
    },
    '.dark &:disabled': {
      vars: {
        [trackColorVar]: vars.color.theme.border,
        [handleColorVar]: vars.color.theme.text.disabled,
      },
    },
    '.dark &[aria-checked="true"]': {
      vars: {
        [trackColorVar]: vars.color.accentMint,
        [handleColorVar]: vars.color.neutral900,
        [handleTranslateVar]: handleTranslateOn,
      },
    },
    '.dark &[aria-checked="true"]:disabled': {
      vars: {
        [trackColorVar]: vars.color.accentMint_30,
        [handleColorVar]: vars.color.theme.text.disabled,
      },
    },
  },
});

export const label = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  lineHeight: vars.font.lineHeight.ui.label,
  color: vars.color.theme.text.primary,
  selectors: {
    [`${container}:disabled &`]: {
      color: vars.color.theme.text.disabled,
    },
    [`.dark ${container}:disabled &`]: {
      color: vars.color.theme.text.disabled,
    },
  },
});
