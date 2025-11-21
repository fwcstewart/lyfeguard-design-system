import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

// Define a spin animation for the loader
const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

// Base style for the spinner element. The border colours use the
// design-system tokens. The size will be provided via inline style.
export const spinner = style({
  borderStyle: 'solid',
  borderWidth: '3px',
  borderColor: `${vars.color.neutral200}`,
  borderTopColor: vars.color.brand500,
  borderRadius: '50%',
  animation: `${spin} 0.8s linear infinite`,
});