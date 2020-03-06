const config = require('./.contentful.json')

export default {
  head: {
    titleTemplate: 'Design District | %s',
    meta: [
      { property: 'og:image', content: 'https://designdistrict.co.uk/DD_Banner.jpg' },
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
      { name: 'twitter:image', content: 'https://designdistrict.co.uk/DD_Banner.jpg" ' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/assets/images/icon-120.png' }
      // { rel: 'dns-prefetch', href: 'https://api.designdistrict.co.uk' },
      // { rel: 'preconnect', href: 'https://api.designdistrict.co.uk' }
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

  devModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  axios: {
  },

  plugins: [
    '~/plugins/filters',
    '~/plugins/vue-lazysizes.js',
    '~/plugins/ga.js'
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
    extend (config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    }
  },

  modules: [
    '@nuxtjs/axios'
  ]
  //
  // router: {
  //   middleware: ['redirect']
  // }

  // server: {
  //   port: 3333, // default: 3000
  //   host: '0.0.0.0' // default: localhost
  // }
}
