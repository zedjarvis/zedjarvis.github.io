/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


// Plugins
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto/routes'
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'


// styles
import '@assets/main.scss'

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL
  },
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
    registerPlugins(app)
  },
)
