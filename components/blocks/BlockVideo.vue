<template>
  <section class="block-video"
  v-if="block && block.fields"
  >
    <div class="ratio-container">
      <div class="iframe-wrapper">
        <iframe :src="this.videoSource" width="" height=""></iframe>
      </div>
    </div>

    <div @click="go" class="full-screen-banner-action inset-x-0 bottom-0 m-4 text-center uppercase text-white z-10 transition transition-all duration-200 ease-in-out cursor-pointer transform hover:-translate-y-1" style="font-weight:500; letter-spacing:1px;">
      View Offer <br>
      ↓
    </div>

  </section>
</template>

<script>
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js'
gsap.registerPlugin(ScrollToPlugin)

import _ from 'lodash'
export default {
  props: ['block'],

  methods: {
    go() {
      gsap.to(window, {duration: 0.5, scrollTo:"#the-offer", ease: 'power2.inOut'});
      gsap.to('.full-screen-banner-action', {autoAlpha: 0, duration: 0.2});
    },
  },

  computed: {
    videoSource () {
      return this.block && this.block.fields.videoUrl || ''
    },
    isIFrame () {
      return this.block && this.videoSource && _.includes(this.videoSource, 'player.vimeo')
    },
    isVideo () {
      return this.block && this.videoSource && _.includes(this.videoSource, '.mp4')
    }
  }
}
</script>

<style lang="scss" scoped>
.block-video {
  overflow: hidden;
  position: relative;
  // height: 56vw;
  height: 45vw;
  @screen xl {
    height: 40rem;
  }

  .ratio-container {
    width: 100%;
    padding-bottom: 56.25%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .iframe-wrapper {
    display: block;
    @apply absolute inset-0;
    width: 100%;
    iframe {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}

.full-screen-banner-action {
  position: absolute;
}
@media (min-aspect-ratio: 2.5/1) {
  .full-screen-banner-action {
    position: fixed;
  }
}
</style>
