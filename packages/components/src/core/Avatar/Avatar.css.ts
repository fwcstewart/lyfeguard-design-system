import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const container = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  overflow: 'hidden',
  fontFamily: vars.font.sans,
  fontWeight: 600,
  color: vars.color.neutral0,
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});