<template>
  <div class="mt-5 mb-5">
    <div class="container mt-5">

      <h1>News and Events</h1>

    </div>

    <div class="my-4">
      &nbsp;
    </div>

    <div class="container mt-5 mb-4 d-flex align-items-center" v-if="false">
      <h6 class="my-0 mr-2">Filter by topic</h6>
      <div class="btn chip btn-outline-dark btn-large" v-for="tag in tags">
        {{tag.fields.tagName}}
      </div>
    </div>

    <div class="container my-3 mt-4">
      <div class="row d-flex flex-wrap wrap">
        <div :class="{'col-8': index==0, 'col-4': index>0}" v-for="(entry, index) in entries" :key="entry.sys.id">
          <router-link :to="{ path: `/helper/news/${entry.fields.slug}` }">
            <img :src="entry.fields.thumbnailImage.fields.file.url" alt="">
            <div class="mt-4">
              <h3 class="strong mt-2" v-if="entry.fields.title">
                {{entry.fields.title}}
              </h3>
              <h4 class="" v-if="entry.fields.date">
                {{getDataTime(entry.fields.date, entry.fields.endDate)}}
              </h4>
              <div class="d-flex mt-3">
                <h6 class="text-uppercase my-0 mr-2" v-if="entry.fields.contentType">
                  {{entry.fields.contentType}}
                </h6>
                <h6 class="text-uppercase my-0 mr-3" v-if="entry.fields.author">
                  by {{entry.fields.author[0].fields.name}}
                </h6>
              </div>
              <div class="d-flex">
              </div>

            </div>
          </router-link>
        </div>
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
  asyncData ({ env }) {
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
        'content_type': 'tag',
        order: '-sys.createdAt'
      })

      // client.getAssets()

    ]).then(([entries, tags]) => {
    // ]).then(([assets]) => {
      // return data that should be available
      // in the template

      return {
        // person: entries.items[0],
        entries: entries.items,
        tags: tags.items
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
