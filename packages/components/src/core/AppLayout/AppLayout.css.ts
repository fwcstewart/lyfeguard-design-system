import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  background: vars.color.theme.background,
  color: vars.color.theme.text.primary,
});

export const body = style({
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
  minHeight: 0,
});

export const main = style({
  flex: 1,
  overflow: 'hidden',
  minWidth: 0,
  background: vars.color.theme.background,
  selectors: {
    '&[data-sidebar-collapsed="true"]': {
      width: '100%',
    },
  },
});

