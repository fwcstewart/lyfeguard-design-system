import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

// Base styles shared across button variants
export const base = style({
  padding: `${vars.spacing[3]} ${vars.spacing[5]}`,
  fontFamily: vars.font.sans,
  borderRadius: vars.radius.md,
  cursor: 'pointer',
  fontWeight: 600,
  transition: 'background 0.2s ease, border 0.2s ease, color 0.2s ease',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing[2] as unknown as string
});

export const primary = style([
  base,
  {
    background: vars.color.brand500,
    color: vars.color.neutral0,
    border: 'none',
    selectors: {
      '&:hover': { background: vars.color.brand800 },
      '&:active': { background: vars.color.brand900 },
      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed'
      }
    }
  }
]);

export const secondary = style([
  base,
  {
    background: 'transparent',
    border: `1px solid ${vars.color.brand500}`,
    color: vars.color.brand500,
    selectors: {
      '&:hover': {
        background: vars.color.brand500_20
      },
      '&:active': {
        background: vars.color.brand500_30
      },
      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed'
      }
    }
  }
]);

export const tertiary = style([
  base,
  {
    background: 'transparent',
    color: vars.color.brand500,
    border: 'none',
    paddingLeft: 0,
    paddingRight: 0,
    selectors: {
      '&:hover': {
        textDecoration: 'underline'
      },
      '&:active': {
        opacity: 0.8
      },
      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed'
      }
    }
  }
]);
