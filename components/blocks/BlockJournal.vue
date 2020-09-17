<template>
  <section class="block-journal">

    <div class="block-journal-header">
      <h2>Journal</h2>
    </div>

    <!--
    <div class="my-4">
      &nbsp;
    </div>
    -->

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
      return this.$store.state.journals
    }
  }
}
</script>

<style scoped lang="scss">
section {
  @apply px-6 py-16;
  @media (min-width: 1024px) {
    @apply pt-16 pb-4;
  }
}
.block-journal-header {
  @apply mb-12;
  @apply cap-max-w;

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
  @apply -mx-2;
  @apply cap-max-w;

  .block-journal--entries--entry {
    @apply px-2 mb-6;

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
