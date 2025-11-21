import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Vitest configuration for the design-system components package.
// This config enables jsdom environment and integrates with the
// @vitejs/plugin-react to allow testing React components using
// Testing Library.  By colocating this config in the package
// directory you can run `vitest` or `npm test` from within the
// components package.

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [],
  },
});