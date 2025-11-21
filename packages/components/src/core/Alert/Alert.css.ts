import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const base = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.spacing[3] as unknown as string,
  borderRadius: vars.radius.md,
  padding: `${vars.spacing[4]} ${vars.spacing[5]}` as unknown as string,
  fontFamily: vars.font.sans,
  fontSize: '14px',
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

export const title = style({
  fontWeight: 600,
});

export const message = style({
  margin: 0,
});