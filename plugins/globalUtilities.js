import Vue from 'vue'
// import _ from 'lodash'

// node.js, "classic" way:
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt({
  breaks: true
})
// import moment from 'moment'

const markdown = (markdownInput, options) => {
  if (!!options&&options.renderInline) {
    return md.renderInline(markdownInput)  
  }
  return md.render(markdownInput)
}

Vue.mixin({
  methods: {
    markdown
  }
})
