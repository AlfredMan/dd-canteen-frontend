<template lang="html">
  <div class="mt-24">

    <div class="-container-fluid">
      <div class="px-0 px-md-4- py-4 py-5 py-md-0 cap-max-w">
        <div class="container-fluid">

          <div class="row d-flex align-items-start justify-content-between">
            <div class="col-12 col-md-7 mb-5 mb-lg-0">
              <h1>Find your work space</h1>
              <h4 class="max-w-48">Rent a desk, a studio, a workshop, or an entire building. With simple wi-fi access, clean and dirty workshops, integrated security, flexible leases and a host of events.</h4>
              <nuxt-link to="/enquire" class="btn btn -btn-lg btn-primary mt-3 uppercase">Contact Us</nuxt-link>
            </div>
            <div class="col-12 col-md-5">
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
          </div>
        </div>
      </div>
    </div>

    <div class="-container-fluid bg-white">
      <div class="-row pb-5 pt-3 px-0 -px-md-4 py-0 py-md-2 cap-max-w">
        <div class="container-fluid py-5">

          <div class="">
            <h4 class="uppercase">Explore spaces</h4>
          </div>

          <div class="my-8">
            <div class="my-8">

              <div class="uppercase mb-2 text-sm">Space type</div>
              <div class="tags">
                <div
                v-for="option in spaceFilters['options']" :key="option"
                @click="toggleFilter('options', option); typeFilters = false"
                :class="{'active': option == filter.options}"
                class="btn btn-outline-dark tag mr-2 mb-2"
                >
                  {{option}} <span v-if="option == filter.options">&times;</span>
                </div>
              </div>

            </div>
            <div class="my-8">

              <div class="uppercase mb-2  text-sm">Size (sq ft)</div>

              <div class="px-2 w-full max-w-sm mb-24">
                <vue-slider
                class="slider-component"
                v-model="sliderModel"
                :absorb="true"
                :marks="sliderMarks"
                :tooltip="'none'"
                :min="1"
                :max="5"
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

          <div class="flex flex-wrap mt-8 -mx-2" v-if="allBuildings">

            <div
            class="w-full lg:w-1/2 xl:w-1/4 px-2 mb-5 building text-sm"
            v-if="filteredBuildings && filteredBuildings.length>0"
            v-for="(building, index) in filteredBuildings"
            :key="building.id">

              <nuxt-link :to="`/workspace/building/${building.fields.title}`" >
                <lazy-image
                :src="building.fields.thumbnailImageAsset[0].fields.file.url"
                :w="1000"
                :h="1000"
                :custom="'fit=thumb&f=center'"
                >
                </lazy-image>
              </nuxt-link>

              <nuxt-link :to="`/workspace/building/${building.fields.title}`" class="block my-2 mt-3">
                <span class="inline-block font-medium text-green mr-2">Building {{building.fields.title}}</span>
                <span class="inline-block font-medium">{{building.fields.architecture[0].fields.title}}</span>
              </nuxt-link>

              <div>{{building.fields.shortDescription}}</div>

              <div class="flex my-2 monospace">
                <div class="mr-3">Sqft {{numberWithCommas(building.fields.minSize)}}–{{numberWithCommas(building.fields.maxSize)}}</div>
              </div>

              <div class="tags mt-4">
                <div class="tag tag-sm tag-display" v-for="spaceType in building.fields.spaceType" :key="spaceType.sys.id">
                  {{spaceType.fields.title}}
                </div>
              </div>

            </div>

            <div class="col-12 pb-5" v-if="!filteredBuildings && allBuildings.length > 0">
              <h4 class="my-5" style="opacity:0.5">No matching work space</h4>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import EnquireForm from '~/components/forms/Enquire.vue'
import EnquireForm from '~/components/forms/Enquire2.vue'
import NewsletterForm from '~/components/forms/Newsletter.vue'
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
      sliderModel: [1,5],
      sliderData: [1,2,3,4,5],
      sliderMarks: {
        // '0': { label: '0' },
        '1': { label: '100' },
        '2': { label: '200' } ,
        '3': { label: '1000' },
        '4': { label: '2000' },
        '5': { label: '5000+' }
      },
      filterDisplay: {
        sizeBracketMin: '100',
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
    // filteredBuildings () {
    //   _.forIn(this.allSpacesByBuilding, (val, key) => {
    //
    //   })
    // },
    // filteredSpaces () {
    //   return _.filter(this.$store.state.spaces, (space) => {
    //     let match = 0
    //
    //     // if (this.filter.architect) {
    //     //   match = space.architect == this.filter.architect ? match+1 : -100
    //     // }
    //     if (!this.filter.options && !this.filter.sizeBracket) {
    //       return true
    //     }
    //
    //     let sb = space.building
    //     let suid = space.uniqueUnitReference
    //     console.log(suid, match)
    //
    //     if (this.filter.options && space.options) {
    //       // match = space.options == this.filter.options ? match+1 : -100
    //       match = _.includes(this.filter.options, space.options) ? match+1 : -100
    //       console.log(match, this.filter.options, space.options)
    //     }
    //     if (this.filter.sizeBracket && space.options.length > 0) {
    //       // match = space.sizeSqFtBracket == this.filter.sizeBracket ? match+1 : -100
    //       match = _.includes(this.filter.sizeBracket, space.sizeSqFtBracket) ? match+1 : -100
    //       console.log(match, this.filter.sizeBracket, space.sizeSqFtBracket)
    //     }
    //
    //     return match > 0
    //   })
    // },
    filteredBuildings () {
      return this.allBuildings
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
  // cursor: pointer;

  &:hover {
    color: inherit;
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
</style>
