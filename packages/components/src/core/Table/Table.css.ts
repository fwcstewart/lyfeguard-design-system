import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

const headerTypography = {
  fontSize: vars.font.size.ui.label,
  fontWeight: vars.font.weight.semiBold,
  lineHeight: vars.font.lineHeight.ui.label,
};

const bodyTypography = {
  fontSize: vars.font.size.body.sm,
  lineHeight: vars.font.lineHeight.body.sm,
};

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  fontFamily: vars.font.sans,
  color: vars.color.theme.text.primary,
});

export const headerCell = style({
  textAlign: 'left',
  ...headerTypography,
  color: vars.color.theme.text.secondary,
  borderBottom: `1px solid ${vars.color.theme.border}`,
  background: vars.color.theme.surface,
  userSelect: 'none',
  selectors: {
    '.dark &': {
      background: vars.color.theme.surfaceHover,
      color: vars.color.theme.text.secondary,
      borderBottom: `1px solid ${vars.color.theme.border}`,
    },
  },
});

export const checkboxHeaderCell = style({
  width: vars.spacing[8], // 40px
});

export const headerDensity = styleVariants({
  comfortable: {
    padding: `${vars.spacing[3]} ${vars.spacing[4]}` as unknown as string,
  },
  compact: {
    padding: `${vars.spacing[2]} ${vars.spacing[3]}` as unknown as string,
  },
});

export const sortable = style({
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      background: vars.color.theme.surfaceHover,
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.brand500}`,
      outlineOffset: '-2px',
    },
    '.dark &:hover': {
      background: vars.color.theme.surfaceActive,
    },
  },
});

export const sorted = style({
  background: vars.color.theme.surfaceHover,
  selectors: {
    '.dark &': {
      background: vars.color.theme.surfaceActive,
    },
  },
});

export const headerContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[2] as unknown as string,
});

export const sortIndicator = style({
  fontSize: vars.font.size.body.xs,
  color: vars.color.theme.text.tertiary,
  opacity: 0.8,
  transition: `opacity ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    [`${sorted} &`]: {
      opacity: 1,
    },
  },
});

export const cell = style({
  ...bodyTypography,
  color: vars.color.theme.text.primary,
  borderBottom: `1px solid ${vars.color.theme.border}`,
  selectors: {
    '.dark &': {
      color: vars.color.theme.text.primary,
      borderBottom: `1px solid ${vars.color.theme.border}`,
    },
  },
});

export const cellDensity = styleVariants({
  comfortable: {
    padding: `${vars.spacing[3]} ${vars.spacing[4]}` as unknown as string,
  },
  compact: {
    padding: `${vars.spacing[2]} ${vars.spacing[3]}` as unknown as string,
  },
});

export const row = style({
  selectors: {
    '&:hover': {
      background: vars.color.theme.surfaceHover,
    },
    '.dark &:hover': {
      background: vars.color.theme.surfaceActive,
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
      background: `${vars.color.brand500_25} !important`,
    },
    '.dark &': {
      background: `${vars.color.brand500_25} !important`,
    },
    '.dark &:hover': {
      background: `${vars.color.brand500_30} !important`,
    },
  },
});