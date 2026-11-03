
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: '/ecommerce-shell/',
  plugins: [
    react(),
    federation({
      name: 'ecommerce_shell',
      remotes: {
        home: 'https://YOUR-USERNAME.github.io/mf-home/assets/remoteEntry.js',
        about: 'https://YOUR-USERNAME.github.io/mf-about/assets/remoteEntry.js',
        products: 'https://YOUR-USERNAME.github.io/mf-products/assets/remoteEntry.js',
        contact: 'https://YOUR-USERNAME.github.io/mf-contact/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
});
