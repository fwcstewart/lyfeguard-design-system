import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const content = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[2] as unknown as string,
});

export const icon = style({
  width: '40px',
  height: '40px',
  minWidth: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  lineHeight: 1,
  flexShrink: 0,
});

export const title = style({
  fontSize: vars.font.size.heading.xs,
  fontWeight: vars.font.weight.semiBold,
  lineHeight: vars.font.lineHeight.heading.xs,
  color: vars.color.theme.text.primary,
  fontFamily: vars.font.sans,
});

export const counts = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: vars.spacing[2] as unknown as string,
  marginTop: vars.spacing[1] as unknown as string,
});

export const completed = style({
  fontSize: 'clamp(2.25rem, 4vw, 3rem)',
  fontWeight: vars.font.weight.bold,
  lineHeight: 1,
  color: vars.color.theme.text.primary,
  fontFamily: vars.font.sans,
});

export const total = style({
  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
  fontWeight: vars.font.weight.regular,
  color: vars.color.theme.text.secondary,
  fontFamily: vars.font.sans,
});

export const description = style({
  margin: 0,
  fontSize: vars.font.size.body.sm,
  lineHeight: vars.font.lineHeight.body.sm,
  color: vars.color.theme.text.secondary,
  fontFamily: vars.font.sans,
  marginTop: vars.spacing[1] as unknown as string,
});

export const progress = style({
  marginTop: vars.spacing[1] as unknown as string,
});

export const actions = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 'auto',
  paddingTop: vars.spacing[2] as unknown as string,
});

