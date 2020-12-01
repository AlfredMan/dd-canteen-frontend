<template>
  <main class="page-component">

    <div class="" v-if="entry">
      <template
      v-if="entry && entry.fields.contentBlocks"
      v-for="block in entry.fields.contentBlocks">

        <BlockPageHeaderVideo :block="block" v-if="isBlockType(block, 'blockPageHeaderVideo')"/>

        <BlockPageHeader :block="block" v-else-if="isBlockType(block, 'blockPageHeader')"/>

        <BlockList :block="block" v-else-if="isBlockType(block, 'blockList')"/>

        <BlockBanner :block="block" v-else-if="isBlockType(block, 'blockBanner')"/>

        <BlockImage :block="block" v-else-if="isBlockType(block, 'blockImage')"/>

        <BlockArchitecture :block="block" v-else-if="isBlockType(block, 'blockArchitecture')"/>

        <BlockJournal :block="block" v-else-if="isBlockType(block, 'blockJournal')"/>

        <BlockPress :block="block" v-else-if="isBlockType(block, 'blockPress')"/>

        <BlockTabs :block="block" v-else-if="isBlockType(block, 'blockTabs')"/>

        <BlockWorkspaceFilter :block="block" v-else-if="isBlockType(block, 'blockWorkspaceFilter')"/>

        <BlockArchitectureList :block="block" v-else-if="isBlockType(block, 'blockArchitectureList')"/>

        <BlockJournalFullList :block="block" v-else-if="isBlockType(block, 'blockJournalFullList')"/>

        <div class="p-16 bg-red-100 hidden" v-else-if="block" style="visibility:hidden;display:none;">
          <p v-if="block.sys && block.sys.contentType">{{block.sys.contentType.sys.id}}</p>
          <pre>{{block.fields}}</pre>
        </div>

      </template>
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
import BlockJournal from '~/components/blocks/BlockJournal'
import BlockPress from '~/components/blocks/BlockPress'
import BlockTabs from '~/components/blocks/BlockTabs'
import BlockWorkspaceFilter from '~/components/blocks/BlockWorkspaceFilter'
import BlockArchitectureList from '~/components/blocks/BlockArchitectureList'
import BlockJournalFullList from '~/components/blocks/BlockJournalFullList'

export default {
  name: 'page',

  components: {
    BlockPageHeader,
    BlockPageHeaderVideo,
    BlockList,
    BlockBanner,
    BlockImage,
    BlockArchitecture,
    BlockJournal,
    BlockPress,
    BlockTabs,
    BlockWorkspaceFilter,
    BlockArchitectureList,
    BlockJournalFullList
  },

  props: {
    entry: {
      type: Object,
    }
  },

  mounted () {
    this.$store.dispatch('updateNavigationTheme', { theme: 'light' })
  },

  methods: {

    getRichText (document) {
      return documentToHtmlString(document, options);
    },

    isBlockType (block, id) {
      let isType = block.sys && block.sys.contentType && block.sys.contentType.sys.id == id
      if (isType) {
        console.log(block, id)
      }
      return isType
    },

  }
}
</script>
