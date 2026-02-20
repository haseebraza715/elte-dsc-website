import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Forced update
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    // Enable compression
    cssCodeSplit: true,
    sourcemap: false, // Disable sourcemaps in production for smaller builds
    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    // Target modern browsers for smaller bundles
    target: 'es2015',
    // Optimize for mobile
    cssMinify: true,
    // Enable compression
    reportCompressedSize: true,
    // Reduce chunk size warnings
    assetsDir: 'assets',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    // Exclude large dependencies from pre-bundling if needed
    exclude: [],
    // Let Vite rebuild naturally - force can cause race conditions
    force: false,
    // Ensure dependencies are properly optimized
    esbuildOptions: {
      target: 'es2015',
    },
  },
  server: {
    port: 5175,
    strictPort: true,
    headers: {
      'X-Frame-Options': 'SAMEORIGIN',
    },
    hmr: {
      clientPort: 5175,
      overlay: true,
    },
    watch: {
      usePolling: false,
    },
  },
  // Performance optimizations
  esbuild: {
    // Drop console and debugger in production
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
}))
