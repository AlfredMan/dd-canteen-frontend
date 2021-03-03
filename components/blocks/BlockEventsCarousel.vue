<template lang="html">
  <div class="bg-black text-white pt-12 pb-12  overflow-hidden" id="events" v-if="entries">
    <div class="px-3 cap-max-w">
      <h2 class="uppercase max-w-2xl w-full">Events</h2>
    </div>
    <div class="bg-black">
      <image-slideshow
      class="w-100 py-0 carousel carousel-uniform-height-carousel-uniform-height-sm cap-max-w"
      :overflow="'visible'"
      :options="slideshowOptions"
      >
        <div class="w-10/12 md:w-1/3 lg:w-1/4 xl:w-1/4 pl-4 my-4 item" v-for="entry in entries" :key="entry.sys.id">

          <a v-if="entry.fields.link && entry.fields.link.length>1" :href="entry.fields.link"  target="_blank" rel="nofollow">
            <lazy-image
            :src="entry.fields.thumbnailImage && entry.fields.thumbnailImage.fields.file.url"
            :w="1000"
            :h="1000"
            :custom="'f=center'"
            />
            <h4 class="uppercase mb-3">{{entry.fields.title}}</h4>
          </a>

          <div v-else>
            <lazy-image
            :src="entry.fields.thumbnailImage && entry.fields.thumbnailImage.fields.file.url"
            :w="1000"
            :h="1000"
            :custom="'f=center'"
            />
            <h4 class="uppercase mb-3">{{entry.fields.title}}</h4>
          </div>

          <h5 v-if="entry.fields.startDate">{{getDataTime(entry.fields.startDate)}}</h5>
          <p>{{entry.fields.description}}</p>

        </div>
      </image-slideshow>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'BlockEventsCarousel',

  data () {
    return {
      slideshowOptions: {
        selector: '.item',
        cellAlign: 'left',
        draggable: true,
        pageDots: false,
        prevNextButtons: false,
        pauseAutoPlayOnHover: true,
        setGallerySize: true,
        bgLazyLoad: 1,
        wrapAround: false, // true
        freeScroll: true,
        imagesLoaded: true,
        autoPlay: false,
        selectedAttraction: 0.01,
        friction: 0.15,
        contain: true,
        // adaptiveHeight: true,
        arrowShape: {
          x0: 10,
          x1: 45, y1: 35,
          x2: 10, y2: 0,
          x3: 95
        },
        initialIndex: 0
      }
    }
  },

  computed: {
    entries () {
      // return _.sampleSize(studios, 4)
      // return studios
      return this.$store.state.events
    }
  },

  methods: {
    getDataTime (date, endDate) {
      // let default = '12:00:00'
      let format = 'D MMM'
      if (date && !endDate) {
        return `${moment(date).format(format)}`
      } else
      if (!date && endDate) {
        return `${moment(endDate).format(format)}`
      } else
      if (date && endDate) {
        return `${moment(date).format(format)}—${moment(endDate).format(format)}`
      } else {
        return ``
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  overflow-x: visible;

  &.can-fullscreen {
    .item {
      cursor: zoom-in;
    }
  }
}
a {
  &:hover {
    @apply text-green
  }
}
</style>
