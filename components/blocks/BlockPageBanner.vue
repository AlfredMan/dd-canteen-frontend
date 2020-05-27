<template lang="html">
  <transition-link :to='to' class="block-page-banner">
    <div class="container-fluid position-relative bg-dark text-white" :style="getBannerStyle">
      <div
      class="on-hover-fade-0 banner-background"
      :style="`background-image:url(${background})`"
      >

      </div>
      <div class="disable-click banner-content container-fluid py-5">
        <div class="row">
          <div class="col-12 col-md-7 pr-md-5 mb-5 px-0 px-md-4 py-0 py-md-2">
            <h2 v-if="heading">{{heading}}</h2>
            <h4 v-if="subHeading">{{subHeading}}</h4>
            <h5 class="mt-5" v-if="action">{{action}}</h5>
          </div>
          <div class="col-12 col-md-5 px-4">
          </div>
        </div>
      </div>
    </div>
  </transition-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String
    },
    background: {
      type: String
    },
    ratio: {
      type: Number,
      default: 4
    },
    heading: {
      type: String
    },
    subHeading: {
      type: String
    },
    action: {
      type: String
    }
  },
  methods: {
    getBannerStyle () {
      return {
        'min-height': `${100 / +this.ratio}vw`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.block-page-banner {

  .banner-background {
    background-size:cover;
    background-size:cover;
    opacity: 0.5;
    z-index: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .banner-content {
    z-index: 1;
  }
}
</style>
