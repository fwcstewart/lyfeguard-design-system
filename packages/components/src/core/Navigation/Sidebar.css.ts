import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';
import {
  navigationActiveBackground,
  navigationActiveText,
  navigationHover,
  navigationMutedText,
  navigationSeparator,
  navigationSurface,
  navigationText,
} from './navigationTokens.css';

export const sidebar = style({
  display: 'flex',
  flexDirection: 'column',
  width: `calc(${vars.spacing[10]} * 4 + ${vars.spacing[4]})`,
  background: navigationSurface,
  color: navigationText,
  padding: `${vars.spacing[5]} 0` as unknown as string,
  borderRight: `1px solid ${navigationSeparator}`,
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[3] as unknown as string,
  minHeight: vars.spacing[9],
  padding: `${vars.spacing[3]} ${vars.spacing[5]}` as unknown as string,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  lineHeight: vars.font.lineHeight.ui.label,
  fontWeight: vars.font.weight.medium,
  color: navigationMutedText,
  cursor: 'pointer',
  borderLeft: `${vars.spacing[1]} solid transparent`,
  transition: `background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, border-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  margin: `0 ${vars.spacing[2]}` as unknown as string,
  borderRadius: vars.radius.md,
  position: 'relative',
  selectors: {
    '&[data-active="true"]': {
      background: navigationActiveBackground,
      borderLeftColor: navigationActiveText,
      color: navigationActiveText,
      fontWeight: vars.font.weight.semiBold,
    },
    '&:hover:not([data-active="true"])': {
      background: navigationHover,
      color: navigationText,
      transform: `translateX(${vars.spacing[1]})`,
    },
    '&[data-active="true"]:hover': {
      background: navigationActiveBackground,
    },
    '&:active': {
      transform: `translateX(calc(${vars.spacing[1]} / 2)) scale(0.98)`,
    },
    '&:focus-visible': {
      outline: `2px solid ${navigationActiveText}`,
      outlineOffset: '2px',
    },
  },
});

export const iconWrapper = style({
  width: vars.spacing[5],
  height: vars.spacing[5],
  minWidth: vars.spacing[5],
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