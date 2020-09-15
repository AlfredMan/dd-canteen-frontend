<template lang="html">
  <div class="workspace-building mt-24 bg-white" v-if="building" :key="slug">

    <div class="px-8 flex align-center items-center">
      <nuxt-link class="" :to="'/workspace'">Work Space</nuxt-link> <span class="mx-2">></span>
      <span class="underline">
        {{building.fields.title}}: {{building.fields.architecture[0].fields.title}}
      </span>
    </div>


    <h1 class="px-8 mt-6 my-4 flex items-baseline building-title">
      <span class="inline-block mr-6 building-name font-medium -ml-2">{{building.fields.title}}</span>
      <span class="inline-block text-green uppercase building-architect">{{building.fields.architecture[0].fields.title}}</span>
    </h1>


    <div class="px-8 my-4 mb-8 tags">
      <div class="tag" v-for="spaceType in building.fields.spaceType" :key="spaceType.sys.id">
        {{spaceType.fields.title}}
      </div>
    </div>


    <div class="flex flex-wrap mb-12">

      <div class="w-full lg:w-2/3">
        <nuxt-link :to="`/workspace/building/${building.fields.title}`" >
          <lazy-image
          :src="building.fields.thumbnailImageAsset[0].fields.file.url"
          :w="1000"
          :h="1000"
          :custom="'fit=thumb&f=center'"
          />
        </nuxt-link>
      </div>

      <div class="w-full lg:w-1/3 bg-gray-100 p-6 pt-4">

        <h4 class="inline-block font-medium text-6xl mb-4">{{building.fields.title}}</h4>

        <h4 class="text-2xl my-4">{{building.fields.shortDescription}}</h4>

        <div class="my-4">
          <h3>Interested in this building?</h3>
          <p>Tell us about your requirements, and we’ll be in touch.
          Or call us on +44 (0)20 3981 2426</p>
          <a class="mt-2 px-2 py-2 leading-5 bg-green text-white uppercase">Book a visit</a>
        </div>

        <!-- <div class="flex my-2">
          <div class="mr-3">Sqft. {{building.fields.minSize}}–{{building.fields.maxSize}}</div>
          <div class="mr-3 flex"><IconPerson class="inline text-xs self-center mr-2" /><span>{{building.fields.people}} people</span></div>
        </div> -->

      </div>

    </div>

    <div class="px-0 my-8">
      <h2 class="px-8 uppercase max-w-2xl w-full">Photos</h2>
      <div class="flex flex-wrap -mx-6 items-baseline bg-black px-8 py-4">
        <div class="w-full lg:w-1/2 xl:w-1/4 px-6 my-4">
          <lazy-image
          src="https://images.ctfassets.net/xsmgpzj6d8er/74jLzbmZYiAqAIt5fi3tFc/519fed5fe663df6f83cea41a8dde94db/A2-1-1.png"
          :w="1000"
          :h="1000"
          />
        </div>

        <div class="w-full lg:w-1/2 xl:w-1/4 px-6 my-4">
          <lazy-image
          src="https://images.ctfassets.net/xsmgpzj6d8er/74jLzbmZYiAqAIt5fi3tFc/519fed5fe663df6f83cea41a8dde94db/A2-1-1.png"
          :w="1000"
          :h="1000"
          />
        </div>

        <div class="w-full lg:w-1/2 xl:w-1/4 px-6 my-4">
          <lazy-image
          src="https://images.ctfassets.net/xsmgpzj6d8er/74jLzbmZYiAqAIt5fi3tFc/519fed5fe663df6f83cea41a8dde94db/A2-1-1.png"
          :w="1000"
          :h="1000"
          />
        </div>

      </div>
    </div>

    <div class="px-8 my-16">
      <h2 class="uppercase max-w-2xl w-full">Location</h2>
      <div class="w-full bg-black">
        <lazy-image
        src="https://images.ctfassets.net/xsmgpzj6d8er/2zCRdF5QZl8FqBQQM57Lom/1f4c7c7e6706f5c494a9cd32a0b164c6/dd-3d-map.png"
        :w="2000"
        />
      </div>
    </div>

    <div class="px-8 my-16">
      <h2 class="uppercase max-w-2xl w-full">Floor plans</h2>
      <div class="flex flex-wrap -mx-6 items-baseline">
        <a
        class="w-full lg:w-1/2 xl:w-1/4 px-6 my-4"
        href="https://images.ctfassets.net/xsmgpzj6d8er/74jLzbmZYiAqAIt5fi3tFc/519fed5fe663df6f83cea41a8dde94db/A2-1-1.png"
        target="_blank"
        >
          <lazy-image
          src="https://images.ctfassets.net/xsmgpzj6d8er/74jLzbmZYiAqAIt5fi3tFc/519fed5fe663df6f83cea41a8dde94db/A2-1-1.png"
          :w="1000"
          :h="1000"
          />
        </a>

        <a
        class="w-full lg:w-1/2 xl:w-1/4 px-6 my-4"
        href="https://images.ctfassets.net/xsmgpzj6d8er/74jLzbmZYiAqAIt5fi3tFc/519fed5fe663df6f83cea41a8dde94db/A2-1-1.png"
        target="_blank"
        >
          <lazy-image
          src="https://images.ctfassets.net/xsmgpzj6d8er/74jLzbmZYiAqAIt5fi3tFc/519fed5fe663df6f83cea41a8dde94db/A2-1-1.png"
          :w="1000"
          :h="1000"
          />
        </a>

        <a
        class="w-full lg:w-1/2 xl:w-1/4 px-6 my-4"
        href="https://images.ctfassets.net/xsmgpzj6d8er/74jLzbmZYiAqAIt5fi3tFc/519fed5fe663df6f83cea41a8dde94db/A2-1-1.png"
        target="_blank"
        >
          <lazy-image
          src="https://images.ctfassets.net/xsmgpzj6d8er/74jLzbmZYiAqAIt5fi3tFc/519fed5fe663df6f83cea41a8dde94db/A2-1-1.png"
          :w="1000"
          :h="1000"
          />
        </a>

      </div>
    </div>

    <div class="px-8 my-16">
      <h2 class="uppercase max-w-2xl w-full">Services & facilities</h2>
      <p class="max-w-lg w-full">Workshops and specialist tools right on your doorstep. Hire a recording studio, a pop-up space, meeting rooms or a test kitchen. Even a rooftop sports court.</p>
      <div class="flex flex-wrap -mx-6">
        <div class="w-full xl:w-1/3 px-6">
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
        </div>
      </div>
    </div>

    <div class="px-8 my-16">
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
          <h4 class="uppercase">{{building.fields.architecture[0].fields.title}}</h4>
        </div>
        <div class="w-full xl:w-1/3 px-6">
        </div>

      </div>
    </div>

    <div class="px-8 bg-black text-white py-6 pb-12">
      <h2 class="uppercase max-w-2xl w-full">Events</h2>
      <div class="flex flex-wrap -mx-6 items-baseline">
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

      </div>
    </div>




  </div>
