import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const sidebar = style({
  display: 'flex',
  flexDirection: 'column',
  width: '280px',
  background: vars.color.theme.surface,
  color: vars.color.theme.text.primary,
  padding: `${vars.spacing[5]} 0` as unknown as string,
  borderRight: `1px solid ${vars.color.theme.border}`,
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[3] as unknown as string,
  minHeight: '48px',
  padding: `${vars.spacing[3]} ${vars.spacing[5]}` as unknown as string,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  lineHeight: vars.font.lineHeight.ui.label,
  fontWeight: vars.font.weight.medium,
  color: vars.color.theme.text.secondary,
  cursor: 'pointer',
  borderLeft: `4px solid transparent`,
  transition: `background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, border-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  margin: `0 ${vars.spacing[2]}` as unknown as string,
  borderRadius: vars.radius.md,
  position: 'relative',
  selectors: {
    '&[data-active="true"]': {
      background: vars.color.accentMint_15,
      borderLeftColor: vars.color.accentMint,
      color: vars.color.accentMint,
      fontWeight: vars.font.weight.semiBold,
    },
    '&:hover:not([data-active="true"])': {
      background: vars.color.theme.surfaceHover,
      color: vars.color.theme.text.primary,
      transform: 'translateX(4px)',
    },
    '&[data-active="true"]:hover': {
      background: vars.color.accentMint_20,
    },
    '&:active': {
      transform: 'translateX(2px) scale(0.98)',
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.accentMint}`,
      outlineOffset: '2px',
    },
  },
});

export const iconWrapper = style({
  width: '20px',
  height: '20px',
  minWidth: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  selectors: {
    [`${item}[data-active="true"] &`]: {
      color: vars.color.accentMint,
    },
  },
});