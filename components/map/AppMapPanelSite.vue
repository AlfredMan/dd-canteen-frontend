<template lang="html">
  <div class="map-content map-site-content">
    <div class="content">
      <div class="map-site-title" @touchstart="dragTriggerTouchStart" @touchend="dragTriggerTouchEnd">
        <div class="leading-none text-6xl font-400">Design<br>District</div>
        <h3 class="font-200">Map</h3>
      </div>
      <div class="my-0 py-1">
        <div class="my-0">
          <!-- <div class="d-flex justify-content-between align-items-baseline">
            <div class="h5 font-weight-normal">
              Select space type
            </div>
          </div> -->
          <div class="uppercase mb-2 text-sm">Space type</div>

          <div class="tags">
            <div
            v-for="option in spaceFilters['options']" :key="option"
            @click="toggleFilter('options', option); typeFilters = false"
            :class="{'active': option == filter.options}"
            class="btn btn-outline-dark tag tag-sm mr-1 mb-1"
            >
              {{option}} <span v-if="option == filter.options">&times;</span>
            </div>
          </div>
          <!-- <div class="clear-filter" @click="toggleFilter('options', null); typeFilters = false">
            Clear
          </div> -->
        </div>
        <div class="my-8">
          <div class="uppercase mb-2  text-sm">Size (sq ft)</div>
          <!-- <div class="d-flex justify-content-between align-items-baseline">
            <div class="h5 font-weight-normal">
              Size (sq ft)
            </div>
          </div> -->

          <div class="px-2 w-full max-w-md mb-12">
            <vue-slider
            class="slider-component"
            v-model="sliderModel"
            :absorb="true"
            :marks="sliderMarks"
            :tooltip="'none'"
            :min="0"
            :max="7"
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
              <!-- <template v-slot:tooltip="{ value }">
                <div class="custom-tooltip">{{ value }}</div>
              </template> -->
            </vue-slider>
          </div>
        </div>
      </div>

      <div class="mt-4 pb-16">

        <div class="uppercase mb-2 text-sm" v-if="!filteredBuildings || filteredBuildings.length < 1">
          No matching results
        </div>
        <div class="uppercase mb-2 text-sm" v-else>
          Listing {{filteredBuildings.length}} <span v-if="filteredBuildings.length>1">buildings</span><span v-else>building</span>
        </div>

        <div class="flex flex-wrap mt-0 -mx-2" v-if="allBuildings">

          <div
          class="w-full px-2 my-0 building text-sm"
          v-if="filteredBuildings && filteredBuildings.length>0"
          v-for="(building, index) in filteredBuildings"
          :key="building.sys.id">

            <nuxt-link
            :to="{ query: {
              building: building.fields.title,
            } }"
            class="building-title block hover:text-green">
              <span class="inline-block font-medium mr-2 text-4xl w-12">{{building.fields.title}}</span>
              <span class="inline-block font-medium text-green text-xl">{{building.fields.architecture[0].fields.title}}</span>
            </nuxt-link>

          </div>

        </div>
      </div>

      <!-- <h4>Welcome to the Design District. London’s new work space for the creative industries. Opening autumn 2020.</h4> -->
      <!-- <div class="tags mt-4">
        <div class="tag">
          Events
        </div>
        <div class="tag">
          Workshops
        </div>
        <div class="tag -active">
          Facilities
        </div>
        <div class="tag">
          Members Only
        </div>
      </div> -->

      <!-- <map-space-types></map-space-types> -->

      <!-- <map-listing></map-listing> -->

      <!-- <div class="credit">
        Design and build by Hato
      </div> -->
    </div>
  </div>
</template>

<script>
// import MapListing from './MapListing.vue'
import _ from 'lodash'

export default {
  computed: {
    spaceFilters () {
      return this.$store.state.filters
    },
    allBuildings () {
      return this.$store.state.buildings
    },
    filteredBuildings () {
      let visibleInWorkSpaceOnly = _.filter(this.allBuildings, (building) => {
        return _.includes(building.fields.visibility, "Map")
      })

      let filter = this.filter

      let filtered = _.filter(visibleInWorkSpaceOnly, (building) => {
        let b = building
        let isChosen = -1
        if (filter.options) {
          let matchingSpaceType = _.find(b.fields.spaceType, (type)=>_.kebabCase(type.fields.title)==_.kebabCase(filter.options))
          if (matchingSpaceType) {
            isChosen = 1
          }
        } else {
          isChosen = 1
        }
        // if (+b.fields.minSize <= +filter.sizeBracketMax || +b.fields.maxSize >= +filter.sizeBracketMin) {
        if (_.inRange(+b.fields.minSize, +filter.sizeBracketMin, +filter.sizeBracketMax) || _.inRange(+b.fields.maxSize, +filter.sizeBracketMin, +filter.sizeBracketMax)) {
          isChosen = isChosen+1
        }

        return isChosen>=2
      })

      filtered = _.orderBy(filtered, ['fields.title'])

      // show visibility = 'Work Space' only.
      return filtered
    },
  },
  components: {
    // MapListing,
    // MapSpaceTypes
  },
  data () {
    return {
      filter: {
        sizeBracket: null,
        sizeBracketMin: 100,
        sizeBracketMax: 5000,
        architect: null,
        options: null
      },
      sizeFilters: false,
      typeFilters: false,
      sliderModel: [0,7],
      sliderData: [1,2,3,4,5,6,7],
      sliderMarks: {
        '0': { label: '5' },
        '1': { label: '100' },
        '2': { label: '200' },
        '3': { label: '500' },
        '4': { label: '1000' },
        '5': { label: '2000' },
        '6': { label: '3000' },
        '7': { label: '4000+' }
      },
      filterDisplay: {
        sizeBracketMin: '5',
        sizeBracketMax: '4000+'
      }
    }
  },
  methods: {
    dragTriggerTouchStart(){
          this.$store.dispatch("map/setIsDraggableInfoPanelDisabled", {
            isDisabled: false
          });
    },
    dragTriggerTouchEnd(){
          this.$store.dispatch("map/setIsDraggableInfoPanelDisabled", {
            isDisabled: true
          });
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
      let displayValues=['5', '100', '200', '500', '1000', '2000', '3000', '4000+']
      let displayMin = displayValues[val[0]]
      let displayMax = displayValues[val[1]]
      this.filterDisplay.sizeBracketMin = displayMin
      this.filterDisplay.sizeBracketMax = displayMax

      let filterValues=['5', '100', '200', '500', '1000', '2000', '3000', '4000']
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
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 5vw;
}
.credit {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1.5rem;
  opacity: 1;
  font-size: 1rem;
  opacity: 0.8;
}

.slider-component {

  height: 2px !important;

  .custom-mark {
    position: absolute;
    top: 20px;
    transform: translateX(-50%);
    white-space: nowrap;
    width: 50px;
    text-align: center;
    font-size: .75rem;
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
    background: red;
  }
}
</style>
