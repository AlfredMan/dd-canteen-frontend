<template>
  <section class="block-video"
  v-if="block && block.fields"
  >
    <div class="ratio-container">
      <div class="iframe-wrapper">
        <iframe :src="this.videoSource" width="" height=""></iframe>
      </div>
    </div>

  </section>
</template>

<script>
import _ from 'lodash'
export default {
  props: ['block'],

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
  height: 56vw;
  @screen xl {
    height: 50rem;
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
</style>
