import viteReact from '@vitejs/plugin-react'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [viteReact(), imagetools()],
  resolve: {
    alias: {
      'styled-system': fileURLToPath(
        new URL('./src/styled-system', import.meta.url),
      ),
    },
  },
})
