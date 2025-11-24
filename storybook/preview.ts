import '@lyfeguard/tokens/dist/css/tokens.css';
import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../packages/components/src/themes';
import { lyfeguardTheme, storybookBackgrounds } from './theme';

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
        font-family: 'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      #storybook-root {
        background-color: var(--color-theme-background);
        min-height: 100vh;
        padding: 24px;
      }
      
      /* Improve docs typography */
      .sbdocs-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        padding: 48px 32px;
      }
      
      .sbdocs h1 {
        font-family: 'Epilogue', sans-serif;
        font-size: 48px;
        font-weight: 700;
        line-height: 1.15;
        color: var(--color-theme-text-primary);
        margin-top: 0;
        margin-bottom: 24px;
      }
      
      .sbdocs h2 {
        font-family: 'Epilogue', sans-serif;
        font-size: 36px;
        font-weight: 700;
        line-height: 1.2;
        color: var(--color-theme-text-primary);
        margin-top: 48px;
        margin-bottom: 24px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--color-theme-border);
      }
      
      .sbdocs h3 {
        font-family: 'Epilogue', sans-serif;
        font-size: 28px;
        font-weight: 600;
        line-height: 1.25;
        color: var(--color-theme-text-primary);
        margin-top: 32px;
        margin-bottom: 16px;
      }
      
      .sbdocs h4 {
        font-family: 'Epilogue', sans-serif;
        font-size: 22px;
        font-weight: 600;
        line-height: 1.3;
        color: var(--color-theme-text-primary);
        margin-top: 24px;
        margin-bottom: 12px;
      }
      
      .sbdocs p {
        font-size: 16px;
        line-height: 1.6;
        color: var(--color-theme-text-secondary);
        margin-bottom: 16px;
      }
      
      .sbdocs ul, .sbdocs ol {
        margin-bottom: 16px;
        padding-left: 24px;
      }
      
      .sbdocs li {
        font-size: 16px;
        line-height: 1.6;
        color: var(--color-theme-text-secondary);
        margin-bottom: 8px;
      }
      
      .sbdocs code {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: 14px;
        background: var(--color-theme-surface);
        padding: 2px 6px;
        border-radius: 4px;
        color: var(--color-brand-500);
        border: 1px solid var(--color-theme-border);
      }
      
      .sbdocs pre {
        background: var(--color-theme-surface);
        border: 1px solid var(--color-theme-border);
        border-radius: 8px;
        padding: 20px;
        overflow-x: auto;
        margin-bottom: 24px;
      }
      
      .sbdocs pre code {
        background: transparent;
        border: none;
        padding: 0;
        color: var(--color-theme-text-primary);
      }
      
      /* Improve table styling */
      .sbdocs table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 24px;
        border: 1px solid var(--color-theme-border);
        border-radius: 8px;
        overflow: hidden;
      }
      
      .sbdocs th {
        background: var(--color-theme-surface);
        padding: 12px 16px;
        text-align: left;
        font-weight: 600;
        font-size: 14px;
        color: var(--color-theme-text-primary);
        border-bottom: 2px solid var(--color-theme-border);
      }
      
      .sbdocs td {
        padding: 12px 16px;
        border-bottom: 1px solid var(--color-theme-border);
        font-size: 14px;
        color: var(--color-theme-text-secondary);
      }
      
      .sbdocs tr:last-child td {
        border-bottom: none;
      }
      
      /* Improve blockquote styling */
      .sbdocs blockquote {
        border-left: 4px solid var(--color-brand-500);
        padding-left: 20px;
        margin: 24px 0;
        color: var(--color-theme-text-secondary);
        font-style: italic;
      }
      
      /* Improve link styling */
      .sbdocs a {
        color: var(--color-brand-500);
        text-decoration: none;
        transition: color 0.2s ease;
      }
      
      .sbdocs a:hover {
        color: var(--color-accent-mint);
        text-decoration: underline;
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
      },
      expanded: true,
    },
    backgrounds: {
      default: 'Surface',
      values: storybookBackgrounds,
    },
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
