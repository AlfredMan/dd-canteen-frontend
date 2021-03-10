<template>
  <div id="app" :class="{
    'theme-yellow': appTheme=='yellow',
    'theme-green': appTheme=='green',
    'theme-orange': appTheme=='orange',
    'theme-light': appTheme=='light',
    'theme-dark': appTheme=='dark'
  }">

    <!-- <test-cookies /> -->

    <app-header />

    <nuxt nuxt-child-key="none" role="main" />

    <app-newsletter v-if="showNewsletterFooter"/>

    <app-sales v-if="showSalesFooter"/>

    <app-five-pound v-if="showFivePoundFooter"/>

    <app-footer />

    <app-transition />

    <!-- <app-map /> -->

    <Cookies />

    <!-- <app-tool /> -->
    <!-- <div
    class="z-50 fixed bottom-0 right-0 bg-white border-1 rounded-full m-6 shadow transition duration-300 cursor-pointer hover:mb-8"
    >
      <div
      class="flex align-center items-center items-end px-6 py-2 text-lg rounded-lg bg-opacity-50"
      >
        <div class="relative w-4 h-4 mr-2">
          <IconBox class=""/>
        </div>
        Map
      </div>
    </div> -->

  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import AppTransition from '../components/AppTransition.vue'
import AppNewsletter from '../components/AppNewsletter.vue'
import AppSales from '../components/AppSales.vue'
import AppFivePound from '../components/AppFivePound.vue'
import AppMap from '../components/map/Map.vue'
// import AppTool from '../components/AppTool.vue'
import Cookies from '../components/Cookies.vue'

export default {

  head () {
    return {
      // title: 'Design District',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.seoDescription },
        { property: 'og:image', content: this.seoImage },
        { property: 'og:url', content: `https://designdistrict.co.uk` },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.seoTitle },
        { property: 'og:description', content: this.seoDescription },

        { name: 'twitter:description', content: this.seoDescription },
        { name: 'twitter:image', content: this.seoImage },
      ]
    }
  },

  components: {
    AppHeader,
    AppFooter,
    AppTransition,
    AppNewsletter,
    AppSales,
    AppMap,
    // AppTool,
    Cookies,
    AppFivePound
  },
  mounted () {
    // From testing, without a brief timeout, it won't work.
    if (process.client) {
      if (this.$route.hash) {
        this.$nextTick(() => {
          // This could be configured to use a smooth scroll, etc.
          // window.scrollTo(0, scrollBehavior(this.$route).y)
          // console.log(document.querySelector(this.$route.hash).offsetTop - 50)
          window.scrollTo({ top: document.querySelector(this.$route.hash).offsetTop - 50, behavior: 'smooth' })
        })
      }
    }
  },

  computed: {
    showFivePoundFooter () {
      return this.$route.path.indexOf('space-to-create') >= 0
    },
    showSalesFooter () {
      return !this.showFivePoundFooter && (this.$route.path.indexOf('workspace') >= 0 || this.$route.path.indexOf('about') >= 0)
    },
    showNewsletterFooter () {
      return !this.showFivePoundFooter && !this.showSalesFooter
    },
    seoDefault () {
      return this.$store.state.seoDefault
    },
    seoTitle () {
      return this.seoDefault.title
    },
    seoDescription () {
      return this.seoDefault.description
    },
    seoImage () {
      return this.seoDefault.image
    },
    appTheme () {
      return this.$store.state.navigation.theme
    },
  }
}
</script>

<style lang="scss">
// custom boostrap overrides
// @import '~/assets/styles/custom.scss';
// boostrap
@import "../node_modules/bootstrap/scss/bootstrap";
// normalize
// @import '../node_modules/normalize.css/normalize.css';
// brand type
@import '~/assets/fonts/fonts.css';

@import '~/assets/styles/typography.scss';
@import '~/assets/styles/reset.scss';
@import '~/assets/styles/utility.scss';
@import '~/assets/styles/slideshow.scss';
@import '~/assets/styles/transitions.scss';
// @import "custom"

@import '~/assets/styles/app.scss';
@import '~/assets/styles/news.scss';
@import '~/assets/styles/lazy.scss';
@import '~/assets/styles/slider.scss';

@import '~/assets/styles/theme.scss';
</style>
