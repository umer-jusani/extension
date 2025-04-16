import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  viteStaticCopy({
    targets: [
      {
        src: 'extension/manifest.json',
        dest: '.'
      },
      {
        src: 'extension/icon.png',
        dest: '.'
      }
    ]
  })
  ],
  build: {
    outDir: 'dist',
  },
})
