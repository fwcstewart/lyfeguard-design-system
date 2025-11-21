import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[1] as unknown as string
});

export const label = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.ui.label,
  color: vars.color.theme.text.primary,
});

export const select = style({
  padding: `${vars.spacing[3]} ${vars.spacing[4]}`,
  borderRadius: vars.radius.md,
  border: `1.5px solid ${vars.color.theme.border}`,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
  background: vars.color.theme.surface,
  color: vars.color.theme.text.primary,
  transition: `border-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, box-shadow ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover:not(:disabled):not(:focus)': {
      borderColor: vars.color.theme.borderHover,
    },
    '&:focus': {
      outline: 'none',
      borderColor: vars.color.accentMint,
      boxShadow: `0 0 0 3px ${vars.color.accentMint_20}`,
      background: vars.color.theme.surface,
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
      background: vars.color.theme.surfaceHover,
      color: vars.color.theme.text.disabled,
    },
  },
});
