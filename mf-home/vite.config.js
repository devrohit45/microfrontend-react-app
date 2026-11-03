
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import federationCssFix from '../federation-css-fix.mjs';

export default defineConfig({
  base: '/microfrontend-react-app/mf-home/',

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
    federationCssFix(),
  ],

  build: {
    target: 'esnext',
  },
});
