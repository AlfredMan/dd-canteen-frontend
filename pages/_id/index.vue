<template>
  <div class="page-component">
    <AppPage :entry="entry"/>
    <!-- <AppPopupCanteen v-if="$route.path=='/canteen'" /> -->
  </div>
</template>

<script>
import _ from 'lodash'
import AppPage from '~/components/AppPage'
// import AppPopupCanteen from '~/components/AppPopupCanteen'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  name: 'page',

  components: {
    AppPage,
    // AppPopupCanteen
  },

  // validate({ params, query }) {
  //   if (query.preview) {
  //     return true
  //   }
  // },

  head () {
    return {
      title: this.seoTitle,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.seoDescription },
        { property: 'og:image', content: this.seoImage },
        { property: 'og:url', content: `https://designdistrict.co.uk/${this.seoUrl}` },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.seoTitle },
        { property: 'og:description', content: this.seoDescription },

        { name: 'twitter:title', content: this.seoTitle },
        { name: 'twitter:description', content: this.seoDescription },
        { name: 'twitter:image', content: this.seoImage },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: this.iconUrl }
      ]
    }
  },

  data () {
    return {
      entry: null
    }
  },

  computed: {
    seoUrl () {
      return this.entry && this.entry.fields.slug ? this.entry.fields.slug : ''
    },
    seoTitle () {
      return this.entry && this.entry.fields.metaData && this.entry.fields.metaData.fields.seoTitle ? this.entry.fields.metaData.fields.seoTitle : this.seoDefault.title
    },
    seoDescription () {
      return this.entry && this.entry.fields.metaData && this.entry.fields.metaData.fields.seoDescription ? this.entry.fields.metaData.fields.seoDescription : this.seoDefault.description
    },
    seoImage () {
      return this.entry && this.entry.fields.metaData && this.entry.fields.metaData.fields.seoImage && this.entry.fields.metaData.fields.seoImage.fields.file ? `${this.entry.fields.metaData.fields.seoImage.fields.file.url}?w=2000&fm=jpg&q=80` : this.seoDefault.image
    },
    seoDefault () {
      return this.$store.state.seoDefault
    },
    iconUrl () {
      if (this.entry && this.entry.fields.slug && this.entry.fields.slug == 'space-to-create') {
        return '/icon-orange.png'
      }
      return '/icon.png'
    }
  },

  // watchQuery: ['preview'],

  mounted () {
    console.log('mounted ', this.$route.params.id)
  },

  // async fetch({ route }) {
  //   console.log('fetch  +++++++++++++++++')
  //   try {
  //      const response = await client.getEntries({
  //        'content_type': 'pages',
  //        'fields.slug': route.params.id,
  //        'include': 4
  //      })
  //      this.entry = response.items[0]
  //      console.log(this.entry)
  //    } catch (err) {
  //      console.error(err);
  //    }
  // },

  async asyncData ({ route, store }) {
    // console.log('asyncData +++++++++++++++++')
    return Promise.all([
      // fetch the owner of the blog
      // client.getEntries({
      //   'sys.id': env.CTF_PERSON_ID
      // }),
      // fetch all blog posts sorted by creation date

      client.getEntries({
        'content_type': 'pages',
        'fields.slug': route.params.id,
        'include': 4
      })

    ]).then(([entry]) => {
      // console.log('entry')
      return {
        entry: entry.items[0]
      }
    }).catch(console.error)
  },

  methods: {

    getRichText (document) {
      return documentToHtmlString(document, options);
    },

  }
}
</script>
