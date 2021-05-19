<template lang="html">
  <header class="header" :class="[
    {'bg-primary': menuActive},
    headerClass,
    {'mobile-menu-active': menuActive}
  ]">
    <div data-x="a" class="container-fluid px-0 -px-lg-0 transition duration-300"
    :class="{
        'text-white': (isDark) && !menuActive,
        'text-black': !(isDark) && !menuActive,
        'bg-white': !(isDark) && scrolled && !menuActive,
        'bg-black': (isDark) && scrolled && !menuActive
      }"
    >
      <nav class="inner d-flex -flex-row align-items-center -row z-index-- cap-max-w" >
        <nuxt-link to="/" exact class="-ml-1 mr-0 ml-3">
          <img class="logo" src="~/assets/images/logo-hor.svg" alt="logo" v-if="!isDark">
          <img class="logo" src="~/assets/images/logo-hor-white.svg" alt="logo" v-if="isDark">
        </nuxt-link>

        <nuxt-link class="menu-link d-none d-sm-inline" to="/workspace">
          Work space
        </nuxt-link>
        <nuxt-link class="menu-link d-none d-sm-inline" to="/architecture">
          Architecture
        </nuxt-link>
        <nuxt-link class="menu-link d-none d-sm-inline" to="/journal">
          Journal
        </nuxt-link>
        <nuxt-link class="menu-link d-none d-sm-inline" to="/events">
          Events
        </nuxt-link>
        <a class="menu-link d-none d-sm-inline" href="https://bureau.club" target="_blank">
          Bureau
        </a>
        <nuxt-link class="menu-link d-none d-sm-inline" to="/about-us">
          About
        </nuxt-link>
        <nuxt-link class="menu-link d-none d-sm-inline" to="/contact">
          Contact Us
        </nuxt-link>
        <nuxt-link class="menu-link d-none d-sm-inline" to="/map">
          Map
        </nuxt-link>
        <!-- <nuxt-link class="menu-link d-none d-sm-inline" to="/shesays-mentorship">
          Mentorship
        </nuxt-link> -->

        <a href="tel:+4402039812426"
        class="btn btn-lg- btn-dark- btn-primary-text-white m-2 pt-1 ml-auto -mr-0 d-sm-inline-block d-none "
        :class="{
          'btn-outline-black': menuActive,
          'text-primary': !(isOrange||isDark),
          'text-black': (isOrange),
          'text-white': isDark
          }">
          <span class="d-inline d-xl-none">+44 (0)20 3981 2426</span>
          <span class="d-none d-xl-inline">+44 (0)20 3981 2426</span>
        </a>

        <nuxt-link :to="{ path: '/enquire' }"
        class="btn btn-lg- btn-dark- -btn-primary text-white -btn-outline-primary m-2 -pt-1 -mr-0 ml-auto ml-sm-0"
        :class="{
          'btn-dark': menuActive,
          'btn-primary': !(isOrange||isDark),
          'btn-dark': (isOrange||isDark)
          }"
        >
          <span class="d-inline d-xl-none">Get in touch</span>
          <span class="d-none d-xl-inline">Get in touch</span>
        </nuxt-link>

        <div class="d-block d-sm-none pl-0 -bg-white">
          <button class="form-field-reset btn cursor-pointer p0 mt-1" type="button" @click="menuActive = !menuActive">
            <span class="accessible-hide">Menu</span>
            <div class="icon-burger" style="color: rgb(43, 43, 43);" :class="{'icon-burger--is-active': menuActive}">
              <div class="icon-burger__inner" />
            </div>
          </button>
        </div>

      </nav>
    </div>

    <div v-show="menuActive" class="position-fixed w-100 h-100 bg-primary">
      <div class="row p-4 mobile-nav">
        <div class="col">
          <nuxt-link class="d-block mobile-menu-link" to="/workspace">
            Work space
          </nuxt-link>
          <nuxt-link class="d-block mobile-menu-link" to="/architecture">
            Architecture
          </nuxt-link>
          <nuxt-link class="d-block mobile-menu-link" to="/journal">
            Journal
          </nuxt-link>
          <nuxt-link class="d-block mobile-menu-link" to="/events">
            Events
          </nuxt-link>
          <a class="d-block mobile-menu-link" href="https://bureau.club" target="_blank">
            Bureau
          </a>
          <nuxt-link class="d-block mobile-menu-link" to="/about-us">
            About
          </nuxt-link>
          <nuxt-link class="d-block mobile-menu-link" to="/contact">
            Contact Us
          </nuxt-link>
        </div>
      </div>
      <div class="row p-4 mobile-footer">
        <div class="col-12">
          <email :address="'hello@designdistrict.co.uk'"></email><br>
          <a href="tel:+4402039812426">+44 (0)20 3981 2426</a>
          <br><br>
          <a class="" target="_blank" rel="noreferrer" href="https://www.instagram.com/designdistrictlondon">Instagram</a><br>
          <a class="" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/design-district-london">LinkedIn</a><br>
          <a class="" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCOE4WSM2KzYyItgaS6k4_eg">YouTube</a><br>
          <a class="" target="_blank" rel="noreferrer" href="https://www.pinterest.co.uk/designdistrictlondon/">Pinterest</a><br>
          <nuxt-link class="" to="/contact#newsletter">Newsletter</nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      menuActive: false,
      scrolled: false
    }
  },
  computed: {
    headerClass () {
      return this.$store.state.navigation.theme
    },
    // headerAccent () {
    //   return this.$store.state.navigation.accent
    // },
    isDark () {
      return this.$store.state.navigation.theme == 'dark'
    },
    isOrange () {
      return this.$store.state.navigation.theme == 'orange' || this.$store.state.navigation.theme == 'yellow'
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
    this.bindEvents()
  },
  beforeDestroy () {
    this.unbindEvents()
  },
  methods: {
    bindEvents () {
      if (process.client) {
        const self = this
        window.addEventListener('scroll', self.onWindowScroll, false)
      }
    },
    unbindEvents () {
      if (process.client) {
        const self = this
        window.removeEventListener('scroll', self.onWindowScroll, false)
      }
    },
    onWindowScroll (event) {
      if (process.client) {
        const self = this
        let y = window.scrollY
        if (y > 10) {
          this.scrolled = true
        } else {
          this.scrolled = false
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
