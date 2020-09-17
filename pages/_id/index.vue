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
      title: this.entry && this.entry.fields.seoTitle,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work

        // { hid: 'description', name: 'description', content: this.entry.fields.seoDescription },
        // { property: 'og:image', content: this.entry.fields.thumbnailImage && this.entry.fields.thumbnailImage.fields.file && this.entry.fields.thumbnailImage.fields.file.url },
        // { property: 'og:url', content: `https://designdistrict.co.uk/journal/${this.entry.fields.slug}` },
        // { property: 'og:type', content: 'website' },
        // { property: 'og:title', content: this.entry.fields.seoTitle },
        // { property: 'og:description', content: this.entry.fields.seoDescription },
        //
        // { name: 'twitter:description', content: this.entry.fields.seoDescription },
        // { name: 'twitter:image', content: 'https://designdistrict.co.uk/DD_Banner.jpg" ' },
      ]
    }
  },

  data () {
    return {
      entry: null
    }
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
