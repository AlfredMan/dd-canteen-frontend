<template>
  <div class="mt-5 mb-5">

    <div class="container my-3 mt-4 content">
      <div class="row d-flex justify-content-start">
        <div class="col-6">
          <h1 class="strong mt-2 mb-2 h2" v-if="entry.fields.title">
            {{entry.fields.title}}
          </h1>
          <h3 class="mb-5" v-if="entry.fields.date">
            {{getDataTime(entry.fields.date, entry.fields.endDate)}}
          </h3>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-10">
          <img :src="entry.fields.thumbnailImage.fields.file.url" alt="">
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-6">
          <div class="my-5">
            <div class="d-flex mt-3">
              <h6 class="text-uppercase my-0 mr-2" v-if="entry.fields.contentType">
                {{entry.fields.contentType}}
              </h6>
              <h6 class="text-uppercase my-0 mr-3" v-if="entry.fields.author">
                by {{entry.fields.author[0].fields.name}}
              </h6>
              <h6 class="text-uppercase my-0 mr-3" v-if="entry.fields.author">

              </h6>
            </div>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center" v-if="entry.fields.richText">
          <template v-for="content in entry.fields.richText.content">
            <h4 class="col-6" v-if="content.nodeType == 'paragraph'">
              <span v-for="p_content in content.content">
                <span v-if="p_content.nodeType">
                  {{p_content.value}}
                </span>
              </span>

            </h4>
            <h3 class="col-6" v-if="content.nodeType == 'heading-3'">
              {{content.content[0].value}}
            </h3>
            <a class="col-6" v-if="content.nodeType == 'hyperlink'">
              {{content.content[0].value}}
            </a>
            <div class="col-12 my-5" v-if="content.nodeType == 'embedded-entry-block'">
              <div class="row justify-content-center px-4" v-if="content.data.target.sys.contentType.sys.id == 'gallery'">
                <div class="col-4" v-for="image in content.data.target.fields.image">
                  <img :src="image.fields.file.url" alt="">
                </div>
              </div>
              <div class="row justify-content-center px-4" v-if="content.data.target.sys.contentType.sys.id == 'embed'">
                <div class="col-6">
                  <div class="" v-html="content.data.target.fields.embedCode.content[0].content[0].value">

                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              &nbsp;
            </div>
          </template>
      </div>
    </div>
    <!-- render data of the person -->
    <!-- <h1 v-if="person">
      {{ person }}
    </h1> -->
    <!-- <pre>
      {{entries}}
    </pre> -->
    <!-- render blog posts -->
    <!-- <ul v-if="entries" class="d-flex flex-wrap">
      <li v-for="entry in entries" class="col-2">
        <a :href="`${entry.fields.file.url}?w=2000&h=2000&fm=jpg&q=80`" target="_blank">
          <img :src="`${entry.fields.file.url}?w=200&h=200&fm=jpg&q=70`" alt="">
          {{ entry.fields.title }}
        </a>
      </li>
    </ul> -->
  </div>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {

  data () {
    return {
      entries: null,
      tags: null
    }
  },

  middleware ({ store, redirect }) {
    // if (process.env.NODE_ENV!=='development') {
      // return redirect('/')
    // }
  },
  // `env` is available in the context object
  asyncData ({ route }) {
    return Promise.all([
      // fetch the owner of the blog
      // client.getEntries({
      //   'sys.id': env.CTF_PERSON_ID
      // }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        'content_type': 'news',
        order: '-sys.createdAt'
      }),

      client.getEntries({
        'content_type': 'news',
        'fields.slug': route.params.id
      })

      // client.getAssets()

    ]).then(([entries, entry]) => {
    // ]).then(([assets]) => {
      // return data that should be available
      // in the template

      return {
        // person: entries.items[0],
        entries: entries.items,
        entry: entry.items[0]
        // assets: _.filter(assets.items, (a)=>(a.fields.title.indexOf('KDN') >= 0 || a.fields.title.indexOf('-Architect') >= 0 || a.fields.title.indexOf('Building') >= 0 || a.fields.title.indexOf('Laneway') >= 0))
        // assets: assets.items
      }
    }).catch(console.error)
  },

  methods: {
    getDataTime (date, endDate) {
      // let default = '12:00:00'
      let format = 'D MMM'
      if (date && !endDate) {
        return `${moment(date).format(format)}`
      } else
      if (!date && endDate) {
        return `${moment(endDate).format(format)}`
      } else
      if (date && endDate) {
        return `${moment(date).format(format)}—${moment(endDate).format(format)}`
      } else {
        return ``
      }
    }
  }
}
</script>

<style media="screen" scoped lang="sass">
  img
    display: block
    width: 100%
  ul
    li
      list-style: none
</style>
