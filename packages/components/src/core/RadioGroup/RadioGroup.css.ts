import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

const controlSize = vars.spacing[4];
const controlBorderWidth = `calc(${vars.spacing[1]} * 0.375)`; // 1.5px derived from spacing token
const focusRingWidth = vars.spacing[1];
const indicatorSize = vars.spacing[2];

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
  selectors: {
    '&[data-disabled="true"]': {
      cursor: 'not-allowed',
    },
    '&[data-disabled="true"] span': {
      color: vars.color.theme.text.disabled,
    },
  },
});

// Native radio input styled to match DS. The circle is drawn with
// CSS; when checked, we fill the dot.
export const radio = style({
  appearance: 'none',
  width: controlSize,
  height: controlSize,
  border: `${controlBorderWidth} solid ${vars.color.theme.border}`,
  borderRadius: '50%',
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
      borderColor: vars.color.accentMint,
    },
    '&:checked::after': {
      content: '',
      width: indicatorSize,
      height: indicatorSize,
      borderRadius: '50%',
      backgroundColor: vars.color.accentMint,
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
});

export const label = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  lineHeight: vars.font.lineHeight.ui.label,
  color: vars.color.theme.text.primary,
});