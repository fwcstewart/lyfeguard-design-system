import { buildDarkTheme } from './types';

/**
 * Dark theme definition for the Lyfeguard design system.
 *
 * The dark theme mirrors the light token structure while swapping the
 * colour tokens for the `.dark` variants registered in
 * `globals.css.ts`. Using the builder keeps the theme definition in sync
 * with any updates to the token map and ensures component backgrounds
 * remain distinct from the page surface.
 */
export const darkTheme = buildDarkTheme();