import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[1] as unknown as string,
});

export const labels = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  lineHeight: vars.font.lineHeight.ui.label,
  color: vars.color.theme.text.primary,
  selectors: {
    '.dark &': {
      color: vars.color.theme.text.primary,
    },
  },
});

export const value = style({
  color: vars.color.theme.text.secondary,
  fontWeight: vars.font.weight.semiBold,
  selectors: {
    '.dark &': {
      color: vars.color.theme.text.secondary,
    },
  },
});

export const bar = style({
  width: '100%',
  backgroundColor: vars.color.theme.surfaceActive,
  borderRadius: vars.radius.round,
  overflow: 'hidden',
  selectors: {
    '.dark &': {
      backgroundColor: vars.color.theme.surfaceHover,
    },
  },
});

export const sizes = styleVariants({
  sm: {
    height: vars.spacing[1] as unknown as string,
  },
  md: {
    height: vars.spacing[2] as unknown as string,
  },
  lg: {
    height: vars.spacing[3] as unknown as string,
  },
});

export const fill = style({
  height: '100%',
  backgroundColor: vars.color.brand500,
  transition: `width ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '.dark &': {
      backgroundColor: vars.color.brand500,
    },
  },
});