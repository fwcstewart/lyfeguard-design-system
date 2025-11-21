import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

// Wrapper for the entire radio group. We stack radios by default but allow
// horizontal layout via inline prop.
export const group = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[2],
});

// Each radio option wrapper; ensures label and input are aligned
export const option = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[2],
  cursor: 'pointer',
});

// Native radio input styled to match DS. The circle is drawn with
// CSS; when checked, we fill the dot.
export const radio = style({
  appearance: 'none',
  width: '16px',
  height: '16px',
  border: `1px solid ${vars.color.neutral400}`,
  borderRadius: '50%',
  backgroundColor: vars.color.neutral0,
  display: 'grid',
  placeContent: 'center',
  transition: 'background-color 0.2s ease, border-color 0.2s ease',
  selectors: {
    '&:checked': {
      borderColor: vars.color.brand500,
    },
    '&:checked::after': {
      content: '',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: vars.color.brand500,
    },
  },
});

export const label = style({
  fontFamily: vars.font.sans,
  fontSize: '14px',
  color: vars.color.neutral900,
});