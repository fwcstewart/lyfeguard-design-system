import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const wrapper = style({
  position: 'relative',
  display: 'inline-block',
});

export const trigger = style({
  cursor: 'pointer',
});

export const menu = style({
  position: 'absolute',
  top: `calc(100% + ${vars.spacing[2]})`,
  zIndex: 1000,
  backgroundColor: vars.color.theme.surface,
  border: `1px solid ${vars.color.theme.border}`,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.lg,
  minWidth: '200px',
  padding: `${vars.spacing[1]} 0`,
  display: 'flex',
  flexDirection: 'column',
  selectors: {
    '&[data-align="left"]': {
      left: 0,
    },
    '&[data-align="right"]': {
      right: 0,
    },
  },
});

export const item = style({
  display: 'block',
  width: '100%',
  padding: `${vars.spacing[3]} ${vars.spacing[4]}`,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
  color: vars.color.theme.text.primary,
  textAlign: 'left',
  textDecoration: 'none',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: `background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: vars.color.theme.surfaceHover,
      color: vars.color.theme.text.primary,
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    '&:focus-visible': {
      outline: 'none',
      backgroundColor: vars.color.theme.surfaceHover,
      boxShadow: `inset 0 0 0 2px ${vars.color.accentMint}`,
    },
  },
});

