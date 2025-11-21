import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// Vitest configuration for the design-system components package.
// This config enables jsdom environment and integrates with the
// @vitejs/plugin-react to allow testing React components using
// Testing Library.  By colocating this config in the package
// directory you can run `vitest` or `npm test` from within the
// components package.

export default defineConfig({
  plugins: [vanillaExtractPlugin(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    setupFiles: ['./setupTests.ts'],
    setupFiles: ['@testing-library/jest-dom/vitest'],
    setupFiles: ['./src/setupTests.ts'],
    setupFiles: ['@vanilla-extract/css/disableRuntimeStyles', '@testing-library/jest-dom/vitest'],
    setupFiles: ['@vanilla-extract/css/disableRuntimeStyles', './vitest.setup.ts'],
    setupFiles: ['src/testSetup.ts'],
    setupFiles: ['@testing-library/jest-dom'],
  },
});
