import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../../globals.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[4] as unknown as string,
  backgroundColor: vars.color.theme.surface,
  border: `1px solid ${vars.color.theme.border}`,
  borderRadius: vars.radius.lg,
  padding: vars.spacing[5] as unknown as string,
});

export const heading = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  fontWeight: vars.font.weight.semiBold,
  color: vars.color.theme.text.secondary,
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[3] as unknown as string,
});

export const item = style({
  borderRadius: vars.radius.md,
  padding: vars.spacing[3] as unknown as string,
  border: `1px solid ${vars.color.theme.border}`,
  backgroundColor: vars.color.theme.surfaceHover,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[2] as unknown as string,
  transition: `border-color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}, transform ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&:hover': {
      borderColor: vars.color.theme.borderHover,
      transform: 'translateY(-1px)',
    },
  },
});

export const itemInteractive = style({
  cursor: 'pointer',
});

export const itemHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: vars.spacing[2] as unknown as string,
  fontFamily: vars.font.sans,
});

export const label = style({
  fontSize: vars.font.size.body.sm,
  fontWeight: vars.font.weight.semiBold,
  color: vars.color.theme.text.primary,
});

export const value = style({
  fontSize: vars.font.size.body.sm,
  color: vars.color.theme.text.secondary,
});

export const helper = style({
  fontSize: vars.font.size.body.xs,
  color: vars.color.theme.text.secondary,
  lineHeight: vars.font.lineHeight.body.xs,
});

export const track = style({
  position: 'relative',
  width: '100%',
  height: vars.spacing[2] as unknown as string,
  borderRadius: vars.radius.round,
  backgroundColor: vars.color.theme.surfaceActive,
  overflow: 'hidden',
});

export const fill = styleVariants({
  info: {
    backgroundColor: vars.color.info500,
  },
  success: {
    backgroundColor: vars.color.success600,
  },
  warning: {
    backgroundColor: vars.color.warning500,
  },
  error: {
    backgroundColor: vars.color.error500,
  },
});

export const bar = style({
  height: '100%',
  transition: `width ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
});
