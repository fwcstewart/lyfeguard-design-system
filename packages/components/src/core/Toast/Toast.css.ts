import { style, styleVariants, keyframes, createVar } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const container = style({
  position: 'fixed',
  bottom: vars.spacing[4] as unknown as string,
  right: vars.spacing[4] as unknown as string,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[3] as unknown as string,
  zIndex: 1100,
  pointerEvents: 'none',
});

const slideIn = keyframes({
  '0%': {
    transform: 'translateX(100%)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateX(0)',
    opacity: 1,
  },
});

const slideOut = keyframes({
  '0%': {
    transform: 'translateX(0)',
    opacity: 1,
  },
  '100%': {
    transform: 'translateX(100%)',
    opacity: 0,
  },
});

const backgroundVar = createVar();
const textColorVar = createVar();
const borderColorVar = createVar();
const accentColorVar = createVar();

export const toastBase = style({
  minWidth: '280px', // 70 * 4px - not a standard spacing token, acceptable for component-specific sizing
  maxWidth: '420px', // 105 * 4px - not a standard spacing token, acceptable for component-specific sizing
  padding: `${vars.spacing[4]} ${vars.spacing[5]}` as unknown as string,
  borderRadius: vars.radius.lg,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.sm,
  lineHeight: vars.font.lineHeight.body.sm,
  boxShadow: vars.shadow.md,
  background: backgroundVar,
  color: textColorVar,
  border: `1px solid ${borderColorVar}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing[3] as unknown as string,
  pointerEvents: 'auto',
  animation: `${slideIn} ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  transition: `box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.ease}, transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}, background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  selectors: {
    '&[data-exiting="true"]': {
      animation: `${slideOut} ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}`,
    },
    '&:hover': {
      boxShadow: vars.shadow.lg,
      transform: 'translateY(-1px)',
    },
  },
});

export const variants = styleVariants({
  info: {
    vars: {
      [backgroundVar]: vars.color.info100,
      [textColorVar]: vars.color.info500,
      [borderColorVar]: vars.color.info500,
      [accentColorVar]: vars.color.info500,
    },
    selectors: {
      '.dark &': {
        vars: {
          [backgroundVar]: vars.color.info500_15,
          [textColorVar]: vars.color.info500,
          [borderColorVar]: vars.color.info500,
          [accentColorVar]: vars.color.info500,
        },
      },
    },
  },
  success: {
    vars: {
      [backgroundVar]: vars.color.success500_15,
      [textColorVar]: vars.color.success600,
      [borderColorVar]: vars.color.success600,
      [accentColorVar]: vars.color.success600,
    },
    selectors: {
      '.dark &': {
        vars: {
          [backgroundVar]: vars.color.theme.surface,
          [textColorVar]: vars.color.success500,
          [borderColorVar]: vars.color.success500,
          [accentColorVar]: vars.color.success500,
        },
      },
    },
  },
  warning: {
    vars: {
      [backgroundVar]: vars.color.warning100,
      [textColorVar]: vars.color.warning500,
      [borderColorVar]: vars.color.warning500,
      [accentColorVar]: vars.color.warning500,
    },
    selectors: {
      '.dark &': {
        vars: {
          [backgroundVar]: vars.color.warning500_15,
          [textColorVar]: vars.color.warning500,
          [borderColorVar]: vars.color.warning500,
          [accentColorVar]: vars.color.warning500,
        },
      },
    },
  },
  error: {
    vars: {
      [backgroundVar]: vars.color.error100,
      [textColorVar]: vars.color.error500,
      [borderColorVar]: vars.color.error500,
      [accentColorVar]: vars.color.error500,
    },
    selectors: {
      '.dark &': {
        vars: {
          [backgroundVar]: vars.color.error500_15,
          [textColorVar]: vars.color.error500,
          [borderColorVar]: vars.color.error500,
          [accentColorVar]: vars.color.error500,
        },
      },
    },
  },
});

export const statusBar = style({
  width: vars.spacing[1] as unknown as string,
  borderRadius: vars.radius.sm,
  alignSelf: 'stretch',
  backgroundColor: accentColorVar,
  flexShrink: 0,
});

export const iconWrapper = style({
  width: vars.spacing[5] as unknown as string,
  height: vars.spacing[5] as unknown as string,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: accentColorVar,
  flexShrink: 0,
});

export const message = style({
  flex: 1,
  paddingTop: vars.spacing[1] as unknown as string,
});

export const closeButton = style({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: 'inherit',
  fontSize: vars.font.size.body.base,
  lineHeight: 1,
  padding: vars.spacing[1] as unknown as string,
  width: vars.spacing[6] as unknown as string,
  height: vars.spacing[6] as unknown as string,
  minWidth: vars.spacing[6] as unknown as string,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  borderRadius: vars.radius.sm,
  opacity: 0.7,
  transition: `opacity ${vars.motion.duration.fast} ${vars.motion.easing.ease}, background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    '&:hover': {
      opacity: 1,
      backgroundColor: vars.color.theme.surfaceHover,
      transform: 'scale(1.1)',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${vars.color.brand500_20}`,
      opacity: 1,
    },
  },
});