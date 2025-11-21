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
  border: `1.5px solid ${vars.color.theme.border}`,
  borderRadius: vars.radius.sm,
  backgroundColor: vars.color.theme.surface,
  display: 'grid',
  placeContent: 'center',
  transition: `background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, border-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover:not(:disabled)': {
      borderColor: vars.color.theme.borderHover,
    },
    '&:checked': {
      backgroundColor: vars.color.accentMint,
      borderColor: vars.color.accentMint,
    },
    '&:checked::after': {
      content: '',
      width: '8px',
      height: '8px',
      borderRadius: '2px',
      backgroundColor: vars.color.brand900,
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
    '.dark &:checked::after': {
      backgroundColor: vars.color.brand900,
    },
  },
});

// Text label next to the checkbox
export const label = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  lineHeight: vars.font.lineHeight.ui.label,
  color: vars.color.theme.text.primary,
});