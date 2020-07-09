<template lang="html">
  <div class="mt-5">

    <div class="-container-fluid">
      <div class="px-0 px-md-4 py-4 py-5 py-md-5">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-12">
              <h1>A home for creators</h1>
            </div>
          </div>
          <div class="row d-flex align-items-start justify-content-between">
            <div class="col-12 col-md-5 mb-5">
              <!-- <h4>Design District will provide a new space for creatives of all kinds to work together. A thriving home for ideas, offering affordable rent, flexible leases and work spaces purpose-built for creative disciplines.</h4> -->
              <p class="-font-weight-light">Rent a desk, a studio, a workshop, or an entire building. With simple wi-fi access, clean and dirty workshops, integrated security, flexible leases and a host of events.</p>
              <!-- <h4>Design District will provide 150,000 sq ft of permanent workspace for everyone for London’s designers makers and creators. A place for total focus, shared stories and resources, new connections and collaboration. </h4>
              <h4>Rent a desk, a studio,  a workshop, or an entire building. With simple wi-fi access, clean and dirty workshops, integrated security, flexible leases and a host of events.</h4> -->
              <!-- <a href="#become-a-tenant" class="btn btn btn-lg btn-primary mt-3">Get in touch</a> -->

              <!-- <h3 class="mt-5 mb-5">Find your work space</h3> -->

              <div class="d-flex flex-wrap align-items-baseline">

                <div class="-col col-6-col-md-6 pr-0 mb-3 d-flex align-items-baseline">
                  <h6 class="filter-option font-weight-light mt-0 mb-0">Find your work space.</h6>
                </div>


                <div class="-col col-6-col-md-6 pr-0 mb-3 d-flex align-items-baseline pl-2 pr-1  mr-1">
                  <div class="mb-2- mr-2">
                    <h6 class="filter-option font-weight-light mt-0 mb-0">View</h6>
                  </div>
                  <div class="position-relative mr-2">
                    <div
                    class="btn btn-outline-dark chip -chip-lg mr-0 mb-0 mt-0 h6"
                    :class="[this.filter.options ? 'active' : '']"
                    @click="typeFilters = true; sizeFilters = false"
                    >
                    <span v-if="!this.filter.options">All space types</span>
                    <span v-else>{{this.filter.options}}</span>
                    </div>

                    <div class="filter-popup" v-show="typeFilters === true">
                      <!-- <h6>Select workspace type</h6> -->
                      <div class="d-flex justify-content-between align-items-baseline">
                        <div class="h6 font-weight-light">
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
                      class="btn btn-outline-dark chip -chip-lg mr-2 mb-2 h6"
                      >
                        {{option}} <span v-if="option == filter.options">&times;</span>
                      </div>
                      <div class="mt-2clear-filter" @click="toggleFilter('options', null); typeFilters = false">
                        <small>Clear</small>
                      </div>
                    </div>
                  </div>
                <!-- </div>
                <div class="-col-3 col-6-col-md-3 pr-0 mb-3 d-flex align-items-center pr-2"> -->
                  <div class="mb-2- mr-2">
                    <h6 class="filter-option font-weight-light mt-0 mb-0">in</h6>
                  </div>
                  <div class="position-relative">
                    <div class="btn btn-outline-dark chip -chip-lg mr-2 mb-0 mt-0 h6"
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
                      <!-- <h6>Select workspace size in sqft</h6> -->
                      <!-- <div
                      v-for="option in spaceFilters['sizeBracket']" :key="option"
                      @click="toggleFilter('sizeBracket', option); sizeFilters = false"
                      :class="{'active': option == filter.sizeBracket}"
                      class="btn btn-outline-dark chip chip-lg mr-2 mb-2"
                      >
                        {{option}} <span v-if="option == filter.sizeBracket">&times;</span>
                      </div> -->
                      <div class="d-flex justify-content-between align-items-baseline">
                        <div class="h6 font-weight-light">
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

                <div class="col-12 col-md-12 mb-3 -d-flex-align-items-center mt-3 px-0">
                  <nuxt-link :to="'/workspace/filter'" class="btn btn-lg -btn-outline -btn-outline-dark btn-primary -btn-dark">Start &rarr;</nuxt-link>
                  <!-- <nuxt-link :to="'/workspace/filter'" class="btn btn-lg btn-gray">Show All &rarr;</nuxt-link> -->
                </div>
              </div>

            </div>

            <div class="col-12 col-md-7">
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

    <span class="anchor" id="become-a-tenant" ></span>
    <div class="py-5 bg-white anchor-target px-0 px-md-4 py-4 pb-5 py-md-5">
      <div class="container-fluid -my-5">
        <div class="row">
          <div class="col-12 col-md-8">
            <h2>Work space</h2>
          </div>
          <div class="col-12" />
          <div class="col-12 col-md-6 mb-5">
            <h4>Our work spaces range from serviced studio, co-working spaces, ground floor space, to on/off office and multi-purpose work space.</h4>
            <!-- <h4>Design District will provide a new space for creatives of all kinds to work together. A thriving home for ideas, offering accessible rent, flexible leases and workspace purpose-built for creative disciplines.</h4> -->
            <!-- <p>Whether you’re a team of 50 or a first-time founder, there’s space for you at Design District. Register your interest to become a tenant. Tell us about your requirements, and we’ll be in touch.</p> -->
            <nuxt-link :to="'/workspace/filter'" class="mt-3 btn btn-lg bg-primary text-white">View all &rarr;</nuxt-link>
          </div>
          <!-- <div class="col-12 col-lg-1" />
          <div class="col-12 col-md-8 col-lg-7">
            <enquire-form source="workspace"/>
          </div> -->
        </div>
      </div>
    </div>
    <!--  -->
    <div class="-container-fluid bg-primary bg-primary d-none">
      <div class="row- -pt-3 px-0 px-md-4 py-0 py-md-2">
        <div class="container-fluid py-5">
          <div class="row -mb-5">
            <div class="col-12 col-md-6 mb-5">
              <h2>Find a work space</h2>
              <h4>Rent a desk, a studio,  a workshop, or an entire building. With simple wi-fi access, clean and dirty workshops, integrated security, flexible leases and a host of events.</h4>
              <!-- <br> -->
              <h3>Flexible tenancies</h3>
              <p>Rent work spaces on short or long leases made to be flexible. Grow the size of your studio along with your business.</p>
              <!-- <br> -->
              <!-- <h3>What we offer: </h3>
              <ul class="h6">
                <li>A desk to 1,500 sq. ft studio space</li>
                <li>Flexible tenancy agreements</li>
                <li>High speed wi-fi connection</li>
                <li>Integrated security across the district and in your building </li>
                <li>24-hour access to your building with your fob</li>
                <li>Access to creative industry events</li>
                <li>Bookable workshop spaces and meeting rooms</li>
              </ul> -->
              <a href="#become-a-tenant" class="btn btn btn-lg btn-dark mt-3">Join Design District</a>
              <!-- <p>Want something smaller?</p>
              <router-link to="/the-club" class="h5 text-primary">
                Join The Club &rarr;
              </router-link> -->
            </div>
            <div class="col-12 col-md-1" />
            <div class="col-12 col-md-5">
              <lazy-image
              :src="'https://images.ctfassets.net/7p1ysxjarsp5/6rHoxeVj26VyAX2odQiUB7/d0b8111acc6b6e4123d4ab8c6ebcf1ab/RoofTerrace.jpg'"
              :w="1000"
              :h="1200"
              :custom="'fit=thumb'"
              />
            </div>
          </div>

          <!-- <div class="row d-flex align-items-end- justify-content-end-">
            <div class="col-12 col-md-6 col-lg-4">
              <h4>Flexible tenancies</h4>
              <p>Rent an office or workshop studio for three months or a year. Our studio tenancy agreements are made to be flexible. Grow the size of your studio along with your business. </p>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <h4>What we offer: </h4>
              <ul>
                <li>200 to 1,500 sq. ft studio space</li>
                <li>High speed wi-fi connection</li>
                <li>Integrated security across the district and in your building</li>
                <li>24-hour access to your building with your fob </li>
                <li>Access to three free events per year</li>
                <li>Year round start-up and business support</li>
                <li>Flexible tenancy agreements</li>
                <li>Available with rental subsidy </li>
              </ul>
              <p>Want something smaller? <a href="#">Join The Club &rarr;</a></p>
            </div>
          </div> -->

          <!-- <div class="row d-flex align-items-end justify-content-between">
            <div class="col-12 col-md-4">
              <h3>Flexible tenancies</h3>
              <p>Rent an office or workshop studio for three months or a year. Our studio tenancy agreements are made to be flexible. Grow the size of your studio along with your business. </p>

              <h3>What we offer: </h3>
              <ul class="h6">
                <li>200 to 1,500 sq. ft studio space</li>
                <li>High speed wi-fi connection</li>
                <li>Integrated security across the district and in your building</li>
                <li>24-hour access to your building with your fob </li>
                <li>Access to three free events per year</li>
                <li>Year round start-up and business support</li>
                <li>Flexible tenancy agreements</li>
                <li>Available with rental subsidy </li>
              </ul>
              <p>Want something smaller?</p>
              <a href="#" class="h5 text-primary">Join The Club &rarr;</a>
            </div>
            <div class="col-12 col-md-8">
              <div class="row d-flex align-items-end justify-content-end">
                <div class="col-12 col-md-7">
                  <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/1eLvovl1dCbtnZvQ5f7EEM/09e2e8afdb9cefe11c793ce446ee7e50/KDN_Design_District_C1_190603_LR.jpeg?w=1000&h=1200&fm=jpg&q=80&fit=thumb" alt="">
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <!--  -->
    <div class="-container-fluid bg-white d-none">
      <div class="-row pb-5 pt-3 px-0 px-md-4 py-0 py-md-2">
        <div class="container-fluid py-5">

          <div class="row mb-4">
            <div class="col-12 col-md-6">
              <!-- <h2>Available Spaces</h2> -->
              <h2>Find your work&nbsp;space</h2>
            </div>
          </div>

          <div class="row">

            <div class="col-12 row d-flex flex-wrap justify-content-start">

              <div class="col-12 col-md-12 mb-3 -d-flex-align-items-center">
                <div class="mb-2">
                  <h5 class="filter-option">Size (Sq Ft)</h5>
                </div>
                <div class="">
                  <div
                  v-for="option in spaceFilters['sizeBracket']" :key="option"
                  @click="toggleFilter('sizeBracket', option)"
                  :class="{'active': option == filter.sizeBracket}"
                  class="btn btn-outline-dark chip chip-lg mr-2 mb-2"
                  >
                    {{option}} <span v-if="option == filter.sizeBracket">&times;</span>
                  </div>
                </div>
                <div class="">
                  <!-- <no-ssr>
                    <vue-range-slider
                    ref="slider"
                    :min="100"
                    :max="2000"
                    :value="[100, 200, 500, 1000, 2000]"
                    @drag-start="onDragStart"
                    @drag-end="onDragEnd"
                    @slide-end="onSlideEnd"
                    @on-keypress="onKeypress"
                    >
                    </vue-range-slider>
                  </no-ssr> -->
                </div>
              </div>

              <!-- <div class="col-12 col-md mb-3 -d-flex-align-items-center">
                <div class="mb-2">
                  <h5 class="filter-option">Architect</h5>
                </div>
                <div class="">
                  <div
                  v-for="option in spaceFilters['architect']" :key="option"
                  @click="toggleFilter('architect', option)"
                  :class="{'active': option == filter.architect}"
                  class="btn btn-outline-dark chip chip-lg mr-2 mb-2"
                  >
                    {{option}} <span v-if="option == filter.architect">&times;</span>
                  </div>
                </div>
              </div> -->

              <div class="col-12 col-md-12 mb-3 -d-flex-align-items-center">
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
              </div>

              <div class="col-12 col-md-12 mb-3 -d-flex-align-items-center mt-5">
                <nuxt-link :to="'/workspace/filter'" class="btn btn-lg btn-primary">Start &rarr;</nuxt-link>
              </div>



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




            <!-- <div class="row mt-5">
              <div class="col-12">
                <h4>Find your space</h4>
              </div>
              <div class="col-12 col-md-6 col-lg-3 mb-5 building"
              v-if="filteredSpaces.length > 0"
              v-for="(space, index) in filteredSpaces"
              :key="space.slug">
                <transition-link :to="`/space/${space.slug}`">
                  <div class="">
                    <lazy-image
                    :src="space.images[0].url"
                    :w="3000"
                    :h="2400"
                    :custom="'fit=thumb&f=center'"
                    />
                  </div>
                  <h5 class="mt-4">{{space.title}}</h5>
                  <p>This is a placeholder short description of a unit</p>
                </transition-link>
              </div>
              <div class="col-12 pb-5" v-if="filteredSpaces.length < 1 && allSpaces.length > 0">
                <h4 class="my-5" style="opacity:0.5">No matching units</h4>
              </div>
            </div> -->

          <!-- </div> -->

        </div>
      </div>
    </div>

    <!--  -->
    <span class="anchor" id="service-and-facilities"></span>
    <div class="-container-fluid anchor-target bg-black" accesskey="">
      <div class="-row pb-5-pt-3 px-0 px-md-4 py-4 py-md-5 bg-dark text-white"
      >
        <div class="" style="background-size: cover; background-position: center center; opacity: 0.5; z-index: 0; position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; background-image: url('https://images.ctfassets.net/7p1ysxjarsp5/21RQ1kgWpGexfUKMtcdKTm/1e47bf755d78145ee1eb547be44c627d/Hartley-Cycles_1.jpg?fm=jpg&q=80&w=1200&h=1200&');">

        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-8">
              <h2>Services & Facilities</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-5">
              <h4>Workshops and specialist tools right on your doorstep. Hire a recording studio, a pop-up space, meeting rooms or a test kitchen. Even a rooftop sports court.</h4>
              <!-- <a href="#" class="text-primary">View all architects &rarr;</a> -->
              <nuxt-link :to="'/workspace/services-facilities'" class="btn btn-lg btn-primary">View all &rarr;</nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div class="row no-gutters d-flex align-items-start justify-content-between bg-white text-black" v-if="false">
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

        <!-- <div class="col-12 col-md-7 px-0">
          <div class="px-0 px-md-4 py-4 pb-5 py-md-5">
            <div class="col-12">
              <h3>Workshops</h3>
              <p>Often creative businesses need more than a desk. In the Design District you can access a range of workshops suited to your specialism. There’s a wood workshop, digital workshop, textile workshop, engineering workshop and an assembly space. Prototype or produce a new collection.</p>

              <div v-if="false" class="row mt-5">
                <div class="col-12 col-md-6 col-lg-3 mb-4">
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
        </div> -->
      </div>

      <div class="row no-gutters d-flex align-items-start justify-content-between" v-if="false">
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

      <div class="row no-gutters d-flex align-items-start justify-content-between bg-white text-black" v-if="false">
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

      <div class="row no-gutters d-flex align-items-start justify-content-between" v-if="false">
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

      <div class="row no-gutters d-flex align-items-start justify-content-between pt-5- bg-white" v-if="false">
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
          <div class="col-12 col-md-6 mb-5">
            <h4>Whether you’re a team of 50 or a first-time founder, there’s space for you at Design District. Register your interest to become a tenant. Tell us about your requirements, and we’ll be in touch.</h4>
            <!-- <h4>Design District will provide a new space for creatives of all kinds to work together. A thriving home for ideas, offering accessible rent, flexible leases and workspace purpose-built for creative disciplines.</h4> -->
            <!-- <p>Whether you’re a team of 50 or a first-time founder, there’s space for you at Design District. Register your interest to become a tenant. Tell us about your requirements, and we’ll be in touch.</p> -->
            <nuxt-link :to="'/workspace/enquire'" class="btn btn-lg bg-primary text-white">Join Design District &rarr;</nuxt-link>
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
      typeFilters: false,
      // sliderModel: ['0','5000+'],
      // sliderData: ['0', '100', '200', '1000', '2000', '5000+'],
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
    onSliderChange (val, a) {
      // console.log('onSliderChange', ev, a)
      let values=['0', '100', '200', '1000', '2000', '5000+']
      let min = values[val[0]]
      let max = values[val[1]]
      this.filterDisplay.sizeBracketMin = min
      this.filterDisplay.sizeBracketMax = max
      console.log('onSliderChange', min, max)
    },
    onSliderDragEnd (val, a) {
      // console.log('onSliderDragEnd', ev, a)
    }
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
  // right: 0;
  // left: 50%;
  // transform: translateX(-50%);
  left: 0;
  width: 16rem;
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
