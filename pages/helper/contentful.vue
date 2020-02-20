<template>
  <div>
    <div class="">
      hello
    </div>
    <!-- render data of the person -->
    <h1 v-if="person">
      {{ person }}
    </h1>
    <!-- render blog posts -->
    <ul v-if="assets" class="d-flex flex-wrap">
      <li v-for="asset in assets" class="col-1">
        <a :href="asset.fields.file.url" target="_blank">
          <img :src="asset.fields.file.url" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {

  data () {
    return {
      person: null,
      posts: null
    }
  },
  // `env` is available in the context object
  asyncData ({ env }) {
    console.log('asyncData')
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
