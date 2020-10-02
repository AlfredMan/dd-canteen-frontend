<template>
  <section class="BlockJournalFullList">

    <!-- <div class="container-fluid-" v-if="false">
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
    </div> -->

    <div class="block-journal--entries">
      <div
       class="block-journal--entries--entry"
      :class="{'w-full lg:w-full xl:w-6/12': index==0, 'w-full xl:w-3/12': index>0}" v-for="(entry, index) in entries" :key="entry.sys.id">
        <news-card class="news-card" :entry="entry"></news-card>
      </div>
    </div>

    <!-- <div class="container-fluid-">
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
    </div> -->

  </section>
</template>

<script>
import _ from 'lodash'
import { createClient } from '~/plugins/contentful.js'
import NewsCard from '~/components/NewsCard'

const client = createClient()

export default {

  head () {
    return {
      title: 'Journal',
    }
  },

  components: {
    NewsCard
  },

  computed: {
    entries () {
      // return _.sampleSize(studios, 4)
      // return studios
      return this.$store.state.journals
    }
  },

  // created () {
  //   this.$store.dispatch('updateNavigationTheme', { theme: 'light' })
  // },

  data () {
    return {
      tags: null
    }
  },

  middleware ({ store, redirect }) {
    // if (process.env.NODE_ENV!=='development') {
      // return redirect('/')
    // }
  },
  // `env` is available in the context object
  // asyncData ({ env }) {
  //   return Promise.all([
  //     client.getEntries({
  //       'content_type': 'news',
  //       order: '-sys.createdAt'
  //     }),
  //     client.getEntries({
  //       'content_type': 'tag',
  //       order: '-sys.createdAt'
  //     })
  //   ]).then(([entries, tags]) => {
  //     return {
  //       entries: _.orderBy(entries.items, ['fields.featured'], ['desc']),
  //       tags: tags.items
  //     }
  //   }).catch(console.error)
  // }
}
</script>

<style scoped lang="scss">
section {
  @apply px-0 py-8;
  @screen lg {
    @apply pt-16 pb-4;
    @apply cap-max-w px-4;
    overflow-x: inherit;
  }
}

img {
  display: block;
  width: 100%;
}
ul {
  li {
    list-style: none;
  }
}

.block-journal--entries {
  @apply flex flex-wrap items-stretch;
  @apply mt-12;
  // @apply cap-max-w px-4;

  @screen lg {
    @apply -mx-2;
  }

  .block-journal--entries--entry {
    @apply mb-6 px-3;

    @screen lg {
      @apply px-2
    }

    &:nth-of-type(2) {
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
