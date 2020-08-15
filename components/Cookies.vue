<template lang="html">
  <div class="cookies-prompt bg-dark text-white p-5"
  v-if="!cookieActive&&!forceActive"
  v-show="!forceActive"
  :data-count="count"
  :class="{'cookie-found': cookieActive, 'cookie-found-again': forceActive, 'cookie-not-found': !cookieActive, 'cookie-not-found-again': !forceActive}">
    <div class="container">
      <p>Like most websites, Design District uses cookies to help give you the best experience of our website. Please accept cookies for optimal performance. For more information, please read our <nuxt-link class="" to="/privacy-policy">
        Privacy Policy
      </nuxt-link> and <nuxt-link class="" to="/cookies-policy">
        Cookies Policy
      </nuxt-link>. </p>
      <div class="btn btn-outline-secondary text-secondary" @click="accept()">
        Accept and Continue <span style="display:none">{{count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      forceActive: false,
      count: 0
    }
  },
  computed: {
    cookieActive () {
      if (process.client) {
        // let hasCookie = this.$store.state.cookieActive || this.$cookies.get('DD_CP') || document.cookie.indexOf('DD_CP')>-1
        let hasCookie = this.$cookies.get('DD_CP') || document.cookie.indexOf('DD_CP')>-1
        return hasCookie
      }
      //  else {
      //   return this.$store.state.cookieActive || this.$cookies.get('DD_CP')
      // }
    }
  },
  mounted () {
    if (process.client) {
      if (document.cookie.indexOf('DD_CP')>-1) {
        this.forceActive=true
      }
    }
  },
  methods: {
    accept () {
      this.count++
      this.forceActive=true
      console.log(this.count)
      // this.$store.dispatch('COOKIE_ACCEPT')
      if (process.client) {
        this.$cookies.set('DD_CP', 1, {
          path: '/',
          maxAge: 60 * 60 * 24 * 30
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cookies-prompt {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;

  p {
    max-width: 60em;
  }

  &.cookie-found {
    display: none;
    visibility: hidden;
    opacity: 0
  }
  &.cookie-found-again {
    display: none;
    visibility: hidden;
    opacity: 0
  }
}
</style>
