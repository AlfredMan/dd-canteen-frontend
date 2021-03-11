<template>
  <div class="rich-text"
  v-if="richtext"
  v-html="getRichText(richtext)"
  >
</div>
</template>

<script>
import _ from 'lodash'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
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
    // [BLOCKS.EMBEDDED_ASSET]: (node, next) =>
    //   `<p>${next(node.content)}</p>`,
    [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
      `<img src="${fields.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`
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
  props: ['richtext'],
  computed: {
  },

  methods: {
    getRichText (document) {
      console.log(document)
      return documentToHtmlString(document, options);
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
