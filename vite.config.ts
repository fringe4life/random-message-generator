import { defineConfig } from 'vite'
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: vitePreprocess(),
  })],
  build: {
    target: 'es2023', // Set the target ES version
    minify: true, // Enable minification
    rollupOptions: {
      input: '/index.html',
      output: {
        inlineDynamicImports: true,
      },
    },
  },
  esbuild: {
      target: 'es2023', // Set the target ES version for esbuild
      drop: ['console', 'debugger'], // Drop console.log and debugger statements
  },
  assetsInclude: ['/index.html','**/*.svelte','**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.webp', '**/*.avif'], // Include these file types in the assets
})
