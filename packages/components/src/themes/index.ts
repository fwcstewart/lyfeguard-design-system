import { buildDarkTheme, buildLightTheme, ThemeDefinition } from './types';

export const defaultTheme: ThemeDefinition = buildLightTheme();

export { buildDarkTheme, buildLightTheme, ThemeDefinition };
export { darkTheme } from './dark';
export { ThemeProvider } from './ThemeProvider';