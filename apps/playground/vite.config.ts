import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // alias the design-system package to its source for local development
      '@lyfeguard/design-system': '../../packages/components/src/index.ts'
    }
  }
});
