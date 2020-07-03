<template lang="html">
  <div class="mt-5">

    <div class="-container-fluid">
      <div class="px-0 px-md-4 py-4 py-5 py-md-5">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-8">
              <h1>Find your work space</h1>
            </div>
          </div>
          <!-- <div class="row d-flex align-items-start justify-content-between">
            <div class="col-12 col-md-5 mb-5">
              <h4>Rent a desk, a studio, a workshop, or an entire building. With simple wi-fi access, clean and dirty workshops, integrated security, flexible leases and a host of events.</h4>
              <a href="#become-a-tenant" class="btn btn btn-lg btn-primary mt-3">Get in touch</a>
            </div>
            <div class="col-12 col-md-6">
              <div class="row d-flex align-items-end justify-content-end">
                <div class="col-12 col-md-12">
                  <lazy-image
                  :src="'https://images.ctfassets.net/7p1ysxjarsp5/1vccdswWfzojf7HUFt3t2w/8fb6455dafc6632094801439d0c791f0/Design-District-Matthew-Thompson-1505-LOW-RES.jpg'"
                  :w="1000"
                  :h="1000"
                  />
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <!--  -->

    <!--  -->
    <div class="-container-fluid bg-white">
      <div class="-row pb-5 pt-3 px-0 px-md-4 py-0 py-md-2">
        <div class="container-fluid py-5">

          <!-- <div class="row mb-4">
            <div class="col-12 col-md-6">
              <h2>Find your work&nbsp;space</h2>
            </div>
          </div> -->
          <div class="d-flex">

            <div class="col-col-6-col-md-6 pr-0 mb-3 d-flex align-items-center position-relative mr-3">
              <div class="mb-2- mr-3">
                <h3 class="filter-option small">Type</h3>
              </div>
              <div class="-relative">
                <div
                class="btn btn-outline-dark chip chip-lg mr-2 mb-2"
                @click="typeFilters = true; sizeFilters = false"
                >
                <span v-if="!this.filter.options">All types</span>
                <span v-else>{{this.filter.options}}</span>
                </div>

                <div class="filter-popup" v-show="typeFilters === true">
                  <!-- <h5>Select workspace type</h5> -->
                  <div
                  v-for="option in spaceFilters['options']" :key="option"
                  @click="toggleFilter('options', option); typeFilters = false"
                  :class="{'active': option == filter.options}"
                  class="btn btn-outline-dark chip chip-lg mr-2 mb-2"
                  >
                    {{option}} <span v-if="option == filter.options">&times;</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-col-6-col-md-3 pr-0 mb-3 d-flex align-items-center position-relative">
              <div class="mb-2- mr-3">
                <h3 class="filter-option small">Size</h3>
              </div>
              <div class="-relative">
                <div class="btn btn-outline-dark chip chip-lg mr-2 mb-2"
                @click="sizeFilters = true; typeFilters = false"
                >
                <span v-if="!this.filter.sizeBracket">All sizes</span>
                <span v-else>{{this.filter.sizeBracket}}</span>
                </div>

                <div class="filter-popup" v-show="sizeFilters === true">
                  <!-- <h5>Select workspace size in sqft</h5> -->
                  <div
                  v-for="option in spaceFilters['sizeBracket']" :key="option"
                  @click="toggleFilter('sizeBracket', option); sizeFilters = false"
                  :class="{'active': option == filter.sizeBracket}"
                  class="btn btn-outline-dark chip chip-lg mr-2 mb-2"
                  >
                    {{option}} <span v-if="option == filter.sizeBracket">&times;</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-12 col-md-12 mb-3 -d-flex-align-items-center mt-3">
              <nuxt-link :to="'/workspace/filter'" class="btn btn-lg btn-primary">Start &rarr;</nuxt-link>
            </div> -->

          </div>




          <div class="row">

            <div class="col-12 row d-flex flex-wrap justify-content-start">

              <!-- <div class="col-12 col-md-12 mb-3 -d-flex-align-items-center">
                <div class="mb-2">
                  <h5 class="filter-option">Size</h5>
                </div>
                <div class="">
                  <div
                  v-for="option in spaceFilters['sizeBracket']" :key="option"
                  @click="toggleFilter('sizeBracket', option)"
                  :class="{'active': option == filter.sizeBracket}"
                  class="btn btn-outline-dark chip chip-xl mr-2 mb-2"
                  >
                    {{option}} <span v-if="option == filter.sizeBracket">&times;</span>
                  </div>
                </div>
              </div> -->

              <!-- <div class="col-12 col-md-12 mb-3 -d-flex-align-items-center">
                <div class="mb-2">
                  <h5 class="filter-option">Type</h5>
                </div>
                <div class="">
                  <div
                  v-for="option in spaceFilters['options']" :key="option"
                  @click="toggleFilter('options', option)"
                  :class="{'active': option == filter.options}"
                  class="btn btn-outline-dark chip chip-lg mr-2 mb-2"
                  >
                    {{option}} <span v-if="option == filter.options">&times;</span>
                  </div>
                </div>
              </div> -->





              <!-- <div class="col-12 col-md mb-3">
                <div class="mb-2">
                  <h5>Size</h5>
                </div>
                <div class="">
                  <div class="btn btn-outline-dark chip chip-lg mr-2 mb-2">
                    1
                  </div>
                  <div class="btn btn-outline-dark chip chip-lg mr-2 mb-2">
                    2–4
                  </div>
                  <div class="btn btn-outline-dark chip chip-lg mr-2 mb-2">
                    5–10
                  </div>
                  <div class="btn btn-outline-dark chip chip-lg mr-2 mb-2">
                    11–30
                  </div>
                  <div class="btn btn-outline-dark chip chip-lg mb-2">
                    30+
                  </div>
                </div>
              </div>
              <div class="col-12 col-md mb-3">
                <div class="mb-2">
                  <h5>Features</h5>
                </div>
                <div class="">
                  <div class="btn btn-outline-dark chip chip-lg mr-2 mb-2">
                    South Facing
                  </div>
                  <div class="btn btn-outline-dark chip chip-lg mr-2 mb-2">
                    Ground Floor
                  </div>
                  <div class="btn btn-outline-dark chip chip-lg mr-2 mb-2">
                    Step Free
                  </div>
                </div>
              </div>
              <div class="col-12 col-md mb-3">
                <div class="mb-2">
                  <h5>Option</h5>
                </div>
                <div class="">
                  <div class="btn btn-outline-dark chip chip-lg mr-2 mb-2">
                    Shared Space
                  </div>
                  <div class="btn btn-outline-dark chip chip-lg mr-2 mb-2">
                    Private Room
                  </div>
                  <div class="btn btn-outline-dark chip chip-lg mr-2 mb-2">
                    Permenant
                  </div>
                </div>
              </div> -->
            </div>

          </div>

          <!-- <div class="row mt-5">
            <div class="col-12">
              <h3>Buildings</h3>
            </div>
          </div> -->




          <!-- <div class="row mt-5 flex-row align-items-baseline" v-for="(spaceTypeValue, spaceTypeNameKey) in allSpacesByType " :key="spaceTypeNameKey"> -->

            <!-- <div class="col-12 mb-3 d-flex justify-content-between align-items-baseline">
              <h3 class="text-capitalize">{{spaceTypeNameKey}}</h3>
              <nuxt-link class="h5 text-primary"
              :to="`/workspace/${getSlug(spaceTypeNameKey)}`"
              >View all {{spaceTypeNameKey}} &rarr;</nuxt-link>
            </div> -->
            <div class="row mt-5">
              <div class="col-12">
                <h4>Find your space</h4>
              </div>
              <!-- <div class="col-12">
                <h5>View all spaces</h5>
              </div> -->
              <div class="col-12 col-md-6 col-lg-3 mb-5 building"
              v-if="filteredSpaces.length > 0"
              v-for="(space, index) in allBuildings"
              :key="space.slug">
                <transition-link :to="`/workspace/building/${space.slug}`">
                  <div class="">
                    <lazy-image
                    :src="space.url"
                    :w="3000"
                    :h="2400"
                    :custom="'fit=thumb&f=center'"
                    />
                  </div>
                  <h5 class="mt-4">Building {{space.title}}</h5>
                  <p>This is a placeholder short description of a unit</p>
                </transition-link>
              </div>
              <div class="col-12 pb-5" v-if="filteredSpaces.length < 1 && allSpaces.length > 0">
                <h4 class="my-5" style="opacity:0.5">No matching units</h4>
              </div>
            </div>

          <!-- </div> -->

        </div>
      </div>
    </div>

    <!--  -->

    <!-- <div class="bg-light">
      <div class="container mt-10">
        <enquire-form></enquire-form>
      </div>
    </div> -->

    <div class="py-5 bg-dark text-white anchor-target px-0 px-md-4 py-4 pb-5 py-md-5">
      <div class="container-fluid -my-5">
        <div class="row">
          <div class="col-12 col-md-8">
            <h2>Services & Facilities</h2>
          </div>
          <div class="col-12" />
          <div class="col-12 col-md-6 mb-5">
            <h4>Workshops and specialist tools right on your doorstep. Hire a recording studio, a pop-up space, meeting rooms or a test kitchen. Even a rooftop sports court.</h4>
            <!-- <h4>Design District will provide a new space for creatives of all kinds to work together. A thriving home for ideas, offering accessible rent, flexible leases and workspace purpose-built for creative disciplines.</h4> -->
            <!-- <p>Whether you’re a team of 50 or a first-time founder, there’s space for you at Design District. Register your interest to become a tenant. Tell us about your requirements, and we’ll be in touch.</p> -->
            <nuxt-link :to="'/workspace/services-facilities'" class="mt-3 btn btn-lg bg-primary text-white">View all &rarr;</nuxt-link>
          </div>
          <!-- <div class="col-12 col-lg-1" />
          <div class="col-12 col-md-8 col-lg-7">
            <enquire-form source="workspace"/>
          </div> -->
        </div>
      </div>
    </div>

    <div class="py-5 bg-black- bg-white text-black anchor-target px-0 px-md-4 py-4 pb-5 py-md-5">
      <span class="anchor" id="become-a-tenant" ></span>
      <div class="container-fluid -my-5">
        <div class="row">
          <div class="col-12 col-md-8">
            <h2>Become a tenant</h2>
          </div>
          <div class="col-12" />
          <div class="col-12 col-md-6 mb-5">
            <h4>Whether you’re a team of 50 or a first-time founder, there’s space for you at Design District. Register your interest to become a tenant. Tell us about your requirements, and we’ll be in touch.</h4>
            <!-- <h4>Design District will provide a new space for creatives of all kinds to work together. A thriving home for ideas, offering accessible rent, flexible leases and workspace purpose-built for creative disciplines.</h4> -->
            <!-- <p>Whether you’re a team of 50 or a first-time founder, there’s space for you at Design District. Register your interest to become a tenant. Tell us about your requirements, and we’ll be in touch.</p> -->
            <nuxt-link :to="'/workspace/enquire'" class="mt-3 btn btn-lg bg-primary text-white">Join Design District &rarr;</nuxt-link>
          </div>
          <!-- <div class="col-12 col-lg-1" />
          <div class="col-12 col-md-8 col-lg-7">
            <enquire-form source="workspace"/>
          </div> -->
        </div>
      </div>
    </div>

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
import EnquireForm from '../../components/forms/Enquire2.vue'
import NewsletterForm from '../../components/forms/Newsletter.vue'
// import { buildings } from '~/common/buildings.js'
// import { spaces } from '~/common/spaces.js'
import _ from 'lodash'
export default {
  components: {
    EnquireForm,
    NewsletterForm
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
      mapActive: false,
      filter: {
        sizeBracket: null,
        architect: null,
        options: null
      },
      sizeFilters: false,
      typeFilters: false
    }
  },

  created () {
    this.$store.dispatch('updateNavigationTheme', { theme: 'light' })
  },

  computed: {
    // formattedBuildings () {
    //   // console.log('buildings', buildings)
    //   return _.map(buildings, (b) => {
    //     b.type = _.sample(['Meeting Room', 'Popup', 'Photo Studio', 'Roof Top'])
    //     return b
    //   })
    // },
    // formattedSpaces () {
    //   return _.map(spaces, (b) => {
    //     return b
    //   })
    // },
    allSpacesByType () {
      return _.groupBy(this.allSpaces, 'type')
    },
    allSpacesByBuilding () {
      return _.groupBy(this.allSpaces, 'building')
    },
    allBuildings () {
      return this.$store.state.buildings
    },
    allSpaces () {
      return this.$store.state.spaces
    },
    spaceFilters () {
      return this.$store.state.filters
    },
    // filteredBuildings () {
    //   _.forIn(this.allSpacesByBuilding, (val, key) => {
    //
    //   })
    // },
    filteredSpaces () {
      return _.filter(this.$store.state.spaces, (space) => {
        let match = 0
        if (this.filter.sizeBracket) {
          match = space.sizeSqFtBracket == this.filter.sizeBracket ? match+1 : -100
        }
        if (this.filter.architect) {
          match = space.architect == this.filter.architect ? match+1 : -100
        }
        if (this.filter.options) {
          match = space.options == this.filter.options ? match+1 : -100
        }
        return match >= 0
      })
    },
    filteredSpacesByBuilding () {
      let group = _.groupBy(this.filteredSpaces, 'building')
      // return group

      return _.filter(allBuildings, (building) => {
        return filter
      })
    }
  },

  methods: {
    getBuildingBySlug (slug) {
      return this.$store.getters.getBuildingBySlug(slug)
    },
    toggleFilter (filterOption, value) {
      if (this.filter[filterOption] == value) {
        this.filter[filterOption] = null
      } else {
        this.filter[filterOption] = value
      }
    },
    getTitleCase (string) {
      return _.startCase(string)
    },
    getSlug (string) {
      return _.kebabCase(string)
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
.building {
  cursor: pointer;

  &:hover {
    color: $primary
  }
}
.drawer {
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  transform: translate3d(100%, 0, 0);
  transition: .3s ease-in-out all;
  z-index: 9999;
  box-shadow: 0px 0px 20px 0 rgba(0,0,0,0.5);

  &.space-active {
    transform: translate3d(66.6667%, 0, 0);
  }
  &.map-active {
    transform: translate3d(0%, 0, 0);
  }
  .space {
    width: 33.3333%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    .close-space,
    .toggle-map {
      font-size: 1.5rem;
      position: relative;
      // width: 50%;
      z-index: 999;
      cursor: pointer;
    }

    .close-space {
      opacity: 0.5
    }

    .scroller {
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 2rem;
      overflow: auto;
    }
  }
  .close-cross {
    // position: absolute;
    cursor: pointer;
    // right: 2rem;
    // top: 2.5rem;
    // width: 50%;
    // // height: 2rem;
    // text-align: right;
    // font-weight: 100;
    // font-size: 1.5rem;
    // line-height: 1.5rem;
    // // font-family: sans-serif;
    // z-index: 999;
  }
  .map {
    width: 66.66667%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.2)
  }
}

.filter-popup {
  position: absolute;
  top: 3.5rem;
  width: 15rem;
  background: white;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  z-index: 99;
}
</style>
