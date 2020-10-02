<template lang="html">
  <div class="cookies-prompt"
  v-if="!hasCookie&&!forceClose"
  >
    <div class="container">

      <!-- <test-cookies></test-cookies> -->

      <p>We use cookies to ensure that we give you the best experience on our website. If you continue without opting out, we'll assume that you are happy to receive all cookies on the Design District website. You can change your cookie settings at any time through your browser settings, but you may receive a limited service through the website because of this.
        <br>View our <nuxt-link class="" to="/privacy-notice">
        Privacy Notice
      </nuxt-link> and <nuxt-link class="" to="/cookies-policy">
        Cookies Policy
      </nuxt-link>. </p>
      <div class="btn btn-secondary" @click="accept()">
        Accept and Continue
      </div>
      <div class="btn btn-outline-secondary ml-2" @click="opOut()">
        Opt Out
      </div>
    </div>
  </div>
</template>

<script>
// import TestCookies from './TestCookies'
export default {
  data () {
    return {
      forceClose: false,
      count: 0,
      hasCookie: true,
      added: false,
      documentCookie: ''
    }
  },
  components: {
    // TestCookies
  },
  // computed: {
  //   cookieFound () {
  //     // if (process.client) {
  //     //   // const COOKIE_FOUND = document.cookie.indexOf('DD_CP')>-1 || document.cookie.indexOf('dd')>-1
  //     //   // console.log(COOKIE_FOUND)
  //     //   // return COOKIE_FOUND
  //     //   return this.$cookies.get('DD_CP')
  //     // }
  //   },
  //   cookieActive () {
  //     // if (process.client) {
  //     //   // let hasCookie = this.$store.state.cookieActive || this.$cookies.get('DD_CP') || document.cookie.indexOf('DD_CP')>-1
  //     //   // let hasCookie = this.$cookies.get('DD_CP') || document.cookie.indexOf('DD_CP')>-1
  //     //   let hasCookie = document.cookie.indexOf('DD_CP')>-1 || document.cookie.indexOf('dd')>-1
  //     //   // return hasCookie
  //     //   console.log('hasCookie?', hasCookie)
  //     //
  //     //   return this.$cookies.get('dd')
  //     // }
  //     //  else {
  //     //   return this.$store.state.cookieActive || this.$cookies.get('DD_CP')
  //     // }
  //   }
  // },
  mounted () {
    this.checkCookie()
    // if (process.client) {
    //   if (this.$cookies.get('DD_CP')) {
    //     this.forceActive=true
    //   }
    //   if (this.$cookies.get('dd')) {
    //     this.forceActive=true
    //   }
    //
    //   // if (document.cookie.indexOf('DD_CP')>-1) {
    //   //   this.forceActive=true
    //   // }
    //   // if (document.cookie.indexOf('dd')>-1) {
    //   //   this.forceActive=true
    //   // }
    // }
  },
  methods: {
    add () {
      let dur = 60 * 60 * 24 * 30
      document.cookie = `DD_CP=1;max-age=${dur}`
      this.checkCookie()
    },
    remove () {
      document.cookie = 'DD_CP=;max-age=0'
      // this.checkCookie()
      this.forceClose = true
    },
    checkCookie () {
      this.documentCookie = document.cookie
      this.hasCookie = document.cookie.indexOf('DD_CP')>-1
    },
    accept () {
      this.add()
    },
    opOut () {
      this.remove()
      if (process.client) {
        window['ga-disable-GTM-5PF87Z8'] = true;
      }
    }
    // accept () {
      // this.count++
      // console.log(this.count)
      // this.forceActive=true
      // console.log(this.count)
      // // this.$store.dispatch('COOKIE_ACCEPT')
      // if (process.client) {
      //
      //   // if (window.document) {
      //   //
      //   // }
      //   // window.document.cookie = "dd=accepted; max-age=3600"
      //   // window.document.cookie = "DD_CP=accepted; max-age=3600"
      //   try {
      //     this.$cookies.set('DD_CP', 1, {
      //       path: '/',
      //       maxAge: 60 * 60 * 24 * 30
      //     })
      //     this.$cookies.set('dd', 1, {
      //       path: '/',
      //       maxAge: 60 * 60 * 24 * 30
      //     })
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }
    // }
  }
}
</script>

<style lang="scss" scoped>
.cookies-prompt {
  @apply bg-black text-white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;

  .container {
    @apply cap-max-w py-8 px-4;
    @screen lg {
      @apply py-12;
    }
  }

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

  .btn:hover {
    color: black;
  }
}
</style>
