
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    port: 3001,
  },
  ssr: false,
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    'nuxt-typed-router',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-gtag',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
    'nuxt-og-image',
    'nuxt-schema-org',
    '@tresjs/nuxt',
  ],
  ui: {
    icons: ['carbon'],
  },
  gtag: {
    id: 'G-65E8J8GCZ5',
  },
  site: {
    url: 'https://zedjarvis.github.io'
  },
  css: ['~/assets/styles/main.css',],
  colorMode: {
    classSuffix: ''
  },
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Cedrouseroll\'s Personal Portfolio Website' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', content: '#1a3a46' },
      ],
    },
  },
})
