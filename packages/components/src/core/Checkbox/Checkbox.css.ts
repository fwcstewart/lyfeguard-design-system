import { createVar, style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

const controlSize = vars.spacing[4];
const controlBorderWidth = `calc(${vars.spacing[1]} * 0.375)`; // 1.5px derived from spacing token
const checkmarkSize = vars.spacing[2];

const boxBackground = createVar();
const boxBorder = createVar();
const boxHoverBackground = createVar();
const boxHoverBorder = createVar();
const boxActiveBackground = createVar();
const checkedBackground = createVar();
const checkedHoverBackground = createVar();
const focusRing = createVar();
const checkmark = createVar();
const disabledOpacity = createVar();

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
  border: `${controlBorderWidth} solid ${boxBorder}`,
  borderRadius: vars.radius.sm,
  backgroundColor: boxBackground,
  display: 'grid',
  placeContent: 'center',
  transition: `background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, border-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  vars: {
    [boxBackground]: vars.color.theme.surface,
    [boxBorder]: vars.color.theme.border,
    [boxHoverBackground]: vars.color.theme.surfaceHover,
    [boxHoverBorder]: vars.color.theme.borderHover,
    [boxActiveBackground]: vars.color.theme.surfaceActive,
    [checkedBackground]: vars.color.accentMint,
    [checkedHoverBackground]: vars.color.success600,
    [focusRing]: vars.color.accentMint_20,
    [checkmark]: vars.color.brand900,
    [disabledOpacity]: '0.56',
  },
  selectors: {
    '.dark &': {
      vars: {
        [boxBackground]: vars.color.theme.surface,
        [boxBorder]: vars.color.theme.border,
        [boxHoverBackground]: vars.color.theme.surfaceHover,
        [boxHoverBorder]: vars.color.theme.borderHover,
        [boxActiveBackground]: vars.color.theme.surfaceActive,
        [checkedBackground]: vars.color.success600,
        [checkedHoverBackground]: vars.color.accentMint,
        [focusRing]: vars.color.accentMint_30,
        [checkmark]: vars.color.brand900,
        [disabledOpacity]: '0.6',
      },
    },
    '&:hover:not(:disabled)': {
      borderColor: boxHoverBorder,
      backgroundColor: boxHoverBackground,
    },
    '&:active:not(:disabled)': {
      backgroundColor: boxActiveBackground,
      borderColor: boxHoverBorder,
    },
    '&:focus-visible': {
      outline: 'none',
      borderColor: checkedBackground,
      boxShadow: `0 0 0 ${vars.spacing[1]} ${focusRing}`,
    },
    '&:checked': {
      backgroundColor: checkedBackground,
      borderColor: checkedBackground,
    },
    '&:checked:hover:not(:disabled)': {
      backgroundColor: checkedHoverBackground,
      borderColor: checkedHoverBackground,
    },
    '&:checked:active:not(:disabled)': {
      backgroundColor: checkedHoverBackground,
      borderColor: checkedHoverBackground,
    },
    '&:checked::after': {
      content: '',
      width: checkmarkSize,
      height: checkmarkSize,
      borderRadius: `calc(${vars.radius.sm} / 2)`,
      backgroundColor: checkmark,
    },
    '&:disabled': {
      opacity: disabledOpacity,
      cursor: 'not-allowed',
    },
  },
});

// Text label next to the checkbox
export const label = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  lineHeight: vars.font.lineHeight.ui.label,
  fontWeight: vars.font.weight.medium,
  color: vars.color.theme.text.primary,
});
