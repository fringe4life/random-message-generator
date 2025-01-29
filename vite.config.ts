import { defineConfig } from 'vite'
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { browserslistToTargets } from 'lightningcss'
import browserslist from 'browserslist';
// https://vite.dev/config/
export default defineConfig({
   css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%'))
    }
  },
  plugins: [svelte({
    preprocess: vitePreprocess({ script: true }), // Enable TypeScript preprocessing
    exclude: ['node_modules/**', '/src/styles.css', '/src/reset.css'] // Exclude node_modules from preprocessing
  })],
  build: {
    cssMinify: 'lightningcss', // Use LightningCSS for CSS minification
    target: 'es2023', // Set the target ES version
    minify: true, // Enable minification
    rollupOptions: {
      input: ['/index.html','src/main.ts'], // Specify the entry point
      output:{
        inlineDynamicImports: false, // Disable inlining dynamic imports
        
      },
      external: ['svelte']
    },
    
  },
  esbuild: {
    target: 'es2023', // Set the target ES version for esbuild
    drop: ['console', 'debugger'], // Drop console.log and debugger statements
  }, // Set the mode to production
  assetsInclude: ['data.ts', '/public/random.webp', '/index.html', 'src/styles.css'], // Include data.ts in the build output
})
