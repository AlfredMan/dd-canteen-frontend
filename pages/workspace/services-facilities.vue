<template lang="html">
  <div class="mt-5">

    <div class="-container-fluid">
      <div class="px-0 px-md-4 py-4 py-5 py-md-5">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-8">
              <h1>Services & Facilities</h1>
            </div>
          </div>
          <div class="row d-flex align-items-start justify-content-between">
            <div class="col-12 col-md-5 mb-5">
              <h4>Workshops and specialist tools right on your doorstep. Hire a recording studio, a pop-up space, meeting rooms or a test kitchen. Even a rooftop sports court.</h4>
            </div>
            <!-- <div class="col-12 col-md-6">
              <div class="row d-flex align-items-end justify-content-end">
                <div class="col-12 col-md-12">
                  <lazy-image
                  :src="'https://images.ctfassets.net/7p1ysxjarsp5/1vccdswWfzojf7HUFt3t2w/8fb6455dafc6632094801439d0c791f0/Design-District-Matthew-Thompson-1505-LOW-RES.jpg'"
                  :w="1000"
                  :h="1000"
                  />
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>


    <!--  -->
    <span class="anchor" id="service-and-facilities"></span>
    <div class="-container-fluid anchor-target bg-white">
      <!-- <div class="-row pb-5-pt-3 px-0 px-md-4 py-4 py-md-5 bg-grey">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-8">
              <h2>Services & Facilities</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-5">
              <h4>Workshops and specialist tools right on your doorstep. Hire a recording studio, a pop-up space, meeting rooms or a test kitchen. Even a rooftop sports court.</h4>
              <nuxt-link :to="'/workspace/services-facilities'" class="btn btn-lg btn-primary">View all &rarr;</nuxt-link>
            </div>
          </div>
        </div>
      </div> -->

      <div class="row no-gutters d-flex align-items-start justify-content-between bg-white text-black">
        <!-- <div class="col-12">
          <h3>Workshops</h3>
        </div> -->
        <div class="col-12 col-md-5 mb-0 px-0 order-md-2">
          <!-- <div class="row d-flex align-items-end justify-content-end">
            <div class="col-12 col-md-12">
              <lazy-image
              :src="'https://images.ctfassets.net/7p1ysxjarsp5/21RQ1kgWpGexfUKMtcdKTm/1e47bf755d78145ee1eb547be44c627d/Hartley-Cycles_1.jpg'"
              :w="1000"
              :h="1000"
              />
            </div>
          </div> -->
          <lazy-image
          :src="'https://images.ctfassets.net/7p1ysxjarsp5/21RQ1kgWpGexfUKMtcdKTm/1e47bf755d78145ee1eb547be44c627d/Hartley-Cycles_1.jpg'"
          :w="1000"
          :h="1000"
          />
        </div>

        <!-- <div class="col-12 col-md-1 order-md-2" /> -->

        <div class="col-12 col-md-7 px-0">
          <div class="px-0 px-md-4 py-4 pb-5 py-md-5">
            <div class="col-12">
              <h3>Workshops</h3>
              <p>Often creative businesses need more than a desk. In the Design District you can access a range of workshops suited to your specialism. There’s a wood workshop, digital workshop, textile workshop, engineering workshop and an assembly space. Prototype or produce a new collection.</p>

              <div v-if="false" class="row mt-5">
                <div class="col-12 col-md-6 col-lg-3 mb-4">
                  <!-- <h5>Onsite Tools</h5> -->

                  <h5>Wood workshop </h5>
                  <ul class="h6">
                    <li>Axminster bandsaw</li>
                    <li>Festool chop saw</li>
                    <li>CNC router </li>
                    <li>1220x2440mm belt and disk sanders</li>
                    <li>Bobbin sander</li>
                    <li>Floor and table top pillar drills </li>
                    <li>Range of hand tools</li>
                    <li>Range of fixtures and fittings </li>
                    <li>Bookable workbenches </li>
                  </ul>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-4">
                  <h5>Digital workshop </h5>
                  <ul class="h6">
                    <li>1300x900 bed laser cutter </li>
                    <li>Roland GS-24 vinyl cutter </li>
                    <li>Vacuum former</li>
                    <li>Heat press kit </li>
                    <li>Ultimaker 2, Ultimaker S5, Witbox 2, Creality CR-10 and Formlabs2 3D printers </li>
                    <li>Electronic workbench</li>
                    <li>Pick and place machine</li>
                    <li>Arduino and Raspberry Pi coding</li>
                  </ul>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-4">
                  <h5>Textile workshop</h5>
                  <ul>
                    <li>Cutting table</li>
                    <li>Roland vinyl cutter</li>
                    <li>Industrial and domestic sewing machines</li>
                    <li>Overlocker</li>
                    <li>Embroidery machine</li>
                    <li>Heat press</li>
                  </ul>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-4">
                  <h5>Engineering workshop</h5>
                  <ul>
                    <li>Forco Start pillar drill</li>
                    <li>Baileigh metal bender</li>
                    <li>10 ton pneumatic press</li>
                    <li>Clarke CL430 metal lathe</li>
                    <li>Silverline grinding wheel      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row no-gutters d-flex align-items-start justify-content-between">
        <!-- <div class="col-12 col-md-6" /> -->
        <div class="col-12 col-md-7 mb-0">
          <!-- <div class="row d-flex align-items-end justify-content-end">
            <div class="col-12 col-md-12 px-0">
              <lazy-image
              :src="'https://images.ctfassets.net/7p1ysxjarsp5/2KQ913hiCMPeZFVYGQTDZR/51632e614fe29a553364b69990f89ad0/Design-District-Matthew-Thompson-8457-LOW-RES.jpg'"
              :w="2000"
              :h="1000"
              :custom="'fit=thumb'"
              />
            </div>
          </div> -->
          <lazy-image
          :src="'https://images.ctfassets.net/7p1ysxjarsp5/2KQ913hiCMPeZFVYGQTDZR/51632e614fe29a553364b69990f89ad0/Design-District-Matthew-Thompson-8457-LOW-RES.jpg'"
          :w="2000"
          :h="1000"
          :custom="'fit=thumb'"
          />
        </div>
        <!-- <div class="col-12 col-md-1" /> -->
        <div class="col-12 col-md-5 px-0">
          <div class="px-0 px-md-4 py-4 pb-5 py-md-5">
            <div class="col-12">
              <h3>Meeting rooms</h3>
              <p>At Design District you’ll have five rooms ideal for small to medium-sized meetings. Meeting rooms can be rented out between 8am and 7pm, either by the hour or for the entire day. Each room features Superfast wi-fi, a Smart TV and wall space for scribbles and post-it notes. </p>
            </div>
          </div>
        </div>
        <!-- <div class="col-12 col-md-6">
          <div class="row d-flex align-items-end justify-content-end">
            <div class="col-12 col-md-10">
              <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/2YkGmNe7vtf12308xsP0J1/7f043a0b6845187e4c66952b334c7a5c/KDN_Design_District_B4_190603_LR.jpeg?w=1000&h=800&fm=jpg&q=80&fit=thumb" alt="">
            </div>
          </div>
        </div> -->
      </div>

      <div class="row no-gutters d-flex align-items-start justify-content-between bg-white text-black">
        <div class="col-12 col-md-5 mb order-md-2">
          <!-- <div class="row d-flex align-items-end justify-content-end">
            <div class="col-12 col-md-12 px-0">
              <lazy-image
              :src="'https://images.ctfassets.net/7p1ysxjarsp5/64OjUmEoOvUZh7W0EdQTfe/cbd8c37727a7c54be182da4f6d1deeb1/MarketHall.jpg'"
              :w="1500"
              :h="1000"
              :custom="'fit=thumb'"
              />
            </div>
          </div> -->
          <lazy-image
          :src="'https://images.ctfassets.net/7p1ysxjarsp5/64OjUmEoOvUZh7W0EdQTfe/cbd8c37727a7c54be182da4f6d1deeb1/MarketHall.jpg'"
          :w="1500"
          :h="1000"
          :custom="'fit=thumb'"
          />
        </div>
        <div class="col-12 col-md-7">
          <div class="px-0 px-md-4 py-4 pb-5 py-md-5">
            <div class="col">
              <h3>Food hall and kitchen</h3>
              <p>Open to the public and filled with six independent food partners, the food hall will become a key meeting place in the district. It is located in SelgasCano’s luminescent building at the entrance to the district, immediately visible to visitors.</p>
              <p>Design District is equipped with an industrial kitchen that will service the food hall and cater for any onsite events. Tenants working in the food and beverage industries will have access to the kitchen by prior arrangement.</p>
            </div>
          </div>
        </div>

        <!-- <div class="col-12 col-md-1" />
        <div class="col-12 col-md-6" /> -->
        <!-- <div class="col-12 col-md-6">
          <div class="row d-flex align-items-end justify-content-end">
            <div class="col-12 col-md-10">
              <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/2YkGmNe7vtf12308xsP0J1/7f043a0b6845187e4c66952b334c7a5c/KDN_Design_District_B4_190603_LR.jpeg?w=1000&h=800&fm=jpg&q=80&fit=thumb" alt="">
            </div>
          </div>
        </div> -->
      </div>

      <div v-if="false" class="row d-flex align-items-start justify-content-between py-5">
        <!-- <div class="col-12 col-md-6" /> -->
        <div class="col-12 col-md-5 mb-3">
          <!-- <div class="row d-flex align-items-end">
            <div class="col-12 col-md-12">
              <lazy-image
              :src="'https://images.ctfassets.net/7p1ysxjarsp5/7DifsFTlzI7vzhBUouVQGf/77edcddc87c2531fd53898440f016035/AdamKahn-1C-Architect.jpg'"
              :w="1500"
              :h="1000"
              :custom="'fit=thumb'"
              />
            </div>
          </div> -->
          <lazy-image
          :src="'https://images.ctfassets.net/7p1ysxjarsp5/7DifsFTlzI7vzhBUouVQGf/77edcddc87c2531fd53898440f016035/AdamKahn-1C-Architect.jpg'"
          :w="1500"
          :h="1000"
          :custom="'fit=thumb'"
          />
        </div>
        <div class="col-12 col-md-6">
          <h3>Book and design supply shop</h3>
          <p>At Design District a book and supplies shop will open to the public. The shop will be a place for the design community to purchase art materials and design tools, as well as magazines and books. The space will allow the tenants to host events, such as book launches.</p>
        </div>
        <!-- <div class="col-12 col-md-6">
          <div class="row d-flex align-items-end justify-content-end">
            <div class="col-12 col-md-10">
              <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/2YkGmNe7vtf12308xsP0J1/7f043a0b6845187e4c66952b334c7a5c/KDN_Design_District_B4_190603_LR.jpeg?w=1000&h=800&fm=jpg&q=80&fit=thumb" alt="">
            </div>
          </div>
        </div> -->
      </div>

      <div class="row no-gutters d-flex align-items-start justify-content-between">
        <div class="col-12 col-md-7 mb-">
          <!-- <div class="row d-flex align-items-end justify-content-end">
            <div class="col-12 col-md-12 px-0">
              <lazy-image
              :src="'https://images.ctfassets.net/7p1ysxjarsp5/HZdjU0R1Fsm5E43GN0IvT/5d14e50e33add1aeff3939b18060c641/KDN_Design_District_A2_190603_LR.jpeg'"
              :w="2000"
              :h="1000"
              :custom="'fit=thumb'"
              />
            </div>
          </div> -->
          <lazy-image
          :src="'https://images.ctfassets.net/7p1ysxjarsp5/HZdjU0R1Fsm5E43GN0IvT/5d14e50e33add1aeff3939b18060c641/KDN_Design_District_A2_190603_LR.jpeg'"
          :w="2000"
          :h="1000"
          :custom="'fit=thumb'"
          />
        </div>

        <div class="col-12 col-md-5 px-0">
          <div class="px-0 px-md-4 py-4 pb-5 py-md-5">
            <div class="col">
              <h3>Pop-up space </h3>
              <p>Suitable for retail or small art exhibitions, a pop-up space will be located on the ground floor, opposite the food hall, in a 6A Architects building. It can be hired by members of the public, with discounted rates for the Design District community. You’ll find a flexible lighting system, built in till point and EPOS Payment System, and the hire includes cleaning and security. At an additional cost, we can provide an installation and de-installation service and catering.</p>
            </div>
          </div>
        </div>
        <!-- <div class="col-12 col-md-1" />
        <div class="col-12 col-md-6" /> -->
        <!-- <div class="col-12 col-md-6">
          <div class="row d-flex align-items-end justify-content-end">
            <div class="col-12 col-md-10">
              <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/2YkGmNe7vtf12308xsP0J1/7f043a0b6845187e4c66952b334c7a5c/KDN_Design_District_B4_190603_LR.jpeg?w=1000&h=800&fm=jpg&q=80&fit=thumb" alt="">
            </div>
          </div>
        </div> -->
      </div>

      <div class="row no-gutters d-flex align-items-start justify-content-between pt-5- bg-white">
        <!-- <div class="col-12 col-md-6" /> -->
        <div class="col-12 col-md-5 mb-  order-md-2">
          <!-- <div class="row d-flex align-items-end justify-content-end">
            <div class="col-12 col-md-12 px-0">
              <lazy-image
              :src="'https://images.ctfassets.net/7p1ysxjarsp5/3aSHHWF58a3lz1wLhodNS3/d7bf1c2dd9c8e04abd2057194b16ace7/bb.jpg'"
              :w="1500"
              :h="1000"
              :custom="'fit=thumb&f=bottom'"
              />
            </div>
          </div> -->
          <lazy-image
          :src="'https://images.ctfassets.net/7p1ysxjarsp5/3aSHHWF58a3lz1wLhodNS3/d7bf1c2dd9c8e04abd2057194b16ace7/bb.jpg'"
          :w="1500"
          :h="1000"
          :custom="'fit=thumb&f=bottom'"
          />
        </div>
        <!-- <div class="col-12 col-md-1 order-md-2" /> -->

        <div class="col-12 col-md-6">
          <div class="px-0 px-md-4 py-4 pb-5 py-md-5">
            <div class="col">
              <h3>Multi-sports rooftop court </h3>
              <!-- <p>A versatile multi-sports rooftop court will sit on top of building C1. The rooftop will host a range of sports and wellness activities, including basketball, HIIT and yoga. The Design District community and members of the public can hire the court for private events space such as pop-up cinema and photoshoots.</p> -->
              <p>A versatile multi-sports rooftop court will host a range of sports and wellness activities, including basketball, HIIT and yoga. The Design District community and members of the public can hire the court for private events space such as pop-up cinema and photoshoots.</p>
            </div>
          </div>
        </div>
        <!-- <div class="col-12 col-md-6">
                    <div class="row d-flex align-items-end justify-content-end">
                      <div class="col-12 col-md-10">
                        <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/2YkGmNe7vtf12308xsP0J1/7f043a0b6845187e4c66952b334c7a5c/KDN_Design_District_B4_190603_LR.jpeg?w=1000&h=800&fm=jpg&q=80&fit=thumb" alt="">
                      </div>
                    </div>
                  </div> -->
      </div>

    </div>

    <!-- <div class="bg-light">
      <div class="container mt-10">
        <enquire-form></enquire-form>
      </div>
    </div> -->
    <span class="anchor" id="become-a-tenant" ></span>
    <div class="py-5 bg-white anchor-target px-0 px-md-4 py-4 pb-5 py-md-5">
      <div class="container-fluid -my-5">
        <div class="row">
          <div class="col-12 col-md-8">
            <h2>Become a tenant</h2>
          </div>
          <div class="col-12" />
          <div class="col-12 col-md-4 mb-5">
            <h4>Design District will provide a new space for creatives of all kinds to work together. A thriving home for ideas, offering accessible rent, flexible leases and workspace purpose-built for creative disciplines.</h4>
            <p>Whether you’re a team of 50 or a first-time founder, there’s space for you at Design District. Register your interest to become a tenant. Tell us about your requirements, and we’ll be in touch.</p>
          </div>
          <div class="col-12 col-lg-1" />
          <div class="col-12 col-md-8 col-lg-7">
            <enquire-form source="workspace"/>
          </div>
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
    allBuildings () {
      return this.$store.state.buildings
    },
    allSpaces () {
      return this.$store.state.spaces
    },
    spaceFilters () {
      return this.$store.state.filters
    },
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
    }
  },

  methods: {
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

<style lang="scss">
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
</style>
