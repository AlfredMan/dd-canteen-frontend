<template>
  <div>
    <!-- render data of the person -->
    <!-- <h1 v-if="person">
      {{ person }}
    </h1> -->
    <!-- render blog posts -->
    <ul v-if="assets" class="d-flex flex-wrap">
      <li v-for="asset in assets" class="col-2">
        <a :href="`${asset.fields.file.url}?w=2000&h=2000&fm=jpg&q=80`" target="_blank">
          <img :src="`${asset.fields.file.url}?w=200&h=200&fm=jpg&q=70`" alt="">
          {{ asset.fields.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {

  data () {
    return {
      person: null,
      posts: null
    }
  },

  middleware ({ store, redirect }) {
    // if (process.env.NODE_ENV!=='development') {
      return redirect('/')
    // }
  },
  // `env` is available in the context object
  asyncData ({ env }) {
    return Promise.all([
      // fetch the owner of the blog
      // client.getEntries({
      //   'sys.id': env.CTF_PERSON_ID
      // }),
      // // fetch all blog posts sorted by creation date
      // client.getEntries({
      //   'content_type': env.CTF_POST_TYPE_ID,
      //   order: '-sys.createdAt'
      // })

      client.getAssets()

    // ]).then(([entries, posts]) => {
    ]).then(([assets]) => {
      // return data that should be available
      // in the template
      return {
        // person: entries.items[0],
        // posts: posts.items
        // assets: _.filter(assets.items, (a)=>(a.fields.title.indexOf('KDN') >= 0 || a.fields.title.indexOf('-Architect') >= 0 || a.fields.title.indexOf('Building') >= 0 || a.fields.title.indexOf('Laneway') >= 0))
        assets: assets.items
      }
    }).catch(console.error)
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
