import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
	resolve: {
		alias: [
			{
				// для алиасов в секции style
				find: /~(.+)/,
				replacement: join(__dirname, "src/$1"),
			},

			{
				find: /@\//,
				replacement: join(__dirname, "src") + "/",
			},
			{
				find: "vue",
				replacement: "vue/dist/vue.esm-bundler.js",
			},
		],
	},
})
