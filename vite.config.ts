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
    port: 3001,  // Changed port
    host: true,  // Changed from '0.0.0.0' to true
    strictPort: true,  // Add this to ensure port is available
    open: true,
    hmr: {
      overlay: false,
      clientPort: 3001  // Add explicit client port
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