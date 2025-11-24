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
  navigationFocusRing,
} from './navigationTokens.css';

export const sidebar = style({
  display: 'flex',
  flexDirection: 'column',
  width: `calc(${vars.spacing[10]} * 4 + ${vars.spacing[4]})`,
  height: '100%',
  background: navigationSurface,
  color: navigationText,
  padding: `${vars.spacing[6]} ${vars.spacing[2]}` as unknown as string,
  borderRight: `1px solid ${navigationSeparator}`,
  gap: vars.spacing[1] as unknown as string,
  overflowY: 'auto',
  overflowX: 'hidden',
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[2] as unknown as string,
  minHeight: `calc(${vars.spacing[8]} + ${vars.spacing[1]})`,
  padding: `${vars.spacing[3]} ${vars.spacing[4]}` as unknown as string,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  lineHeight: vars.font.lineHeight.ui.label,
  fontWeight: vars.font.weight.medium,
  color: navigationMutedText,
  cursor: 'pointer',
  borderLeft: `3px solid transparent`,
  transition: `background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, border-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}, box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.ease}, opacity ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  margin: `0 ${vars.spacing[1]}` as unknown as string,
  borderRadius: vars.radius.lg,
  position: 'relative',
  opacity: 0.85,
  width: '100%',
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  selectors: {
    '&[data-active="true"]': {
      background: navigationActiveBackground,
      borderLeftColor: navigationActiveText,
      color: navigationActiveText,
      fontWeight: vars.font.weight.semiBold,
      boxShadow: '0 2px 8px color-mix(in srgb, var(--color-accent-mint) 12%, transparent)',
      opacity: 1,
    },
    '&:hover:not([data-active="true"])': {
      background: navigationHover,
      color: navigationText,
      transform: `translateX(${vars.spacing[1]})`,
      opacity: 1,
    },
    '&[data-active="true"]:hover': {
      background: navigationActiveBackground,
      boxShadow: '0 4px 12px color-mix(in srgb, var(--color-accent-mint) 16%, transparent)',
      opacity: 1,
    },
    '&:active': {
      transform: `translateX(calc(${vars.spacing[1]} / 2)) scale(0.98)`,
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: navigationFocusRing,
      opacity: 1,
    },
  },
});

export const iconWrapper = style({
  width: vars.spacing[5],
  height: vars.spacing[5],
  minWidth: vars.spacing[5],
  maxWidth: vars.spacing[5],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  fontSize: '1.125rem',
  transition: `transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}, color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  color: navigationMutedText,
  selectors: {
    [`${item}[data-active="true"] &`]: {
      color: vars.color.accentMint,
      transform: 'scale(1.1)',
    },
    [`${item}:hover:not([data-active="true"]) &`]: {
      color: navigationText,
      transform: 'scale(1.05)',
    },
    [`${item}[data-active="true"]:hover &`]: {
      color: vars.color.accentMint,
      transform: 'scale(1.1)',
    },
  },
});