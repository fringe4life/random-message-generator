import { defineConfig } from 'vite'
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import fs from 'node:fs'
import path from 'node:path'

// Function to get all Svelte files in a directory
function getSvelteFiles(dir: string): string[] {
  const files = fs.readdirSync(dir)
  const svelteFiles = files.filter(file => file.endsWith('.svelte'))
  return svelteFiles.map(file => path.join(dir, file))
}

// Get all Svelte files in the src directory
const svelteFiles = getSvelteFiles(path.resolve(__dirname, 'src'))
// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: vitePreprocess(),
  })],
  build: {
    target: 'es2023', // Set the target ES version
    minify: true, // Enable minification
    rollupOptions: {
      input: [...svelteFiles, '/index.html'], // Include all Svelte files and the index.html file
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
