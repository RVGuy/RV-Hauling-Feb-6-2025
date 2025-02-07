import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          datepicker: ['react-datepicker'],
        },
      },
    },
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
    target: ['es2015', 'chrome58', 'firefox57', 'safari11', 'edge16'],
  },
});