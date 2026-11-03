
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: '/microfrontend-react-app/mf-contact/',

  plugins: [
    react(),

    federation({
      name: 'contact',
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
