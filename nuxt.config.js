import _ from 'lodash'
import { createClient } from './plugins/contentful.js'

export default {

  mode: 'universal',

  head: {
    titleTemplate: 'Design District | %s',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },

      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@design_district' },

      { property: 'og:site_name', content: 'https://designdistrict.co.uk' },
      { property: 'og:url', content: 'https://designdistrict.co.uk' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Design District' },
      { property: 'og:description', content: 'A new permanent home for the creative industries. With purpose-designed workspaces, workshops, accessible rents and flexible leases. It comprises 16 buildings designed by eight architects, set in the heart of Greenwich Peninsula. Each is tailored to the needs of creative businesses to help them thrive.' },
      { property: 'og:image', content: 'https://designdistrict.co.uk/DD_Banner.jpg' },

      { name: 'twitter:card', content: 'Design District' },
      { name: 'twitter:site', content: '@Design_District' },
      { name: 'twitter:creator', content: '@Design_District' },
      { name: 'twitter:title', content: 'Design District' },
      { name: 'twitter:description', content: 'A new permanent home for the creative industries. With purpose-designed workspaces, workshops, accessible rents and flexible leases. It comprises 16 buildings designed by eight architects, set in the heart of Greenwich Peninsula. Each is tailored to the needs of creative businesses to help them thrive.' },
      { name: 'twitter:image', content: 'https://designdistrict.co.uk/DD_Banner.jpg" ' },

      { name: 'p:domain_verify', content: 'b5004249d0531cbc68a424d426ec9a6a' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/assets/images/icon-120.png' },
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

  axios: {
  },

  plugins: [
    '~/plugins/filters',
    '~/plugins/vue-lazysizes.js',
    // '~/plugins/ga.js',
    '~/plugins/global.js'
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

  build: {
    analyze: true,
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    loaders: {
      cssModules: {
        modules: true,
        localIdentName: '[local]_[hash:base64:5]'
        // modules: {
        //   localIdentName: '[local]--[Frida]_[hash:base64:4]',
        //   modules: true,
        //   hashPrefix: 'my-hash'
        // }
      }
    },
    terser: {
      terserOptions: {
        compress: {
          drop_console: true
        }
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
    'nuxt-purgecss'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-gtag'
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
      '/privacy-policy',
      '/terms-and-conditions',
      '/cookies-policy',
      '/success',
      '/map',
      '/item',
      '/item/**',
      '/home'
    ],
    routes: [
      '/architecture/hnna',
      '/architecture/6a-architects',
      '/architecture/adam-khan-architects',
      '/architecture/architecture-00',
      '/architecture/barozzi-veiga',
      '/architecture/david-kohn-architects',
      '/architecture/mole-architects',
      '/architecture/schulze-grassov',
      '/architecture/selgascano'
    ]
  },

  generate: {
    interval: 100,
    concurrency: 100,
    devtools: true,
    routes () {
      const routes = [
        '/architecture/hnna',
        '/architecture/6a-architects',
        '/architecture/adam-khan-architects',
        '/architecture/architecture-00',
        '/architecture/barozzi-veiga',
        '/architecture/david-kohn-architects',
        '/architecture/mole-architects',
        '/architecture/schulze-grassov',
        '/architecture/selgascano'
      ]
      const client = createClient()
      return Promise.all([
        client.getEntries({
          'content_type': 'news'
        })
      ]).then(([entries]) => {
        const journalRoutes = _.map(entries.items, entry => `/journal/${entry.fields.slug}`)
        return [...journalRoutes, ...routes]
      }).catch(console.error)
    },
    exclude: [
      /^(?=.*\bhelper|home\b).*$/
    ]
  }
  //
  // router: {
  //   middleware: ['redirect']
  // }

  // server: {
  //   port: 3333, // default: 3000
  //   host: '0.0.0.0' // default: localhost
  // }
}
