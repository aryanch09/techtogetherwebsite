import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/techtogether-website/',  // Replace with your actual GitHub repo name
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});
