
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: '/mf-home/',
  plugins: [
    react(),
    federation({
      name: 'home',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
});
