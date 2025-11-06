import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // Головна сторінка
        main: path.resolve(__dirname, 'index.html'),

        // Лендінг 1 — окремий HTML
        landing1: path.resolve(__dirname, 'src/landings/landing1/index.html'),
        // Додавайте нові: landing2: ...
      },
    },
  },
});