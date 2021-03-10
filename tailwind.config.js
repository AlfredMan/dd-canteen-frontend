// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        green: {
          default: 'hsl(142, 61%, 50%)',
          base: 'hsl(142, 61%, 50%)',
          darker: 'hsl(142, 61%, 47%)',
          lighter: 'hsl(142, 61%, 55%)'
        },
        orange: {
          default: 'hsl(11,100%,61%)',
          base: 'hsl(11,100%,61%)',
          darker: 'hsl(11,100%,58%)',
          lighter: 'hsl(11,100%,64%)'
        },
        yellow: {
          default: 'hsl(54, 100%, 50%)',
          base: 'hsl(54, 100%, 50%)',
          darker: 'hsl(54, 71%, 50%)',
          lighter: 'hsl(54, 100%, 61%)'
        }
      }
    },
    screens: {
      'mobile': {'min': '0px', 'max': '640px'},

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1280px) { ... }
    }
  },

  // purge: {
  //   // enabled: process.env.NODE_ENV === 'production',
  //   enabled: false,
  //   content: [
  //     'components/**/*.vue',
  //     'layouts/**/*.vue',
  //     'pages/**/*.vue',
  //     'plugins/**/*.js',
  //     'nuxt.config.js'
  //   ]
  // },

  // purge: {
  //   enabled: false,
  //   content: [
  //     './**/*.html',
  //     './**/*.vue'
  //   ]
  // }
}
