import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const card = style({
  height: '100%',
});

export const content = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '144px',
  width: '100%',
  padding: vars.spacing[6] as unknown as string,
  cursor: 'pointer',
  textDecoration: 'none',
  background: 'transparent',
  border: 'none',
  transition: `opacity ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover': {
      opacity: 0.9,
    },
  },
});

export const image = style({
  height: '56px',
  width: 'auto',
  maxWidth: '100%',
  objectFit: 'contain',
});

