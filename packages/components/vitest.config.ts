import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [
      '@vanilla-extract/css/disableRuntimeStyles',
      '@testing-library/jest-dom/vitest',
      './vitest.setup.ts',         // keep your local setup
      './setupTests.ts',           // if still required
      './src/setupTests.ts',       // if still required
      'src/testSetup.ts',          // if still required
    ],
  },
});
