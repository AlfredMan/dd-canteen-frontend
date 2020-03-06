<template>
  <div id="app">
    <header class="header" :class="{'bg-primary': menuActive}">
      <nav class="inner d-flex flex-row align-items-center container z-index--">
        <nuxt-link to="/" exact>
          <img class="logo" src="~/assets/images/logo@1x.png" alt="logo">
        </nuxt-link>

        <nuxt-link class="menu-link d-none d-lg-inline" to="/workspace">
          Work space
        </nuxt-link>
        <!-- <nuxt-link class="menu-link d-none d-lg-inline" to="/the-club">
          The Club
        </nuxt-link> -->
        <!-- <nuxt-link class="menu-link d-none d-lg-inline" to="/">Architecture</nuxt-link> -->
        <!-- <nuxt-link class="menu-link d-none d-lg-inline" to="/news-and-events">News & Events</nuxt-link> -->
        <nuxt-link class="menu-link d-none d-lg-inline" to="/about-us">
          About
        </nuxt-link>
        <nuxt-link class="menu-link d-none d-lg-inline" to="/contact">
          Contact Us
        </nuxt-link>

        <nuxt-link :to="{ path: '/contact', hash: '#register-interest' }" class="btn text-black btn-outline-primary ml-auto mr-0" :class="{'btn-outline-dark': menuActive}">
          <span class="d-inline d-lg-none">Join Now</span>
          <span class="d-none d-lg-inline">Join design district</span>
          <!-- <span>Join design district</span> -->
        </nuxt-link>

        <div class="d-block d-lg-none pl-3">
          <button class="form-field-reset btn cursor-pointer p0 mt-1" type="button" @click="menuActive = !menuActive">
            <span class="accessible-hide">Menu</span>
            <div class="icon-burger" style="color: rgb(43, 43, 43);" :class="{'icon-burger--is-active': menuActive}">
              <div class="icon-burger__inner" />
            </div>
          </button>
        </div>
      </nav>

      <div v-show="menuActive" class="position-fixed w-100 h-100 bg-primary">
        <div class="row p-4 mobile-nav">
          <div class="col">
            <nuxt-link class="mobile-menu-link" to="/workspace">
              Workspace
            </nuxt-link><br>
            <!-- <nuxt-link class="mobile-menu-link" to="/the-club">
              The Club
            </nuxt-link><br> -->
            <nuxt-link class="mobile-menu-link" to="/about-us">
              About
            </nuxt-link><br>
            <nuxt-link class="mobile-menu-link" to="/contact">
              Contact Us
            </nuxt-link><br>
          </div>
        </div>
        <div class="row p-4 mobile-footer">
          <div class="col-12">
            <a class="">The Gateway Pavilion<br>Peninsula Square<br>Greenwich Peninsula<br>London SE10 0SQ</a>
            <br><br>
            <a class="">hello@designdistrict.co.uk</a><br>
            <a class="">020 3981 2426</a>
            <br><br>
            <!-- </div>
          <div class="col-5"> -->
            <!-- <h5>Connect</h5> -->
            <a class="" target="_blank" rel="noreferrer" href="https://www.instagram.com/designdistrictlondon">Instagram</a><br>
            <a class="" target="_blank" rel="noreferrer" href="https://twitter.com/Design_District">Twitter</a><br>
            <a class="" target="_blank" rel="noreferrer" href="https://www.facebook.com/DesignDistrictLondon/">Facebook</a><br>
            <a class="" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/design-district-london">LinkedIn</a>
          </div>
        </div>
      </div>
    </header>
    <!-- <transition name="fade" mode="out-in">
      <router-view class="view" />
    </transition> -->
    <nuxt nuxt-child-key="none" role="main" />

    <div id="newsletter" class="py-5 bg-light">
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

    <footer class="bg-grey">
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-12 col-md-3 col-lg-3 mb-5">
            <h5>DESIGN DISTRICT</h5>
            <a class="">The Gateway Pavilions<br>Peninsula Square<br>Greenwich Peninsula<br>London SE10 0SQ</a><br><br>
            <a class="">hello@designdistrict.co.uk</a><br>
            <a class="">020 3981 2426</a><br>
          </div>
          <div class="col-6 col-md-3 col-lg-3 mb-5">
            <h5>Connect</h5>
            <a class="" target="_blank" rel="noreferrer" href="https://www.instagram.com/designdistrictlondon">Instagram</a><br>
            <a class="" target="_blank" rel="noreferrer" href="https://twitter.com/Design_District">Twitter</a><br>
            <a class="" target="_blank" rel="noreferrer" href="https://www.facebook.com/DesignDistrictLondon/">Facebook</a><br>
            <a class="" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/design-district-london">LinkedIn</a>
          </div>

          <div class="col-6 col-md-3 col-lg-3 mb-5">
            <h5>Join</h5>
            <nuxt-link class="" to="/workspace">
              Workspace
            </nuxt-link>
            <br>
            <nuxt-link class="" to="/the-club">
              The Club
            </nuxt-link>
            <br>
            <nuxt-link class="" to="/about-us">
              About
            </nuxt-link>
            <br>
            <nuxt-link class="" to="/contact">
              Contact
            </nuxt-link>
          </div>

          <div class="col-6 col-md-3 col-lg-3 mb-5">
            <h5>Legal</h5>
            <nuxt-link class="" to="/privacy-policy">
              Privacy Policy
            </nuxt-link>
            <br>
            <nuxt-link class="" to="/cookies-policy">
              Cookies Policy
            </nuxt-link>
            <br>
            <nuxt-link class="" to="/terms-and-conditions">
              Terms & Conditions
            </nuxt-link>
          </div>

          <!-- <div class="col-12 d-block d-md-none" />
          <div class="col-6 col-md-3 col-lg-2 mb-5 ml-md-auto text-md-right text-left">
            <img src="~/assets/images/gp-logo.svg" alt="Greenwich Peninsula" class="w-100 w-md-75" style="max-width: 100px">
          </div> -->
        </div>

        <nav class="inner d-flex row align-items-end justify-content-start mt-5 pb-2">
          <div class="p-3 mr-auto-mr-md-0-ml-md-auto-order-md-2 d-flex align-items-end">
            <img src="~/assets/images/logo-ver.svg" alt="Design District logo" style="max-width: 40px" class="mr-5">
            <img src="~/assets/images/gp-logo.svg" alt="Greenwich Peninsula logo" style="max-width: 100px">
          </div>

          <small class="nav-link ml-auto">
            Copyright © 2020 Design District Limited
          </small>
          <!-- <nuxt-link class="d-none d-md-inline nav-link" to="/privacy-policy">
            Privacy Policy
          </nuxt-link>
          <nuxt-link class="d-none d-md-inline nav-link" to="/terms-and-conditions">
            Terms & Conditions
          </nuxt-link> -->

          <!-- <a class="d-none d-md-inline nav-link ml-auto" href="https://twitter.com/Design_District">Twitter</a>
          <a class="d-none d-md-inline nav-link" href="https://www.facebook.com/DesignDistrictLondon/">Facebook</a>
          <a class="d-none d-md-inline nav-link" href="http://www.instagram.com/designdistrictlondon">Instagram</a> -->
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
import NewsletterForm from '../components/forms/Newsletter.vue'
export default {
  components: {
    NewsletterForm
  },
  data () {
    return {
      menuActive: false
    }
  },
  watch: {
    '$route' (to, from) {
      // console.log(this)
      if (to.fullPath !== from.fullPath) {
        this.menuActive = false
      }
    }
  },
  mounted () {
    // From testing, without a brief timeout, it won't work.
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
@import '~/assets/styles/lazy.scss';
</style>
