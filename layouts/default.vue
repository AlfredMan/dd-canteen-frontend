<template>
  <div id="app">

    <app-header />

    <nuxt nuxt-child-key="none" role="main" />

    <app-newsletter />

    <app-footer />

    <app-transition />

    <app-map />

    <app-tool />

  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import AppTransition from '../components/AppTransition.vue'
import AppNewsletter from '../components/AppNewsletter.vue'
import AppMap from '../components/map/Map.vue'
import AppTool from '../components/AppTool.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppTransition,
    AppNewsletter,
    AppMap,
    AppTool
  },
  mounted () {
    // From testing, without a brief timeout, it won't work.
    if (process.client) {
      if (this.$route.hash) {
        this.$nextTick(() => {
          // This could be configured to use a smooth scroll, etc.
          // window.scrollTo(0, scrollBehavior(this.$route).y)
          console.log(document.querySelector(this.$route.hash).offsetTop - 50)
          window.scrollTo({ top: document.querySelector(this.$route.hash).offsetTop - 50, behavior: 'smooth' })
        })
      }
    }
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
</style>
