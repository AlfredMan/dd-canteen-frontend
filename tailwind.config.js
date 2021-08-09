// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "hsl(142, 61%, 50%)",
          default: "hsl(142, 61%, 50%)",
          base: "hsl(142, 61%, 50%)",
          darker: "hsl(142, 61%, 47%)",
          lighter: "hsl(142, 61%, 55%)"
        },
        orange: {
          DEFAULT: "hsl(11,100%,61%)",
          default: "hsl(11,100%,61%)",
          base: "hsl(11,100%,61%)",
          darker: "hsl(11,100%,58%)",
          lighter: "hsl(11,100%,64%)"
        },
        yellow: {
          DEFAULT: "hsl(54, 100%, 50%)",
          default: "hsl(54, 100%, 50%)",
          base: "hsl(54, 100%, 50%)",
          darker: "hsl(54, 71%, 50%)",
          lighter: "hsl(54, 100%, 61%)"
        }
      },
      inset: {
        "1/5": "20%",
        "1/6": "15%",
        "1/10": "10%",
        "1/20": "5%",
        "5/100": "5%",
        "10/100": "10%",
        "15/100": "15%",
        "20/100": "20%",
        "25/100": "25%",
        "30/100": "30%",
        "35/100": "35%",
        "40/100": "40%",
        "45/100": "45%",
        "50/100": "50%",
        "55/100": "55%",
        "60/100": "60%",
        "65/100": "65%",
        "70/100": "70%",
        "75/100": "75%",
        "80/100": "80%",
        "85/100": "85%",
        "90/100": "90%",
        "95/100": "95%",
        "100/100": "100%"
      },
      rotate: {
        "30": "30deg",
        "-30": "-30deg",
        "135": "135deg",
        "-135": "-135deg"
      }
    },
    screens: {
      mobile: {
        min: "0px",
        max: "640px "
      },

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px"
      // => @media (min-width: 1280px) { ... }
    }
  },

  // mode: 'jit',

  purge: {
    content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    safelist: [
      'bg-blueprint',
      'text-blueprint',
      'bg-graphite',
      'text-graphite',
      'bg-leather',
      'text-leather',
      'bg-paper',
      'text-paper',
      'bg-paper-light',
      'text-paper-light',
      'bg-mint',
      'text-mint',
      'top-5/100','right-5/100','bottom-5/100','left-5/100',
      'top-10/100','right-10/100','bottom-10/100','left-10/100',
      'top-15/100','right-15/100','bottom-15/100','left-15/100',
      'top-20/100','right-20/100','bottom-20/100','left-20/100',
      'top-25/100','right-25/100','bottom-25/100','left-25/100',
      'top-30/100','right-30/100','bottom-30/100','left-30/100',
      'top-35/100','right-35/100','bottom-35/100','left-35/100',
      'top-40/100','right-40/100','bottom-40/100','left-40/100',
      'top-45/100','right-45/100','bottom-45/100','left-45/100',
      'top-50/100','right-50/100','bottom-50/100','left-50/100',
      'top-55/100','right-55/100','bottom-55/100','left-55/100',
      'top-60/100','right-60/100','bottom-60/100','left-60/100',
      'top-65/100','right-65/100','bottom-65/100','left-65/100',
      'top-70/100','right-70/100','bottom-70/100','left-70/100',
      'top-75/100','right-75/100','bottom-75/100','left-75/100',
      'top-80/100','right-80/100','bottom-80/100','left-80/100',
      'top-85/100','right-85/100','bottom-85/100','left-85/100',
      'top-90/100','right-90/100','bottom-90/100','left-90/100',
      'top-95/100','right-95/100','bottom-95/100','left-95/100',
      'top-100/100','right-100/100','bottom-100/100','left-100/100',
    ]
  }

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
};
