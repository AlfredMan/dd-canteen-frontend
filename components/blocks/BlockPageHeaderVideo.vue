<template>
  <section class="" v-if="block">
    <div class="video-wrapper">
      <div class="iframe-wrapper">
        <iframe style="" src="https://player.vimeo.com/video/421875361?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0&background=1" width="640" height="299" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    </div>
    <div class="relative sm:absolute bottom-0 inset-x-0 text-black sm:text-white px-4 py-12">
      <h1 v-if="block.fields.heading">{{block.fields.heading}}</h1>
      <h4 v-if="block.fields.subheading">{{block.fields.subheading}}</h4>
      <callToAction v-if="block.fields.callToAction" :callToAction="block.fields.callToAction"/>
    </div>
  </section>
</template>

<script>
// import ComponentCallToAction from '~/components/blocks/ComponentCallToAction'
export default {
  props: ['block'],

  // components: { ComponentCallToAction }
}
</script>

<style lang="scss" scoped>
section {
  @apply relative;
  h1, h4 {
    text-shadow: 0 0 3rem rgba(0,0,0,0.3);
  }
}
.video-wrapper {

}

</style>
