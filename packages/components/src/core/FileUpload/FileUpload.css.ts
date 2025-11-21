import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[2],
  color: vars.color.theme.text.primary,
  fontFamily: vars.font.sans,
});

export const label = style({
  fontSize: vars.font.size.ui.label,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.ui.label,
  color: vars.color.theme.text.secondary,
});

export const dropZone = style({
  borderWidth: 2,
  borderStyle: 'dashed',
  borderColor: vars.color.theme.border,
  borderRadius: vars.radius.lg,
  padding: `${vars.spacing[5]} ${vars.spacing[6]}`,
  textAlign: 'center',
  backgroundColor: vars.color.theme.surface,
  color: vars.color.theme.text.secondary,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
  cursor: 'pointer',
  transition: `background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, border-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover': {
      borderColor: vars.color.theme.borderHover,
      backgroundColor: vars.color.theme.surfaceHover,
      color: vars.color.theme.text.primary,
    },
    '&:focus-visible': {
      outline: 'none',
      borderColor: vars.color.info500,
      boxShadow: `0 0 0 3px ${vars.color.info500_15}`,
    },
    '.dark &': {
      backgroundColor: vars.color.theme.surface,
      borderColor: vars.color.theme.border,
      color: vars.color.theme.text.secondary,
    },
    '.dark &:hover': {
      borderColor: vars.color.theme.borderHover,
      backgroundColor: vars.color.theme.surfaceHover,
      color: vars.color.theme.text.primary,
    },
  },
});

export const dropZoneActive = style({
  borderColor: vars.color.info500,
  backgroundColor: vars.color.info100,
  color: vars.color.theme.text.primary,
  selectors: {
    '.dark &': {
      backgroundColor: vars.color.info500_15,
    },
  },
});

export const fileList = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.sm,
  lineHeight: vars.font.lineHeight.body.sm,
  color: vars.color.theme.text.primary,
});

export const fileItem = style({
  padding: `${vars.spacing[1]} 0`,
  borderBottom: `1px solid ${vars.color.theme.border}`,
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});

export const prompt = style({
  margin: 0,
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
  color: vars.color.theme.text.primary,
});

export const helper = style({
  margin: 0,
  fontSize: vars.font.size.body.sm,
  lineHeight: vars.font.lineHeight.body.sm,
  color: vars.color.theme.text.secondary,
});