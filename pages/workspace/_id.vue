<template lang="html">
  <div class="mt-5 -bg-white" v-if="spaceType" :key="slug">

      <div class="container-fluid- -bg-white">
        <div class="-row pb-5- pt-3 px-4">
          <div class="container-fluid py-5">

            <div class="row mb-4">
              <div class="col-12 col-md-6">
                <h1>{{spaceTypeTitle}}</h1>
              </div>
            </div>
          </div>
          <div class="container-fluid py-5 bg-white">
            <div class="row">
              <!-- <div class="col-12">
                <h4>Filter Spaces</h4>
              </div> -->
              <div class="col-12 row d-flex justify-content-start">
                <div class="col-12 col-md mb-3">
                  <div class="mb-2">
                    <h5>Team Size</h5>
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
                </div>
              </div>

            </div>

            <!-- <div class="row mt-5">
              <div class="col-12">
                <h3>Buildings</h3>
              </div>
            </div> -->
            <div class="row mt-5 flex-row align-items-baseline">

              <div class="col-12 col-md-6 col-lg-3 mb-5 building" v-for="space in spaceType">
                <transition-link :to="`/space/${space.slug}`">
                  <div class="">
                    <lazy-image
                    :src="space.url"
                    :w="2000"
                    :h="2000"
                    class=""
                    :xcustom="'fit=thumb&f=bottom'"
                    />
                  </div>
                  <h5 class="mt-4">{{space.title}}</h5>
                  <p>{{space.description}}</p>
                </transition-link>
              </div>

            </div>

          </div>
        </div>
      </div>

  </div>
</template>

<script>
// import EnquireForm from '../../components/forms/Enquire.vue'
import EnquireForm from '../../components/forms/Enquire2.vue'
import NewsletterForm from '../../components/forms/Newsletter.vue'
import SpaceForm from '../../components/forms/SpaceForm.vue'
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
    allSpaces () {
      return this.$store.state.spaces
    },
    allSpacesByType () {
      return _.groupBy(this.allSpaces, 'type')
    },
    spaceTypeTitle () {
      return _.startCase(this.slug)
    },
    spaceType () {
      return this.allSpacesByType[_.lowerCase(_.startCase(this.slug))]
    },
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
