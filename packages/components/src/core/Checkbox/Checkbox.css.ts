import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

// Container wraps the input and label together so clicking the text will toggle
export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[2],
  cursor: 'pointer',
});

// Style applied to the native checkbox input. We hide the native appearance
// and draw our own box. When checked, the background fills with the brand
// colour and the border changes colour as well.
export const checkbox = style({
  appearance: 'none',
  width: '16px',
  height: '16px',
  border: `1px solid ${vars.color.neutral400}`,
  borderRadius: vars.radius.sm,
  backgroundColor: vars.color.neutral0,
  display: 'grid',
  placeContent: 'center',
  transition: 'background-color 0.2s ease, border-color 0.2s ease',
  selectors: {
    '&:checked': {
      backgroundColor: vars.color.brand500,
      borderColor: vars.color.brand500,
    },
    '&:checked::after': {
      content: '',
      width: '8px',
      height: '8px',
      borderRadius: '2px',
      backgroundColor: vars.color.neutral0,
    },
  },
});

// Text label next to the checkbox
export const label = style({
  fontFamily: vars.font.sans,
  fontSize: '14px',
  color: vars.color.neutral900,
});