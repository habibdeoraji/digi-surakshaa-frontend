import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    environmentOptions: {
      jsdom: {
        // Add jsdom options if needed
      }
    },
    deps: {
      inline: ['@mui/material', '@mui/icons-material']
    },
    threads: false, // Disable threading to avoid crypto issues
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/setupTests.js',
      ],
    },
  },
}); 