</template>

<script>
// import EnquireForm from '../../components/forms/Enquire.vue'
import EnquireForm from '~/components/forms/Enquire2.vue'
import NewsletterForm from '~/components/forms/Newsletter.vue'
import SpaceForm from '~/components/forms/SpaceForm.vue'
import { mapGetters } from 'vuex'
// import { buildings } from '~/common/buildings.js'
import _ from 'lodash'
export default {
  components: {
    EnquireForm,
    NewsletterForm,
    SpaceForm
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
      spaceActive: false,
      mapActive: false,
      floorplans: [
        {
          url: require('~/assets/images/floorplans/A1-0-1.png')
        },
        {
          url: require('~/assets/images/floorplans/A1-1-1.png')
        },
        {
          url: require('~/assets/images/floorplans/A1-2-1.png')
        },
        {
          url: require('~/assets/images/floorplans/A1-3-1.png')
        }
      ]
    }
  },

  created () {
    this.$store.dispatch('updateNavigationTheme', { theme: 'light' })
  },

  computed: {
    slug () {
      return this.$route.params.id
    },
    space () {
      return this.$store.getters.getSpaceBySlug(this.slug)
    },
    building () {
      return this.$store.getters.getBuildingBySlug(this.slug)
    },
    architect () {
      return this.$store.getters.getStudioByBuilding(this.slug)
    }
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
</style>
