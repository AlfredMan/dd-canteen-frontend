import Vue from 'vue'
// import _ from 'lodash'

// node.js, "classic" way:
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
// import moment from 'moment'

const markdown = (markdownInput) => {
  const result = md.render(markdownInput)
  return result
}

Vue.mixin({
  methods: {
    markdown (elem) {
      return markdown(elem)
    }
  }
})
