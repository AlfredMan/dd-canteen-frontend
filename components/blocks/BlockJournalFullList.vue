<template lang="html">
  <section
  v-if="block"
  class="BlockJournalFullList"
  :class="[blockThemeClass]"
  :id="blockId"
  >
    <div
    v-if="block.fields.heading || block.fields.subheading"
    class="block-list-header px-2"
    :class="{
      'headingDisplay--Right': headingDisplay=='Right',
      'flex flex-wrap items-baseline':headingDisplay=='Right'
      }"
    >
      <div v-if="block.fields.heading" :class="{'w-full lg:w-5/12':headingDisplay=='Right'}">
        <h2>
          {{block.fields.heading}}
        </h2>
      </div>
      <div v-if="block.fields.subheading" :class="{'w-full lg:w-7/12':headingDisplay=='Right'}">
        <h4 class="font-medium max-w-3xl">
          {{block.fields.subheading}}
        </h4>
        <callToAction v-if="block.fields.callToAction" :callToAction="block.fields.callToAction"/>
      </div>
    </div>
    <div class="flex tags block-filter" v-if="block.fields.showFilters">
      <div 
      @click="filteredTag = ''"
      class="mr-2 cursor-pointer btn btn-outline-dark tag">
        All
      </div>
      <div 
      v-for="filter in block.fields.filters"
      :key="filter.sys.id"
      @click="filteredTag = filter.fields.tagSlug"
      class="cursor-pointer btn btn-outline-dark tag"
      :class="{
        'active' : filteredTag==filter.fields.tagSlug
      }"
      >
        {{filter.fields.tagName}}
      </div>
    </div>
    <div class="block-journal--entries">
      <div
      v-for="(entry, index) in filteredEntries" :key="entry.sys.id"
      class="block-journal--entries--entry"
      :class="{
        'w-full md:w-6/12': formatEnlargeFirstEntry ? index==0 : false,
        'w-full md:w-3/12': formatEnlargeFirstEntry ? index>0 : true
        }">
        <events-card v-if="entry.sys.contentType.sys.id=='event'" class="news-card" :entry="entry"></events-card>
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
    formatManualSelection () {
      return this.block && this.block.fields.format && _.kebabCase(this.block.fields.format) == 'manual-selection'
    },
    formatShowAll () {
      return !this.formatManualSelection
    },
    formatEnlargeFirstEntry () {
      return this.block.fields.formatEnlargeFirstEntry && this.block.fields.formatEnlargeFirstEntry != false
    },
    entriesFromStateByType () {
      if (this.type && this.type == 'event') {
        return this.$store.state.events
      } else {
        return this.$store.state.journals
      }
    },
    allEntries () {
      if (this.formatShowAll) {
        return this.entriesFromStateByType
      } else {
        return this.block.fields.manualSelection
      }
    },
    filteredEntriesByTag () {
      return this.allEntries.filter((entry) => {
        if (this.filteredTag=='') {
          return true
        } else {
          if (entry.fields.tags && entry.fields.tags.length > 0) {
            // debugger
            return entry.fields.tags.some((tag) => {
              // console.log(tag.fields, tag.fields.tagSlug, this.filteredTag)
              return tag.fields && tag.fields.tagSlug == this.filteredTag || false
            })
          } else {
            return false
          }
        }
          
      })
    },
    filteredEntries () {
      if (this.block.fields.showFilters) {
        return this.filteredEntriesByTag
      } else {
        return this.allEntries
      }
    },    
    headingDisplay () {
      return this.block && this.block.fields.headingDisplay || 'Default'
    },
    blockTheme () {
      return this.block && _.lowerCase(this.block.fields.theme) || 'default'
    },
    blockThemeClass () {
      return `theme-${this.blockTheme}`
    },
    blockId() {
      return this.block.fields.heading ? _.kebabCase(this.block.fields.heading) : ''
    }
  },

  data () {
    return {
      tags: null,
      filteredTag: ''
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

.block-filter {
  @apply px-4;
  @screen lg {
    @apply cap-max-w px-0;
    overflow-x: inherit;
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
