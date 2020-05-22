<template>
  <div class="">
    <!--  -->
      <div class="line-wrapper" :style="lineWrapperStyle()" ref="line">
        <div class="line">
          {{`${this.lineHeightMax - this.lineHeightMin + this.scrollK * this.lineHeightMin}px`}}
        </div>
      </div>

  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      scrollK: 1,
      scrollThreshold: 400,
      lineHeightMax: 400,
      lineHeightMin: 200
    }
  },
  created () {
    this.$store.dispatch('updateNavigationTheme', { theme: 'light' })
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll, { capture: false, passive: true});
    }
  },
  destroyed () {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    lineWrapperStyle () {
      return {
        height: `${this.lineHeightMax - this.lineHeightMin + this.scrollK * this.lineHeightMin}px`
      }
    },
    handleScroll: _.throttle(function (event) {
      if (process.client) {
        let scrollY = window.scrollY

        var element = this.$refs.line;
        var topPos = element.getBoundingClientRect().top + window.scrollY;
        var leftPos = element.getBoundingClientRect().left + window.scrollX;

        let threshold = this.scrollThreshold
        let k = Math.min(threshold - scrollY, threshold) / threshold
        this.scrollK = k;
        // console.log(topPos, leftPos)
        // if (scrollY <= 2) {
        //   this.menuIsAtTop = true
        // } else {
        //   this.menuIsAtTop = false
        // }
      }
    }, 0),
  }
}
</script>

<style lang="scss" scoped>
.line-wrapper {
  // height: 300px;
  width: 100%;
  margin: 2rem 0;
  transition: 100ms linear all;
}
.line {
  width: 100%;
  height: 100%;
  background: linear-gradient(to top right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgba(0,0,0,1) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)
}
</style>
