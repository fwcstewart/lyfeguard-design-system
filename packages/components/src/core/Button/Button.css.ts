import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

const focusRingLight = `0 0 0 3px color-mix(in srgb, ${vars.color.accentMint} 32%, ${vars.color.theme.surface})`;
const focusRingDark = `0 0 0 3px color-mix(in srgb, ${vars.color.accentMint} 40%, ${vars.color.theme.background})`;
const hoverOverlay = `color-mix(in srgb, ${vars.color.accentMint} 18%, ${vars.color.theme.surface})`;
const activeOverlay = `color-mix(in srgb, ${vars.color.accentMint} 22%, ${vars.color.theme.surfaceActive})`;

// Base styles shared across button variants
export const base = style({
  fontFamily: vars.font.sans,
  borderRadius: vars.radius.md,
  cursor: 'pointer',
  fontWeight: vars.font.weight.semiBold,
  transition: `background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, border-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}, box-shadow ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing[2] as unknown as string,
  border: 'none',
  position: 'relative',
  selectors: {
    '&:focus-visible, &[data-state="focus"]': {
      outline: 'none',
      boxShadow: focusRingLight,
    },
    '.dark &': {
      selectors: {
        '&:focus-visible, &[data-state="focus"]': {
          boxShadow: focusRingDark,
        },
      },
    },
  },
});

// Size variants
export const small = style({
  padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
  fontSize: vars.font.size.body.sm,
  lineHeight: vars.font.lineHeight.body.sm,
});

export const medium = style({
  padding: `${vars.spacing[3]} ${vars.spacing[5]}`,
  fontSize: vars.font.size.ui.button,
  lineHeight: vars.font.lineHeight.ui.button,
});

export const large = style({
  padding: `${vars.spacing[5]} ${vars.spacing[8]}`,
  fontSize: vars.font.size.body.lg,
  lineHeight: vars.font.lineHeight.body.lg,
});

export const primary = style([
  base,
  {
    background: vars.color.accentMint,
    color: vars.color.brand900,
    boxShadow: vars.shadow.xs,
    selectors: {
      '&:hover:not(:disabled), &[data-state="hover"]': {
        background: vars.color.success600,
        boxShadow: vars.shadow.md,
        transform: 'translateY(-1px)',
      },
      '&:active:not(:disabled), &[data-state="active"]': {
        background: vars.color.success600,
        transform: 'translateY(0)',
        boxShadow: vars.shadow.xs,
      },
      '&:disabled, &[data-state="disabled"], &[data-state="loading"]': {
        opacity: 0.6,
        cursor: 'not-allowed',
        transform: 'none',
      },
      '.dark &': {
        color: vars.color.brand900,
        selectors: {
          '&:hover:not(:disabled), &[data-state="hover"]': {
            boxShadow: vars.shadow.md,
          },
          '&:focus-visible, &[data-state="focus"]': {
            boxShadow: focusRingDark,
          },
        },
      },
    },
  },
]);

export const secondary = style([
  base,
  {
    background: 'transparent',
    border: `1.5px solid ${vars.color.accentMint}`,
    color: vars.color.accentMint,
    selectors: {
      '&:hover:not(:disabled), &[data-state="hover"]': {
        background: hoverOverlay,
        borderColor: vars.color.accentMint,
        transform: 'translateY(-1px)',
      },
      '&:active:not(:disabled), &[data-state="active"]': {
        background: activeOverlay,
        transform: 'translateY(0)',
      },
      '&:disabled, &[data-state="disabled"], &[data-state="loading"]': {
        opacity: 0.6,
        cursor: 'not-allowed',
        borderColor: vars.color.theme.border,
        color: vars.color.theme.text.disabled,
      },
      '&:focus-visible, &[data-state="focus"]': {
        boxShadow: focusRingLight,
      },
      '.dark &': {
        color: vars.color.theme.text.primary,
        borderColor: vars.color.theme.border,
        selectors: {
          '&:hover:not(:disabled), &[data-state="hover"]': {
            background: `color-mix(in srgb, ${vars.color.theme.overlay} 26%, ${vars.color.theme.surface})`,
            borderColor: vars.color.theme.borderHover,
            color: vars.color.theme.text.primary,
          },
          '&:active:not(:disabled), &[data-state="active"]': {
            background: `color-mix(in srgb, ${vars.color.theme.overlay} 32%, ${vars.color.theme.surfaceActive})`,
            borderColor: vars.color.theme.borderHover,
          },
          '&:focus-visible, &[data-state="focus"]': {
            boxShadow: focusRingDark,
          },
          '&:disabled, &[data-state="disabled"], &[data-state="loading"]': {
            color: vars.color.theme.text.disabled,
            borderColor: vars.color.theme.border,
          },
        },
      },
    },
  },
]);

export const tertiary = style([
  base,
  {
    background: 'transparent',
    color: vars.color.accentMint,
    paddingLeft: 0,
    paddingRight: 0,
    selectors: {
      '&:hover:not(:disabled), &[data-state="hover"]': {
        textDecoration: 'underline',
        color: vars.color.success600,
      },
      '&:active:not(:disabled), &[data-state="active"]': {
        opacity: 0.85,
        transform: 'scale(0.98)',
      },
      '&:disabled, &[data-state="disabled"], &[data-state="loading"]': {
        opacity: 0.6,
        cursor: 'not-allowed',
        color: vars.color.theme.text.disabled,
      },
      '&:focus-visible, &[data-state="focus"]': {
        boxShadow: focusRingLight,
        borderRadius: vars.radius.sm,
      },
      '.dark &': {
        color: vars.color.theme.text.primary,
        selectors: {
          '&:hover:not(:disabled), &[data-state="hover"]': {
            color: vars.color.accentMint,
          },
          '&:focus-visible, &[data-state="focus"]': {
            boxShadow: focusRingDark,
          },
          '&:disabled, &[data-state="disabled"], &[data-state="loading"]': {
            color: vars.color.theme.text.disabled,
          },
        },
      },
    },
  },
]);
