<template lang="html">
  <div class="map-content map-building-content" v-if="building" :key="building.slug">
    <div class="content">

      <!-- <nuxt-link class="back" :to="{query:null}">&larr; View all buildings</nuxt-link> -->

      <!-- <nuxt-link :to="`/workspace/building/${building.fields.title}`" > -->
        <lazy-image
        :src="building.fields.thumbnailImageAsset[0].fields.file.url"
        :w="1000"
        :h="1000"
        :custom="'fit=thumb&f=center'"
        />
      <!-- </nuxt-link> -->

      <!-- <h1 style="font-size:6rem" class="mt-2">{{building.slug}}</h1> -->

      <nuxt-link :to="`/workspace/building/${building.fields.title}`" class="block my-3 mt-0">
        <span class="inline-block font-medium mr-2 text-4xl">{{building.fields.title}}</span>
        <span class="inline-block font-medium text-green text-md uppercase">{{building.fields.architecture[0].fields.title}}</span>
      </nuxt-link>

      <div class="tags my-2">
        <div class="tag tag-sm" v-for="spaceType in building.fields.spaceType" :key="spaceType.sys.id">
          {{spaceType.fields.title}}
        </div>
      </div>

      <div>{{building.fields.shortDescription}}</div>

      <!-- <div><IconFloorplan class="inline" /> {{building.fields.minSize}}–{{building.fields.maxSize}} Sqft</div>
      <div><IconPerson class="inline" /> {{building.fields.people}} people</div> -->

      <!-- <div class="flex my-2">
        <div class="mr-3">Sqft. {{building.fields.minSize}}–{{building.fields.maxSize}}</div>
        <div class="mr-3 flex"><IconPerson class="inline text-xs self-center mr-2" /><span>{{building.fields.people}} people</span></div>
      </div> -->
      <div class="flex justify-between items-end">
        <nuxt-link
        :to="`/workspace/building/${building.slug}`"
        class="uppercase btn btn-primary mt-3"
        >More info</nuxt-link>

        <nuxt-link
        class="text-green"
        :to="{ query: {
          building: buildingPairs[building.slug]
        } }">
          View next
        </nuxt-link>
      </div>




    </div>
  </div>
</template>

<script>
import MapListing from './MapListing.vue'
export default {
  data () {
    return {
      buildingPairs: {
        A1: 'A2',
        A2: 'A3',
        A3: 'A4',
        A4: 'B1',
        B1: 'B2',
        B2: 'B3',
        B3: 'B4',
        B4: 'C1',
        C1: 'C2',
        C2: 'C3',
        C3: 'C4',
        C4: 'D1',
        D1: 'D2',
        D2: 'D3',
        D3: 'D4',
        D4: 'A1',
      },
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
  components: {
    MapListing
  },
  computed: {
    slug () {
      return this.$route.query.building
    },
    allSpaces () {
      return this.$store.state.spaces
    },
    allSpacesByType () {
      return _.groupBy(this.allSpaces, 'type')
    },
    allBuildings () {
      return this.$store.state.buildings
    },
    building () {
      return this.$store.getters.getBuildingBySlug(this.slug)
    },
    allSpacesByBuilding () {
      return this.$store.getters.getSpacesByBuilding(this.slug)
    },
  }
}
</script>

<style lang="scss">
</style>
