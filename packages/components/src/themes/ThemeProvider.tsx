import * as React from 'react';

/**
 * Props for the `ThemeProvider` component.
 */
export interface ThemeProviderProps {
  /**
   * The desired colour scheme. When set to `dark`, the provider applies a
   * `.dark` class to the target element which activates the dark variables
   * defined in `globals.css.ts`. Any other value (including `light`)
   * removes the class.
   */
  theme?: 'light' | 'dark';
  /**
   * Where the `.dark` class should be applied.
   *
   * - `document` (default): toggles the class on `document.documentElement`
   *   for global theming.
   * - `local`: wraps children in a container with the `.dark` class so dark
   *   tokens are scoped to that subtree without mutating the document.
   */
  scope?: 'document' | 'local';
  /**
   * Children rendered within the provider. This provider does not
   * manipulate the React tree; it only adds or removes a class on the
   * document root or a local wrapper. Therefore, it can wrap any content.
   */
  children: React.ReactNode;
}

/**
 * ThemeProvider
 *
 * This component toggles the `.dark` class on either the HTML `<html>`
 * element or a local wrapper based on the provided `theme` prop. When
 * `theme` is `'dark'`, the dark design tokens defined in `globals.css.ts`
 * are activated. When `theme` is `'light'` or undefined, the class is
 * removed and the default (light) tokens remain in effect.
 *
 * Use `scope="local"` to confine dark mode to a subtree without affecting
 * the rest of the document. Changing the `theme` prop is reactive; the
 * class is updated on each render and cleaned up on unmount.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = 'light',
  scope = 'document',
  children,
}) => {
  React.useEffect(() => {
    if (scope !== 'document' || typeof document === 'undefined') {
      return undefined;
    }

    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    return () => {
      root.classList.remove('dark');
    };
  }, [theme, scope]);

  if (scope === 'local') {
    const wrapperClassName = theme === 'dark' ? 'dark' : undefined;
    return (
      <div className={wrapperClassName} data-lyfeguard="ThemeProvider" data-testid="theme-provider">
        {children}
      </div>
    );
  }

  return <>{children}</>;
};
