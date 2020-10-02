<template>
  <section class="block-page-header-video" v-if="block">
    <div class="video-wrapper">
      <div class="iframe-wrapper">
        <iframe style="" src="https://player.vimeo.com/video/421875361?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0&background=1" width="640" height="299" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    </div>
    <div class="relative sm:absolute bottom-0 inset-x-0 text-black sm:text-white px-3 py-12 cap-max-w">
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
  h1 {
    @apply font-normal;
    line-height: 1.1;
  }
  h1, h4 {
    text-shadow: 0 0 3rem rgba(0,0,0,0.3);
  }
}
.block-page-header-video {
  // @apply cap-max-w;
  overflow: hidden;
  max-height: 800px
}
.video-wrapper {
  width: 100%;
  // height: 80vh;
  // height: 50vw;
  // max-height: 600px;
  height: 0;
  padding-bottom: 66%;
  position: relative;
  overflow: hidden;

  @include media-breakpoint-up(sm) {
    padding-bottom: 46.5%;
  }

  .iframe-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    iframe {
      width: 100%;
      height: 100%;
      transform: scale(2.15);

      @include media-breakpoint-up(sm) {
        transform: scale(1.01)
      }
    }
  }

}

</style>
