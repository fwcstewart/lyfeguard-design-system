import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[2],
});

export const label = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.ui.label,
  color: vars.color.theme.text.primary,
});

export const inputWrapper = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[2],
});

export const input = style({
  appearance: 'none',
  padding: `${vars.spacing[3]} ${vars.spacing[4]}`,
  borderRadius: vars.radius.md,
  border: `1.5px solid ${vars.color.theme.border}`,
  backgroundColor: vars.color.theme.surface,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
  color: vars.color.theme.text.primary,
  transition: `border-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, box-shadow ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover:not(:disabled):not(:focus)': {
      borderColor: vars.color.theme.borderHover,
      backgroundColor: vars.color.theme.surfaceHover,
    },
    '&:focus': {
      outline: 'none',
      borderColor: vars.color.brand500,
      boxShadow: `0 0 0 3px ${vars.color.brand500_20}`,
      background: vars.color.theme.surface,
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
      background: vars.color.theme.surfaceHover,
      color: vars.color.theme.text.disabled,
    },
    '&::placeholder': {
      color: vars.color.theme.text.tertiary,
      opacity: 1,
    },
  },
});

export const popover = style({
  position: 'absolute',
  top: `calc(100% + ${vars.spacing[2]})`,
  left: 0,
  zIndex: 10,
  backgroundColor: vars.color.theme.surface,
  border: `1px solid ${vars.color.theme.border}`,
  boxShadow: vars.shadow.md,
  borderRadius: vars.radius.lg,
  padding: vars.spacing[4],
  minWidth: '280px', // 70 * 4px - not a standard spacing token, acceptable for component-specific sizing
});

export const calendarHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: vars.spacing[3],
  color: vars.color.theme.text.primary,
});

export const navButton = style({
  border: `1px solid ${vars.color.theme.border}`,
  background: vars.color.theme.surfaceHover,
  color: vars.color.theme.text.primary,
  borderRadius: vars.radius.sm,
  padding: `${vars.spacing[1]} ${vars.spacing[2]}`,
  cursor: 'pointer',
  transition: `background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, border-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover': {
      background: vars.color.theme.surfaceActive,
      borderColor: vars.color.theme.borderHover,
    },
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${vars.color.brand500_20}`,
      borderColor: vars.color.brand500,
    },
  },
});

export const dayGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: vars.spacing[1],
});

const baseDay = style({
  width: '100%',
  aspectRatio: '1',
  borderRadius: vars.radius.sm,
  border: `1px solid transparent`,
  background: 'transparent',
  color: vars.color.theme.text.primary,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.sm,
  cursor: 'pointer',
  transition: `background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, border-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:focus-visible': {
      outline: 'none',
      borderColor: vars.color.brand500,
      boxShadow: `0 0 0 2px ${vars.color.brand500_20}`,
    },
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});

export const day = styleVariants({
  default: [
    baseDay,
    {
      background: vars.color.theme.surface,
      selectors: {
        '&:hover:not(:disabled)': {
          background: vars.color.theme.surfaceHover,
          borderColor: vars.color.theme.borderHover,
        },
      },
    },
  ],
  selected: [
    baseDay,
    {
      background: vars.color.brand500_20,
      color: vars.color.brand900,
      borderColor: vars.color.brand500,
    },
  ],
  range: [
    baseDay,
    {
      background: vars.color.brand500_15,
      color: vars.color.brand800,
      borderColor: vars.color.brand500,
    },
  ],
  disabled: [
    baseDay,
    {
      background: vars.color.theme.surfaceHover,
      color: vars.color.theme.text.disabled,
      cursor: 'not-allowed',
      borderColor: vars.color.theme.border,
    },
  ],
});

export const weekday = style({
  textAlign: 'center',
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.xs,
  color: vars.color.theme.text.secondary,
  paddingBottom: vars.spacing[1],
});
