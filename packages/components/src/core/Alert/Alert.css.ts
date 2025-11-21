import { style, styleVariants, keyframes, globalStyle } from '@vanilla-extract/css';
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
    background: vars.color.status.info.surface,
    borderLeft: `4px solid ${vars.color.status.info.border}`,
    color: vars.color.status.info.text,
  },
  success: {
    background: vars.color.status.success.surface,
    borderLeft: `4px solid ${vars.color.status.success.border}`,
    color: vars.color.status.success.text,
  },
  warning: {
    background: vars.color.status.warning.surface,
    borderLeft: `4px solid ${vars.color.status.warning.border}`,
    color: vars.color.status.warning.text,
  },
  error: {
    background: vars.color.status.error.surface,
    borderLeft: `4px solid ${vars.color.status.error.border}`,
    color: vars.color.status.error.text,
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

export const icon = style({
  color: 'inherit',
  flexShrink: 0,
  marginTop: vars.spacing[1] as unknown as string,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[1] as unknown as string,
});

globalStyle(`${icon} svg`, {
  display: 'block',
  width: vars.spacing[5],
  height: vars.spacing[5],
  color: 'inherit',
});
