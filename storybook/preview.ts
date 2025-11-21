import '@lyfeguard/tokens/dist/css/tokens.css';
import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../packages/components/src/themes';

/**
 * Global decorator that wraps all stories with ThemeProvider and sets the iframe background.
 * The theme is controlled by the global toolbar control.
 */
const withThemeProvider = (Story: any, context: any) => {
  const theme = (context.globals?.theme as 'light' | 'dark') || 'light';
  
  // Inject CSS to set the body background to match the theme
  // This runs in the preview iframe context
  if (typeof document !== 'undefined') {
    const styleId = 'storybook-theme-background';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    
    styleElement.textContent = `
      body {
        background-color: var(--color-theme-background) !important;
        color: var(--color-theme-text-primary);
        transition: background-color 0.2s ease, color 0.2s ease;
      }
      #storybook-root {
        background-color: var(--color-theme-background);
        min-height: 100vh;
      }
    `;
  }
  
  return React.createElement(
    ThemeProvider,
    { theme },
    React.createElement(Story)
  );
};

/**
 * Global toolbar control for theme switching.
 * This appears in the top toolbar of Storybook and controls the theme
 * for all components across all stories.
 */
const preview: Preview = {
  decorators: [withThemeProvider],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'circlehollow' },
          { value: 'dark', title: 'Dark', icon: 'circle' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
