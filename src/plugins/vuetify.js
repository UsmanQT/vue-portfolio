/**
 * plugins/vuetify.js
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
        primary: '#4f5d75', 
        secondary: '#ef8354', 
        accent: '#82B1FF',
        dark: '#2d3142',
        background: '#ffffff',
      },
      dark: {
        dark: true,
      },
    },
    defaultTheme: 'dark',
  },
})
