<template>
  <main class="page-component">

    <WelcomeBanner v-if="$route.path.indexOf('welcome')>=0" />
    <CreatesWelcomeBanner v-if="$route.path.indexOf('/creates')>=0||$route.path.indexOf('/events')>=0" />
      <!-- <CreatesWelcomeBanner2 v-if="$route.path.indexOf('creates')>=0 && $route.path.length < 10" /> -->
    <CreatesVideo v-if="$route.path.indexOf('/creates')>=0||$route.path.indexOf('/events')>=0" />

    <div class="" v-if="entry">
      <template
      v-if="entry && entry.fields.contentBlocks"
      v-for="block in entry.fields.contentBlocks">

        <!-- {{block.sys.contentType.sys.id}}<br> -->

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

        <BlockVideo :block="block" v-else-if="isBlockType(block, 'blockVideo')"/>

        <BlockGrid :block="block" v-else-if="isBlockType(block, 'blockImageTextGriddedList')"/>

        <BlockForm :block="block" v-else-if="isBlockType(block, 'blockFormNewsletter')"/>

        <BlockText :block="block" v-else-if="isBlockType(block, 'blockText')"/>

        <div class="p-16 bg-red-100 hidden" v-else-if="block" style="visibility:hidden;display:none;">
          <p v-if="block.sys && block.sys.contentType">{{block.sys.contentType.sys.id}}</p>
          <pre>{{block.fields}}</pre>
        </div>

      </template>
    </div>

    <!-- <AppPopup v-if="$route.path.indexOf('welcome-to-design-district')>=0"/> -->
    <AppPopupCanteen v-if="$route.path.indexOf('canteen')>=0" />

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
import BlockVideo from '~/components/blocks/BlockVideo'
import BlockGrid from '~/components/blocks/BlockGrid'
import BlockForm from '~/components/blocks/BlockForm'
import BlockText from '~/components/blocks/BlockText'
import AppPopup from '~/components/AppPopup'
import WelcomeBanner from '~/components/campaigns/WelcomeBanner'
import CreatesWelcomeBanner from '~/components/campaigns/CreatesWelcomeBanner'
import CreatesWelcomeBanner2 from '~/components/campaigns/CreatesWelcomeBanner2'
import CreatesVideo from '~/components/campaigns/CreatesVideo'
import AppPopupCanteen from '~/components/AppPopupCanteen'

import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js'
gsap.registerPlugin(ScrollToPlugin)

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
    BlockJournalFullList,
    BlockVideo,
    BlockGrid,
    BlockForm,
    BlockText,
    AppPopup,
    WelcomeBanner,
    CreatesWelcomeBanner,
    CreatesWelcomeBanner2,
    CreatesVideo,
    AppPopupCanteen
  },

  props: {
    entry: {
      type: Object,
    }
  },

  mounted () {

    // _.map(this.entry.fields.contentBlocks, (block)=>{
    //   console.log(block.sys.contentType.sys.id)
    // })
    this.checkEntryTheme()

    console.log('app apge creates function')
    if (process.client) {
      gsap.to('#full-screen-banner-creates', {
        autoAlpha: 0, duration: 0.5, delay: 1.5
      });
    }
  },

  methods: {



    getRichText (document) {
      return documentToHtmlString(document, options);
    },

    isBlockType (block, id) {
      let isType = block.sys && block.sys.contentType && block.sys.contentType.sys.id == id
      // if (isType) {
      //   console.log(block, id)
      // }
      return isType
    },

    checkEntryTheme () {
      let theme = 'default'

      if (this.entry
        && this.entry.fields
        && this.entry.fields.contentBlocks
        && this.entry.fields.contentBlocks[0]
        && this.entry.fields.contentBlocks[0].fields
        && this.entry.fields.contentBlocks[0].fields.theme) {
        theme = _.lowerCase(this.entry.fields.contentBlocks[0].fields.theme)
      }

      if (theme == 'dark') {
        this.$store.dispatch('updateNavigationTheme', { theme: 'dark' })
      } else if (theme == 'orange') {
        this.$store.dispatch('updateNavigationTheme', { theme: 'orange' })
      } else if (theme == 'yellow') {
        this.$store.dispatch('updateNavigationTheme', { theme: 'yellow' })
      } else {
        this.$store.dispatch('updateNavigationTheme', { theme: 'light' })
      }
    }
  }
}
</script>
