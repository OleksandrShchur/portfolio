import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    react(),
    {
      name: 'spa-404-fallback',
      closeBundle() {
        const indexPath = resolve(__dirname, 'dist/index.html');
        const notFoundPath = resolve(__dirname, 'dist/404.html');
        copyFileSync(indexPath, notFoundPath);
      },
    },
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
