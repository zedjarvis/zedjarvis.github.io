/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          background: '#FDFBEF',
          'on-background': '#473C2F',
        },
      },
      dark: {
        colors: {
          primary: '#64ffda',
          background: '#0a192f',
          'on-background': '#ccd6f6',
          surface: 'rgb(23, 42, 69)',
        }
      }
    },
  },
})
