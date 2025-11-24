import { style, styleVariants, keyframes, globalStyle, createVar, type StyleRule } from '@vanilla-extract/css';
import { vars } from '../../globals.css';
import { STATUS_COLOR_TOKENS, type StatusVariant } from '../statusTokens';

const fadeIn = keyframes({
  '0%': {
    opacity: 0,
    transform: `translateY(calc(-1 * ${vars.spacing[2]}))`, // -8px
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const backgroundVar = createVar();
const borderVar = createVar();
const textVar = createVar();
const iconVar = createVar();

export const base = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.spacing[3],
  borderRadius: vars.radius.lg,
  padding: `${vars.spacing[5]} ${vars.spacing[6]}`,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.sm,
  lineHeight: vars.font.lineHeight.body.sm,
  animation: `${fadeIn} ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  boxShadow: vars.shadow.xs,
  transition: `box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  background: backgroundVar,
  color: textVar,
  borderLeftColor: borderVar,
  borderLeftStyle: 'solid',
  borderLeftWidth: vars.spacing[1],
  selectors: {
    '&:hover': {
      boxShadow: vars.shadow.sm,
    },
  },
});

const variantStyles = Object.fromEntries(
  Object.entries(STATUS_COLOR_TOKENS).map(([variant, tokens]) => [
    variant,
    {
      vars: {
        [backgroundVar]: tokens.background,
        [borderVar]: tokens.border,
        [textVar]: tokens.text,
        [iconVar]: tokens.icon,
      },
    } satisfies StyleRule,
  ]),
) as Record<StatusVariant, StyleRule>;

export const variants = styleVariants(variantStyles);

export const title = style({
  fontWeight: vars.font.weight.semiBold,
  marginBottom: vars.spacing[1],
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
});

export const message = style({
  margin: 0,
  color: 'inherit',
  opacity: 0.95,
});

export const icon = style({
  color: iconVar,
  flexShrink: 0,
  marginTop: vars.spacing[1],
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[1],
});

globalStyle(`${icon} svg`, {
  display: 'block',
  width: vars.spacing[5],
  height: vars.spacing[5],
  color: 'inherit',
});
