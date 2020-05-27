<template lang="html">
  <div class="mt-5">
    <div class="-container-fluid">
      <div class="px-0 px-md-4 py-4 py-5 py-md-5">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-6">
              <h1>Hire a Space</h1>
              <!-- <h4>Just starting out or trying something new? The Club is an accessible and low-commitment way to be part of the Design District community.</h4> -->
              <h4>Book a recording and broadcast studio, meeting rooms, events spaces, a pop-up retail space and even a multi-sport rooftop court.</h4>
              <!-- <a href="#" class="btn btn btn-lg btn-primary">Book a viewing</a> -->
            </div>
            <!-- <div class="col-12 col-md-7">
              <div class="row d-flex justify-content-end align-items-end mt-0">
                <div class="col-5 col-md-4">
                  <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/5O8MZdUvzEq9ZwkNEDG7tr/c5bd4835a154182f51b1008e77019ff6/AdamKahn-1D-Architect.jpg?w=1000&h=800&fm=jpg&q=80&fit=thumb" alt="">
                </div>
                <div class="col-7 col-md-8">
                  <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/4FnpIUyeKNLkJnB35opltV/7444507404b1420c7e228838cafd6894/Barozzi-Veiga-1B-Architect.jpg?w=1000&h=1200&fm=jpg&q=80&fit=thumb" alt="">
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="container-fluid">
      <div class="row bg-leather text-black pb-5-pt-3">
        <div class="container py-5">
          <div class="row d-flex">
            <div class="col-12 col-md-6 px-4">
              <h2>Spaces</h2>
            </div>
          </div>

          <div class="row d-flex align-items-end align-items-baseline mt-5 pt-5 text-dark">
            <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <lazy-image
              :src="'https://images.ctfassets.net/7p1ysxjarsp5/4FnpIUyeKNLkJnB35opltV/7444507404b1420c7e228838cafd6894/Barozzi-Veiga-1B-Architect.jpg'"
              :w="2000"
              :h="2000"
              class=""
              :xcustom="'fit=thumb&f=bottom'"
              />
              <div class="">
                <span />
                <h3>Meeting Rooms</h3>
                <p>
                  Rent a studio, a floor, or an entire building. Spaces kitted out to suit your industry and flexible tenancies for growing teams.
                  <br>
                  <nuxt-link :to="{ path: '/workspace'}">
                    Become a tenant &rarr;
                  </nuxt-link>
                </p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <lazy-image
              :src="'https://images.ctfassets.net/7p1ysxjarsp5/33wkoRXjjbWuilpEmwjaRl/b44134581716be6e4fcf4c3846a5b46d/Design-District-Matthew-Thompson-0205-LOW-RES.jpg'"
              :w="2000"
              :h="2000"
              class=""
              :custom="'fit=thumb'"
              />
              <div class="">
                <span />
                <h3>Workshops</h3>
                <p>
                  Need a 3D-printer or a test kitchen, a pattern-cutting table or a coding lab? There’s space to make in our on-site workshops.
                  <br>
                  <nuxt-link :to="{ path: '/workspace', hash: '#service-and-facilities'}">
                    Find out more &rarr;
                  </nuxt-link>
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <lazy-image
              :src="'https://images.ctfassets.net/7p1ysxjarsp5/1eLvovl1dCbtnZvQ5f7EEM/09e2e8afdb9cefe11c793ce446ee7e50/KDN_Design_District_C1_190603_LR.jpeg'"
              :w="2000"
              class=""
              />
              <div class="">
                <span />
                <h3>Events spaces</h3>
                <p>
                  Book a recording and broadcast studio, meeting rooms, events spaces, a pop-up retail space and even a multi-sport rooftop court.
                  <br>
                  <a href="#newsletter" class="">
                    Coming soon
                  </a>
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <lazy-image
              :src="'https://images.ctfassets.net/7p1ysxjarsp5/6wUPBkuAGGxBgcm4X5RszG/8eb3bac1543bee530b798f7eace31e3d/KDN_Design_District_C3_LR.jpeg'"
              :w="1600"
              :h="2000"
              class=""
              />
              <div class="">
                <span />
                <h3>Pop-up retail</h3>
                <p>
                  Just starting out or trying something new? Our membership initiative will be an accessible way to be part of the Design District community, without the commitment of renting a workspace.
                  <router-link to="/the-club" class="">
                    Register your interest &rarr;
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="">
      <div class="-row bg-white text-black pb-5-pt-3 px-0 px-md-4 py-4 py-5 py-md-5">
        <div class="container-fluid">
          <div class="row d-flex">
            <!-- <div class="col-12 col-md-6 px-4 mb-5">
              <h2>Spaces</h2>
            </div> -->
            <div class="col-12 col-md-6 mb-4">

                <h5>Type</h5>
                <div class="tags">
                  <span class="tag">
                    Meeting Room
                  </span>
                  <span class="tag">
                    Popup
                  </span>
                  <span class="tag">
                    Photo Studio
                  </span>
                  <span class="tag">
                    Roof Top
                  </span>
                </div>

            </div>
            <div class="col-12 col-md-6 mb-4">

                <h5>Number of People</h5>
                <div class="tags">
                  <span class="tag">
                    1
                  </span>
                  <span class="tag">
                    2–4
                  </span>
                  <span class="tag">
                    5–10
                  </span>
                  <span class="tag">
                    11–20
                  </span>
                </div>

            </div>
          </div>

          <div class="row d-flex align-items-end align-items-baseline mt-5 pt-5 text-dark" v-for="(spaceHireTypeValue, spaceHireTypeNameKey) in allHireSpacesByType">
            <div class="col-12 mb-3">
              <h3 class="text-capitalize">{{spaceHireTypeNameKey}}</h3>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-4" v-for="hire in spaceHireTypeValue">
              <transition-link :to="`/hire/${hire.slug}`">
                <lazy-image
                :src="hire.url"
                :w="3000"
                :h="2000"
                :custom="'fit=thumb&f=center'"
                />
                <div class="my-3">
                  <h5 class="mb-0">{{hire.title}}</h5>
                  <p class="mt-0"><small>{{hire.alt}}</small></p>
                </div>
              </transition-link>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div v-if="true" class="-container-fluid bg-dark text-white py-5- position-relative"
    >
      <div class="row- position-relative -px-4" style="z-index:1">
        <div class="container-fluid px-0">
          <div class="row no-gutters">
            <div class="col-12 col-md-6 col-lg-6">
              <div class="px-4 px-md-5 py-5 pb-5 py-md-5">
                <h3>Pricing starting at<br>£15 per hour (placeholder)</h3>
                <br>
                <h4>How does this work?</h4>
                <ul class="h6">
                  <li>(Placeholder text)</li>
                  <li>Exclusive member’s events and mixers</li>
                  <li>Access to industry specific workshops</li>
                  <li>On demand work spaces</li>
                  <li>Complimentary teas and coffees for fixed and micro studio club members</li>
                  <li>Onsite members cafe and bar</li>
                  <li>Start-up and business support</li>
                  <li>Bookable meeting rooms in the building</li>
                </ul>
              </div>
              <!-- <h2>Members access</h2>
              <h4>The Design District is at the heart of Greenwich Peninsula, a new type of London created specifically for the creative community.</h4>
              <br> -->
              <!-- </div>
              <div class="col-12 col-md-6 col-lg-4"> -->
              <!-- <h3>Club opening hours</h3>
              <p>Serviced opening hours are between 08:00—18:00<br>with 24hr access via a fob.</p> -->
            </div>
            <div class="col-12 col-md-6 px-0" style="background-size: cover; background-position: center; background-repeat: no-repeat; background-image:url(https://images.ctfassets.net/7p1ysxjarsp5/6wUPBkuAGGxBgcm4X5RszG/8eb3bac1543bee530b798f7eace31e3d/KDN_Design_District_C3_LR.jpeg?w=2000&h=2000&fm=jpg&q=80)">
              <div class="d-block d-lg-none" style="padding-bottom: 100%;">

              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="position-absolute" style="position:absolute;top:0;right:0;bottom:0; left: 50%;  background-size: cover; background-position: center; background-repeat: no-repeat; background-image:url(https://images.ctfassets.net/7p1ysxjarsp5/6wUPBkuAGGxBgcm4X5RszG/8eb3bac1543bee530b798f7eace31e3d/KDN_Design_District_C3_LR.jpeg?w=2000&h=2000&fm=jpg&q=80)"> -->
        <!-- <div class="col-12 col-md-6 col-lg-4 ml-auto px-0"> -->
          <!-- <img class="lazyload" data-src="" alt=""> -->
        <!-- </div> -->
      <!-- </div> -->
    <!-- <div class="row  d-flex justify-content-end align-items-end">

      </div> -->
    </div>

    <div class="bg-white">
      <div class="px-0 px-md-4 py-4 pb-5 py-md-5">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-6">
              <h2>Hire</h2>
            </div>
            <div class="col-12" />
            <div class="col-12 col-md-4">
              <h4>Register your interest to become a member of the Design District community in autumn 2020. Aimed at freelancers, consultants and small enterprises, our membership initiative will offer a place to work but also enjoy talks, events, mixers and business support.</h4>
              <!-- <nuxt-link to="/the-club/apply" class="btn btn btn-lg btn-dark mt-3">
                Apply now
              </nuxt-link> -->
            </div>
            <div class="col-12 col-lg-1" />
            <div class="col-12 col-md-8 col-lg-7">
              <club-form />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ClubForm from '../../components/forms/JoinTheClub.vue'
// import { buildings } from '~/common/buildings.js'
import _ from 'lodash'
export default {
  components: {
    ClubForm
  },
  created () {
    this.$store.dispatch('updateNavigationTheme', { theme: 'light' })
  },
  computed: {
    allHireSpaces () {
      return this.$store.state.hire
    },
    allHireSpacesByType () {
      return _.groupBy(this.allHireSpaces, 'type')
    },
    // formattedBuildings () {
    //   // console.log('buildings', buildings)
    //   return _.map(buildings, (b) => {
    //     b.type = _.sample(['Meeting Room', 'Popup', 'Photo Studio', 'Roof Top'])
    //     return b
    //   })
    // }
  }
}
</script>

<style lang="scss">
</style>
