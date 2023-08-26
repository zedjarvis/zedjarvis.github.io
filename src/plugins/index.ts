/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
// import { loadFonts } from './webfontloader'
import router from '@/router'
import pinia from '../store'
import head from './unhead'
import vuetify from './vuetify'

// Types
import type { App } from 'vue'

export function registerPlugins(app: App) {
  // loadFonts()
  app
    .use(vuetify)
    .use(pinia)
    .use(router)
    .use(head)
}
