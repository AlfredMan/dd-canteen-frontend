<template>
  <section class="block-text"
  v-if="block && block.fields"
  >
    <div class="mx-auto px-3 my-16 w-full max-w-screen-sm rich-text" v-if="block && block.sys && block.sys.contentType && block.sys.contentType.sys.id === 'blockText'" v-html="getRichText(block.fields.richText)">
    </div>
  </section>
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
  props: ['block'],

  mounted () {
    // console.log(this.block)
  },

  computed: {
  },

  methods: {
    getRichText (document) {
      return documentToHtmlString(document, options);
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
