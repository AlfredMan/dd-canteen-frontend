<template>
  <div id="app">

    <!-- <test-cookies /> -->

    <app-header />

    <nuxt nuxt-child-key="none" role="main" />

    <span class="anchor" id="newsletter"></span>
    <div class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3>Newsletter</h3>
          </div>

          <div class="col-12" />
          <div class="col-12 col-md-4 d-none d-md-block">
            <p>The Design District is at the heart of Greenwich Peninsula, a new type of London created specifically for the creative community.</p>
            <p>From autumn 2020, Design District will offer a new permanent home for the creative industries in south east London. With flexible leases and purpose-designed workspaces to help creative businesses thrive.</p>
          </div>
          <div class="col-12 col-md-1" />
          <div class="col-12 col-md-4">
            <newsletter-form />
          </div>
        </div>
      </div>
    </div>

    <app-footer />

    <cookies />

  </div>
</template>

<script>
import NewsletterForm from '../components/forms/Newsletter.vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import Cookies from '../components/Cookies.vue'
import TestCookies from '../components/TestCookies'
export default {
  components: {
    NewsletterForm,
    AppHeader,
    AppFooter,
    Cookies,
    TestCookies
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
@import '~/assets/styles/custom.scss';
// boostrap
@import "../node_modules/bootstrap/scss/bootstrap";
// normalize
@import '../node_modules/normalize.css/normalize.css';
// brand type
@import '~/assets/fonts/fonts.css';

@import '~/assets/styles/typography.scss';
@import '~/assets/styles/reset.scss';
@import '~/assets/styles/utility.scss';
// @import "custom"

@import '~/assets/styles/app.scss';
@import '~/assets/styles/news.scss';
@import '~/assets/styles/lazy.scss';
</style>
