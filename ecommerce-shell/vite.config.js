
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ command }) => {
  const localRemotes = command === 'serve';
  const remoteBase = localRemotes
    ? 'http://localhost'
    : 'https://devrohit45.github.io/microfrontend-react-app';

  return {
    base: '/microfrontend-react-app/',

    plugins: [
      react(),

      federation({
        name: 'ecommerce_shell',

        remotes: {
          home: `${remoteBase}${localRemotes ? ':5001' : ''}/microfrontend-react-app/mf-home/assets/remoteEntry.js`,
          about: `${remoteBase}${localRemotes ? ':5002' : ''}/microfrontend-react-app/mf-about/assets/remoteEntry.js`,
          products: `${remoteBase}${localRemotes ? ':5003' : ''}/microfrontend-react-app/mf-products/assets/remoteEntry.js`,
          contact: `${remoteBase}${localRemotes ? ':5004' : ''}/microfrontend-react-app/mf-contact/assets/remoteEntry.js`,
        },

        shared: ['react', 'react-dom'],
      }),
    ],

    build: {
      target: 'esnext',
    },
  };
});
