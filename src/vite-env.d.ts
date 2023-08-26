/// <reference types="vite/client" />
/// <reference types="vite-plugin-vue-meta-layouts/client" />


declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue-writer' {
  import VueWriter from 'vue-writer'
  export default VueWriter
}