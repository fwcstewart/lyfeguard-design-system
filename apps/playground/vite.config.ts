import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      // alias the design-system package to its source for local development
      '@lyfeguard/design-system': path.resolve(__dirname, '../../packages/components/src'),
      '@lyfeguard/tokens': path.resolve(__dirname, '../../packages/tokens'),
      '@lyfeguard/utils': path.resolve(__dirname, '../../packages/utils'),
    }
  }
});
