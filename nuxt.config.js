import path from 'path'
import fs from 'fs'
import _ from 'lodash'
import { createClient } from './plugins/contentful.js'

// console.log('process.env.target', process.env.target)

export default {

  env: {
    target: process.env.NUXT_TARGET || 'static'
  },
  // mode: 'universal',
  // mode: 'spa',
  // target: process.env.target,
  // target: 'static',
  // target: 'server',
  // target: 'static',


  // purgeCSS: {
  //   enabled: false
  // },

  server: {
    https: {
      key: process.env.NODE_ENV === 'production' ? undefined : fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
      cert: process.env.NODE_ENV === 'production' ? undefined : fs.readFileSync(path.resolve(__dirname, 'localhost.pem'))
    }
  },

  head: {
    titleTemplate: 'Design District | %s',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },

      { property: 'og:site_name', content: 'https://designdistrict.co.uk' },
      { property: 'og:url', content: 'https://designdistrict.co.uk' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Welcome to London\'s new Design District - Launching Spring 2021' },
      { property: 'og:description', content: 'London\'s permanent home for the creative industries — Rent a desk or an entire building and find a new way of working. With affordable spaces, comprehensive facilities and flexible leases, everything is designed to help creative Londoners thrive.' },
      // { property: 'og:image', content: 'https://designdistrict.co.uk/DD_Banner.jpg' },

      { name: 'twitter:card', content: 'Design District' },
      { name: 'twitter:site', content: '@Design_District' },
      { name: 'twitter:creator', content: '@Design_District' },
      { name: 'twitter:title', content: 'Welcome to London\'s new Design District - Launching Spring 2021' },
      { name: 'twitter:description', content: 'London\'s permanent home for the creative industries — Rent a desk or an entire building and find a new way of working. With affordable spaces, comprehensive facilities and flexible leases, everything is designed to help creative Londoners thrive.' },
      // { name: 'twitter:image', content: 'https://designdistrict.co.uk/DD_Banner_2.png" ' },

      { name: 'p:domain_verify', content: 'b5004249d0531cbc68a424d426ec9a6a' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
      // { rel: 'dns-prefetch', href: 'https://api.designdistrict.co.uk' },
      { rel: 'preconnect', href: 'https://images.ctfassets.net' }
    ]
  },

  loading: {
    color: '#00C48D'
  },

  manifest: {
    name: 'Design District',
    short_name: 'Design District',
    description: 'Greenwich Peninsula, London',
    theme_color: '#2F495E',
    start_url: '/'
  },

  styleResources: {
    css: [
      './node_modules/normalize.css/normalize.css',
      '~/assets/fonts/fonts.css'
    ],
    scss: [
      '~/assets/styles/custom.scss',
      '~/node_modules/bootstrap/scss/_functions.scss',
      '~/node_modules/bootstrap/scss/_variables.scss',
      '~/node_modules/bootstrap/scss/_mixins.scss',
      '~/assets/styles/tailwind.scss'
      // '~/assets/styles/custom.scss',
      // './node_modules/bootstrap/scss/bootstrap.scss',
      // '~/assets/styles/reset.scss',
      // '~/assets/styles/typography.scss',
      // '~/assets/styles/utility.scss',
      // '~/assets/styles/blocks.scss',
      // '~/assets/styles/transitions.scss',
      // '~/assets/styles/development.scss',
      // '~/assets/styles/app.scss'
    ]
  },

  axios: {
  },

  plugins: [
    {
      src: '~/plugins/filters'
    },
    {
      src: '~/plugins/vue-lazysizes.js'
    },
    // use gtag module instead
    // {
    //   src: '~/plugins/ga.js'
    // },
    {
      src: '~/plugins/gsap.js',
      mode: 'client'
    },
    {
      src: '~/plugins/global.js'
    },
    {
      src: '~/plugins/globalUtilities.js'
    },
    {
      src: '~/plugins/route.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-waypoint.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-flickity.js',
      mode: 'client'
    },
    {
      src: '~/plugins/nuxt-client-init.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-slider-component.js',
      mode: 'client'
    },
    // {
    //   src: '~/plugins/preview.client.js',
    //   mode: 'client'
    // },
    // {
    //   src: '~/plugins/vue-range-slider.js',
    //   mode: 'client'
    // }
  ],

  render: {
    http2: {
      push: true
    },
    static: {
      maxAge: '1d',
      setHeaders (res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', `public, max-age=${15 * 60}`)
        }
      }
    }
  },

  components: false,


  // https://www.voorhoede.nl/en/blog/10x-faster-nuxt-builds-on-netlify/


  build: {
    // analyze: false,
    // extractCSS: process.env.NODE_ENV === 'production',
    // parallel: true,
    // cache: true,
    // optimizeCSS: process.env.NODE_ENV === 'production',
    transpile: [
      'three'
    ],
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       styles: {
    //         name: 'styles',
    //         test: /\.(css|vue)$/,
    //         chunks: 'all',
    //         enforce: true
    //       }
    //     }
    //   }
    // },
    // loaders: {
    //   cssModules: {
    //     modules: true,
    //     localIdentName: '[local]_[hash:base64:5]'
    //     // modules: {
    //     //   localIdentName: '[local]--[Frida]_[hash:base64:4]',
    //     //   modules: true,
    //     //   hashPrefix: 'my-hash'
    //     // }
    //   }
    // },
    terser: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    },
    babel: {
      compact: false
    },

    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        // minifyCSS: true,
        minifyCSS: false,
        // minifyJS: true,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    }
    // extend (config, { isDev, isClient, loaders: { vue } }) {
    //   if (isClient) {
    //     vue.transformAssetUrls.img = ['data-src', 'src']
    //     vue.transformAssetUrls.source = ['data-srcset', 'srcset']
    //   }
    // }
  },

  buildModules: [
    // '@nuxtjs/pwa',
    '@nuxtjs/axios',
    'nuxt-purgecss',
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-gtag',
    '@nuxtjs/style-resources'
  ],

  'google-gtag': {
    id: 'GTM-5PF87Z8',
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false // might be necessary to avoid duplicated page track on page reload
    },
    debug: false, // enable to track in dev mode
    disableAutoPageTrack: false // disable if you don't want to track each page route with router.afterEach(...).
    // additionalAccounts: [{
    //   id: 'AW-XXXX-XX', // required if you are adding additional accounts
    //   config: {
    //     send_page_view: false // optional configurations
    //   }
    // }]
  },

  sitemap: {
    hostname: 'https://designdistrict.co.uk/',
    gzip: true,
    exclude: [
      '/helper/**',
      '/helper',
      '/privacy-notice',
      '/terms-and-conditions',
      '/cookies-policy',
      '/success',
      '/map',
      '/item',
      '/item/**',
      '/home'
    ],
    // routes: [
    //   '/architecture/hnna',
    //   '/architecture/6a-architects',
    //   '/architecture/adam-khan-architects',
    //   '/architecture/architecture-00',
    //   '/architecture/barozzi-veiga',
    //   '/architecture/david-kohn-architects',
    //   '/architecture/mole-architects',
    //   '/architecture/schulze-grassov',
    //   '/architecture/selgascano'
    // ],
    routes () {
      // const client = createClient()
      // return Promise.all([
      //   client.getEntries({
      //     'content_type': 'news'
      //   })
      // ]).then(([entries]) => {
      //   return _.map(entries.items, entry => `/journal/${entry.fields.slug}`)
      // }).catch(console.error)
      const client = createClient()
      return Promise.all([
        client.getEntries({
          'content_type': 'news'
        }),
        client.getEntries({
          'content_type': 'pages'
        }),
        client.getEntries({
          'content_type': 'buildings'
        }),
        client.getEntries({
          'content_type': 'architect'
        })
      ]).then(([journal, pages, buildings, architect]) => {
        const journalRoutes = _.map(journal.items, entry => `/journal/${entry.fields.slug}`)
        const pagesRoutes = _.map(pages.items, entry => `/${entry.fields.slug}`)
        const buildingsRoutes = _.map(buildings.items, entry => `/workspace/building/${entry.fields.slug}`)
        const architectRoutes = _.map(architect.items, entry => `/architecture/${entry.fields.slug}`)
        return [...journalRoutes, ...pagesRoutes, ...buildingsRoutes, ...architectRoutes]
      }).catch(console.error)
    }
  },

  /* Page Transitions */
  layoutTransition: {
    name: 'layout',
    // name: 'default',
    mode: ''
  },
  /* Page Transitions */
  pageTransition: {
    // name: 'page',
    name: 'default',
    mode: ''
  },

  router: {
    middleware: 'transition'
    // extendRoutes (routes, resolve) {
    //   routes.push({
    //     beforeEnter: (to, from, next) => {
    //       console.log('log from router')
    //       console.log(to)
    //       next()
    //     }
    //   })
    // }
  },

  // generate: {
  //   interval: 100,
  //   concurrency: 100,
  //   devtools: true,
  //   routes () {
  //     const client = createClient()
  //     return Promise.all([
  //       client.getEntries({
  //         'content_type': 'news'
  //       })
  //     ]).then(([entries]) => {
  //       return _.map(entries.items, entry => `/journal/${entry.fields.slug}`)
  //     }).catch(console.error)
  //   },
  //   exclude: [
  //     /^(?=.*\bhelper\b).*$/
  //   ]
  // },

  generate: {
    interval: 200,
    concurrency: 20,
    devtools: true,
    routes () {
      // const routes = [
      //   '/architecture/hnna',
      //   '/architecture/6a-architects',
      //   '/architecture/adam-khan-architects',
      //   '/architecture/architecture-00',
      //   '/architecture/barozzi-veiga',
      //   '/architecture/david-kohn-architects',
      //   '/architecture/mole-architects',
      //   '/architecture/schulze-grassov',
      //   '/architecture/selgascano'
      // ]

      const client = createClient()
      return Promise.all([
        client.getEntries({
          'content_type': 'news'
        }),
        client.getEntries({
          'content_type': 'pages'
        }),
        client.getEntries({
          'content_type': 'buildings'
        }),
        client.getEntries({
          'content_type': 'architect'
        })
      ]).then(([journal, pages, buildings, architect]) => {
        const journalRoutes = _.map(journal.items, entry => `/journal/${entry.fields.slug}`)
        const pagesRoutes = _.map(pages.items, entry => `/${entry.fields.slug}`)
        const buildingsRoutes = _.map(buildings.items, entry => `/workspace/building/${entry.fields.slug}`)
        const architectRoutes = _.map(architect.items, entry => `/architecture/${entry.fields.slug}`)
        return [...journalRoutes, ...pagesRoutes, ...buildingsRoutes, ...architectRoutes]
      }).catch(console.error)
    },
    exclude: [
      /^(?=.*\bhelper|home\b).*$/,
      /^\/pages_archive/,
      '/workspace/filter',
      '/workspace/enquire',
      '/home',
      '/pages_archive/**/*'
    ]
  },
  //
  // router: {
  //   middleware: ['redirect']
  // }

  // server: {
  //   port: 3333, // default: 3000
  //   // host: '0.0.0.0' // default: localhost
  // }
}
