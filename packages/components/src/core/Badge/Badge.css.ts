import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${vars.spacing[1]} ${vars.spacing[2]}` as unknown as string,
  borderRadius: vars.radius.round,
  fontSize: vars.font.size.ui.overline,
  fontWeight: vars.font.weight.semiBold,
  lineHeight: vars.font.lineHeight.ui.overline,
  fontFamily: vars.font.sans,
  userSelect: 'none',
  whiteSpace: 'nowrap',
  transition: `background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
});

export const variants = styleVariants({
  primary: [
    base,
    {
      backgroundColor: vars.color.brand500_20,
      color: vars.color.brand500,
      selectors: {
        '&:hover': {
          backgroundColor: vars.color.brand500_30,
        },
        '.dark &': {
          backgroundColor: vars.color.brand500_25,
          color: vars.color.brand500,
        },
      },
    },
  ],
  success: [
    base,
    {
      backgroundColor: vars.color.success100,
      color: vars.color.success500,
      selectors: {
        '&:hover': {
          backgroundColor: vars.color.success600,
          color: vars.color.neutral0,
        },
        '.dark &': {
          backgroundColor: vars.color.success500_15,
          color: vars.color.success500,
          selectors: {
            '&:hover': {
              backgroundColor: vars.color.success500,
              color: vars.color.brand900,
            },
          },
        },
      },
    },
  ],
  warning: [
    base,
    {
      backgroundColor: vars.color.warning100,
      color: vars.color.warning500,
      selectors: {
        '&:hover': {
          opacity: 0.9,
        },
        '.dark &': {
          background: vars.color.warning500_15,
          color: vars.color.warning500,
        },
      },
    },
  ],
  error: [
    base,
    {
      backgroundColor: vars.color.error100,
      color: vars.color.error500,
      selectors: {
        '&:hover': {
          opacity: 0.9,
        },
        '.dark &': {
          background: vars.color.error500_15,
          color: vars.color.error500,
        },
      },
    },
  ],
  info: [
    base,
    {
      backgroundColor: vars.color.info100,
      color: vars.color.info500,
      selectors: {
        '&:hover': {
          opacity: 0.9,
        },
        '.dark &': {
          background: vars.color.info500_15,
          color: vars.color.info500,
        },
      },
    },
  ],
});