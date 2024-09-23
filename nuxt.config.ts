// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 3001,
  },

  ssr: false,

  modules: [
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "nuxt-typed-router",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
    "nuxt-gtag",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],

  ui: {
    icons: ["carbon"],
  },

  gtag: {
    id: "G-65E8J8GCZ5",
  },

  site: {
    url: "https://zedjarvis.github.io",
  },

  css: ["~/assets/styles/main.css"],

  colorMode: {
    classSuffix: "",
  },

  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Cedrouseroll Omondi is a Full-Stack Software Developer. He is very passionate about software development. His Primary coding language is Python. He has hands-on Professional Experience with using Django, Vuejs, React, Laravel, Postgresql, MongoDB, UnoCSS and Vuetify. When he is not coding, he is somewhere building custom furniture or making 3d designs with blender and Sketchup.",
        },
        { name: "mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        { name: "theme-color", content: "#1a3a46" },
      ],
      title: "Cedrouseroll Omondi",
    },
  },

  compatibilityDate: "2024-09-23",
});
