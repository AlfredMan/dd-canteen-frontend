<template lang="html">
  <main class="entry" v-if="entry" :key="entry.uid">
    <!-- <header>
      <entry-header :entry="entry"></entry-header>
    </header> -->
    <article class="">
      <entry-content-blocks :entry="entry"></entry-content-blocks>
    </article>
  </main>
</template>

<script>
import _ from 'lodash'
import EntryHeader from '~/components/entry/EntryHeader';
import EntryContentBlocks from '~/components/entry/EntryContentBlocks';

import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  data () {
    return {
      entry: {}
    }
  },

  head () {
    return {
      title: this.entry.fields.title,
      // meta: [
      //   { hid: 'description', name: 'description', content: this.entry.fields.seoDescription },
      // ]
    }
  },

  data () {
    return {
      entry: null,
    }
  },

  watch: {
    entry (newVal, oldVal) {
      // console.log('watch entry _page/index:', newVal, oldVal)
    },
    '$route' (newVal, oldVal) {
      // console.log('watch $route _page/index:', newVal, oldVal)
    }
  },

  updated () {
    console.log(`updated _page/index path = ${this.path}`)
    // this.apolloQuery()
  },

  components: {
    // EnquireForm,
    // NewsletterForm,
    EntryHeader,
    EntryContentBlocks,
  },

  computed: {
    title () {
      return this.entry ? this.entry.title : ''
    },
    description () {
      return this.entry ? this.entry.imprint : ''
    },
  },

  created () {
  },

  methods: {
  },

  asyncData ({ route, store }) {
    return Promise.all([
      client.getEntries({
        'content_type': 'page',
        'fields.slug': route.params.id
      })
    ]).then(([entry]) => {
      // console.log('contentful entry:', entry)
      return {
        entry: entry.item
      }
    }).catch(console.error)
  }
}
</script>

<style lang="scss">
</style>
