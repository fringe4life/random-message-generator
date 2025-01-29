import { defineConfig } from 'vite'
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'
// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: vitePreprocess({ script: true }), // Enable TypeScript preprocessing
    exclude: ['node_modules/**', '/src/styles.css', '/src/reset.css'] // Exclude node_modules from preprocessing
  })],
  build: {
    target: 'es2023', // Set the target ES version
    minify: true, // Enable minification
    rollupOptions: {
      input: ['/index.html','src/main.ts','src/styles.css'], // Specify the entry point
      output:{
        inlineDynamicImports: false, // Disable inlining dynamic imports
        
      },
    },
    
  },
  esbuild: {
    target: 'es2023', // Set the target ES version for esbuild
    drop: ['console', 'debugger'], // Drop console.log and debugger statements
  }, // Set the mode to production
  assetsInclude: ['data.ts', '/public/random.webp'], // Include data.ts in the build output
})
