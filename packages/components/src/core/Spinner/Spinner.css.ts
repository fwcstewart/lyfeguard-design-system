import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

// Define a spin animation for the loader
const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

// Base style for the spinner element. Sizing, stroke and track colours are
// driven by semantic tokens with light/dark overrides.
export const spinner = style({
  borderStyle: 'solid',
  borderRadius: '50%',
  width: 'var(--spinner-size)',
  height: 'var(--spinner-size)',
  borderWidth: 'var(--spinner-stroke-width)',
  borderColor: 'var(--spinner-track-color)',
  borderTopColor: 'var(--spinner-stroke-color)',
  animation: `${spin} ${vars.motion.duration.normal} linear infinite`,
  vars: {
    '--spinner-size': vars.spacing[6],
    '--spinner-stroke-width': `calc(${vars.spacing[1]} * 0.75)`,
    '--spinner-track-color': vars.color.theme.border,
    '--spinner-stroke-color': vars.color.brand500,
  },
  selectors: {
    '.dark &': {
      vars: {
        '--spinner-track-color': vars.color.neutral700,
        '--spinner-stroke-color': vars.color.accentMint,
      },
    },
  },
});