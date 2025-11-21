import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  fontFamily: vars.font.sans,
});

export const headerCell = style({
  textAlign: 'left',
  padding: `${vars.spacing[3]} ${vars.spacing[4]}` as unknown as string,
  fontSize: '14px',
  fontWeight: 600,
  color: vars.color.brand500,
  borderBottom: `1px solid ${vars.color.neutral200}`,
  background: vars.color.neutral50,
});

export const cell = style({
  padding: `${vars.spacing[3]} ${vars.spacing[4]}` as unknown as string,
  fontSize: '14px',
  color: vars.color.neutral900,
  borderBottom: `1px solid ${vars.color.neutral200}`,
});

export const row = style({
  selectors: {
    '&:hover': {
      background: vars.color.neutral50,
    },
  },
});

export const bodyRow = style({});