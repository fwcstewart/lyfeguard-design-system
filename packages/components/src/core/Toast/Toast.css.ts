import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const container = style({
  position: 'fixed',
  bottom: '16px',
  right: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[3] as unknown as string,
  zIndex: 1100,
  pointerEvents: 'none',
});

const slideIn = keyframes({
  '0%': {
    transform: 'translateX(100%)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateX(0)',
    opacity: 1,
  },
});

const slideOut = keyframes({
  '0%': {
    transform: 'translateX(0)',
    opacity: 1,
  },
  '100%': {
    transform: 'translateX(100%)',
    opacity: 0,
  },
});

export const toastBase = style({
  minWidth: '280px',
  maxWidth: '420px',
  padding: `${vars.spacing[4]} ${vars.spacing[5]}` as unknown as string,
  borderRadius: vars.radius.lg,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.sm,
  lineHeight: vars.font.lineHeight.body.sm,
  boxShadow: vars.shadow.md,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: vars.spacing[3] as unknown as string,
  pointerEvents: 'auto',
  animation: `${slideIn} ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  transition: `box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.ease}, transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}, background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&[data-exiting="true"]': {
      animation: `${slideOut} ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}`,
    },
    '&:hover': {
      boxShadow: vars.shadow.lg,
      transform: 'translateY(-1px)',
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
    background: vars.color.success500,
    borderLeft: `4px solid ${vars.color.success600}`,
    color: vars.color.neutral0,
    selectors: {
      '.dark &': {
        background: vars.color.theme.surface,
        borderLeft: `4px solid ${vars.color.success500}`,
        color: vars.color.success500,
        backdropFilter: 'blur(8px)',
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

export const message = style({
  flex: 1,
  paddingTop: '2px',
});

export const closeButton = style({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: 'inherit',
  fontSize: '20px',
  lineHeight: 1,
  padding: `${vars.spacing[1]} ${vars.spacing[1]}` as unknown as string,
  width: '24px',
  height: '24px',
  minWidth: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  borderRadius: vars.radius.sm,
  opacity: 0.7,
  transition: `opacity ${vars.motion.duration.fast} ${vars.motion.easing.ease}, background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover': {
      opacity: 1,
      backgroundColor: vars.color.theme.surfaceHover,
      transform: 'scale(1.1)',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
    '&:focus-visible': {
      outline: `2px solid currentColor`,
      outlineOffset: '2px',
      opacity: 1,
    },
  },
});