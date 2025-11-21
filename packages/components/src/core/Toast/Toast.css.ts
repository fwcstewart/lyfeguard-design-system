import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const container = style({
  position: 'fixed',
  bottom: '16px',
  right: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[3] as unknown as string,
  zIndex: 1100,
});

export const toastBase = style({
  minWidth: '240px',
  padding: `${vars.spacing[3]} ${vars.spacing[4]}` as unknown as string,
  borderRadius: vars.radius.md,
  fontFamily: vars.font.sans,
  fontSize: '14px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing[3] as unknown as string,
});

export const variants = styleVariants({
  info: {
    background: vars.color.info100,
    borderLeft: `3px solid ${vars.color.info500}`,
    color: vars.color.info500,
  },
  success: {
    background: vars.color.success100 ?? vars.color.success500,
    borderLeft: `3px solid ${vars.color.success500}`,
    color: vars.color.success500,
  },
  warning: {
    background: vars.color.warning100,
    borderLeft: `3px solid ${vars.color.warning500}`,
    color: vars.color.warning500,
  },
  error: {
    background: vars.color.error100,
    borderLeft: `3px solid ${vars.color.error500}`,
    color: vars.color.error500,
  },
});

export const message = style({
  flex: 1,
});