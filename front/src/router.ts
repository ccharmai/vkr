import { createRouter, createWebHistory } from "vue-router"
import routes from "~pages"

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		...routes,
		{ path: "/:catchAll(.*)", redirect: '/404' },
	],
})
