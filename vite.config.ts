import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    target: 'es2023', // Set the target ES version
    minify: true, // Enable minification
    
  },
  esbuild: {
      target: 'es2023', // Set the target ES version for esbuild
      drop: ['console', 'debugger'], // Drop console.log and debugger statements
    },
})
