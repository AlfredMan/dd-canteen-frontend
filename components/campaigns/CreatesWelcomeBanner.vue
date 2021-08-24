<template lang="html">

  <div class="full-screen-banner fixed z-50 inset-0 bg-green text-white leading-none text-center" >
    <div class="absolute" style="font-size:8vw; font-weight:400; top: 50%; left:50%; transform: translate(-50%, -50%); width:100%;">
      Creativity takes off —<br>join us for&nbsp;the&nbsp;launch. 
    </div>
  </div>

</template>

<script>
import gsap from 'gsap'
export default {
  mounted () {
    if (process.client) {
      gsap.to('.full-screen-banner', {
        autoAlpha: 0, duration: 0.5, delay: 0
      });  
    }
  }
}
</script>

<style lang="css">
</style>
