<template lang="html">
  <div id="canteen-popup" ref="popup" class="app-pop-up bg-mint" style="visibility:hidden;opacity:0">
    <div class="absolute top-0 right-0 py-2 px-4 text-2xl cursor-pointer" @click="hide">
      &times;
    </div>
    <div class="">
      <h4>
        <!-- Enjoy 10% off your first Canteen order -->
        Add flavour to your inbox
        </h4>
      <p>
        <!-- Sign-up for our regular newsletter and we’ll send you a discount code (along with a few other tasty morsels). -->
        Join our newsletter for updates, offers and other tasty morsels.
      </p>
      <NewsletterCanteen />
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
if (process.client) {
  gsap.registerPlugin(ScrollToPlugin)
  gsap.registerPlugin(ScrollTrigger);
}

import NewsletterCanteen from '~/components/forms/NewsletterCanteen'
export default {
  components: {
    NewsletterCanteen
  },

  data () {
    return {
      // userHasSignedUp: false
    }
  },

  mounted () {
    this.init()
  },

  // watch: {
  //   // '$route' (newVal, oldVal) {
  //     // if (newVal.hash && newVal.hash=='#popup-canteen') {
  //     //   // this.show()
  //     // }
  //   // }
  // },

  methods: {
    init () {
      if (!process.client) return;

      gsap.set(this.$refs.popup, {
        autoAlpha: 0
      })

      // let tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: "#app .block-image",
      //     start: "top center",
      //     once: "once",
      //     onUpdate: () => {

      //     }
      //   }
      // })

      // tl.to({}, {
      //   duration: 1,
      //   // autoAlpha: 1,
      //   // delay: 1,
      //   onUpdate: () => {
          
      //     gsap.to(this.$refs.popup, {
      //       duration: 1,
      //       autoAlpha: 1,
      //       delay: 1,
      //       onStart: () => {
      //         this.$refs.popup.classList.add('popup-has-triggered')
      //       }
      //     })          
      //   }
      // });
      let popup=this.$refs.popup
      if (popup) {
        ScrollTrigger.create({
          trigger: "#app .block-image",
          start: "top center",
          once: "once",
          onToggle: () => {
            console.log('onToggle')
            if (popup.classList.contains('popup-has-triggered')) return;
            // this.show()
            gsap.to(popup, {
              duration: 0.5,
              autoAlpha: 1,
              delay: 0.5,
              onStart: () => {
                console.log('onStart', popup)
                popup.classList.add('popup-has-triggered')
              }
            })
          }
        })
      }
    },
    // show () {
    //   if (!process.client) return;
    //   let popup=this.$refs.popup
    //   if (popup) {
    //     gsap.to(popup, {
    //       duration: 1,
    //       autoAlpha: 1,
    //       delay: 0.5,
    //       onStart: () => {
    //         console.log('onStart', popup)
    //         popup.classList.add('popup-has-triggered')
    //       }
    //     })
    //   }
    // },
    hide () {
      if (!process.client) return;
      gsap.set(this.$refs.popup, {
        // y: '100%',
        autoAlpha: 0
      })
      // this.$router.replace({ hash: '#' })

    },
  }
}
</script>

<style lang="scss" scoped>
.app-pop-up {
  @apply fixed shadow-xl m-auto;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 999999;
  max-width: 100%;
  width: 100%;
  padding: 2rem;

  @screen lg {
    padding: 2rem 3rem;
    width: 40rem;
  }

  h4 {
    font-size: 1.5rem;
    @screen lg {
      font-size: 2rem;
    }
  }
}
</style>
