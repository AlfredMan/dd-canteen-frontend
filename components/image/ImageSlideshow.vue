<template lang="html">
  <div
  v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
  class="flickity-wrapper"
  >
    <client-only>
      <Flickity :options="flickityOptions" class="flickity" ref="flkty" :class="{
        'dragging': isDragging
        }">
        <div v-for="item in items" class="item">
          <router-link :to="`/architecture/${item.slug}`">
            <lazy-image
            :src="item.imagesPractice[0].url"
            :h="2000"
            />
            <h5>{{ item.title }}</h5>
          </router-link>
        </div>
        <!-- <div
        class="flickity-item container"
        v-for="(item, index) in carousel"
        :key="item.id"
        >
          <figure>
            <lazy-image
            :src="item.image"
            :w="1000"
            :h="1000"
            />
            <figcaption
            v-if="item.caption"
            >
              {{item.caption}}
            </figcaption>
          </figure>
        </div> -->
        <slot></slot>
      </Flickity>
    </client-only>
  </div>
</template>

<script>
import { gsap } from "gsap";

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
    }
  },
  data () {
    return {
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
      this.$store.dispatch('openCarousel', { block, index })
    },
    initFlickityControl () {
      if (process.client) {
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
          console.log(flkty.selectedIndex(), cellIndex)
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
</style>
