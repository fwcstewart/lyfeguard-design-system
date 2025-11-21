import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[3] as unknown as string,
  padding: vars.spacing[4] as unknown as string,
  backgroundColor: vars.color.theme.surface,
  border: `1px solid ${vars.color.theme.border}`,
  borderRadius: vars.radius.lg,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: vars.spacing[2] as unknown as string,
});

export const label = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  fontWeight: vars.font.weight.semiBold,
  color: vars.color.theme.text.secondary,
});

export const helper = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.xs,
  color: vars.color.theme.text.tertiary,
});

export const fields = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: vars.spacing[3] as unknown as string,
  alignItems: 'flex-start',
});

export const inputLabel = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[1] as unknown as string,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.xs,
  color: vars.color.theme.text.secondary,
});

export const input = style({
  width: '100%',
  height: vars.spacing[7] as unknown as string,
  padding: `${vars.spacing[2]} ${vars.spacing[3]}` as unknown as string,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.theme.border}`,
  backgroundColor: vars.color.theme.surfaceHover,
  color: vars.color.theme.text.primary,
  fontSize: vars.font.size.body.sm,
  fontFamily: vars.font.sans,
  transition: `border-color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}, box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&:focus-visible': {
      outline: 'none',
      borderColor: vars.color.brand500,
      boxShadow: `0 0 0 3px ${vars.color.brand500_20}`,
    },
  },
});

export const presets = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing[2] as unknown as string,
});

export const preset = style({
  padding: `${vars.spacing[1]} ${vars.spacing[3]}` as unknown as string,
  borderRadius: vars.radius.round,
  border: `1px solid ${vars.color.theme.border}`,
  backgroundColor: vars.color.theme.surfaceHover,
  color: vars.color.theme.text.secondary,
  cursor: 'pointer',
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.xs,
  transition: `border-color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}, background-color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&:hover': {
      borderColor: vars.color.theme.borderHover,
      color: vars.color.theme.text.primary,
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${vars.color.accentMint_20}`,
    },
  },
});
