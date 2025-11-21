import * as React from 'react';

/**
 * Props for the `ThemeProvider` component.
 */
export interface ThemeProviderProps {
  /**
   * The desired colour scheme. When set to `dark`, the provider applies a
   * `.dark` class to the root element which activates the dark variables
   * defined in `globals.css.ts`. Any other value (including `light`)
   * removes the class.
   */
  theme?: 'light' | 'dark';
  /**
   * Children rendered within the provider. This provider does not
   * manipulate the React tree; it only adds or removes a class on the
   * document root.  Therefore, it can wrap any content.
   */
  children: React.ReactNode;
}

/**
 * ThemeProvider
 *
 * This component toggles the `.dark` class on the HTML `<html>` element
 * based on the provided `theme` prop.  When `theme` is `'dark'`, the
 * dark design tokens defined in `globals.css.ts` are activated.  When
 * `theme` is `'light'` or undefined, the class is removed and the
 * default (light) tokens remain in effect.
 *
 * You can use this provider at the root of your application or within
 * subtrees to scope dark mode to specific areas.  Changing the `theme`
 * prop is reactive; the class is updated on each render.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme = 'light', children }) => {
  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return <>{children}</>;
};