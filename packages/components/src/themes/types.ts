import { darkVars, vars } from '../globals.css';

export interface ThemeText {
  primary: string;
  secondary: string;
  tertiary: string;
  disabled: string;
}

export interface ThemeColors {
  background: string;
  surface: string;
  surfaceHover: string;
  surfaceActive: string;
  border: string;
  borderHover: string;
  text: ThemeText;
  overlay: string;
}

export interface ThemeDefinition {
  name: 'light' | 'dark';
  colors: ThemeColors;
}

export const buildLightTheme = (): ThemeDefinition => ({
  name: 'light',
  colors: {
    background: vars.color.theme.background,
    surface: vars.color.theme.surface,
    surfaceHover: vars.color.theme.surfaceHover,
    surfaceActive: vars.color.theme.surfaceActive,
    border: vars.color.theme.border,
    borderHover: vars.color.theme.borderHover,
    text: { ...vars.color.theme.text },
    overlay: vars.color.theme.overlay,
  },
});

export const buildDarkTheme = (): ThemeDefinition => ({
  name: 'dark',
  colors: {
    background: darkVars.color.theme.background,
    surface: darkVars.color.theme.surface,
    surfaceHover: darkVars.color.theme.surfaceHover,
    surfaceActive: darkVars.color.theme.surfaceActive,
    border: darkVars.color.theme.border,
    borderHover: darkVars.color.theme.borderHover,
    text: { ...darkVars.color.theme.text },
    overlay: darkVars.color.theme.overlay,
  },
});
