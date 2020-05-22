<template lang="html">
  <div class="ratio-container" :style="getContainerStyle()">
    <img
        data-sizes="auto"
        :src="getSrc()"
        :data-srcset="getLazySrcSet()"
        :data-src="getLazySrc()"
        class="lazyload" />
  </div>
</template>

<script>
export default {
  props: {
    w: {
      type: Number,
      default: null,
    },
    h: {
      type: Number,
      default: null,
    },
    src: {
      type: String,
      default: '',
    },
    fm: {
      type: String,
      default: 'jpg',
    },
    q: {
      type: Number,
      default: 80,
    },
    custom: {
      type: String,
      default: '',
    }
  },
  data () {
    return {
      sizes: {
        xs: 400,
        sm: 640,
        md: 900,
        lg: 1200,
        xl: 1600
      }
    }
  },
  computed: {
    ratio () {
      return this.h/this.w
    }
  },
  methods: {
    getSrc () {
      return `${this.src}?fm=jpg&q=10${this.getDimParam(10)}&${this.custom}`
    },
    getLazySrc (size = 'sm') {
      return `${this.src}?fm=jpg&q=80${this.getDimParam(this['sizes'][size])}&${this.custom}`
    },
    getLazySrcSet () {
      return `
        ${this.getSrcForSet('xl')},
        ${this.getSrcForSet('lg')},
        ${this.getSrcForSet('md')},
        ${this.getSrcForSet('sm')},
        ${this.getSrcForSet('xs')}
      `
    },
    getSrcForSet (size = 'xl') {
      return `${this.src}?fm=jpg&q=80${this.getDimParam(this['sizes'][size])}&${this.custom} ${this['sizes'][size]}w`
    },
    getDimParam (width) {
      let dim = ''
      if (this.w && this.h) {
        dim += `&w=${width}`
        dim += `&h=${this.ratio*width}`
      } else {
        if (this.w) {
          dim += `&w=${width}`
        }
        // if (this.h) {
        //   dim += `&h=${this.h}`
        // }
      }

      return dim
    },
    getContainerStyle () {
      // if (this.w && this.h) {
      //   return {'padding-bottom': `${100*this.h/this.w}%`, 'height': 0}
      // } else {
      //   return {}
      // }
      return {}
    }
  }
}
</script>

<style lang="scss" scoped>
.ratio-container {
    position: relative;
    overflow: hidden;
}
.ratio-container > * {
    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 100%;
    // height: 100%;
    display: block;
}
img {
  &.lazyload {
    -webkit-filter: blur(30px);
    opacity: 0.5;
  }
  &.lazyloaded {
    -webkit-filter: none
  }
  &[data-sizes="auto"] {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
