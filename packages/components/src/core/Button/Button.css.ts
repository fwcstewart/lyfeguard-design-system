import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../globals.css';
import { BUTTON_FOCUS_OUTLINE, BUTTON_SIZES, BUTTON_VARIANTS } from './constants';

const transition = [
  `background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  `border-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  `color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  `transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  `box-shadow ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
].join(', ');

const prefersReducedMotion = {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
      selectors: {
        '&:hover, &:active': {
          transform: 'none',
        },
      },
    },
  },
};

export const base = style([
  {
    fontFamily: vars.font.sans,
    fontWeight: vars.font.weight.semiBold,
    borderRadius: vars.radius.md,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--button-gap)',
    minHeight: 'var(--button-min-height)',
    padding: 'var(--button-padding-y) var(--button-padding-x)',
    fontSize: 'var(--button-font-size)',
    lineHeight: 'var(--button-line-height)',
    background: 'var(--button-background)',
    color: 'var(--button-color)',
    border: 'var(--button-border)',
    boxShadow: 'var(--button-shadow)',
    cursor: 'pointer',
    position: 'relative',
    transition,
    selectors: {
      '&:hover:not(:disabled), &[data-state="hover"]': {
        background: 'var(--button-hover-background)',
        border: 'var(--button-hover-border)',
        boxShadow: 'var(--button-hover-shadow)',
        transform: 'translateY(-1px)',
      },
      '&:active:not(:disabled), &[data-state="active"]': {
        background: 'var(--button-active-background)',
        border: 'var(--button-active-border)',
        boxShadow: 'var(--button-active-shadow)',
        transform: 'translateY(0)',
      },
      '&:focus-visible, &[data-state="focus"]': {
        outline: `${BUTTON_FOCUS_OUTLINE.width} solid transparent`,
        outlineOffset: BUTTON_FOCUS_OUTLINE.offset,
        boxShadow: 'var(--button-focus-shadow)',
      },
      '&:disabled, &[data-state="disabled"], &[data-state="loading"]': {
        background: 'var(--button-disabled-background)',
        color: 'var(--button-disabled-color)',
        border: 'var(--button-disabled-border)',
        opacity: 0.7,
        cursor: 'not-allowed',
        pointerEvents: 'none',
        transform: 'none',
      },
      '.dark &': {
        vars: {
          '--button-focus-shadow': `0 0 0 3px color-mix(in srgb, ${vars.color.accentMint} 40%, ${vars.color.theme.background})`,
        },
      },
    },
    vars: {
      '--button-padding-x': BUTTON_SIZES.md.paddingX,
      '--button-padding-y': BUTTON_SIZES.md.paddingY,
      '--button-min-height': BUTTON_SIZES.md.minHeight,
      '--button-gap': BUTTON_SIZES.md.gap,
      '--button-font-size': BUTTON_SIZES.md.fontSize,
      '--button-line-height': BUTTON_SIZES.md.lineHeight,
      '--button-background': BUTTON_VARIANTS.primary.background,
      '--button-color': BUTTON_VARIANTS.primary.color,
      '--button-border': BUTTON_VARIANTS.primary.border,
      '--button-shadow': BUTTON_VARIANTS.primary.shadow,
      '--button-hover-background': BUTTON_VARIANTS.primary.hover.background,
      '--button-hover-border': BUTTON_VARIANTS.primary.hover.border,
      '--button-hover-shadow': BUTTON_VARIANTS.primary.hover.shadow,
      '--button-active-background': BUTTON_VARIANTS.primary.active.background,
      '--button-active-border': BUTTON_VARIANTS.primary.active.border,
      '--button-active-shadow': BUTTON_VARIANTS.primary.active.shadow,
      '--button-disabled-background': BUTTON_VARIANTS.primary.disabled.background,
      '--button-disabled-border': BUTTON_VARIANTS.primary.disabled.border,
      '--button-disabled-color': BUTTON_VARIANTS.primary.disabled.color,
      '--button-focus-shadow': BUTTON_VARIANTS.primary.focusShadow,
    },
  },
  prefersReducedMotion,
]);

export const sizes = styleVariants(BUTTON_SIZES, ({ paddingX, paddingY, minHeight, gap, fontSize, lineHeight }) => ({
  vars: {
    '--button-padding-x': paddingX,
    '--button-padding-y': paddingY,
    '--button-min-height': minHeight,
    '--button-gap': gap,
    '--button-font-size': fontSize,
    '--button-line-height': lineHeight,
  },
}));

export const variants = styleVariants(BUTTON_VARIANTS, ({
  background,
  color,
  border,
  shadow,
  hover,
  active,
  disabled,
  focusShadow,
}) => ({
  vars: {
    '--button-background': background,
    '--button-color': color,
    '--button-border': border,
    '--button-shadow': shadow,
    '--button-hover-background': hover.background,
    '--button-hover-border': hover.border,
    '--button-hover-shadow': hover.shadow,
    '--button-active-background': active.background,
    '--button-active-border': active.border,
    '--button-active-shadow': active.shadow,
    '--button-disabled-background': disabled.background,
    '--button-disabled-border': disabled.border,
    '--button-disabled-color': disabled.color,
    '--button-focus-shadow': focusShadow,
  },
}));

export const content = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--button-gap)',
});

export const icon = style({
  display: 'inline-flex',
  alignItems: 'center',
  lineHeight: 1,
});

export const loadingLabel = style({
  opacity: 0,
});

