<template lang="html">
  <div class="workspace-building mt-24 bg-white" v-if="building" :key="slug">

    <div class="px-3 flex align-center items-center cap-max-w">
      <nuxt-link class="monospace" :to="'/workspace'">Work Space</nuxt-link> <span class="mx-2">></span>
      <span class="underline monospace">
        {{building.fields.title}}: {{building.fields.architecture[0].fields.title}}
      </span>
    </div>


    <h1 class="px-3 mt-6 my-4 flex items-baseline building-title cap-max-w">
      <span class="inline-block mr-6 building-name font-medium -ml-2">{{building.fields.title}}</span>
      <span class="inline-block text-green uppercase building-architect">{{building.fields.architecture[0].fields.title}}</span>
    </h1>


    <div class="px-3 my-4 mb-8 tags cap-max-w">
      <div class="tag" v-for="spaceType in building.fields.spaceType" :key="spaceType.sys.id">
        {{spaceType.fields.title}}
      </div>
      <div class="tag">
        {{numberWithCommas(building.fields.minSize)}}–{{numberWithCommas(building.fields.maxSize)}} Sqft
      </div>
    </div>


    <div class="flex flex-wrap cap-max-w">

      <div class="w-full lg:w-2/3">
        <!-- <nuxt-link :to="`/workspace/building/${building.fields.title}`" > -->
          <lazy-image
          :src="building.fields.thumbnailImageAsset[0].fields.file.url"
          :w="1000"
          :h="1000"
          :custom="'fit=thumb&f=center'"
          />
        <!-- </nuxt-link> -->
      </div>

      <div class="w-full lg:w-1/3 bg-gray-100 p-6 pt-4">

        <div class="relative w-full">
          <h4 class="inline-block font-medium text-6xl mb-4">{{building.fields.title}}</h4>
          <div
          class="absolute top-0 right-0 -bg-white border-1 rounded-full -shadow transition duration-300 mr-3"
          >
            <div
            class="flex align-center items-center items-end px-0 py-2 text-lg rounded-lg bg-opacity-50 hover:underline cursor-pointer"
            >
              <div class="relative w-4 h-4 mr-2">
                <IconBox class=""/>
              </div>
              Show on Map
            </div>
          </div>
        </div>

        <h4 class="text-3xl my-4">
          {{building.fields.shortDescription}}
        </h4>

        <div class="my-8 mt-12">
          <h3>Interested in this building?</h3>
          <p class="mb-2">Tell us about your requirements, and we’ll be in touch.<br>Or call us on +44 (0)20 3981 2426</p>
          <nuxt-link to="/enquire" class="inline-block mt-2 px-2 py-2 leading-5 bg-green text-white uppercase">Book a visit</nuxt-link>
        </div>

        <!-- <div class="flex my-2">
          <div class="mr-3">Sqft. {{building.fields.minSize}}–{{building.fields.maxSize}}</div>
          <div class="mr-3 flex"><IconPerson class="inline text-xs self-center mr-2" /><span>{{building.fields.people}} people</span></div>
        </div> -->

      </div>

    </div>

    <div class="sticky-navigation">
      <div class="px-3 cap-max-w">
        <div class="current-building monospace">
          Building {{building.fields.title}}
        </div>
        <a @click.prevent="scrollTo('#photos')" href="#photos">Photos</a>
        <a @click.prevent="scrollTo('#location')" href="#location">Location</a>
        <a @click.prevent="scrollTo('#floorplans')" href="#floorplans">Floorplans</a>
        <a @click.prevent="scrollTo('#services-facilities')" href="#services-facilities">Services & Facilities</a>
        <a @click.prevent="scrollTo('#architecture')" href="#architecture">Architecture</a>
        <a @click.prevent="scrollTo('#events')" href="#events">Events</a>
      </div>
    </div>

    <div class="px-0 my-8 overflow-hidden" id="photos">
      <div class="cap-max-w">
        <h2 class="px-3 uppercase max-w-2xl w-full">Photos</h2>
      </div>

      <div
      class="bg-black"
      :class="{
        'fullscreen': photosFullscreen
        }"
      >

        <div class="fullscreen-close" @click="photosFullscreen=false" v-if="photosFullscreen">
          &times;
        </div>

        <image-slideshow
        class="w-100 py-8 can-fullscreen carousel carousel-uniform-height carousel-uniform-height-sm cap-max-w"
        :overflow="'visible'"
        :options="slideshowOptions"
        :fullscreen="photosFullscreen"
        >

          <div
          class="item w-2/3 lg:w-1/2 xl:w-1/4 px-6 my-4"
          v-for="image in building.fields.imageAssets"
          @click="photosFullscreen=true"
          :key="image.sys.id"
          >
            <lazy-image
            :src="image.fields.file.url"
            :w="1000"
            :h="1000"
            />
          </div>

        </image-slideshow>
      </div>

    </div>

    <div class="px-3 my-16 cap-max-w" id="location">
      <div class="flex items-baseline">
        <h2 class="uppercase inline-block">Location</h2>
        <a
        @click.prevent=""
        href=""
        target="_blank"
        class="inline-block ml-4 text-green text-base underline"
        >Show on 3D map</a>
      </div>
      <div class="w-full bg-black">
        <lazy-image
        src="https://images.ctfassets.net/xsmgpzj6d8er/2zCRdF5QZl8FqBQQM57Lom/1f4c7c7e6706f5c494a9cd32a0b164c6/dd-3d-map.png"
        :w="2000"
        />
      </div>
    </div>

    <div class="my-16 overflow-hidden" id="floorplans">

      <div class="flex items-baseline px-3 cap-max-w">
        <h2 class="uppercase inline-block">Floor plans</h2>
        <a
        v-if="building.fields.floorplanDownload && building.fields.floorplanDownload[0]"
        :href="building.fields.floorplanDownload[0].fields.file.url"
        target="_blank"
        class="inline-block ml-4 text-green text-base underline"
        >Download all</a>
      </div>

      <div
      class="bg-black"
      :class="{
        'fullscreen': floorplanFullscreen
        }"
      >

        <div class="fullscreen-close" @click="floorplanFullscreen=false" v-if="floorplanFullscreen">
          &times;
        </div>

        <image-slideshow
        class="w-100 py-8 can-fullscreen carousel carousel-uniform-height carousel-uniform-height-sm cap-max-w"
        :overflow="'visible'"
        :options="slideshowOptions"
        :fullscreen="floorplanFullscreen"
        ref="floorplanSlideshow"
        >

          <div
          class="item w-2/3 lg:w-1/2 xl:w-1/4 px-6 my-4"
          v-for="floorplan in building.fields.floorplans"
          :key="floorplan.sys.id"
          @click="floorplanFullscreen=true"
          >
            <lazy-image
            :src="floorplan.fields.file.url"
            :w="1000"
            :h="1000"
            />
          </div>

        </image-slideshow>
      </div>

    </div>

    <div class="px-3 my-16 overflow-hidden  cap-max-w" id="services-facilities">
      <h2 class="uppercase max-w-2xl w-full">Services & facilities</h2>
      <p class="max-w-lg w-full mb-6">Workshops and specialist tools right on your doorstep. Hire a recording studio, a pop-up space, meeting rooms or a test kitchen. Even a rooftop sports court.</p>
      <div class="flex flex-wrap -mx-6">
        <div class="w-full xl:w-1/3 px-6 mb-4" v-for="sf in building.fields.servicesFacilities">
          <p><strong>{{sf.fields.title}}</strong><br>
          {{sf.fields.description}}</p>
        </div>
        <!-- <div class="w-full xl:w-1/3 px-6">
          <p><strong>Workshops</strong><br>
          Often creative businesses need more than a desk. In the Design District you can access a range of workshops suited to your specialism. There’s a wood workshop, digital workshop, textile workshop, engineering workshop and an assembly space. Prototype or produce a new collection.</p>
        </div>
        <div class="w-full xl:w-1/3 px-6">
          <p><strong>Food hall and kitchen</strong><br>
            The food hall is the bustling heart of Design District — a place for eating, meeting, socialising and relaxing. In an airy, plant-filled transparent structure by SelgasCano, six independently run food stalls serve up innovative global fare to tenants, visitors and local residents. Design District is equipped with an industrial kitchen available to on-site event caterers. It also doubles as a test kitchen, available by prior arrangement to tenants working in the food and beverage industries.</p>
        </div>
        <div class="w-full xl:w-1/3 px-6">
          <p><strong>Rooftop basketball court </strong><br>
            The open-air basketball court occupies a commanding position, with high transparent walls affording views across The O2 and beyond. Crowning Architecture 00’s C2 building, the court hosts a range of sports and wellness activities, including basketball, HIIT and yoga. The space can be hired by Design District tenants and members of the public for everything from pop-up cinema events to photoshoots.</p>
        </div> -->
      </div>
    </div>

    <div class="px-3 my-16 cap-max-w" id="architecture">
      <h2 class="uppercase max-w-2xl w-full">Architecture</h2>
      <h4 class="max-w-xl w-full mb-4">
        The heart and soul of our locations, these lounges are living room-style spaces designed for creativity, comfort and productivity.
      </h4>
      <div class="flex flex-wrap -mx-6">
        <div class="w-full xl:w-2/3 px-6">
          <lazy-image
          :src="building.fields.thumbnailImageAsset[0].fields.file.url"
          :w="1000"
          :h="1000"
          :custom="'fit=thumb&f=center'"
          />
          <h3 class="uppercase">{{building.fields.architecture[0].fields.title}}</h3>
        </div>
        <div class="w-full xl:w-1/3 px-6">
        </div>

      </div>
    </div>

    <div class="bg-black text-white pt-12 pb-12  overflow-hidden" id="events">
      <div class=" cap-max-w">
        <h2 class="px-3 uppercase max-w-2xl w-full">Events</h2>
      </div>

      <div class="bg-black">
        <image-slideshow
        class="w-100 py-8 carousel carousel-uniform-height-carousel-uniform-height-sm cap-max-w"
        :overflow="'visible'"
        :options="slideshowOptions"
        >

        <div class="w-full lg:w-1/2 xl:w-1/4 px-6 my-4 item">
          <lazy-image
          :src="building.fields.thumbnailImageAsset[0].fields.file.url"
          :w="1000"
          :h="1000"
          :custom="'fit=thumb&f=center'"
          />
          <h4 class="uppercase mb-3">Placeholder</h4>
          <p>Fill in your details below to tell us what type of space you are after and the commercial opportunities at the Design District.</p>
        </div>

        <div class="w-full lg:w-1/2 xl:w-1/4 px-6 my-4 item">
          <lazy-image
          :src="building.fields.thumbnailImageAsset[0].fields.file.url"
          :w="1000"
          :h="1000"
          :custom="'fit=thumb&f=center'"
          />
          <h4 class="uppercase mb-3">Placeholder</h4>
          <p>Fill in your details below to tell us what type of space you are after and the commercial opportunities at the Design District.</p>
        </div>

        <div class="w-full lg:w-1/2 xl:w-1/4 px-6 my-4 item">
          <lazy-image
          :src="building.fields.thumbnailImageAsset[0].fields.file.url"
          :w="1000"
          :h="1000"
          :custom="'fit=thumb&f=center'"
          />
          <h4 class="uppercase mb-3">Placeholder</h4>
          <p>Fill in your details below to tell us what type of space you are after and the commercial opportunities at the Design District.</p>
        </div>

        <div class="w-full lg:w-1/2 xl:w-1/4 px-6 my-4 item">
          <lazy-image
          :src="building.fields.thumbnailImageAsset[0].fields.file.url"
          :w="1000"
          :h="1000"
          :custom="'fit=thumb&f=center'"
          />
          <h4 class="uppercase mb-3">Placeholder</h4>
          <p>Fill in your details below to tell us what type of space you are after and the commercial opportunities at the Design District.</p>
        </div>

        <div class="w-full lg:w-1/2 xl:w-1/4 px-6 my-4 item">
          <lazy-image
          :src="building.fields.thumbnailImageAsset[0].fields.file.url"
          :w="1000"
          :h="1000"
          :custom="'fit=thumb&f=center'"
          />
          <h4 class="uppercase mb-3">Placeholder</h4>
          <p>Fill in your details below to tell us what type of space you are after and the commercial opportunities at the Design District.</p>
        </div>

      </image-slideshow>
    </div>

      <!-- <div class="flex flex-wrap -mx-6 items-baseline">
        <div class="w-full lg:w-1/2 xl:w-1/4 px-6 my-4">
          <lazy-image
          :src="building.fields.thumbnailImageAsset[0].fields.file.url"
          :w="1000"
          :h="1000"
          :custom="'fit=thumb&f=center'"
          />
          <h4 class="uppercase mb-3">Placeholder</h4>
          <p>Fill in your details below to tell us what type of space you are after and the commercial opportunities at the Design District.</p>
        </div>

        <div class="w-full lg:w-1/2 xl:w-1/4 px-6 my-4">
          <lazy-image
          :src="building.fields.thumbnailImageAsset[0].fields.file.url"
          :w="1000"
          :h="1000"
          :custom="'fit=thumb&f=center'"
          />
          <h4 class="uppercase mb-3">Placeholder</h4>
          <p>Fill in your details below to tell us what type of space you are after and the commercial opportunities at the Design District.</p>
        </div>

        <div class="w-full lg:w-1/2 xl:w-1/4 px-6 my-4">
          <lazy-image
          :src="building.fields.thumbnailImageAsset[0].fields.file.url"
          :w="1000"
          :h="1000"
          :custom="'fit=thumb&f=center'"
          />
          <h4 class="uppercase mb-3">Placeholder</h4>
          <p>Fill in your details below to tell us what type of space you are after and the commercial opportunities at the Design District.</p>
        </div>

      </div> -->
    </div>




  </div>
