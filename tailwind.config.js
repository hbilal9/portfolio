/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./App.{js,ts,vue}",
    "./app.{js,ts,vue}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        black:colors.black,
        white:colors.white,
        primary:colors.teal,
        secondary:colors.slate,
        tertiary: colors.gray,
        success:'#28a745',
        info:'#17a2b8',
        warning: '#ffc107',
        danger: '#dc3545',
        light: '#f8f9fa',
        dark: '#343a40',       
        },
        fontFamily:{
          arial:'Arial',
          exo2:'Exo2',
          lato:'Lato',
          nunito: 'Nunito',
          sofiaSans:'Sofia Sans',
          poppins:'Poppins',
        },
    },
  },
  daisyui: {
    themes: [{
      light: {
        ...require("daisyui/src/theming/themes")["[data-theme=light]"],
      },
    }],
  },

  plugins: [require('daisyui')],

}

