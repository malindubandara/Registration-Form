import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Optional: Allows imports like '@/components/Button'
    },
  },
  server: {
    port: 5173, // Default Vite dev port
    open: true, // Auto open browser
  },
  envPrefix: ['VITE_'], // Use only VITE_ env vars for security
});
