import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

// Outer container for the progress bar
export const bar = style({
  width: '100%',
  height: '8px',
  backgroundColor: vars.color.neutral200,
  borderRadius: vars.radius.md,
  overflow: 'hidden',
});

// The filled portion of the bar. The width will be controlled via inline style
export const fill = style({
  height: '100%',
  backgroundColor: vars.color.brand500,
  transition: 'width 0.2s ease',
});