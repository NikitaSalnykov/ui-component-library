import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ui-component-library/',
  build: {
    outDir: 'dist-site',
    emptyOutDir: true,
  },
});
