<template>
  <section class="block-tabs"
  v-if="block"
  >

    <div class="block-tab-selectors">
      <div class="">
        <h4
        v-for="(tabs, index) in block.fields.tabs"
        :key="tabs.fields.tabTitle"
        :class="{
          'active': activeTab==index
          }"
        @click="activeTab=index"
        >
          {{tabs.fields.tabTitle}}
        </h4>
      </div>
    </div>

    <div class="block-tab--tab-contents">
      <div
      class="block-tab--tab-content"
      v-for="(tabs, index) in block.fields.tabs"
      v-if="activeTab == index"
      :key="tabs.sys.id">

        <template
        v-if="tabs && tabs.fields.tabContent"
        v-for="tab in tabs.fields.tabContent"
        >


          <BlockList class="block-tab--tab-list" :key="tab.sys.id" :block="tab" v-if="isBlockType(tab, 'blockList')"/>

          <BlockImage class="block-tab--tab-image" :key="tab.sys.id" :block="tab" v-else-if="isBlockType(tab, 'blockImage')"/>

        </template>

      </div>
    </div>

    <!-- <pre>{{block.fields.tabs[0].fields}}</pre> -->
  </section>
</template>

<script>
import BlockList from '~/components/blocks/BlockList'
import BlockImage from '~/components/blocks/BlockImage'
export default {
  props: ['block'],

  data () {
    return {
      activeTab:0
    }
  },

  components: {
    BlockList,
    BlockImage
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

.block-tab-selectors {
  @apply px-4;
  div {

    @apply flex cap-max-w px-4;

    h4 {
      @apply my-0 mr-8 uppercase font-normal cursor-pointer;
      
      &:hover,
      &.active {
        @apply text-green;
      }
    }
  }
}

.block-tab--tab-contents {
  // @apply cap-max-w;

  .block-tab--tab-content {
  }

  .block-tab--tab-list {
    @apply pt-8;
  }
  .block-tab--tab-image {
    @apply cap-max-w py-0;
  }
}
</style>
