import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

const trackWidth = vars.spacing[8];
const trackHeight = vars.spacing[5];
const handleSize = vars.spacing[4];
const handleOffset = `calc(${vars.spacing[1]} / 2)`; // aligns handle within track padding

// Track of the switch. The background colour will change based on the
// checked state via inline styles in the component.
export const track = style({
  width: trackWidth,
  height: trackHeight,
  borderRadius: `calc(${trackHeight} / 2)`,
  position: 'relative',
  transition: `background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
});

// Handle of the switch. We'll animate translateX via inline styles.
export const handle = style({
  position: 'absolute',
  top: handleOffset,
  left: handleOffset,
  width: handleSize,
  height: handleSize,
  borderRadius: '50%',
  backgroundColor: vars.color.theme.text.primary,
  boxShadow: vars.shadow.xs,
  transition: `transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
});

// Outer label wraps the switch and optional label text
export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[2],
  cursor: 'pointer',
  selectors: {
    '&:focus-visible': {
      outline: 'none',
    },
    [`&:focus-visible ${track}`]: {
      boxShadow: `0 0 0 ${vars.spacing[1]} ${vars.color.accentMint_20}`,
    },
  },
});

export const label = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  lineHeight: vars.font.lineHeight.ui.label,
  color: vars.color.theme.text.primary,
});