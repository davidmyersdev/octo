import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import svgPlugin from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills({
      globals: {
        Buffer: false,
        global: false,
        process: false,
      },
      include: ['path'],
    }),
    svgPlugin(),
  ],
})
