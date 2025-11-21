import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[2],
});

export const label = style({
  fontFamily: vars.font.sans,
  fontSize: '14px',
  color: vars.color.neutral900,
  fontWeight: 500,
});

export const input = style({
  appearance: 'none',
  padding: '12px 14px',
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.neutral300}`,
  backgroundColor: vars.color.neutral0,
  fontFamily: vars.font.sans,
  fontSize: '16px',
  color: vars.color.neutral900,
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  selectors: {
    '&:focus': {
      outline: 'none',
      border: `1px solid ${vars.color.brand500}`,
      boxShadow: `0 0 0 2px ${vars.color.brand500_20}`,
    },
    '&:disabled': {
      color: vars.color.neutral500,
      backgroundColor: vars.color.neutral50,
      cursor: 'not-allowed',
    },
  },
});