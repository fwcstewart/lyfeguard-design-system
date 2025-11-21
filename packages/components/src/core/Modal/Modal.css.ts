import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

const slideUp = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(20px) scale(0.96)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
});

const slideDown = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
  '100%': {
    opacity: 0,
    transform: 'translateY(20px) scale(0.96)',
  },
});

export const overlay = style({
  position: 'fixed',
  inset: 0,
  background: vars.color.theme.overlay,
  backdropFilter: 'blur(8px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: vars.spacing[4] as unknown as string,
  animation: `${fadeIn} ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&[data-exiting="true"]': {
      animation: `${fadeIn} ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut} reverse`,
    },
  },
});

export const modal = style({
  background: vars.color.theme.surface,
  borderRadius: vars.radius.xl,
  padding: 0,
  width: '100%',
  maxWidth: '560px',
  maxHeight: '90vh',
  boxShadow: vars.shadow.xl,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  animation: `${slideUp} ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  position: 'relative',
  border: `1px solid ${vars.color.theme.border}`,
  backdropFilter: 'blur(12px)',
  selectors: {
    '&[data-exiting="true"]': {
      animation: `${slideDown} ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}`,
    },
  },
});

export const header = style({
  padding: `${vars.spacing[6]} ${vars.spacing[6]} ${vars.spacing[5]}`,
  borderBottom: `1px solid ${vars.color.theme.border}`,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: vars.spacing[4] as unknown as string,
  minHeight: '60px',
});

export const title = style({
  margin: 0,
  fontSize: vars.font.size.heading.md,
  fontWeight: vars.font.weight.bold,
  lineHeight: vars.font.lineHeight.heading.md,
  color: vars.color.theme.text.primary,
  fontFamily: vars.font.sans,
  flex: 1,
});

export const description = style({
  margin: 0,
  marginTop: vars.spacing[2] as unknown as string,
  fontSize: vars.font.size.body.sm,
  lineHeight: vars.font.lineHeight.body.sm,
  color: vars.color.theme.text.secondary,
  fontFamily: vars.font.sans,
});

export const closeButton = style({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: vars.color.theme.text.secondary,
  padding: vars.spacing[2] as unknown as string,
  width: '32px',
  height: '32px',
  minWidth: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radius.md,
  transition: `background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  flexShrink: 0,
  selectors: {
    '&:hover': {
      background: vars.color.theme.surfaceHover,
      color: vars.color.theme.text.primary,
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.accentMint}`,
      outlineOffset: '2px',
    },
  },
});

export const content = style({
  padding: vars.spacing[6],
  overflowY: 'auto',
  flex: 1,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
  color: vars.color.theme.text.secondary,
});

export const footer = style({
  padding: `${vars.spacing[5]} ${vars.spacing[6]}`,
  borderTop: `1px solid ${vars.color.theme.border}`,
  background: vars.color.theme.surfaceHover,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: vars.spacing[3] as unknown as string,
});
