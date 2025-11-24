import '@lyfeguard/tokens/dist/css/tokens.css';
import { create } from '@storybook/theming/create';

// Using Epilogue font family to match design system
const fontStack = "'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const monoStack = "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace";

// Color values from tokens (light theme)
// Using actual hex/rgb values since Storybook theme API doesn't support CSS variables
const colors = {
  brand500: '#177B9A',
  brand800: '#08282E',
  brand900: '#051A22',
  accentMint: '#00FFB2',
  background: '#FFFFFF',
  surface: '#F5F5F5',
  surfaceHover: '#E7ECEC',
  border: '#CFD6D6',
  borderHover: '#B8C0C0',
  textPrimary: '#2E3B3B',
  textSecondary: '#5C6969',
  textTertiary: '#8A9595',
  neutral0: '#FFFFFF',
};

export const lyfeguardTheme = create({
  base: 'light',
  brandTitle: 'Lyfeguard Design System',
  brandUrl: 'https://www.lyfeguard.com',
  brandImage: undefined,
  colorPrimary: colors.brand500,
  colorSecondary: colors.accentMint,
  appBg: colors.background,
  appContentBg: colors.surface,
  appBorderColor: colors.border,
  appBorderRadius: 12,
  textColor: colors.textPrimary,
  textInverseColor: colors.neutral0,
  barBg: colors.surface,
  barTextColor: colors.textSecondary,
  barSelectedColor: colors.brand500,
  barHoverColor: colors.brand800,
  inputBg: colors.neutral0,
  inputTextColor: colors.textPrimary,
  inputBorder: colors.border,
  inputBorderRadius: 8,
  fontBase: fontStack,
  fontCode: monoStack,
});

export const storybookBackgrounds = [
  { name: 'Surface', value: colors.surface },
  { name: 'Canvas', value: colors.background },
  { name: 'Midnight', value: '#051A22' }, // brand-900
];
