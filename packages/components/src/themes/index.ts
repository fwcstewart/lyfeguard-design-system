import { buildDarkTheme, buildLightTheme, type ThemeDefinition } from './types';

export const defaultTheme: ThemeDefinition = buildLightTheme();

export { buildDarkTheme, buildLightTheme };
export type { ThemeDefinition };
export { darkTheme } from './dark';
export { ThemeProvider } from './ThemeProvider';