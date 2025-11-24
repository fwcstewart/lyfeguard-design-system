import { globalStyle, style, styleVariants, createVar } from '@vanilla-extract/css';
import { vars } from '../../globals.css';
import { CARD_TONES } from './constants';

const surfaceVar = createVar();
const surfaceHoverVar = createVar();
const borderVar = createVar();
const textVar = createVar();
const accentVar = createVar();
const focusRingVar = createVar();

export const tone = styleVariants(CARD_TONES, (tokens) => ({
  vars: {
    [surfaceVar]: tokens.surface,
    [surfaceHoverVar]: tokens.surfaceHover,
    [borderVar]: tokens.border,
    [textVar]: tokens.text,
    [accentVar]: tokens.accent,
    [focusRingVar]: tokens.focusRing,
  },
}));

export const card = style({
  background: surfaceVar,
  borderRadius: vars.radius.lg,
  border: `1px solid ${borderVar}`,
  boxShadow: vars.shadow.sm,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  backdropFilter: 'blur(8px)',
  transition: `box-shadow ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, transform ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, border-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&:focus-visible': {
      outline: 'none',
      boxShadow: focusRingVar,
    },
  },
});

globalStyle(`.dark ${card}`, {
  background: surfaceVar,
  borderColor: borderVar,
  boxShadow: vars.shadow.md,
});

export const clickable = style({
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      boxShadow: vars.shadow.lg,
      transform: `translateY(calc(-1 * ${vars.spacing[1]}))`,
      background: surfaceHoverVar,
      borderColor: accentVar,
    },
    '&:active': {
      transform: `translateY(calc(-1 * ${vars.spacing[1]} / 2))`,
      boxShadow: vars.shadow.md,
      background: surfaceHoverVar,
      borderColor: accentVar,
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `${focusRingVar}, ${vars.shadow.lg}`,
    },
  },
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
      selectors: {
        '&:hover': {
          transform: 'none',
        },
        '&:active': {
          transform: 'none',
        },
      },
    },
  },
});

globalStyle(`.dark ${clickable}`, {
  boxShadow: vars.shadow.md,
  background: surfaceVar,
});

globalStyle(`.dark ${clickable}:hover`, {
  boxShadow: vars.shadow.lg,
  background: surfaceHoverVar,
  borderColor: accentVar,
});

globalStyle(`.dark ${clickable}:active`, {
  boxShadow: vars.shadow.md,
  background: surfaceHoverVar,
});

globalStyle(`.dark ${clickable}:focus-visible`, {
  boxShadow: `${focusRingVar}, ${vars.shadow.lg}`,
});

export const header = style({
  padding: `${vars.spacing[5]} ${vars.spacing[6]}`,
  borderBottom: `1px solid ${borderVar}`,
  fontSize: vars.font.size.body.base,
  fontWeight: vars.font.weight.semiBold,
  lineHeight: vars.font.lineHeight.body.base,
  color: textVar,
  background: surfaceVar,
});

export const body = style({
  padding: vars.spacing[6],
  flex: 1,
  color: vars.color.theme.text.secondary,
});

export const footer = style({
  padding: `${vars.spacing[5]} ${vars.spacing[6]}`,
  borderTop: `1px solid ${borderVar}`,
  background: surfaceHoverVar,
});

export const compact = style({});

globalStyle(`${compact} ${header}`, {
  padding: `${vars.spacing[3]} ${vars.spacing[4]}`,
});

globalStyle(`${compact} ${body}`, {
  padding: vars.spacing[4],
});

globalStyle(`${compact} ${footer}`, {
  padding: `${vars.spacing[3]} ${vars.spacing[4]}`,
});