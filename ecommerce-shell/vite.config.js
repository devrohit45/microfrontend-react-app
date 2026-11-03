
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: '/microfrontend-react-app/',

  plugins: [
    react(),

    federation({
      name: 'ecommerce_shell',

      remotes: {
        home: 'https://devrohit45.github.io/microfrontend-react-app/mf-home/assets/remoteEntry.js',

        about: 'https://devrohit45.github.io/microfrontend-react-app/mf-about/assets/remoteEntry.js',

        products: 'https://devrohit45.github.io/microfrontend-react-app/mf-products/assets/remoteEntry.js',

        contact: 'https://devrohit45.github.io/microfrontend-react-app/mf-contact/assets/remoteEntry.js',
      },

      shared: ['react', 'react-dom'],
    }),
  ],

  build: {
    target: 'esnext',
  },
});