</template>

<script>
// import EnquireForm from '~/components/forms/Enquire.vue'
// import EnquireForm from '~/components/forms/Enquire2.vue'
// import NewsletterForm from '~/components/forms/Newsletter.vue'
// import SpaceForm from '~/components/forms/SpaceForm.vue'
import { mapGetters } from 'vuex'
// import { buildings } from '~/common/buildings.js'
import _ from 'lodash'

import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Building',
  components: {
    // EnquireForm,
    // NewsletterForm,
    // SpaceForm
  },
  head () {
    return {
      title: 'Work Space',
      meta: [
        { hid: 'description', name: 'description', content: 'Design District will provide 150,000 sq ft of permanent workspace for everyone for London’s designers makers and creators. A place for total focus, shared stories and resources, new connections and collaboration.' }
      ]
    }
  },

  data () {
    return {
      photosFullscreen:false,
      floorplanFullscreen:false,
      spaceActive: false,
      mapActive: false,
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
        initialIndex: this.start || 0
      }
      // floorplans: [
      //   {
      //     url: require('~/assets/images/floorplans/A1-0-1.png')
      //   },
      //   {
      //     url: require('~/assets/images/floorplans/A1-1-1.png')
      //   },
      //   {
      //     url: require('~/assets/images/floorplans/A1-2-1.png')
      //   },
      //   {
      //     url: require('~/assets/images/floorplans/A1-3-1.png')
      //   }
      // ]
    }
  },

  created () {
    this.$store.dispatch('updateNavigationTheme', { theme: 'light' })
  },

  computed: {
    slug () {
      return this.$route.params.id
    },
    // space () {
    //   return this.$store.getters.getSpaceBySlug(this.slug)
    // },
    building () {
      let b = this.slug && this.$store.getters.getBuildingBySlug(this.slug)
      console.log(b)
      return b
    },
    // architect () {
    //   return this.slug && this.$store.getters.getStudioByBuilding(this.slug)
    // },
    // space () {
    //   if (this.$store.spaces && this.slug) {
    //     return _.find(this.$store.spaces, (space) => space.slug === this.slug)
    //   }
    //   return null
    // }
    // formattedBuildings () {
    //   // console.log('buildings', buildings)
    //   return _.map(buildings, (b) => {
    //     b.type = _.sample(['Meeting Room', 'Popup', 'Photo Studio', 'Roof Top'])
    //     return b
    //   })
    // }
  },

  methods: {
    scrollTo (id) {
      console.log(id)
      if (process.client) {
        // gsap.to(window, {duration: 2, scrollTo: 400});
        // gsap.to(window, {
        //   duration: 1,
        //   scrollTo: {
        //     y: id,
        //     offsetY: 100
        //   }
        // });
        console.log('id', id)
        // // gsap.to(window, {duration: 2, scrollTo: {y: "#photos", offsetY: 50}});
        gsap.to(window, {duration: 0.5, scrollTo: {y: id, offsetY: 100}});
      }
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getFloorLabel (floor) {
      if (+floor == 0) {
        return 'Ground floor'
      }
      return `Floor ${floor}`
    },
    openSpace () {
      this.spaceActive = true
    },
    closeSpace () {
      this.spaceActive = false
      this.closeMap()
    },
    openMap () {
      this.mapActive = true
    },
    closeMap () {
      this.mapActive = false
    },
  }
}
</script>

