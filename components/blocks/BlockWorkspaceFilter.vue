<template lang="html">
  <div class="BlockWorkspaceFilter">

    <div class="my-16">
      <div class="cap-max-w">
        <div class="px-3">

          <div class="">
            <h4 class="uppercase">Explore spaces</h4>
          </div>

          <div class="my-8">
            <div class="my-8">

              <div class="uppercase mb-2 text-sm">Space type</div>
              <div class="tags">
                <div
                v-for="option in spaceFilters['options']" :key="option"
                @click="toggleSpaceTypeFilter(option); typeFilters = false"
                :class="{'active': isActiveFilter(option)}"
                class="btn btn-outline-dark tag mr-2 mb-2"
                >
                  {{option}} <span v-if="isActiveFilter(option)">&times;</span>
                </div>
              </div>

            </div>
            <div class="my-8">

              <div class="uppercase mb-2  text-sm">Size (sq ft)</div>

              <div class="px-3 pt-2 lg:pt-0 lg:px-2 w-full max-w-lg mb-24">
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
                    <div class="custom-mark monospace" :style="{ left: `${pos}%` }">
                      {{ numberWithCommas(label) }}
                    </div>
                  </template>
                  <template v-slot:process="{ start, end, style, index }">
                    <div class="vue-slider-process custom-process" :style="[style]"></div>
                  </template>
                </vue-slider>

                <vue-slider
                class="mobile-slider-component"
                v-model="sliderModel_Mobile"
                :absorb="true"
                :marks="sliderMarks_Mobile"
                :tooltip="'none'"
                :min="0"
                :max="4"
                :min-range="1"
                :interval="1"
                :contained="false"

                @change="onSliderChange"
                @drag-end="onSliderDragEnd"
                >
                  <template v-slot:mark="{ pos, label }">
                    <div class="custom-mark monospace" :style="{ left: `${pos}%` }">
                      {{ numberWithCommas(label) }}
                    </div>
                  </template>
                  <template v-slot:process="{ start, end, style, index }">
                    <div class="vue-slider-process custom-process" :style="[style]"></div>
                  </template>
                </vue-slider>

              </div>

            </div>
          </div>

          <!-- <div class="">
            {{filter}}<br>
            {{sliderModel}}<br>
          </div> -->

          <div class="flex flex-wrap mt-8 -mx-2" v-if="allBuildings">

            <div
            class="w-full md:w-1/2 lg:w-1/4 px-2 mb-5 building text-lg lg:text-sm"
            v-if="filteredBuildings && filteredBuildings.length>0"
            v-for="(building, index) in filteredBuildings"
            :key="building.sys.id">

              <transition-link :to="`/workspace/building/${building.fields.title}`" >
                <lazy-image
                class="transition-source"
                :src="building.fields.thumbnailImageAsset[0].fields.file.url"
                :w="1000"
                :h="1000"
                :custom="'fit=thumb&f=center'"
                >
                </lazy-image>
              </transition-link>

              <nuxt-link :to="`/workspace/building/${building.fields.title}`" class="building-title block my-2 mt-3 text-xl lg:text-sm">
                <span class="inline-block font-medium text-green mr-2">{{building.fields.title}}</span>
                <span class="inline-block font-medium">{{building.fields.architecture[0].fields.title}}</span>
              </nuxt-link>

              <div>{{building.fields.shortDescription}}</div>

              <div class="flex my-2 monospace">
                <div class="mr-3">Sqft {{numberWithCommas(building.fields.minSize)}}–{{numberWithCommas(building.fields.maxSize)}}</div>
              </div>

              <div class="tags mt-2 pt-1">
                <div class=" tag tag-sm tag-display" v-for="spaceType in building.fields.spaceType" :key="spaceType.sys.id">
                  {{spaceType.fields.title}}
                </div>
              </div>

            </div>

            <div class="px-2 pb-5" v-if="!filteredBuildings || filteredBuildings.length < 1">
              <!-- <h4 class="my-5" style="opacity:0.5">No matching work space</h4> -->
              <div class="max-w-4xl py-24">
                <h3>Can't find what you are looking for?</h3>
                <h4>Speak to our team to find a space and leasing model to suit your needs. <nuxt-link :to="`/enquire`">Register your interest</nuxt-link> and tell us about your requirements, and we’ll be in touch.</h4>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import EnquireForm from '~/components/forms/Enquire.vue'
