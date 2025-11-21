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

const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing[1] as unknown as string,
  padding: `${vars.spacing[1]} ${vars.spacing[2]}` as unknown as string,
  borderRadius: '6px',
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

export const status = styleVariants({
  primary: {
    vars: {
      [badgeVars.surface]: vars.color.brand500_20,
      [badgeVars.text]: vars.color.brand800,
      [badgeVars.outline]: vars.color.brand500_30,
      [badgeVars.solid]: vars.color.brand500,
      [badgeVars.onSolid]: vars.color.neutral0,
      [badgeVars.darkText]: vars.color.brand500,
      [badgeVars.darkOutline]: vars.color.brand500_40,
    },
  },
  success: {
    vars: {
      [badgeVars.surface]: vars.color.success500_15,
      [badgeVars.text]: vars.color.success600,
      [badgeVars.outline]: vars.color.success500,
      [badgeVars.solid]: vars.color.success500,
      [badgeVars.onSolid]: vars.color.brand900,
      [badgeVars.darkText]: vars.color.success500,
      [badgeVars.darkOutline]: vars.color.success500_15,
    },
  },
  warning: {
    vars: {
      [badgeVars.surface]: vars.color.warning100,
      [badgeVars.text]: vars.color.warning500,
      [badgeVars.outline]: vars.color.warning500,
      [badgeVars.solid]: vars.color.warning500,
      [badgeVars.onSolid]: vars.color.brand900,
      [badgeVars.darkText]: vars.color.warning500,
      [badgeVars.darkOutline]: vars.color.warning500_15,
    },
  },
  error: {
    vars: {
      [badgeVars.surface]: vars.color.error100,
      [badgeVars.text]: vars.color.error500,
      [badgeVars.outline]: vars.color.error500,
      [badgeVars.solid]: vars.color.error500,
      [badgeVars.onSolid]: vars.color.neutral0,
      [badgeVars.darkText]: vars.color.error500,
      [badgeVars.darkOutline]: vars.color.error500_15,
    },
  },
  info: {
    vars: {
      [badgeVars.surface]: vars.color.info100,
      [badgeVars.text]: vars.color.info500,
      [badgeVars.outline]: vars.color.info500,
      [badgeVars.solid]: vars.color.info500,
      [badgeVars.onSolid]: vars.color.brand900,
      [badgeVars.darkText]: vars.color.info500,
      [badgeVars.darkOutline]: vars.color.info500_15,
    },
  },
});

export const appearance = styleVariants({
  pill: base,
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