import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const topNav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '64px',
  padding: `0 ${vars.spacing[7]}` as unknown as string,
  background: vars.color.brand900,
  color: vars.color.neutral0,
});

export const left = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[4] as unknown as string,
});

export const logo = style({
  fontSize: '20px',
  fontWeight: 600,
  color: vars.color.neutral0,
});

export const navLinks = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[5] as unknown as string,
});

export const navLink = style({
  fontFamily: vars.font.sans,
  fontSize: '14px',
  color: vars.color.neutral0,
  textDecoration: 'none',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      color: vars.color.accentMint,
    },
  },
});

export const right = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[4] as unknown as string,
});