import url from 'node:url'
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [viteReact(), imagetools()],
  resolve: {
    alias: {
      '@': url.fileURLToPath(new url.URL('./src', import.meta.url)),
    },
  },
})
