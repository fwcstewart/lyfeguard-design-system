import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[1] as unknown as string
});

export const label = style({
  fontFamily: vars.font.sans,
  fontSize: '14px',
  fontWeight: 500,
  color: vars.color.neutral900
});

export const input = style({
  appearance: 'none',
  padding: `${vars.spacing[3]} ${vars.spacing[3]}`,
  fontFamily: vars.font.sans,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.neutral300}`,
  background: vars.color.neutral0,
  fontSize: '16px',
  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: vars.color.brand500,
      boxShadow: `0 0 0 2px ${vars.color.brand500_20}`
    },
    '&::placeholder': {
      color: `${vars.color.neutral500}`
    }
  }
});

export const inputError = style({
  borderColor: vars.color.error500,
  boxShadow: `0 0 0 2px ${vars.color.error100}`
});

export const helperText = style({
  fontSize: '12px',
  color: vars.color.neutral600
});

export const errorText = style({
  fontSize: '12px',
  color: vars.color.error500
});
