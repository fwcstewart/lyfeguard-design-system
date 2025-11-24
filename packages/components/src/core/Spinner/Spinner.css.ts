import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

const shimmer = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

const pulse = keyframes({
  '0%': { opacity: 0.6, transform: 'scale(0.94)' },
  '50%': { opacity: 1, transform: 'scale(1.02)' },
  '100%': { opacity: 0.6, transform: 'scale(0.94)' },
});

export const spinner = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',
  borderRadius: '50%',
  width: 'var(--spinner-size)',
  height: 'var(--spinner-size)',
  borderWidth: 'var(--spinner-stroke-width)',
  borderColor: 'var(--spinner-track-color)',
  borderTopColor: 'var(--spinner-stroke-color)',
  isolation: 'isolate',
  overflow: 'hidden',
  boxShadow: `0 0 ${vars.spacing[3]} ${vars.color.brand500_20}`,
  background: 'radial-gradient(circle at 50% 50%, transparent 55%, var(--spinner-sheen-color) 56%)',
  animation: `${spin} ${vars.motion.duration.normal} linear infinite`,
  animationPlayState: 'var(--spinner-animation-state)',
  vars: {
    '--spinner-size': vars.spacing[6],
    '--spinner-stroke-width': `calc(${vars.spacing[1]} * 0.75)`,
    '--spinner-track-color': vars.color.theme.border,
    '--spinner-stroke-color': vars.color.brand500,
    '--spinner-sheen-color': vars.color.brand500_15,
    '--spinner-glow-color': vars.color.brand500_30,
    '--spinner-animation-state': 'running',
  },
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      background: `conic-gradient(${vars.color.brand500} 0deg, ${vars.color.brand500_40} 110deg, ${vars.color.brand500_20} 220deg, ${vars.color.brand500_40} 310deg, ${vars.color.brand500} 360deg)`,
      mask: 'radial-gradient(farthest-side, transparent calc(100% - (var(--spinner-stroke-width) * 2)), black calc(100% - var(--spinner-stroke-width)))',
      animation: `${shimmer} calc(${vars.motion.duration.normal} * 1.4) linear infinite`,
      animationPlayState: 'var(--spinner-animation-state)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: `calc(var(--spinner-stroke-width) * 0.7)`,
      borderRadius: 'inherit',
      boxShadow: `0 0 ${vars.spacing[4]} var(--spinner-glow-color)`,
      opacity: 0.9,
      animation: `${pulse} ${vars.motion.duration.slow} ${vars.motion.easing.easeInOut} infinite`,
      animationPlayState: 'var(--spinner-animation-state)',
      pointerEvents: 'none',
      mixBlendMode: 'screen',
    },
    '.dark &': {
      vars: {
        '--spinner-track-color': vars.color.neutral700,
        '--spinner-stroke-color': vars.color.accentMint,
        '--spinner-sheen-color': vars.color.accentMint_20,
        '--spinner-glow-color': vars.color.accentMint_30,
      },
      boxShadow: `0 0 ${vars.spacing[3]} ${vars.color.accentMint_20}`,
      selectors: {
        '&::before': {
          background: `conic-gradient(${vars.color.accentMint} 0deg, ${vars.color.accentMint_30} 110deg, ${vars.color.accentMint_20} 220deg, ${vars.color.accentMint_30} 310deg, ${vars.color.accentMint} 360deg)`,
        },
      },
    },
    '&[data-reduced-motion="true"]': {
      animation: 'none',
      boxShadow: 'none',
      background: 'none',
      vars: {
        '--spinner-animation-state': 'paused',
      },
      selectors: {
        '&::before': { animation: 'none', background: 'none' },
        '&::after': { animation: 'none', boxShadow: 'none' },
      },
    },
  },
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
      selectors: {
        '&::before': { animation: 'none' },
        '&::after': { animation: 'none', boxShadow: 'none' },
      },
      vars: {
        '--spinner-animation-state': 'paused',
      },
    },
  },
});
