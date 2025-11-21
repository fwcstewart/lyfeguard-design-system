import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

const controlSize = vars.spacing[4];
const controlBorderWidth = `calc(${vars.spacing[1]} * 0.375)`; // 1.5px derived from spacing token
const checkmarkSize = vars.spacing[2];
const focusRingWidth = vars.spacing[1];

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
  width: controlSize,
  height: controlSize,
  border: `${controlBorderWidth} solid ${vars.color.theme.border}`,
  borderRadius: vars.radius.sm,
  backgroundColor: vars.color.theme.surface,
  display: 'grid',
  placeContent: 'center',
  transition: `background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, border-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover:not(:disabled)': {
      borderColor: vars.color.theme.borderHover,
    },
    '&:focus-visible': {
      outline: 'none',
      borderColor: vars.color.accentMint,
      boxShadow: `0 0 0 ${focusRingWidth} ${vars.color.accentMint_20}`,
    },
    '&:checked': {
      backgroundColor: vars.color.accentMint,
      borderColor: vars.color.accentMint,
    },
    '&:checked::after': {
      content: '',
      width: checkmarkSize,
      height: checkmarkSize,
      borderRadius: `calc(${vars.radius.sm} / 2)`,
      backgroundColor: vars.color.theme.text.primary,
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
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