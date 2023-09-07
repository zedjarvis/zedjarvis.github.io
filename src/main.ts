/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// utilities
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// styles
import 'virtual:uno.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

