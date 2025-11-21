import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

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
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${vars.color.brand500_20}`,
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
  padding: `${vars.spacing[4]} ${vars.spacing[6]}`,
  fontSize: vars.font.size.body.base,
  lineHeight: vars.font.lineHeight.body.base,
});

export const primary = style([
  base,
  {
    background: vars.color.accentMint,
    color: vars.color.brand900,
    boxShadow: vars.shadow.xs,
    selectors: {
      '&:hover:not(:disabled)': {
        background: vars.color.success600,
        boxShadow: vars.shadow.md,
        transform: 'translateY(-1px)',
      },
      '&:active:not(:disabled)': {
        background: vars.color.success600,
        transform: 'translateY(0)',
        boxShadow: vars.shadow.xs,
      },
      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
        transform: 'none',
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 3px ${vars.color.accentMint_30}`,
      },
      '.dark &': {
        color: vars.color.brand900,
        selectors: {
          '&:hover:not(:disabled)': {
            boxShadow: vars.shadow.md,
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
      '&:hover:not(:disabled)': {
        background: vars.color.accentMint_10,
        borderColor: vars.color.success600,
        transform: 'translateY(-1px)',
      },
      '&:active:not(:disabled)': {
        background: vars.color.accentMint_15,
        transform: 'translateY(0)',
      },
      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
        borderColor: vars.color.theme.border,
        color: vars.color.theme.text.disabled,
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 3px ${vars.color.accentMint_30}`,
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
      '&:hover:not(:disabled)': {
        textDecoration: 'underline',
        color: vars.color.success600,
      },
      '&:active:not(:disabled)': {
        opacity: 0.8,
        transform: 'scale(0.98)',
      },
      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
        color: vars.color.theme.text.disabled,
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 3px ${vars.color.accentMint_30}`,
        borderRadius: vars.radius.sm,
      },
    },
  },
]);
