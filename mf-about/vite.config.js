
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: '/microfrontend-react-app/mf-about/',

  plugins: [
    react(),

    federation({
      name: 'about',
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
