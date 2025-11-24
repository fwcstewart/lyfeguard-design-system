import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const card = style({
  height: '100%',
});

export const header = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.spacing[4] as unknown as string,
});

export const icon = style({
  width: vars.spacing[6],
  height: vars.spacing[6],
  minWidth: vars.spacing[6],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  fontSize: '1.5rem',
  color: vars.color.theme.text.secondary,
  opacity: 0.6,
});

export const headerContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: vars.spacing[2] as unknown as string,
});

export const title = style({
  margin: 0,
  fontSize: vars.font.size.heading.sm,
  fontWeight: vars.font.weight.semiBold,
  lineHeight: vars.font.lineHeight.heading.sm,
  color: vars.color.theme.text.primary,
  fontFamily: vars.font.sans,
  flex: 1,
});

export const actionButton = style({
  flexShrink: 0,
  textDecoration: 'none',
  color: vars.color.theme.text.primary,
  transition: `opacity ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover': {
      opacity: 0.7,
    },
  },
});

export const description = style({
  margin: 0,
  fontSize: vars.font.size.body.sm,
  lineHeight: vars.font.lineHeight.body.sm,
  color: vars.color.theme.text.secondary,
  fontFamily: vars.font.sans,
});

export const content = style({
  marginTop: vars.spacing[2] as unknown as string,
});

export const secondaryAction = style({
  marginTop: vars.spacing[3] as unknown as string,
  paddingTop: vars.spacing[3] as unknown as string,
});

export const secondaryActionLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing[2] as unknown as string,
  textDecoration: 'none',
  color: 'inherit',
});

