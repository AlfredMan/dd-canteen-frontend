<template>
  <section class="BlockJournalFullList">
    <div class="block-journal--entries">
      <div
       class="block-journal--entries--entry"
      :class="{'w-full lg:w-full xl:w-6/12': index==0, 'w-full xl:w-3/12': index>0}" v-for="(entry, index) in entries" :key="entry.sys.id">
        <events-card v-if="type=='event'" class="news-card" :entry="entry"></events-card>
        <news-card v-else class="news-card" :entry="entry"></news-card>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'
import { createClient } from '~/plugins/contentful.js'
import NewsCard from '~/components/NewsCard'
import EventsCard from '~/components/EventsCard'

const client = createClient()

export default {

  // head () {
  //   return {
  //     title: 'Journal',
  //   }
  // },

  props: ['block'],

  components: {
    NewsCard,
    EventsCard
  },

  computed: {
    type () {
      return this.block && this.block.fields.contentType
    },
    entries () {
      if (this.type && this.type == 'event') {
        return this.$store.state.events
      } else {
        return this.$store.state.journals
      }
    }
  },

  data () {
    return {
      tags: null
    }
  }

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
