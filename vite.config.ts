import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),  // Remove fastRefresh option
    splitVendorChunkPlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false
    },
    watch: {
      usePolling: false
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'zustand']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'zustand'],
          utils: ['@/utils/RateLimiter', '@/utils/WebhookHandler']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});