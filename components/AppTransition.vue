<template lang="html">
  <div class="box-transition">
    <div class="box">

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
    // this.setupTimeline()
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

      let rect = srcRect
      let boxPos = {
        top: rect?.top || 0,
        left: rect?.left || 0,
        width: rect?.width || '0%',
        height: rect?.height || '100%'
      }

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
      this.tl.to('.box', {
        // autoAlpha:0,
        delay: outDelay,
        duration: outDur,
        top: 0,
        left: '100%',
        force3D: true,
        // background: 'blue',
        ease: "power3.in"
      }, "boxLeave")
      // this.tl.set('.box', {
      //   autoAlpha:0
      // })
      this.tl.play()
    },
    playFull () {
      // this.getSourceElement()
      // this.tl.seek("boxReset")
      // this.tl.play()
      this.setupTimeline()
    },
    playLeave () {
      this.tl.seek("boxLeave")
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
  z-index: 9999;
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
  }
}
</style>
