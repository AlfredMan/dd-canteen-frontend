<template>
  <div class="mt-5 mb-5">

    <div class="container-fluid- cap-max-w">
      <div class="px-0 -px-md-4 py-4 py-5 py-md-5">
        <div class="container-fluid">
          <h1>Journal</h1>
        </div>
      </div>
    </div>

    <!--
    <div class="my-4">
      &nbsp;
    </div>
  -->

    <div class="container-fluid-"  v-if="false">
      <div class="px-0 px-md-4 py-4 py-5 py-md-5">
        <div class="container-fluid d-flex-align-items-center">
          <h5 class="my-0 mr-2">Filter by topic</h5><br>
          <div class="tags">
            <div class="tag" v-for="tag in tags">
              {{tag.fields.tagName}}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid-">
      <div class="px-0 px-md-4 py-4 py-5 py-md-5">
        <div class="container-fluid my-3 mt-4">
          <div class="row d-flex flex-wrap wrap journal--entries">
            <div
            :class="{'col-12 col-md-6': index==0, 'col-12 col-md-3': index>0}" v-for="(entry, index) in entries" :key="entry.sys.id"
            class="journal--entries--entry mb-5">
              <news-card class="news-card" :entry="entry"></news-card>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import _ from 'lodash'
import { createClient } from '~/plugins/contentful.js'
import NewsCard from '~/components/NewsCard'

const client = createClient()

export default {

  // head () {
  //   return {
  //     title: 'Journal',
  //   }
  // },

  components: {
    NewsCard
  },

  created () {
    this.$store.dispatch('updateNavigationTheme', { theme: 'light' })
  },

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
      client.getEntries({
        'content_type': 'news',
        order: '-sys.createdAt'
      }),
      client.getEntries({
        'content_type': 'tag',
        order: '-sys.createdAt'
      })
    ]).then(([entries, tags]) => {
      return {
        entries: _.orderBy(entries.items, ['fields.featured'], ['desc']),
        tags: tags.items
      }
    }).catch(console.error)
  }
}
</script>

<style media="screen" scoped lang="scss">
img {
  display: block;
  width: 100%;
}
ul {
  li {
    list-style: none;
  }
}

.journal--entries {
  @apply flex flex-wrap items-stretch;
  @apply mt-12;
  @apply -mx-2;
  @apply cap-max-w;

  .journal--entries--entry {
    @apply px-2 mb-6;

    &:nth-of-type(2),
    &:nth-of-type(3) {
      .news-card {
        @screen lg {
          @apply sticky;
          top: 3rem;
        }
      }
    }

    h4 {
      @apply uppercase mt-4 mb-2 font-medium;
    }
    p {
      @apply my-2 font-medium;
    }
  }
}
</style>
