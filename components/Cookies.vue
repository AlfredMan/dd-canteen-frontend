<template lang="html">
  <div class="cookies-prompt bg-dark text-white p-5" v-if="!cookieActive&&!forceActive" :class="{'cookie-found': cookieActive}">
    <div class="container">
      <p>Like most websites, Design District uses cookies to help give you the best experience of our website. Please accept cookies for optimal performance. For more information, please read our <nuxt-link class="" to="/privacy-policy">
        Privacy Policy
      </nuxt-link> and <nuxt-link class="" to="/cookies-policy">
        Cookies Policy
      </nuxt-link>. </p>
      <a class="btn btn-outline-secondary text-secondary" @click.prevent="accept">
        Accept and Continue
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      forceActive: false
    }
  },
  computed: {
    cookieActive () {
      if (process.client) {
        let hasCookie = this.$store.state.cookieActive || this.$cookies.get('DD_CP') || document.cookie.indexOf('DD_CP')>-1
        if (hasCookie) {
          this.forceActive = true
        }
        return hasCookie
      }
      return this.$store.state.cookieActive || this.$cookies.get('DD_CP')
    }
  },
  methods: {
    accept () {
      this.forceActive=true
      this.$store.dispatch('COOKIE_ACCEPT')
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
}
</style>
