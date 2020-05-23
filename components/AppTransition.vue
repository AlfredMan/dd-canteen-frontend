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
      this.in()
    }
  },
  mounted () {
    this.setup()
  },
  methods: {
    reset () {
      gsap.set('.box', {
        autoAlpha:0
      })
    },
    setup () {
      this.reset ()
      this.tl = gsap.timeline()
      this.tl.pause()
      this.tl.set('.box', {
        autoAlpha:0
      })
      this.tl.to('.box', {
        autoAlpha:1,
        duration:0.2,
        ease: "power3.out"
      })
      this.tl.to('.box', {
        autoAlpha:0,
        delay: 0.5,
        duration: 0.5,
        ease: "power2.inOut"
      })
    },
    in () {
      this.tl.seek(0)
      this.tl.play()
      // tl.fromTo('.box', {
      //   y:'-100%'
      // },{
      //   duration: 2,
      //   ease: "power1.out",
      //   stagger: {
      //     amount: 0.1
      //   },
      //   y:'100%'
      // })
    }
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
    margin: auto;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: $primary;
    // backdrop-filter: blur(50px);
  }
}
</style>
