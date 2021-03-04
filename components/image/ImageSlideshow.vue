<template lang="html">
  <div
  v-show="hasInit"
  v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
  class="flickity-wrapper"
  :class="{
    'overflow-visible': overflow=='visible'
    }"
  >
    <Flickity
    :options="flickityOptions" class="flickity" ref="flkty" :class="{
      'dragging': isDragging
      }">
      <slot></slot>
    </Flickity>
  </div>
</template>

<script>
import { gsap } from "gsap";
import _ from "lodash";

export default {
  props: {
    carousel: {
      type: Object,
    },
    items: {
      type: Object
    },
    size: {
      type: String,
      default: 'default'
    },
    start: {
      type: Number,
      default: 0
    },
    options: {
      type: Object
    },
    ratio: {
      type: String,
      default: 'auto'
    },
    overflow: {
      type: String,
      default: 'hidden'
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
  },
  watch: {
    fullscreen (newVal, oldVal) {
      this.resize()
    }
  },
  data () {
    return {
      hasInit: false,
      isDragging: false,
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [.6, .8] // [0.25, 0.75] if you want a 25% offset!
      },
      hasAnimated: false
    }
  },
  computed: {
    flickityOptions () {
      let defaultOptions = {
        selector: '.carousel-item',
        draggable: true,
        pageDots: false,
        prevNextButtons: false,
        pauseAutoPlayOnHover: true,
        setGallerySize: true,
        bgLazyLoad: 1,
        wrapAround: true, // true
        freeScroll: true,
        imagesLoaded: true,
        autoPlay: 6000,
        selectedAttraction: 0.01,
        friction: 0.15,
        resize: true,
        // adaptiveHeight: true,
        arrowShape: {
          x0: 10,
          x1: 45, y1: 35,
          x2: 10, y2: 0,
          x3: 95
        },
        initialIndex: this.start || 0
      }
      return this.options || defaultOptions
    }
  },
  mounted () {
    if (process.client) {
      this.initFlickityControl()
    }
  },
  methods: {
    openCarousel (block, index) {
      if (process.client) {
        this.$store.dispatch('openCarousel', { block, index })
      }
    },
    resize () {
      if (process.client) {
        let flkty = this.$refs.flkty
        if (!flkty) {
          // console.log('flkty not found')
          return
        }
        // console.log('resize')
        flkty.resize();

        // setTimeout(()=>{
        //   flkty.resize();
        // },100)
      }
    },
    viewFullscreen () {
      if (process.client) {
        let flkty = this.$refs.flkty
        if (!flkty) {
          console.log('flkty not found')
          return
        }
        flkty.viewFullscreen();
      }
    },
    exitFullscreen () {
      if (process.client) {
        let flkty = this.$refs.flkty
        if (!flkty) {
          console.log('flkty not found')
          return
        }
        flkty.exitFullscreen();
      }
    },
    initFlickityControl () {
      if (process.client) {
        this.hasInit = true
        let flkty = this.$refs.flkty
        if (!flkty) {
          console.log('flkty not found')
          return
        }
        console.log('flkty', flkty)
        flkty.on('dragStart', () => this.isDragging = true);
        flkty.on('dragEnd', () => this.isDragging = false);
        flkty.on( 'staticClick', ( event, pointer, cellElement, cellIndex ) => {
          // console.log(event, pointer, cellElement, cellIndex)
          console.log(flkty.selectedIndex(), cellIndex, cellElement)
          // if (flkty.selectedIndex() == cellIndex) {
          //   this.openCarousel(this.block, cellIndex)
          // } else {
          //   flkty.select( cellIndex )
          // }
        });
      }
      // flkty.reloadCells()
    },
    getFlickityItemImageWrapperClass () {
      return ['col-12', 'col-sm-6', 'col-lg-6', 'px-sm-2']
    },
    onWaypoint ({ el, going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        // console.log('waypoint going in!')
      }
      if (direction === this.$waypointMap.DIRECTION_TOP) {
        // console.log('waypoint going top!')
      }
      // this.log(`#${el.getAttribute('id')} is ${this.wrapSpan(going)} viewport, direction: ${this.wrapSpan(direction)}`)
      el.classList.toggle('active', this.$waypointMap.GOING_IN === going)

      this.resize()
      this.animate()
    },
    animate () {
      if (process.client) {
        if (!this.hasAnimated) {
          this.hasAnimated = true
          let flkty = this.$refs.flkty
          // debugger
          console.log(flkty)

          // flkty.destroy()
          // flkty = new Flickity(this.$refs.flkty)

          // let items = flkty.querySelectorAll('.item')
          let items = flkty.cells()
          let cells = _.map(items, (item) => item.element)
          // this.reset ()
          this.tl = gsap.timeline()
          this.tl.pause()
          this.tl.set(cells, {
            y:'10%',
            autoAlpha: 0.5
          })
          this.tl.to(cells, {
            autoAlpha: 1,
            y:'0%',
            duration: 3,
            ease: "power3.out",
            stagger: {
              amount: 0.5
            },
          })
          this.tl.play()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dragging .item a {
  pointer-events: none;
  background: red;
}
</style>
