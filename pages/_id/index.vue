<template>
  <div class="page-component">
    <AppPage :entry="entry"/>
  </div>
</template>

<script>
import _ from 'lodash'
import AppPage from '~/components/AppPage'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  name: 'page',

  components: {
    AppPage
  },

  head () {
    return {
      title: this.seoTitle,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.seoDescription },
        { property: 'og:image', content: this.seoImage },
        { property: 'og:url', content: `https://designdistrict.co.uk/${this.entry.fields.slug}` },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.seoTitle },
        { property: 'og:description', content: this.seoDescription },

        { name: 'twitter:description', content: this.seoDescription },
        { name: 'twitter:image', content: this.seoImage },
      ]
    }
  },

  data () {
    return {
      entry: null
    }
  },

  computed: {
    seoTitle () {
      return this.entry && this.entry.fields.metaData ? this.entry.fields.metaData.fields.seoTitle : this.seoDefault.title
    },
    seoDescription () {
      return this.entry && this.entry.fields.metaData ? this.entry.fields.metaData.fields.seoDescription : this.seoDefault.description
    },
    seoImage () {
      return this.entry && this.entry.fields.metaData ? `${this.entry.fields.metaData.fields.seoImage.fields.file.url}?w=2000&fm=jpg&q=80` : this.seoDefault.image
    },
    seoDefault () {
      return this.$store.state.seoDefault
    },
  },

  asyncData ({ route, store }) {
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
