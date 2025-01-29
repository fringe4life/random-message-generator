import { defineConfig } from 'vite'
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'


// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: vitePreprocess({ script: true }), // Enable TypeScript preprocessing

  })],
  build: {
    target: 'es2023', // Set the target ES version
    minify: true, // Enable minification

  },
  esbuild: {
    target: 'es2023', // Set the target ES version for esbuild
    drop: ['console', 'debugger'], // Drop console.log and debugger statements
  }, // Set the mode to production
  assetsInclude: ['data.ts', '/public/random.webp', '/index.html', 'src/styles.css'], // Include data.ts in the build output
})