// import EnquireForm from '~/components/forms/Enquire2.vue'
// import NewsletterForm from '~/components/forms/Newsletter.vue'
// import { buildings } from '~/common/buildings.js'
// import { spaces } from '~/common/spaces.js'
import _ from 'lodash'
export default {
  components: {
    // EnquireForm,
    // NewsletterForm
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
        sizeBracketMin: 100,
        sizeBracketMax: 4000,
        architect: null,
        options: null
      },
      sizeFilters: false,
      typeFilters: false,
      sliderModel: [0,7],
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
      sliderModel_Mobile: [0,4],
      sliderMarks_Mobile: {
        '0': { label: '5' },
        '1': { label: '200' },
        '2': { label: '500' },
        '3': { label: '1000' },
        '4': { label: '2000+' }
      },
      filterDisplay: {
        sizeBracketMin: '5',
        sizeBracketMax: '4000+'
      }
    }
  },

  created () {
    this.$store.dispatch('updateNavigationTheme', { theme: 'light' })
  },

  mounted () {
    this.setActiveFilterFromRoute()
  },

  watch: {
    '$route' (newValue, oldValue) {
      this.setActiveFilterFromRoute()
    }
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
    // allSpacesByType () {
    //   return _.groupBy(this.allSpaces, 'type')
    // },
    // allSpacesByBuilding () {
    //   return _.groupBy(this.allSpaces, 'building')
    // },
    allBuildings () {
      return this.$store.state.buildings
    },
    allSpaces () {
      return this.$store.state.spaces
    },
    spaceFilters () {
      return this.$store.state.filters
    },
    activeFilterOption () {
      return _.kebabCase(this.filter.options)
    },
    //   // getter
    //   get: function () {
    //     return this.$route.query && this.$route.query['space-type']
    //   },
    //   // setter
    //   set: function (newValue) {
    //     // var names = newValue.split(' ')
    //     // this.firstName = names[0]
    //     // this.lastName = names[names.length - 1]
    //     this.filter.options = newValue
    //   }
    // },
    filteredBuildings () {
      let visibleInWorkSpaceOnly = _.filter(this.allBuildings, (building) => {
        return _.includes(building.fields.visibility, "Work Space")
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
        if (
          +b.fields.minSize !== +filter.sizeBracketMax && _.inRange(+b.fields.minSize, +filter.sizeBracketMin, +filter.sizeBracketMax) ||
          +b.fields.maxSize !== +filter.sizeBracketMin && _.inRange(+b.fields.maxSize, +filter.sizeBracketMin, (+filter.sizeBracketMax + 1)) ||
          +b.fields.minSize !== +filter.sizeBracketMax && _.inRange(+filter.sizeBracketMax, +b.fields.minSize, (+b.fields.maxSize+1)) ||
          +b.fields.maxSize !== +filter.sizeBracketMin && _.inRange(+filter.sizeBracketMin, +b.fields.minSize, (+b.fields.maxSize+1))
        ) {
          isChosen = isChosen+1
        }

        return isChosen>=2
      })

      // show visibility = 'Work Space' only.
      return filtered
    },
  },

  methods: {
    setActiveFilterFromRoute () {
      if (this.$route.query) {
        if (this.$route.query['space-type']) {
          this.filter.options = this.$route.query['space-type']
        }
      }
    },

    isActiveFilter (option) {
      return _.kebabCase(option) == _.kebabCase(this.filter.options)
    },
    getBuildingBySlug (slug) {
      return this.$store.getters.getBuildingBySlug(slug)
    },
    toggleSpaceTypeFilter (value) {
      if (this.activeFilterOption && this.activeFilterOption == _.kebabCase(value)) {
        this.$router.push({
          query: {
            'space-type':null
          }
        })
      } else {
        this.$router.push({
          query: {
            'space-type':_.kebabCase(value)
          }
        })
      }
      // if (this.filter[filterOption] == value) {
      //   this.filter[filterOption] = null
      // } else {
      //   this.filter[filterOption] = value
      // }
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
        return `${max}–4000+ sq ft`
      }

      return `${_.round(_.min(sizes),-1)}–${_.round(_.max(sizes),-1)} sq ft`
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
.chip {
  color: black;
  border: 1px solid;
  background: #fff;
  margin: 0 .4em .5em 0;
  padding: .1em 1.5em .1em;
}
.building {

  &:hover {
    color: inherit;
  }

  a {
    &:hover {
      + a {
        span {
          @apply text-green;
        }
      }
      span {
        @apply text-green;
      }
    }
  }

  .chip {
    // color: black;
    // border: 1px solid;
    // background: #fff;
    // margin: 0 .4em .5em 0;
    // padding: .1em 1.5em .1em;
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

.mobile-slider-component,
.slider-component {

  height: 2px !important;

  .custom-mark {
    position: absolute;
    top: 20px;
    transform: translateX(-50%);
    white-space: nowrap;
    width: 50px;
    text-align: center;
    font-size: 1rem;
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

.slider-component {
  @apply hidden;
}
.mobile-slider-component {
  @apply block;
}
@screen lg {
  .slider-component {
    @apply block;
  }
  .mobile-slider-component {
    @apply hidden;
  }
}

</style>
