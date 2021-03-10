<template>
  <section class="block-text"
  v-if="block && block.fields"
  >
    <div class="col-12 col-md-6 my-4 -px-lg-5" v-if="content && content.sys && content.sys.contentType && content.sys.contentType.sys.id === 'text'" v-html="getRichText(content.fields.text)">
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
