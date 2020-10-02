<template lang="html">
  <div class="lazy-image ratio-container" :class="getContainerClass()">
    <img
        data-sizes="auto"
        :src="getSrc()"
        :data-srcset="getLazySrcSet()"
        :data-src="getLazySrc()"
        class="lazyload" />
    <div class="curtain">

    </div>
  </div>
</template>

<script>
import _ from 'lodash'
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
    },
    fit: {
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
    },
    ctfSrc () {
      return _.replace(this.src, 'downloads.ctfassets.net', 'images.ctfassets.net')
    }
  },
  methods: {
    getSrc () {
      return `${this.ctfSrc}?fm=jpg&q=10${this.getDimParam(10)}&${this.custom}`
    },
    getLazySrc (size = 'sm') {
      return `${this.ctfSrc}?fm=jpg&q=80${this.getDimParam(this['sizes'][size])}&${this.custom}`
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
      return `${this.ctfSrc}?fm=jpg&q=80${this.getDimParam(this['sizes'][size])}&${this.custom} ${this['sizes'][size]}w`
    },
    getDimParam (width) {
      let dim = ''
      if (this.w && this.h) {
        dim += `&w=${_.round(width)}`
        dim += `&h=${_.round(this.ratio*width)}`
      } else {
        if (this.w) {
          dim += `&w=${_.round(width)}`
        }
        // if (this.h) {
        //   dim += `&h=${this.h}`
        // }
      }

      return dim
    },
    getContainerClass () {
      if (this.fit == 'cover') {
        return [
          'fit-cover'
        ]
      }
      if (this.fit == 'contain') {
        return [
          'fit-contain'
        ]
      }
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
    &.fit-cover {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &.fit-contain {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
}
.ratio-container > * {
    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 100%;
    // height: 100%;
    display: block;
}
.curtain {
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .75s ease opacity .3s;
  // background: $secondary;
  background: $primary;
  pointer-events: none;
}
/*! purgecss start ignore */
img {
  position: relative;
  z-index: 1;
  &.lazyload {
    // -webkit-filter: blur(30px);
    // opacity: 0.5;
    ~ .curtain {
      // background: $secondary;
      opacity: 1;
    }
  }
  &.lazyloaded {
    // -webkit-filter: none
    ~ .curtain {
      opacity: 0;
    }
  }
  &[data-sizes="auto"] {
    display: block;
    width: 100%;
    height: auto;
  }
}
/*! purgecss end ignore */

</style>
