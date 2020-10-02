<template lang="html">
  <div class="box-transition">
    <div class="box" style="opacity: 0; visibility: hidden;">

      <svg id="transition-arrow-tail" class="transition-arrow" width="670px" height="670px" viewBox="0 0 670 670" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Plan" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-4">
                  <g id="Group-2">
                      <rect id="Rectangle" fill="none" x="0" y="0" width="670" height="670"></rect>
                      <polygon id="Fill-183-Copy-2" fill="#33cf6e" transform="translate(491.000000, 335.000000) rotate(-270.000000) translate(-491.000000, -335.000000) " points="156 156.719671 826 156.719671 826 513.280329 490.992485 178.287843 156 513.280329"></polygon>
                  </g>
              </g>
          </g>
      </svg>

      <svg id="transition-arrow-head" class="transition-arrow" width="670px" height="670px" viewBox="0 0 670 670" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Plan" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-5">
                  <g id="Group-3">
                      <rect id="Rectangle" fill="none" x="0" y="0" width="670" height="670"></rect>
                      <polygon id="Fill-183" fill="#33cf6e" transform="translate(176.000000, 335.000000) rotate(-270.000000) translate(-176.000000, -335.000000) " points="-159 511 511 511 511 493.227721 175.992485 159 -159 493.227721"></polygon>
                  </g>
              </g>
          </g>
      </svg>

    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  watch: {
    '$route' (newVal, oldVal) {
      console.log('trans', newVal, oldVal)
      // this.in()
    },
    transitionStep (newVal, oldVal) {
      console.log('transitionStep', newVal, oldVal)
      if (newVal == 1) {
        this.$nextTick(() => {
          this.playFull()
        })
      }
    }
  },
  computed: {
    transitionStep () {
      return this.$store.state.transition.step
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    },
    transitionDelay () {
      return this.$store.state.transition.delay
    },
    transitionSourceElement () {
      return this.$store.state.transition.sourceElement || null
    },
    transitionSourceElementRect () {
      return this.$store.state.transition.sourceElementRect || null
    }
  },
  mounted () {
    this.resetBoxStyle()
    // this.tl.pause()
  },
  methods: {
    resetBoxStyle () {
      gsap.set('.box', {
        autoAlpha:0,
        // x: '0%'
        top: 0,
        right: '100%',
        bottom: 0,
        left: 0,
      })
    },
    setupTimeline () {
      const inDelay = 0
      const inDur = this.transitionDelay/1000
      const fadeDur = 0.1
      const outDelay = 0.1
      const outDur = (inDur + outDelay)
      const srcRect = this.$store.state.transition.sourceElementRect || null

      // clear the store's
      this.$store.dispatch('resetRouteTransitionSourceRect')

      console.log('srcRect', srcRect)
      // this.resetBoxStyle ()
      this.tl = gsap.timeline()
      this.tl.pause()

      const hasSrcRect = srcRect ? true : false

      let rect = hasSrcRect ? srcRect : {
        top: 0,
        left: 0,
        width: '0%',
        height: '100%'
      }
      let boxPos = {
        top: rect.top || 0,
        left: rect.left || -document.getElementById('transition-arrow-head').clientWidth - 50,
        width: rect.width || '0%',
        height: rect.height || '100%',
      }

      this.tl.set(['#transition-arrow-head'], {
        opacity: function () {
          return hasSrcRect ? 0 : 1
        },
      })
      this.tl.set(['#transition-arrow-tail'], {
        opacity: function () {
          return 0
        },
      })

      this.tl.set('.box', {
        autoAlpha:0,
        // background: 'green',
      })

      this.tl.to('.box', {
        duration: 0,
        // x: '-100%',
        top: boxPos.top,
        left: boxPos.left,
        width: boxPos.width,
        height: boxPos.height,
        force3D: true,
        // background: 'red',
      }, "boxSetPos")

      this.tl.to('.box', {
        autoAlpha: 1,
        duration: fadeDur,
      }, "boxReveal")

      this.tl.to('.box', {
        // autoAlpha:1,
        delay: inDelay,
        duration: inDur,
        // x: '0%',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        force3D: true,
        // background: 'yellow',
        ease: "power3.inOut"
      }, "boxEnter")

      this.tl.set(['#transition-arrow-head'], {
        opacity: 1
      })

      this.tl.to('.box', {
        // autoAlpha:0,
        delay: outDelay,
        duration: outDur,
        top: 0,
        // left: '100%',
        left: () => {
          return window.innerWidth + document.getElementById('transition-arrow-tail').clientWidth + 50
        },
        force3D: true,
        // background: 'blue',
        ease: "power1.out"
      }, "boxLeave")
      // this.tl.set('.box', {
      //   autoAlpha:0
      // })
    },
    playFull () {
      // this.getSourceElement()
      // this.tl.seek("boxReset")
      // this.tl.play()
      this.setupTimeline()
      this.tl.play()
    },
    playLeave () {
      this.setupTimeline()
      this.tl.seek("boxPreEnter")
      this.tl.play()
    },
    // getSourceElement () {
    //   if(this.transitionSourceElementRect) {
    //     console.log(this.transitionSourceElementRect)
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.box-transition {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // opacity: 0.5;
  z-index: 9999999;
  pointer-events: none;

  .box {
    position: absolute;
    // margin: auto;
    // height: 100%;
    // width: 100%;
    // top: 0;
    // left: 0;
    background: $primary;
    // backdrop-filter: blur(50px);
    svg#transition-arrow-tail {
      display: block;
      position: absolute;
      top: 0;
      right: 100%;
      bottom: 0;
      height: 100vh;
      width: 100vh;
      margin-right: -10px;
      // display: none;
    }
    svg#transition-arrow-head {
      display: block;
      position: absolute;
      top: 0;
      left: 100%;
      bottom: 0;
      height: 100vh;
      width: 100vh;
      margin-left: -10px;
      // display: none;
    }
  }
}
</style>
