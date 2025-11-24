import { vars } from '../../globals.css';

export type CardTone = 'neutral' | 'info' | 'warning';

export interface CardToneTokens {
  surface: string;
  surfaceHover: string;
  border: string;
  text: string;
  accent: string;
  focusRing: string;
}

const focusRing = `0 0 0 3px color-mix(in srgb, ${vars.color.accentMint} 32%, ${vars.color.theme.surface})`;

export const CARD_TONES: Record<CardTone, CardToneTokens> = {
  neutral: {
    surface: vars.color.theme.surface,
    surfaceHover: vars.color.theme.surfaceHover,
    border: vars.color.theme.border,
    text: vars.color.theme.text.primary,
    accent: vars.color.accentMint,
    focusRing,
  },
  info: {
    surface: `color-mix(in srgb, ${vars.color.info500} 10%, ${vars.color.theme.surface})`,
    surfaceHover: `color-mix(in srgb, ${vars.color.info500} 16%, ${vars.color.theme.surface})`,
    border: vars.color.info500_15,
    text: vars.color.theme.text.primary,
    accent: vars.color.info500,
    focusRing,
  },
  warning: {
    surface: `color-mix(in srgb, ${vars.color.warning500} 10%, ${vars.color.theme.surface})`,
    surfaceHover: `color-mix(in srgb, ${vars.color.warning500} 16%, ${vars.color.theme.surface})`,
    border: vars.color.warning500_15,
    text: vars.color.theme.text.primary,
    accent: vars.color.warning500,
    focusRing,
  },
};
