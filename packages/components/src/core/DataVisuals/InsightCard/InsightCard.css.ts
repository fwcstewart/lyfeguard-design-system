import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../../globals.css';

const cardShadow = '0 14px 36px color-mix(in srgb, var(--color-neutral-900) 7%, transparent)';

export const card = style({
  backgroundColor: vars.color.theme.surface,
  border: `1px solid ${vars.color.theme.border}`,
  borderRadius: vars.radius.lg,
  padding: vars.spacing[5] as unknown as string,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[3] as unknown as string,
  boxShadow: cardShadow,
  transition: `transform ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}, box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 16px 42px color-mix(in srgb, var(--color-neutral-900) 11%, transparent)',
      borderColor: vars.color.theme.borderHover,
    },
    '.dark &': {
      backgroundColor: vars.color.theme.surface,
      borderColor: vars.color.theme.border,
      boxShadow: '0 18px 44px color-mix(in srgb, var(--color-brand-900) 45%, transparent)',
    },
  },
});

export const header = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: vars.spacing[3] as unknown as string,
});

export const titleGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[3] as unknown as string,
  minWidth: 0,
});

export const icon = style({
  width: vars.spacing[7] as unknown as string,
  height: vars.spacing[7] as unknown as string,
  borderRadius: vars.radius.md,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: vars.color.accentMint_15,
  color: vars.color.brand900,
  fontSize: vars.font.size.body.base,
  flexShrink: 0,
  selectors: {
    '.dark &': {
      background: vars.color.brand500_25,
      color: vars.color.neutral0,
    },
  },
});

export const title = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  fontWeight: vars.font.weight.semiBold,
  color: vars.color.theme.text.secondary,
  lineHeight: vars.font.lineHeight.ui.label,
});

export const description = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.sm,
  color: vars.color.theme.text.tertiary,
  lineHeight: vars.font.lineHeight.body.sm,
  marginTop: vars.spacing[1] as unknown as string,
});

export const actions = style({
  display: 'flex',
  gap: vars.spacing[2] as unknown as string,
  alignItems: 'center',
});

export const valueRow = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: vars.spacing[2] as unknown as string,
  flexWrap: 'wrap',
});

export const value = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.heading.lg,
  fontWeight: vars.font.weight.bold,
  color: vars.color.theme.text.primary,
  lineHeight: vars.font.lineHeight.heading.lg,
});

export const secondary = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.sm,
  color: vars.color.theme.text.secondary,
  lineHeight: vars.font.lineHeight.body.sm,
  padding: `${vars.spacing[0]} ${vars.spacing[2]}` as unknown as string,
  borderRadius: vars.radius.round,
  backgroundColor: vars.color.theme.surfaceHover,
  selectors: {
    '.dark &': {
      backgroundColor: vars.color.theme.surfaceActive,
    },
  },
});

export const trend = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing[2] as unknown as string,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.sm,
});

export const trendTone = styleVariants({
  positive: {
    color: vars.color.status.success.text,
  },
  negative: {
    color: vars.color.status.error.text,
  },
  neutral: {
    color: vars.color.status.info.text,
  },
});

export const dot = style({
  width: vars.spacing[2] as unknown as string,
  height: vars.spacing[2] as unknown as string,
  borderRadius: vars.radius.round,
  flexShrink: 0,
});

export const dotTone = styleVariants({
  positive: { backgroundColor: vars.color.status.success.text },
  negative: { backgroundColor: vars.color.status.error.text },
  neutral: { backgroundColor: vars.color.status.info.text },
});

export const trendLabel = style({
  color: vars.color.theme.text.secondary,
  fontSize: vars.font.size.body.xs,
});

export const progress = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[2] as unknown as string,
});

export const progressHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: vars.color.theme.text.secondary,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.xs,
});

export const progressTrack = style({
  width: '100%',
  height: vars.spacing[2] as unknown as string,
  borderRadius: vars.radius.round,
  backgroundColor: vars.color.theme.surfaceActive,
  overflow: 'hidden',
  position: 'relative',
  selectors: {
    '.dark &': {
      backgroundColor: vars.color.theme.surfaceHover,
    },
  },
});

export const progressFill = style({
  position: 'absolute',
  inset: 0,
  width: '0%',
  background: `linear-gradient(90deg, ${vars.color.brand500}, ${vars.color.accentMint})`,
  transition: `width ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
});

export const footer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: vars.spacing[3] as unknown as string,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.xs,
  color: vars.color.theme.text.tertiary,
});

export const helper = style({
  color: vars.color.theme.text.secondary,
});
