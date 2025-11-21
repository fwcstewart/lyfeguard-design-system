/**
 * Theme definitions for the Lyfeguard design system.
 *
 * This placeholder module provides an entry point for theme objects.  In
 * future versions of the design system you can define multiple themes
 * here (e.g. light and dark) and export them for consumption by
 * providers or utility hooks.  Keeping theme definitions in a dedicated
 * folder makes it easy to extend the system without polluting the core
 * component code.
 */

export const defaultTheme = {};

// In the future you might define additional themes like:
export { darkTheme } from './dark';

// Export the ThemeProvider which toggles between light and dark modes.
export { ThemeProvider } from './ThemeProvider';