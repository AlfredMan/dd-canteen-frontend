<template lang="html">

  <div class="full-screen-banner fixed z-50 inset-0 bg-green text-white leading-none text-center" >
    <div class="absolute" style="font-size:10vw; font-weight:400; top: 50%; left:50%; transform: translate(-50%, -50%); width:100%;">
      Welcome to<br>Design District ☺
    </div>
  </div>

</template>

<script>
export default {
  mounted () {
    gsap.to('.full-screen-banner', {
      autoAlpha: 0, duration: 0.5, delay: 0
    });
  }
}
</script>

<style lang="css">
</style>
