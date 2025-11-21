import '@lyfeguard/tokens/dist/css/tokens.css';
import { create } from '@storybook/theming/create';

const fontStack = "var(--font-family-sans, 'Inter', system-ui, -apple-system, sans-serif)";
const monoStack = "var(--font-family-mono, 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace)";

export const lyfeguardTheme = create({
  base: 'light',
  brandTitle: 'Lyfeguard Design System',
  brandUrl: 'https://www.lyfeguard.com',
  brandImage: undefined,
  colorPrimary: 'var(--color-brand-500)',
  colorSecondary: 'var(--color-accent-mint)',
  appBg: 'var(--color-theme-background)',
  appContentBg: 'var(--color-theme-surface)',
  appBorderColor: 'var(--color-theme-border)',
  appBorderRadius: 12,
  textColor: 'var(--color-theme-text-primary)',
  textInverseColor: 'var(--color-neutral-0)',
  barBg: 'var(--color-theme-surface)',
  barTextColor: 'var(--color-theme-text-secondary)',
  barSelectedColor: 'var(--color-brand-500)',
  inputBg: 'var(--color-neutral-0)',
  inputTextColor: 'var(--color-theme-text-primary)',
  inputBorder: 'var(--color-theme-border)',
  fontBase: fontStack,
  fontCode: monoStack,
});

export const storybookBackgrounds = [
  { name: 'Surface', value: 'var(--color-theme-surface)' },
  { name: 'Canvas', value: 'var(--color-theme-background)' },
  { name: 'Midnight', value: 'var(--color-brand-900)' },
];
