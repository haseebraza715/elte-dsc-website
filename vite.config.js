import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate vendor chunks for better caching
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('react-router')) {
              return 'router-vendor'
            }
            return 'vendor'
          }
          // Separate page chunks
          if (id.includes('/pages/')) {
            const pageName = id.split('/pages/')[1].split('.')[0]
            return `page-${pageName}`
          }
          // Separate component chunks
          if (id.includes('/components/')) {
            const componentName = id.split('/components/')[1].split('.')[0]
            return `component-${componentName}`
          }
        },
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
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    // Exclude large dependencies from pre-bundling if needed
    exclude: [],
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
})
