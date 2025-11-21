import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

const fadeIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-8px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

export const base = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.spacing[3] as unknown as string,
  borderRadius: vars.radius.lg,
  padding: `${vars.spacing[5]} ${vars.spacing[6]}` as unknown as string,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.sm,
  lineHeight: vars.font.lineHeight.body.sm,
  animation: `${fadeIn} ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  boxShadow: vars.shadow.xs,
  transition: `box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover': {
      boxShadow: vars.shadow.sm,
    },
  },
});

export const variants = styleVariants({
  info: {
    background: vars.color.info100,
    borderLeft: `4px solid ${vars.color.info500}`,
    color: vars.color.info500,
    selectors: {
      '.dark &': {
        background: vars.color.info500_15,
        color: vars.color.info500,
      },
    },
  },
  success: {
    background: vars.color.success100,
    borderLeft: `4px solid ${vars.color.success500}`,
    color: vars.color.success600,
    selectors: {
      '.dark &': {
        background: vars.color.success500_15,
        color: vars.color.success500,
      },
    },
  },
  warning: {
    background: vars.color.warning100,
    borderLeft: `4px solid ${vars.color.warning500}`,
    color: vars.color.warning500,
    selectors: {
      '.dark &': {
        background: vars.color.warning500_15,
        color: vars.color.warning500,
      },
    },
  },
  error: {
    background: vars.color.error100,
    borderLeft: `4px solid ${vars.color.error500}`,
    color: vars.color.error500,
    selectors: {
      '.dark &': {
        background: vars.color.error500_15,
        color: vars.color.error500,
      },
    },
  },
});

export const title = style({
  fontWeight: vars.font.weight.semiBold,
  marginBottom: vars.spacing[1] as unknown as string,
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
});

export const message = style({
  margin: 0,
  color: 'inherit',
  opacity: 0.95,
});