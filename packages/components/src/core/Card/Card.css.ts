import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const card = style({
  background: vars.color.neutral0,
  padding: vars.spacing[6],
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.neutral200}`,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
});
