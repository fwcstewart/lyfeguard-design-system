import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

// Outer label wraps the switch and optional label text
export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[2],
  cursor: 'pointer',
});

// Track of the switch. The background colour will change based on the
// checked state via inline styles in the component.
export const track = style({
  width: '40px',
  height: '20px',
  borderRadius: '10px',
  position: 'relative',
  transition: 'background-color 0.2s ease',
});

// Handle of the switch. We'll animate translateX via inline styles.
export const handle = style({
  position: 'absolute',
  top: '2px',
  left: '2px',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: vars.color.neutral0,
  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
  transition: 'transform 0.2s ease',
});

export const label = style({
  fontFamily: vars.font.sans,
  fontSize: '14px',
  color: vars.color.neutral900,
});