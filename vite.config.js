import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/memory-game/',
  plugins: [
    react(),
    eslint({
      emitError: true,
      failOnError: false,
      failOnWarning: false,
    }),
  ],
  server: {
    hmr: {
      overlay: false,
    },
  },
  optimizeDeps: {
    include: ['react-howler'],
  },
});
