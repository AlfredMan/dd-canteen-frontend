<template>
  <section class="block-grid"
  v-if="block"
  >
    <div class="block-grid--grid-contents">

      <!-- <pre>block.fields: {{block.fields}}</pre> -->

      <div
      class="block-grid--grid-content"
      v-for="(grid, index) in block.fields.imageTextGrid"
      :key="grid.sys.id">

        <!-- <pre>grid: {{grid}}</pre> -->

        <div
        class="lg:flex grid-unit"
        :class="{
          'grid-order-even': index%2==0,
          'grid-order-odd': index%2==1
        }"
        >

          <div
          v-if="grid.fields.heading || grid.fields.subheading"
          class="lg:w-1/2 grid-header"
          >

            <div v-if="grid.fields.heading">
              <h2>
                {{grid.fields.heading}}
              </h2>
            </div>
            <div v-if="grid.fields.subheading">
              <h4 class="font-normal text-2xl max-w-3xl markdown" v-html="markdown(grid.fields.subheading)">
                <!-- <rich-text :richtext="block.fields.formDescription" /> -->
              </h4>
              <callToAction v-if="grid.fields.callToAction" :callToAction="grid.fields.callToAction"/>
            </div>

          </div>

          <div class="lg:w-1/2 grid-image" v-if="grid.fields.image && grid.fields.image[0]">
            <lazy-image
            :src="grid.fields.image[0].fields.file.url"
            :w="1000"
            />
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script>
// import BlockList from '~/components/blocks/BlockList'
// import BlockImage from '~/components/blocks/BlockImage'
export default {
  props: ['block'],

  data () {
    return {
      activeTab:0
    }
  },

  components: {
    // BlockList,
    // BlockImage
  },

  mounted () {

  },

  methods: {
    isBlockType (block, id) {
      return block.sys && block.sys.contentType && block.sys.contentType.sys.id == id
    },
  }
}
</script>

<style lang="scss" scoped>
section {
  @apply py-16;
  @media (min-width: 1024px) {
    @apply pt-12 pb-4;
  }
}

.block-grid-selectors {
  @apply px-4 mb-4 cap-max-w;
  div {

    @apply flex px-4 -ml-4;

    h4 {
      @apply my-0 mr-8 uppercase font-normal cursor-pointer;

      &:hover,
      &.active {
        @apply text-green;
      }
    }
  }
}

.block-grid--grid-contents {

  .block-grid--grid-content {
    @apply cap-max-w;
  }

  .block-grid--grid-list {
    @apply pt-8;
  }
  .block-grid--grid-image {
    @apply cap-max-w py-0 px-4;
  }
}

.grid-unit {
  @apply py-2 mt-4 mb-8;

  .grid-header {
    @apply px-3 mb-6;
  }
  .grid-image {
    @apply px-3;
  }

  &.grid-order-odd {
    .grid-header {
      @screen lg {
        @apply order-2;
        @apply pl-8
      }
    }
    .grid-image {
      @screen lg {
        @apply order-1;
        @apply pr-8
      }
    }
  }
  &.grid-order-even {
    .grid-header {
      @screen lg {
        @apply pr-8
      }
    }
    .grid-image {
      @screen lg {
        @apply pl-8
      }
    }
  }
}

</style>
