export default {
  head: {
    titleTemplate: 'Design District | %s',
    meta: [
      { property: 'og:image', content: 'https://designdistrict.co.uk/wp-content/themes/dd/assets/images/DD_Banner.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@design_district' },

      { property: 'og:site_name', content: 'https://designdistrict.co.uk' },
      { property: 'og:url', content: 'https://designdistrict.co.uk' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Design District' },
      { property: 'og:description', content: 'Greenwich Peninsula, London' },
      { property: 'og:image', content: 'https://designdistrict.co.uk/wp-content/themes/dd/assets/images/DD_Banner.jpg' },

      { name: 'twitter:card', content: 'Design District' },
      { name: 'twitter:site', content: '@thepeninsulist' },
      { name: 'twitter:creator', content: '@thepeninsulist' },
      { name: 'twitter:title', content: 'Design District' },
      { name: 'twitter:description', content: 'Greenwich Peninsula, London' },
      { name: 'twitter:image', content: 'https://designdistrict.co.uk/wp-content/themes/dd/assets/images/DD_Banner.jpg" ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: 'https://api.designdistrict.co.uk' },
      { rel: 'preconnect', href: 'https://api.designdistrict.co.uk' }
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
    baseURL: 'https://api.designdistrict.co.uk'
  },

  plugins: [
    '~/plugins/filters'
  ],

  render: {
    http2: {
      push: true
    },
    static: {
      maxAge: '1y',
      setHeaders (res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', `public, max-age=${15 * 60}`)
        }
      }
    }
  }
}
