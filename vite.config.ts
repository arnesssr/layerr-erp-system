import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['@radix-ui/react-tabs', '@radix-ui/react-dialog'],
          'vendor-utils': ['zustand', 'clsx', 'tailwind-merge'],
          'inventory': [
            './src/components/inventory/InventoryList',
            './src/components/inventory/InventoryAnalytics',
            './src/components/inventory/integration/IntegrationMonitor'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    strictPort: true,
    hmr: {
      overlay: false,
      clientPort: 3001
    },
    watch: {
      usePolling: false
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'zustand']
  }
});