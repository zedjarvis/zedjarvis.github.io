/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@assets/main.scss'
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
          primary: 'rgb(100, 255, 218)',
          'primary-text': 'rgb(204, 214, 246)',
          background: '#002937',
          'on-background': 'rgb(136, 146, 176)',
          surface: '#1a3a46',
        }
      }
    },
  },
})
