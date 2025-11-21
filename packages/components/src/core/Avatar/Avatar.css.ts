import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

const focusRingWidth = vars.spacing[1];
const borderWidth = `calc(${vars.spacing[1]} * 0.25)`;

export const container = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radius.round,
  overflow: 'hidden',
  fontFamily: vars.font.sans,
  fontWeight: vars.font.weight.semiBold,
  color: 'var(--avatar-text, var(--color-theme-text-primary))',
  backgroundColor: 'var(--avatar-background, var(--color-theme-surface))',
  border: `${borderWidth} solid var(--avatar-border, var(--color-theme-border))`,
  outline: 'none',
  transition: `background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.ease}, transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}, border-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:focus-visible': {
      boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.accentMint_20}`,
      borderColor: vars.color.accentMint,
    },
    '&:active': {
      transform: 'translateY(1px)',
      backgroundColor: 'var(--avatar-background-active, var(--color-theme-surfaceActive))',
    },
    '.dark &': {
      backgroundColor: 'var(--avatar-background-dark, var(--color-theme-surface))',
      color: 'var(--avatar-text-dark, var(--color-theme-text-primary))',
      borderColor: 'var(--avatar-border-dark, var(--color-theme-border))',
    },
    '.dark &:active': {
      backgroundColor: 'var(--avatar-background-active-dark, var(--color-theme-surfaceHover))',
    },
  },
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});