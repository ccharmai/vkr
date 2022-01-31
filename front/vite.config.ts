import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "path"
import Pages from "vite-plugin-pages"

export default defineConfig({
  plugins: [
    vue(),
    Pages({ importMode() { return 'sync' } }),
  ],
  resolve: {
    alias: [
      { find: /@\//, replacement: join(__dirname, 'src') + '/' },
    ],
  }
})
