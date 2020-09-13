<template>
  <div class="page-component">
    <div class="max-w-xl mx-auto mt-24">
      <pre>{{entry}}</pre>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { createClient } from '~/plugins/contentful.js'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const client = createClient()

const replaceLineBreak = (string) => {
  // return string
  return _.replace(string, /\n/g, "<br>")
}

const options = {
  renderMark: {
    [MARKS.BOLD]: text => `<b>${replaceLineBreak(text)}</b>`,
    [MARKS.ITALIC]: text => `<em>${replaceLineBreak(text)}</em>`,
    [MARKS.UNDERLINE]: text => `<u>${replaceLineBreak(text)}</u>`
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) =>
      `<p>${next(node.content)}</p>`,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, next) => {
      let origin = 'https://designdistrict.co.uk'
      if (process.client) {
        origin = window ? window.location.origin : 'https://designdistrict.co.uk'
      }
      return `<a href="${node.data.uri}"${node.data.uri.startsWith(origin) ? '' : ' target="_blank"'}>${next(node.content)}</a>`;
    }
  },
};

export default {
  name: 'index',

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
        'fields.slug': route.params.id
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
