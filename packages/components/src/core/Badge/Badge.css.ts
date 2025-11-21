import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2px 8px',
  borderRadius: vars.radius.lg,
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: 1,
  fontFamily: vars.font.sans,
  userSelect: 'none',
});

export const primary = style([
  base,
  {
    backgroundColor: vars.color.brand500_20,
    color: vars.color.brand500,
  },
]);

export const success = style([
  base,
  {
    backgroundColor: vars.color.success100,
    color: vars.color.success500,
  },
]);

export const warning = style([
  base,
  {
    backgroundColor: vars.color.warning100,
    color: vars.color.warning500,
  },
]);

export const error = style([
  base,
  {
    backgroundColor: vars.color.error100,
    color: vars.color.error500,
  },
]);

export const info = style([
  base,
  {
    backgroundColor: vars.color.info100,
    color: vars.color.info500,
  },
]);