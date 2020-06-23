<template lang="html">
  <div class="bg-white" v-if="building" :key="slug">

      <!--  -->
      <div class="container-fluid-">
        <div class="px-0 px-md-4 py-4 py-5 py-md-5">
          <div class="container-fluid pt-5">
            <div class="row">
              <div class="col-12 col-md-8">
                <h1>{{building.title}}</h1>
                <!-- <h4>
                  <span>Building {{building.building}}</span>, <span>{{getFloorLabel(building.floor)}}</span>, <span>Unit {{building.unit}}</span>
                </h4> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="space-information">

        <div class="container-fluid-">
          <div class="px-0 px-md-4">
            <div class="container-fluid pb-5">
              <div class="row no-gutters d-flex align-items-start justify-content-between">
                <div class="col-12 col-md-8">
                  <lazy-image
                  :src="building.url"
                  :w="3000"
                  :h="2000"
                  />
                </div>
                <!-- <div class="col-12 col-md-8">
                  <lazy-image
                  :src="building.url"
                  :w="3000"
                  :h="2000"
                  />
                </div> -->
                <div class="col-12">

                </div>
                <!-- <div class="col-12 col-md-6 my-4">
                  <h4>{{building.description}}</h4>
                </div> -->
              </div>
            </div>
          </div>
        </div>

        <div class="-container-fluid bg-white">
          <div class="px-0 px-md-4">
            <div class="container-fluid py-5">
              <div class="row mb-4">
                <div class="col-12 col-md-8">
                  <h3>Specifications</h3>
                </div>
              </div>
              <div class="row d-flex align-items-start justify-content-start">
                <div class="col-12 col-md-2 mb-4">
                  <h6 class="mb-1">Size</h6>
                  <div class="tags">
                    <div class="tag">
                      <!-- {{space['sizeSqFtBracket']}} -->
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-2 mb-4">
                  <h6 class="mb-1">Type</h6>
                  <div class="tags">
                    <div class="tag">

                      {{building.spaceType}}
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-2 mb-4">
                  <h6 class="mb-1">Option</h6>
                  <div class="tags">
                    <div class="tag">
                      {{building.options}}
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 mb-4">
                  <h6 class="mb-1">Architect</h6>
                  <div class="tags">
                    <div class="tag">
                      {{building.architect}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- <div class="-container-fluid bg-white">
          <div class="px-0 px-md-4">
            <div class="container-fluid py-5">
              <div class="row mb-4">
                <div class="col-12 col-md-8">
                  <h3>Services & Facilities</h3>
                </div>
              </div>
              <div class="row d-flex align-items-start justify-content-start">
                <div class="col-12 col-md-3 mb-4">
                  <h5 class="mb-1">Bike Storage</h5>
                  <p>Rows of hooks and racks keep your prized bicycle safe on the premises.</p>
                </div>
                <div class="col-12 col-md-3 mb-4">
                  <h5 class="mb-1">Event space</h5>
                  <p>With a projector, sound system and lighting controls, lounges are easily converted for members’ meet-ups.</p>
                </div>
                <div class="col-12">

                </div>
                <div class="col-12 col-md-3 mb-4">
                  <h5 class="mb-1">Dog friendly</h5>
                  <p>Rows of hooks and racks keep your prized bicycle safe on the premises.</p>
                </div>

              </div>
            </div>
          </div>
        </div> -->

        <div class="-container-fluid bg-white">
          <div class="px-0 px-md-4">
            <div class="container-fluid py-5 pb-3">
              <div class="row">
                <div class="col-12 col-md-8">
                  <h3>{{architect.title}}</h3>
                </div>
              </div>
              <div class="row d-flex align-items-start justify-content-between">
                <div class="col-12 col-md-6 my-4">
                  <p>{{architect.buildingsCopy}}</p>
                  <h5>{{architect.title}} &rarr;</h5>
                </div>

                <div class="col-12">

                </div>

                <div class="col-12 col-md-4 mb-4">
                  <lazy-image
                  class=""
                  :src="architect.imagesPractice[0].url"
                  :w="2000"
                  :h="2000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--  -->

        <aside class="-container-fluid">
          <div class="sticky-wrapper px-0 px-md-4 pb-4">
            <div class="container-fluid">
              <div class="row no-gutters">
                <div class="col-12 offset-md-8 col-md-4">
                  <div class="p-4 bg-grey">
                    <div class="py-2">
                      <h2>{{building.title}}</h2>
                      <!-- <h3>
                        Building {{building.building}}<br>
                        {{getFloorLabel(building.floor)}}<br>
                        Unit {{building.unit}}
                      </h3> -->
                    </div>
                    <div class="mt-4">
                      <space-form></space-form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

      </div>


    <!-- <div class="bg-light">
      <div class="container mt-10">
        <enquire-form></enquire-form>
      </div>
    </div> -->
    <!-- <span class="anchor" id="become-a-tenant" ></span>
    <div class="py-5 bg-white anchor-target px-4">
      <div class="container-fluid -my-5">
        <div class="row">
          <div class="col-12 col-md-4">
            <h2>Become a tenant</h2>
          </div>
          <div class="col-12" />
          <div class="col-12 col-md-4">
            <h4>Design District will provide a new space for creatives of all kinds to work together. A thriving home for ideas, offering accessible rent, flexible leases and workspace purpose-built for creative disciplines.</h4>
            <p>Whether you’re a team of 50 or a first-time founder, there’s space for you at Design District. Register your interest to become a tenant. Tell us about your requirements, and we’ll be in touch.</p>
          </div>
          <div class="col-12 col-lg-1" />
          <div class="col-12 col-md-8 col-lg-7">
            <enquire-form source="workspace"/>
          </div>
        </div>
      </div>
    </div> -->



    <!-- <div class="bg-light">
      <div class="container mt-10">
        <div class="row">
          <div class="col">

          </div>
          <div class="col">
            <enquire-form></enquire-form>
          </div>
        </div>
      </div>
    </div> -->

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
      title: 'Work space',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Design District will provide 150,000 sq ft of permanent workspace for everyone for London’s designers makers and creators. A place for total focus, shared stories and resources, new connections and collaboration.' }
      ]
    }
  },

  data () {
    return {
      spaceActive: false,
      mapActive: false
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

<style lang="scss">
.space-information {
  position: relative;
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
      top: 0;
    }
  }
}
</style>
