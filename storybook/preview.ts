import '@lyfeguard/tokens/dist/css/tokens.css';
import type { Preview } from '@storybook/react';
import React from 'react';
import './styles.css';
import { ThemeProvider } from '../packages/components/src/themes';
import { lyfeguardTheme, storybookBackgrounds } from './theme';

/**
 * Global decorator that wraps all stories with ThemeProvider and sets the iframe background.
 * The theme is controlled by the global toolbar control.
 */
const withThemeProvider = (Story: React.ComponentType, context: { globals?: Record<string, unknown> }) => {
  const theme = (context.globals?.theme as 'light' | 'dark') || 'light';

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
      },
      expanded: true,
    },
    backgrounds: {
      default: 'Surface',
      values: storybookBackgrounds,
    },
    layout: 'fullscreen',
    docs: {
      theme: lyfeguardTheme,
    },
    options: {
      storySort: {
        order: ['Welcome', 'Foundations', 'Components', 'Layout', 'Technical Patterns'],
      },
    },
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
