import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Sempre use o path base para GitHub Pages em produu00e7u00e3o
  base: '/zapflow-landing-page/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsInlineLimit: 0, // Garante que todas as imagens sejam processadas como arquivos
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
