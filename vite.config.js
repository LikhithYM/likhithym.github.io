import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // user site, so root
  build: {
    outDir: 'docs', // output to docs for GitHub Pages
    emptyOutDir: true,
  },
  plugins: [react()],
});