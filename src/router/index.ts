// Composables
import { setupLayouts } from 'virtual:meta-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto/routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: setupLayouts(routes)
})

export default router