<style lang="scss" scoped>
.space-information {
  position: relative;
}
.building-title {
  align-items: center;
  @media (min-width: map-get($grid-breakpoints, sm)){
    align-items: baseline;
  }
  .building-name {
    font-size: 6rem;
    @media (min-width: map-get($grid-breakpoints, sm)){
      font-size: 10rem;
    }
    line-height: 1;
  }
  .building-architect {
    font-size: 2rem;
    @media (min-width: map-get($grid-breakpoints, sm)){
      font-size: 4rem;
    }
    line-height: 1;
  }
}
aside {
  // background: red;
  @media (min-width: map-get($grid-breakpoints, sm)){
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .sticky-wrapper {
      position: sticky;
      top: 3.5rem;
    }
  }
}

.sticky-navigation {
  @apply w-full sticky top-0 px-3 py-3 bg-white;
  z-index: 999;
  top: 3rem;

  @media (min-width: 1024px) {
    // padding-left: 5rem;
  }

  .current-building {
    @apply uppercase inline-block mr-4;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    min-width: 100px;
  }

  a {
    @apply uppercase inline-block mr-4;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.05em;

    &:hover {
      @apply text-green;
    }
  }
}

.carousel {
  overflow-x: visible;

  &.can-fullscreen {
    .item {
      cursor: zoom-in;
    }
  }
}

.fullscreen {
  @apply fixed inset-0 top-0 left-0 w-full h-full;
  z-index: 99999999;

  .fullscreen-close {
    @apply fixed top-0 right-0 text-white p-6 text-xl z-50 cursor-pointer;
    font-size: 4rem;
    width: 6rem;
    line-height: 3rem;
    font-weight: 100;
    font-family: sans-serif;
  }

  .item {
    cursor: initial;
  }
}

</style>
