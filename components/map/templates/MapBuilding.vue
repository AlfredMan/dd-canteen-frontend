<template lang="html">
  <div class="map-content map-building-content" v-if="building" :key="building.slug">
    <div class="content">
      <nuxt-link class="back" :to="{query:null}">&larr; View all buildings</nuxt-link>

      <!-- <nuxt-link :to="`/workspace/building/${building.fields.title}`" > -->
        <lazy-image
        :src="building.fields.thumbnailImageAsset[0].fields.file.url"
        :w="1000"
        :h="1000"
        :custom="'fit=thumb&f=center'"
        />
      <!-- </nuxt-link> -->

      <h1 style="font-size:6rem">{{building.slug}}</h1>

      <nuxt-link :to="`/workspace/building/${building.fields.title}`" class="block my-2 mt-3">
        <span class="inline-block font-medium text-green mr-2">Building {{building.fields.title}}</span>
        <span class="inline-block font-medium">{{building.fields.architecture[0].fields.title}}</span>
      </nuxt-link>
      <div>{{building.fields.shortDescription}}</div>

      <!-- <div><IconFloorplan class="inline" /> {{building.fields.minSize}}–{{building.fields.maxSize}} Sqft</div>
      <div><IconPerson class="inline" /> {{building.fields.people}} people</div> -->

      <div class="flex my-2">
        <div class="mr-3">Sqft. {{building.fields.minSize}}–{{building.fields.maxSize}}</div>
        <div class="mr-3 flex"><IconPerson class="inline text-xs self-center mr-2" /><span>{{building.fields.people}} people</span></div>
      </div>

      <div class="tags mt-4">
        <div class="tag" v-for="spaceType in building.fields.spaceType" :key="spaceType.sys.id">
          {{spaceType.fields.title}}
        </div>
      </div>

      <div class="description" v-if="false">
        {{building.description}}
      </div>

      <div class="-container-fluid bg-white" v-if="false">
        <div class="px-0">
          <div class="py-5">
            <div class="row mb-4">
              <div class="col-12 col-md-8">
                <h3>Specifications</h3>
              </div>
            </div>
            <div class="row d-flex align-items-start justify-content-start">
              <div class="col-12 col-md-12 mb-4">
                <h6 class="mb-1">Size</h6>
                <div class="tags">
                  <div class="tag">
                    200-500
                    <!-- {{space['sizeSqFtBracket']}} -->
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-12 mb-4">
                <h6 class="mb-1">Type</h6>
                <div class="tags">
                  <div class="tag mb-2">
                    Serviced studio
                  </div>
                  <div class="tag mb-2">
                    On/off office
                  </div>
                  <div class="tag mb-2">
                    Co-working
                  </div>
                </div>
              </div>
              <!-- <div class="col-12 col-md-2 mb-4">
                <h6 class="mb-1">Option</h6>
                <div class="tags">
                  <div class="tag">
                    {{building.options}}
                  </div>
                </div>
              </div> -->
              <!-- <div class="col-12 col-md-3 mb-4">
                <h6 class="mb-1">Architect</h6>
                <div class="tags">
                  <div class="tag">
                    {{building.architect}}
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <div class="-container-fluid bg-white" v-if="false">
        <div class="px-0">
          <div class="pb-5">
            <div class="row mb-4">
              <div class="col-12 col-md-8">
                <h3>Floorplans</h3>
              </div>
            </div>
            <div class="row d-flex align-items-start justify-content-start">
              <div class="floorplan col-6 col-md-4 mb-5" v-for="floorplan in floorplans">
                <img :src="floorplan.url" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div><strong>Available spaces</strong></div> -->

      <!-- <map-listing :building="building.slug"></map-listing> -->

      <!-- <h4 class="">
        Available Spaces:
        <div class="listing-table">
          <div class="listing-header">
            <div class="listing-field building">Building</div>
            <div class="listing-field level">Level</div>
            <div class="listing-field title">Space</div>
            <div class="listing-field floorarea">Size</div>
          </div>
          <nuxt-link
          class="listing-row"
          v-for="space in allSpacesByBuilding"
          :key="space.title"
          :to="{ query: {
            building: space.building,
            floor: space.level,
            space: space.title
          } }">
            <div class="listing-field building">{{space.building}} </div>
            <div class="listing-field level">{{space.level}} </div>
            <div class="listing-field title">{{space.title}}</div>
            <div class="listing-field floorarea">{{space.floorarea}}</div>
          </nuxt-link>
        </div>
      </h4> -->
    </div>
  </div>
</template>

<script>
import MapListing from './MapListing.vue'
export default {
  data () {
    return {
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
