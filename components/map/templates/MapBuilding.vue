<template lang="html">
  <div class="map-content map-building-content" v-if="building" :key="building.slug">
    <div class="content">
      <nuxt-link class="back" :to="{query:null}">&larr; View all buildings</nuxt-link>

      <h1>{{building.slug}}</h1>

      <lazy-image
      class="thumbnail"
      :src="building.url"
      :w="2000"
      :h="2000"
      />

      <div class="description">
        {{building.description}}
      </div>

      <div class="-container-fluid bg-white">
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

      <div class="-container-fluid bg-white">
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
