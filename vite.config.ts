import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'spa-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url ?? '';
          if (url.includes('.') || url.startsWith('/@') || url.startsWith('/node_modules')) {
            return next();
          }
          req.url = '/index.html';
          next();
        });
      },
    },
  ],
  resolve: {
    tsconfigPaths: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
