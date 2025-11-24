import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const config: StorybookConfig = {
  stories: [
    '../storybook/docs/**/*.mdx',
    '../packages/components/src/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  staticDirs: [],
  async viteFinal(config) {
    if (process.env.STORYBOOK_BASE_PATH) {
      config.base = process.env.STORYBOOK_BASE_PATH;
    }

    // Add Vanilla Extract plugin
    if (!config.plugins) {
      config.plugins = [];
    }
    config.plugins.push(vanillaExtractPlugin());
    
    // Resolve workspace packages
    if (!config.resolve) {
      config.resolve = {};
    }
    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }
    
    // Ensure workspace packages are resolved correctly
    config.resolve.alias = {
      ...config.resolve.alias,
      '@lyfeguard/tokens': path.resolve(__dirname, '../packages/tokens'),
      '@lyfeguard/design-system': path.resolve(__dirname, '../packages/components/src'),
      '@lyfeguard/utils': path.resolve(__dirname, '../packages/utils'),
    };
    
    return config;
  }
};

export default config;
