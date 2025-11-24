import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const badgeVars = {
  surface: createVar(),
  text: createVar(),
  outline: createVar(),
  solid: createVar(),
  onSolid: createVar(),
  darkText: createVar(),
  darkOutline: createVar(),
};

export const badgeStatusTokens = {
  primary: {
    surface: vars.color.brand500_20,
    text: vars.color.brand800,
    outline: vars.color.brand500_30,
    solid: vars.color.brand500,
    onSolid: vars.color.neutral0,
    darkText: vars.color.brand500,
    darkOutline: vars.color.brand500_40,
  },
  success: {
    surface: vars.color.success500_15,
    text: vars.color.success600,
    outline: vars.color.success500,
    solid: vars.color.success500,
    onSolid: vars.color.brand900,
    darkText: vars.color.success500,
    darkOutline: vars.color.success500_15,
  },
  warning: {
    surface: vars.color.warning100,
    text: vars.color.warning500,
    outline: vars.color.warning500,
    solid: vars.color.warning500,
    onSolid: vars.color.brand900,
    darkText: vars.color.warning500,
    darkOutline: vars.color.warning500_15,
  },
  error: {
    surface: vars.color.error100,
    text: vars.color.error500,
    outline: vars.color.error500,
    solid: vars.color.error500,
    onSolid: vars.color.neutral0,
    darkText: vars.color.error500,
    darkOutline: vars.color.error500_15,
  },
  info: {
    surface: vars.color.info100,
    text: vars.color.info500,
    outline: vars.color.info500,
    solid: vars.color.info500,
    onSolid: vars.color.brand900,
    darkText: vars.color.info500,
    darkOutline: vars.color.info500_15,
  },
} as const;

const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing[1],
  padding: `${vars.spacing[1]} ${vars.spacing[2]}`,
  borderRadius: vars.radius.md,
  border: `1px solid ${badgeVars.outline}`,
  fontSize: vars.font.size.ui.overline,
  fontWeight: vars.font.weight.semiBold,
  lineHeight: vars.font.lineHeight.ui.overline,
  fontFamily: vars.font.sans,
  color: badgeVars.text,
  backgroundColor: badgeVars.surface,
  userSelect: 'none',
  whiteSpace: 'nowrap',
  transition: `background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover': {
      transform: 'scale(1.03)',
    },
    '.dark &': {
      color: badgeVars.darkText,
      borderColor: badgeVars.darkOutline,
    },
  },
});

const mapStatusTokensToVars = (tokenSet: (typeof badgeStatusTokens)[keyof typeof badgeStatusTokens]) => ({
  vars: {
    [badgeVars.surface]: tokenSet.surface,
    [badgeVars.text]: tokenSet.text,
    [badgeVars.outline]: tokenSet.outline,
    [badgeVars.solid]: tokenSet.solid,
    [badgeVars.onSolid]: tokenSet.onSolid,
    [badgeVars.darkText]: tokenSet.darkText,
    [badgeVars.darkOutline]: tokenSet.darkOutline,
  },
});

export const status = styleVariants(badgeStatusTokens, mapStatusTokensToVars);

export const appearance = styleVariants({
  pill: [
    base,
    {
      borderRadius: vars.radius.round,
    },
  ],
  solid: [
    base,
    {
      backgroundColor: badgeVars.solid,
      color: badgeVars.onSolid,
      borderColor: badgeVars.solid,
      selectors: {
        '.dark &': {
          color: badgeVars.onSolid,
          borderColor: badgeVars.solid,
        },
      },
    },
  ],
  outline: [
    base,
    {
      backgroundColor: 'transparent',
    },
  ],
});