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
  name: 'index',

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
        { property: 'og:url', content: `https://designdistrict.co.uk` },
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
    seoDefault () {
      return this.$store.state.seoDefault
    },
    seoTitle () {
      return this.entry && this.entry.fields.metaData ? this.entry.fields.metaData.fields.seoTitle : this.seoDefault.title
    },
    seoDescription () {
      return this.entry && this.entry.fields.metaData ? this.entry.fields.metaData.fields.seoDescription : this.seoDefault.description
    },
    seoImage () {
      return this.entry && this.entry.fields.metaData ? `${this.entry.fields.metaData.fields.seoImage.fields.file.url}?w=2000&fm=jpg&q=80` : this.seoDefault.image
    }
  },

  asyncData ({ route, store }) {
    return Promise.all([
      client.getEntries({
        'content_type': 'pages',
        'fields.slug': 'home',
        'include': 3
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
