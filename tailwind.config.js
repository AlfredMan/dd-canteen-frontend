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
        }
      }
    }
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
