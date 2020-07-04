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
          <div class="">
            <h4>Find your space</h4>
          </div>

          <div class="d-flex">

            <div class="col-col-6-col-md-6 pr-0 mb-3 d-flex align-items-center position-relative mr-3">
              <!-- <div class="mb-2- mr-3">
                <h3 class="filter-option small">Type</h3>
              </div> -->
              <div class="position-relative">
                <div
                class="btn btn-outline-dark chip chip-lg mr-0 mb-0 mt-2"
                :class="[this.filter.options ? 'active' : '']"
                @click="typeFilters = true; sizeFilters = false"
                >
                <span v-if="!this.filter.options">All space types</span>
                <span v-else>{{this.filter.options}}</span>
                </div>

                <div class="filter-popup" v-show="typeFilters === true">
                  <!-- <h5>Select workspace type</h5> -->
                  <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h5 font-weight-normal">
                      Select space type
                    </div>
                    <div class="close-popup" @click="typeFilters = false">
                      &times;
                    </div>
                  </div>
                  <div
                  v-for="option in spaceFilters['options']" :key="option"
                  @click="toggleFilter('options', option); typeFilters = false"
                  :class="{'active': option == filter.options}"
                  class="btn btn-outline-dark chip chip-lg mr-2 mb-2"
                  >
                    {{option}} <span v-if="option == filter.options">&times;</span>
                  </div>
                  <div class="clear-filter" @click="toggleFilter('options', null); typeFilters = false">
                    Clear
                  </div>
                </div>
              </div>
            </div>

            <div class="col-col-6-col-md-3 pr-0 mb-3 d-flex align-items-center position-relative">
              <!-- <div class="mb-2- mr-3">
                <h3 class="filter-option small">Size</h3>
              </div> -->
              <div class="position-relative">
                <div class="btn btn-outline-dark chip chip-lg mr-2 mb-0 mt-2"
                :class="[!(filterDisplay.sizeBracketMin=='0' && filterDisplay.sizeBracketMax=='5000+') ? 'active' : '']"
                @click="sizeFilters = true; typeFilters = false"
                >
                <!-- <span v-if="!this.filter.sizeBracket">All sizes</span>
                <span v-else>{{this.filter.sizeBracket}} sq ft</span> -->
                <span v-if="filterDisplay.sizeBracketMin=='0' && filterDisplay.sizeBracketMax=='5000+'">All sizes</span>
                <span v-else>{{filterDisplay.sizeBracketMin}}–{{filterDisplay.sizeBracketMax}} sq ft</span>
                </div>

                <div class="filter-popup slider"
                v-show="sizeFilters === true"
                >
                  <!-- <h5>Select workspace size in sqft</h5> -->
                  <!-- <div
                  v-for="option in spaceFilters['sizeBracket']" :key="option"
                  @click="toggleFilter('sizeBracket', option); sizeFilters = false"
                  :class="{'active': option == filter.sizeBracket}"
                  class="btn btn-outline-dark chip chip-lg mr-2 mb-2"
                  >
                    {{option}} <span v-if="option == filter.sizeBracket">&times;</span>
                  </div> -->
                  <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h5 font-weight-normal">
                      Select size (sq ft)
                    </div>
                    <div class="close-popup" @click="sizeFilters = false">
                      &times;
                    </div>
                  </div>

                  <div class="px-2">
                    <vue-slider
                    class="slider-component"
                    v-model="sliderModel"
                    :absorb="true"
                    :marks="sliderMarks"
                    :tooltip="'none'"
                    :min="0"
                    :max="5"
                    :min-range="1"
                    :interval="1"
                    :contained="false"

                    @change="onSliderChange"
                    @drag-end="onSliderDragEnd"
                    >
                      <template v-slot:mark="{ pos, label }">
                        <div class="custom-mark" :style="{ left: `${pos}%` }">
                          {{ label }}
                        </div>
                      </template>
                      <template v-slot:process="{ start, end, style, index }">
                        <div class="vue-slider-process custom-process" :style="[style]">
                          <!-- Can add custom elements here -->
                        </div>
                      </template>
                    </vue-slider>
                  </div>

                </div>
              </div>
            </div>
            <!-- <div class="col-12 col-md-12 mb-3 -d-flex-align-items-center mt-3">
              <nuxt-link :to="'/workspace/filter'" class="btn btn-lg btn-primary">Start &rarr;</nuxt-link>
            </div> -->

          </div>

          <!-- <pre>
            {{filter}}
          </pre> -->

          <div class="row mt-5">
            <!-- <div class="col-12">
              <h4>Find your space</h4>
            </div> -->
            <!-- <div class="col-12">
              <h5>View all spaces</h5>
            </div> -->

            <!-- <pre>{{filteredSpacesByBuilding}}</pre> -->

            <!-- <div class="col-12 col-md-6 col-lg-3 mb-5 building"
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
                <p></p>
              </transition-link>
            </div>
            <div class="col-12 pb-5" v-if="filteredSpaces.length < 1 && allSpaces.length > 0">
              <h4 class="my-5" style="opacity:0.5">No matching units</h4>
            </div> -->

            <div class="col-12 col-md-6 col-lg-3 mb-5 building"
            v-if="filteredSpacesByBuilding"
            v-for="(building, index) in filteredSpacesByBuilding"
            :key="building.id">
              <transition-link :to="`/workspace/building/${building.id}`">
                <div class="">
                  <lazy-image
                  :src="building.building.url"
                  :w="3000"
                  :h="2400"
                  :custom="'fit=thumb&f=center'"
                  />
                </div>
                <h5 class="mt-4">{{building.title}}</h5>
                <div class="chips">
                  <!-- <span class="chip" v-for="size in building.sizeSqFtBracket">{{size}}</span> -->
                  <!-- <span class="chip chip-lg">{{getSizeRangeFromBracket(building.sizeSqFtBracket)}}</span> -->
                  <div class="mb-3">{{getSizeRangeFromBracket(building.sizeSqFtBracket)}}</div>
                </div>
                <div class="chips">
                  <span class="chip chip-lg" v-for="option in building.options">{{option}}</span>
                </div>
              </transition-link>
            </div>
            <div class="col-12 pb-5" v-if="!filteredSpacesByBuilding && allSpaces.length > 0">
              <h4 class="my-5" style="opacity:0.5">No matching units</h4>
            </div>

            <!-- <pre>{{filteredSpacesByBuilding}}</pre> -->

          </div>
          <!-- <div class="row mt-5 flex-row align-items-baseline" v-for="(spaceTypeValue, spaceTypeNameKey) in allSpacesByType " :key="spaceTypeNameKey"> -->
            <!-- <div class="col-12 mb-3 d-flex justify-content-between align-items-baseline">
              <h3 class="text-capitalize">{{spaceTypeNameKey}}</h3>
              <nuxt-link class="h5 text-primary"
              :to="`/workspace/${getSlug(spaceTypeNameKey)}`"
              >View all {{spaceTypeNameKey}} &rarr;</nuxt-link>
            </div> -->
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
        sizeBracketMin: null,
        sizeBracketMax: null,
        architect: null,
        options: null
      },
      sizeFilters: false,
      typeFilters: false,
      sliderModel: [0,5],
      sliderData: [0,1,2,3,4,5],
      sliderMarks: {
        '0': { label: '0' },
        '1': { label: '100' },
        '2': { label: '200' } ,
        '3': { label: '1000' },
        '4': { label: '2000' },
        '5': { label: '5000+' }
      },
      filterDisplay: {
        sizeBracketMin: '0',
        sizeBracketMax: '5000+'
      }
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

        // if (this.filter.architect) {
        //   match = space.architect == this.filter.architect ? match+1 : -100
        // }
        if (!this.filter.options && !this.filter.sizeBracket) {
          return true
        }

        let sb = space.building
        let suid = space.uniqueUnitReference
        console.log(suid, match)

        if (this.filter.options && space.options) {
          // match = space.options == this.filter.options ? match+1 : -100
          match = _.includes(this.filter.options, space.options) ? match+1 : -100
          console.log(match, this.filter.options, space.options)
        }
        if (this.filter.sizeBracket && space.options.length > 0) {
          // match = space.sizeSqFtBracket == this.filter.sizeBracket ? match+1 : -100
          match = _.includes(this.filter.sizeBracket, space.sizeSqFtBracket) ? match+1 : -100
          console.log(match, this.filter.sizeBracket, space.sizeSqFtBracket)
        }

        return match > 0
      })
    },
    filteredSpacesByBuilding () {
      let group = _.groupBy(this.allSpaces, 'building')
      // return group

      group = _.mapValues(group, (building, key) => {
        let options = _.uniq(_.map(building, (b) => b.options))
        let sizeSqFtBracket = _.uniq(_.map(building, (b) => b.sizeSqFtBracket))
        let sizeSqFt = _.map(building, (b) => b['sizeSqFt'])
        let sizeSqFtMin = _.round(_.min(sizeSqFt))
        let sizeSqFtMax = _.round(_.max(sizeSqFt))

        return {
          title: `Building ${key}`,
          id: key,
          building: this.getBuildingBySlug(key),
          options: options,
          sizeSqFtBracket: sizeSqFtBracket,
          sizeSqFt: sizeSqFt,
          sizeSqFtMin: sizeSqFtMin,
          sizeSqFtMax: sizeSqFtMax,
          units: building
        }
      })

      return _.filter(group, (building) => {

        // show all buildings if filter is at default state
        if (!this.filter.options && !this.filter.sizeBracketMax) {
          return true
        }

        let match = 0

        if (this.filter.options && building.options) {
          // match = space.options == this.filter.options ? match+1 : -100
          match = _.includes(building.options, this.filter.options) ? match+1 : -100
        }

        // console.log(this.filter.sizeBracketMin , this.filter.sizeBracketMax, building.sizeSqFtMin, building.sizeSqFtMax>0)

        if (this.filter.sizeBracketMin >=0 && this.filter.sizeBracketMax>0 && building.sizeSqFtMin>0 && building.sizeSqFtMax>0) {
          // match = space.sizeSqFtBracket == this.filter.sizeBracket ? match+1 : -100
          let filterMin = this.filter.sizeBracketMin == 0 ? 0 : this.filter.sizeBracketMin
          let filterMax = this.filter.sizeBracketMax == 5000 ? 999999 : this.filter.sizeBracketMax

          // console.log(building.sizeSqFtMin, filterMin, filterMax)
          // console.log(building.sizeSqFtMax, filterMin, filterMax)

          match = _.inRange(building.sizeSqFtMin, filterMin, filterMax) || _.inRange(building.sizeSqFtMax, filterMin, filterMax)
                ? match + 1 : -100

          // console.log(match)
        }

        return match > 0

      })

      // return _.filter(allBuildings, (building) => {
      //   return filter
      // })
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
    onSliderChange (val, a) {
      // console.log('onSliderChange', ev, a)
      let displayValues=['0', '100', '200', '1000', '2000', '5000+']
      let displayMin = displayValues[val[0]]
      let displayMax = displayValues[val[1]]
      this.filterDisplay.sizeBracketMin = displayMin
      this.filterDisplay.sizeBracketMax = displayMax

      let filterValues=['0', '100', '200', '1000', '2000', '5000']
      let filterMin = filterValues[val[0]]
      let filterMax = filterValues[val[1]]
      this.filter.sizeBracketMin = _.toNumber(filterMin)
      this.filter.sizeBracketMax = _.toNumber(filterMax)

      console.log('onSliderChange', displayMin, displayMax, filterMin, filterMax)
    },
    getSizeRangeFromBracket (sizeBrackets) {
      let sizes = _.map(_.flatten(_.map(sizeBrackets, (size) => _.split(size, '-'))), (v) => {
          v = _.replace(v, ',', '')
          v = _.replace(v, '<', '')
          v = _.replace(v, '>', '')
          return _.round(v)
      })

      let min = _.min(sizes)
      let max = _.max(sizes)

      if (min==max) {
        return `${max}–5000+ sq ft`
      }

      return `${_.round(_.min(sizes),-1)}–${_.round(_.max(sizes),-1)} sq ft`
    },
    onSliderDragEnd (val, a) {
      // console.log('onSliderDragEnd', ev, a)
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

  .chip {
    color: black;
    background: #eee;
    margin: 0 .3em .3em 0;
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
  // right: 0;
  // left: 50%;
  // transform: translateX(-50%);
  left: 0;
  width: 19rem;
  padding: 1.25rem 1.5rem 1.5rem;
  background: white;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  z-index: 99;
  border-radius: 3px;

  .clear-filter, .close-popup {
    cursor: pointer;
  }
  .close-popup {
    font-size: 1.5rem;
  }

  &.slider {
    width: 24rem;
    padding: 1.25rem 1.5rem 2.5rem;
  }
}

.slider-component {

  height: 2px !important;

  .custom-mark {
    position: absolute;
    top: 15px;
    transform: translateX(-50%);
    white-space: nowrap;
    width: 50px;
    text-align: center;
    font-size: .8rem;
    // position: absolute;
    // left: 20px;
    // transform: translateY(-50%);
    // white-space: nowrap;
    // width: 50px;
    // text-align: left;
    // font-size: .8rem;
  }
  .custom-process {
    background: black;
    height: 2px;
  }
  .custom-dot {

  }
}
</style>
