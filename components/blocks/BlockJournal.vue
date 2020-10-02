<template>
  <section class="block-journal">
    <div class="block-journal-header">
      <div class="flex items-baseline">
        <h2>Journal</h2>
        <router-link :to="{ path:'/journal' }"
        class="inline-block ml-4 text-green text-lg"
        >
          View all &rarr;
        </router-link>
      </div>
    </div>
    <div class="block-journal--entries">
      <div
       class="block-journal--entries--entry"
      :class="{'w-full lg:w-full xl:w-8/12': index==0, 'w-full xl:w-4/12': index>0}" v-for="(entry, index) in entries" :key="entry.sys.id">
        <news-card class="news-card" :entry="entry"></news-card>
      </div>
    </div>
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

  // data () {
  //   return {
  //     entries: null
  //   }
  // },

  computed: {
    entries () {
      return _.take(this.$store.state.journals, 5)
    }
  }
}
</script>

<style scoped lang="scss">
section {
  @apply px-4 py-8;
  @media (min-width: 1024px) {
    @apply pt-16 pb-4;
    @apply cap-max-w px-4;
    overflow-x: inherit;
  }
}
.block-journal-header {
  @apply mb-12;
  // @apply cap-max-w px-4;

  h2 {
    @apply max-w-2xl
  }
  h4 {
    @apply max-w-3xl
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
    @apply mb-6;

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
</style>
