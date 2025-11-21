import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

const fadeIn = keyframes({
  '0%': {
    opacity: 0,
    transform: `translateY(${vars.spacing[1]})`, // 4px
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

// List containing tab triggers
export const tabList = style({
  display: 'flex',
  gap: vars.spacing[2] as unknown as string,
  position: 'relative',
  marginBottom: vars.spacing[4] as unknown as string,
  padding: `${vars.spacing[2]} ${vars.spacing[2]} ${vars.spacing[1]}` as unknown as string,
  background: vars.color.theme.surface,
  borderRadius: vars.radius.md,
  boxShadow: `inset 0 -2px 0 0 ${vars.color.theme.border}`,
});

// Individual tab trigger
export const tab = style({
  padding: `${vars.spacing[3]} ${vars.spacing[5]}` as unknown as string,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.button,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.ui.button,
  color: vars.color.theme.text.tertiary,
  cursor: 'pointer',
  border: 'none',
  background: 'transparent',
  position: 'relative',
  transition: `color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  borderRadius: `${vars.radius.md} ${vars.radius.md} 0 0`,
  marginBottom: `calc(-1 * ${vars.spacing[1]} / 2)`, // -2px (half of 4px spacing)
  selectors: {
    '&[data-active="true"]': {
      color: vars.color.theme.text.primary,
      fontWeight: vars.font.weight.semiBold,
      backgroundColor: vars.color.theme.surfaceHover,
      boxShadow: `0 6px 18px ${vars.color.brand500_15}`,
    },
    '&[data-active="true"]::after': {
      content: '""',
      position: 'absolute',
      bottom: `calc(-1 * ${vars.spacing[1]} / 2)`, // -2px (half of 4px spacing)
      left: 0,
      right: 0,
      height: `calc(${vars.spacing[1]} * 0.75)`, // 3px (0.75 * 4px)
      background: `linear-gradient(90deg, ${vars.color.brand500} 0%, ${vars.color.brand500_40} 50%, ${vars.color.brand500} 100%)`,
      borderRadius: `${vars.radius.round} ${vars.radius.round} 0 0`,
      animation: `${fadeIn} ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
    },
    '&:hover:not([data-active="true"]):not(:disabled)': {
      color: vars.color.theme.text.primary,
      backgroundColor: vars.color.theme.surfaceHover,
      boxShadow: `0 2px 10px ${vars.color.brand500_15}`,
    },
    '&:disabled': {
      color: vars.color.theme.text.disabled,
      cursor: 'not-allowed',
    },
    '&:active:not(:disabled)': {
      transform: 'scale(0.98)',
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 ${vars.spacing[1]} ${vars.color.accentMint_20}`,
      borderRadius: vars.radius.md,
    },
    '.dark &': {
      color: vars.color.theme.text.secondary,
      selectors: {
        '&[data-active="true"]': {
          color: vars.color.theme.text.primary,
          backgroundColor: vars.color.theme.surfaceHover,
        },
        '&[data-active="true"]::after': {
          background: `linear-gradient(90deg, ${vars.color.accentMint} 0%, ${vars.color.accentMint_30} 50%, ${vars.color.accentMint} 100%)`,
        },
        '&:hover:not([data-active="true"]):not(:disabled)': {
          color: vars.color.theme.text.primary,
          backgroundColor: vars.color.theme.surfaceHover,
          boxShadow: `0 2px 10px ${vars.color.accentMint_20}`,
        },
        '&:disabled': {
          color: vars.color.theme.text.disabled,
        },
        '&:focus-visible': {
          boxShadow: `0 0 0 ${vars.spacing[1]} ${vars.color.accentMint_30}`,
        },
      },
    },
  },
});

export const tabPanel = style({
  animation: `${fadeIn} ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  paddingTop: vars.spacing[3] as unknown as string,
  borderTop: `1px solid ${vars.color.theme.border}`,
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
  color: vars.color.theme.text.primary,
});
