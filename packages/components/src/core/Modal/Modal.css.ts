import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  background: 'rgba(5, 26, 34, 0.6)',
  backdropFilter: 'blur(4px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000
});

export const modal = style({
  background: vars.color.neutral0,
  borderRadius: vars.radius.md,
  padding: '32px',
  width: '480px',
  maxWidth: '90%',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.14)'
});
