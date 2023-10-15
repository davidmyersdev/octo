import { type UserConfig, defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import svgPlugin from 'vite-svg-loader'

export const config = {
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
  test: {
    environment: 'happy-dom',
  },
  // For Tauri
  clearScreen: false,
  // Enable environment variables
  // Additional environment variables can be found at
  // https://tauri.app/2/reference/environment-variables/
  envPrefix: ['VITE_', 'TAURI_'],
  server: {
    // Tauri requires a consistent port
    strictPort: true,
    // Enables the development server to be discoverable by other devices for mobile development
    host: '0.0.0.0',
    hmr: {
      // Use websocket for mobile hot reloading
      protocol: 'ws',
      // Make sure it's available on the network
      host: '0.0.0.0',
      // Use a specific port for hmr
      port: 5183,
    },
  },
} satisfies UserConfig

// https://vitejs.dev/config/
export default defineConfig(config)
