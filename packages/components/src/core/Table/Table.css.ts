import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  fontFamily: vars.font.sans,
});

export const headerCell = style({
  textAlign: 'left',
  padding: `${vars.spacing[3]} ${vars.spacing[4]}` as unknown as string,
  fontSize: vars.font.size.ui.label,
  fontWeight: vars.font.weight.semiBold,
  lineHeight: vars.font.lineHeight.ui.label,
  color: vars.color.brand500,
  borderBottom: `1px solid ${vars.color.neutral200}`,
  background: vars.color.neutral50,
  userSelect: 'none',
});

export const sortable = style({
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      background: vars.color.neutral100,
    },
  },
});

export const sorted = style({
  background: vars.color.neutral100,
});

export const headerContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[2] as unknown as string,
});

export const sortIndicator = style({
  fontSize: vars.font.size.body.xs,
  opacity: 0.6,
  transition: `opacity ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    [`${sorted} &`]: {
      opacity: 1,
    },
  },
});

export const cell = style({
  padding: `${vars.spacing[3]} ${vars.spacing[4]}` as unknown as string,
  fontSize: vars.font.size.body.sm,
  lineHeight: vars.font.lineHeight.body.sm,
  color: vars.color.neutral900,
  borderBottom: `1px solid ${vars.color.neutral200}`,
});

export const row = style({
  selectors: {
    '&:hover': {
      background: vars.color.neutral50,
    },
  },
});

export const clickable = style({
  cursor: 'pointer',
});

export const selected = style({
  background: `${vars.color.brand500_20} !important`,
  selectors: {
    '&:hover': {
      background: `${vars.color.brand500_30} !important`,
    },
  },
});