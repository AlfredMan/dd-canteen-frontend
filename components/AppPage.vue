<template>
  <main class="page-component">

    <div class="">
      <template
      v-if="entry && entry.fields.contentBlocks"
      v-for="block in entry.fields.contentBlocks">

        <BlockPageHeaderVideo :block="block" v-if="isBlockType(block, 'blockPageHeaderVideo')"/>

        <BlockPageHeader :block="block" v-else-if="isBlockType(block, 'blockPageHeader')"/>

        <BlockList :block="block" v-else-if="isBlockType(block, 'blockList')"/>

        <BlockBanner :block="block" v-else-if="isBlockType(block, 'blockBanner')"/>

        <BlockImage :block="block" v-else-if="isBlockType(block, 'blockImage')"/>

        <BlockArchitecture :block="block" v-else-if="isBlockType(block, 'blockArchitecture')"/>

        <div class="p-16 bg-red-100" v-else>
          <p v-if="block.sys && block.sys.contentType">{{block.sys.contentType.sys.id}}</p>
          <pre>{{block.fields}}</pre>
        </div>

      </template>
    </div>

    <div class="max-w-screen-xl mx-auto mt-24 bg-green-lighter hover:bg-green transition duration-100">
      <pre>{{entry}}</pre>
    </div>
  </main>
</template>

<script>
import _ from 'lodash'
import BlockPageHeader from '~/components/blocks/BlockPageHeader'
import BlockPageHeaderVideo from '~/components/blocks/BlockPageHeaderVideo'
import BlockList from '~/components/blocks/BlockList'
import BlockBanner from '~/components/blocks/BlockBanner'
import BlockImage from '~/components/blocks/BlockImage'
import BlockArchitecture from '~/components/blocks/BlockArchitecture'

export default {
  name: 'page',

  components: {
    BlockPageHeader,
    BlockPageHeaderVideo,
    BlockList,
    BlockBanner,
    BlockImage,
    BlockArchitecture
  },

  props: {
    entry: {
      type: Object,
      // default: () => {
      //   return {}
      // }
    }
  },

  methods: {

    getRichText (document) {
      return documentToHtmlString(document, options);
    },

    isBlockType (block, id) {
      return block.sys && block.sys.contentType && block.sys.contentType.sys.id == id
    },

  }
}
</script>
