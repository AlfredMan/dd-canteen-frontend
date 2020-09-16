<template lang="html">
  <div class="mt-5">
    <div class="-container-fluid">
      <div class="px-0 px-md-4 py-4 py-5 py-md-5">
        <div class="container-fluid -py-5">
          <div class="row">
            <div class="col-12 col-md-5">
              <h1>Community</h1>
              <h4>Just starting out or trying something new? The Club is an accessible and low-commitment way to be part of the Design District community.</h4>
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

    <div class="-container-fluid bg-white py-4-py-lg-5 ">
      <div class="px-0 px-md-4 py-4 py-5 py-md-5">
        <div class="container-fluid">
          <div class="row d-flex justify-content-between mb-5">
            <div class="col-12 mb-5">
              <h2>Creative Directory</h2>
            </div>
            <div class="col-12 mb-5">
              <div class="mr-5">
                <h5>Type</h5>
                <div class="tags">
                  <span class="tag" v-for="type in sampleType">
                    {{type}}
                  </span>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="column column-count-lg-5 column-count-md-3">
                <div class="business" v-for="business in formattedDirectory">
                  <div class="d-flex">
                    <nuxt-link :to="`/directory/my-design-studio`">
                      {{business.title}} <span class="text-black-50 d-inline-block ml-auto text-right" style="min-width: 50px">{{business.location}}</span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="-container-fluid">
      <div class="bg-white text-black px-0 px-md-4 py-4 py-5 py-md-5">
        <div class="container-fluid py-5">

          <div class="row d-flex">
            <div class="col-12 col-md-6 -px-4">
              <h2>Food & Beverages</h2>
              <h4>Each is tailored to the needs of creative businesses to help them thrive.</h4>
            </div>
            <div class="col-12 col-md-6 -px-4 ml-auto ">
              <div class="column column-count-lg-2 vendors">
                <div class="d-flex vendor" v-for="vendor in formattedVendors">
                  <nuxt-link :to="`/directory/my-design-studio`">
                    {{vendor.title}} <span class="text-black-50 d-inline-block ml-auto text-right" style="min-width: 50px">{{vendor.location}}</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- <div v-if="true" class="container-fluid bg-light py-5">
      <div class="row">
        <div class="container">
          <div class="row py-5">
            <div class="col-12 col-md-6 col-lg-6">
              <h3>Pricing starting at<br>£60 per month</h3>
              <br>
              <h4>Club membership benefits</h4>
              <ul class="h6">
                <li>Exclusive member’s events and mixers</li>
                <li>Access to industry specific workshops</li>
                <li>On demand work spaces</li>
                <li>Complimentary teas and coffees for fixed and micro studio club members</li>
                <li>Onsite members cafe and bar</li>
                <li>Start-up and business support</li>
                <li>Bookable meeting rooms in the building</li>
              </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-6">
              <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/6rHoxeVj26VyAX2odQiUB7/d0b8111acc6b6e4123d4ab8c6ebcf1ab/RoofTerrace.jpg?w=2000&h=2000&fm=jpg&q=80&fit=thumb" alt="">
            </div>
          </div>
        </div>
      </div>

    </div> -->


  </div>
</template>

<script>
import ClubForm from '../../../components/forms/JoinTheClub.vue'
import { directory } from '~/common/directory.js'
import { vendors } from '~/common/vendors.js'
import _ from 'lodash'

export default {
  components: {
    ClubForm
  },
  data () {
    return {
      sampleType: ['Fashion', 'Education', 'Visual Design', 'Research']
    }
  },
  computed: {
    formattedVendors () {
      return vendors
    },
    formattedDirectory () {
      // console.log('directory', directory)
      let dWithType = _.map(directory, (d) => {
        d.type = _.sample(this.sampleType)
        return d
      })

      dWithType = _.sortBy(dWithType, ['title'])
      return dWithType
      // let groupedByLetter = _.groupBy(dWithType, (d) => _.upperCase(d.title[0]))


      // let aToZ = 'abcdefghijklmnopqrstuvwxyz'
      // let listWithGroup = []
      //
      // for (var i = 0; i < dWithType.length; i++) {
      //   let d = dWithType[i]
      //   if (i + 1 >= dWithType.length) {
      //     listWithGroup.push(dWithType[i])
      //   } else {
      //
      //     let nextD = dWithType[i]
      //     let currentStartLetter = _.upperCase(d.title[0])
      //     let nextStartLetter = _.upperCase(nextD.title[0])
      //
      //     if (currentStartLetter == nextStartLetter) {
      //       listWithGroup.push(dWithType[i])
      //     } else {
      //       listWithGroup.push(dWithType[i])
      //       listWithGroup.push()
      //     }
      //   }
      // }
      // return listWithGroup

    }
  }
}
</script>

<style lang="scss" scoped>
.vendor,
.business {
  line-height: 1.3;
  margin-bottom: 0.5rem;
  cursor: pointer;
}
.vendors {
  margin-top: 6.5rem;
}
.vendor {
  font-size: 1.5rem;
}
</style>
