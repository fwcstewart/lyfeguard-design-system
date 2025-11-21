import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const sidebar = style({
  display: 'flex',
  flexDirection: 'column',
  width: '264px',
  background: vars.color.brand900,
  color: vars.color.neutral0,
  padding: `${vars.spacing[6]} 0` as unknown as string,
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[3] as unknown as string,
  height: '44px',
  padding: `0 ${vars.spacing[5]}` as unknown as string,
  fontFamily: vars.font.sans,
  fontSize: '14px',
  color: vars.color.neutral0,
  cursor: 'pointer',
  borderLeft: `3px solid transparent`,
  selectors: {
    '&[data-active="true"]': {
      background: `${vars.color.brand500_20}`,
      borderLeftColor: vars.color.accentMint,
      color: vars.color.neutral0,
    },
    '&:hover': {
      background: `${vars.color.brand500_20}`,
      color: vars.color.neutral0,
    },
  },
});

export const iconWrapper = style({
  width: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});