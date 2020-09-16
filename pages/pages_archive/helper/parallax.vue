<template>
  <div class="">

    <div class="parallax-header row" ref="header">
      <div class="col-12">
        <div class="parallax-header-image" :style="getHeaderStyle()">
          <img
          class=" img-fluid lazyload w-100" data-src="https://images.ctfassets.net/7p1ysxjarsp5/7j8uWLxtgXEitvBBIO8OgY/54bab45ebfc6fdebe0707a10cd5ec259/KDN_DD_West_Elevation_170816_02-1.jpg?w=4000&fm=jpg&q=80" alt="">
        </div>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-md-7">
          <h1>About</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <h4>Design District is a collection of 16 buildings designed by eight architects, set in the heart of Greenwich Peninsula. From autumn 2020 it will offer a permanent and purpose-designed work space for the creative industries.</h4>
        </div>
      </div>
    </div>



    <!--  -->
    <div class="container-fluid -bg-secondary">
      <div class="row pt-5">
        <div class="container pt-2 pb-5">
          <div class="row">
            <div class="col-12 mb-4">
              <h2>Design District</h2>
            </div>
            <div class="col-12" />
            <div class="col-12 col-md-6 mb-4 mb-lg-5">
              <h3>A thriving home for ideas</h3>
              <!-- <p>Design District will provide a new space for London’s creatives of all kinds to come and work together. A magnetic centre of activity with a vibrant and engaged community of free thinkers – from architects, artists and makers to graphic, fashion and digital designers, gaming professionals, musicians and many more.</p> -->
              <p>Design District will provide a new space for London’s creatives to come and work together. A magnetic centre of activity with a vibrant and engaged community of designers, makers and creators – from architects and artists to graphic, fashion and digital designers, gaming professionals, musicians and many more.</p>
            </div>
            <div class="col-12 col-md-6 mb-4 mb-lg-5">
              <h3>Here to keep London creative</h3>
              <p>The creative industries are at the heart of what makes London great. But London is also one of the most expensive cities in the world. Creative communities are under threat from rocketing rent, and are being squeezed out of even some more recently formed creative districts. The Design District is here to help keep London creative, by offering an accessible workplace purpose-made to support creative work of all kinds.</p>
            </div>
            <div class="col-12 col-md-6 mb-4 mb-lg-0">
              <h3>Purpose-made space for creative&nbsp;work</h3>
              <p>Everything about the district is designed to help creative businesses thrive. That includes permanent buildings to provide security and certainty, plus flexible leases to enable businesses to grow or shrink in one place. Our work spaces are naturally ventilated with huge north-light windows. There are options from co-working space to clean studios and dirty workshops, along with a materials library, photographic studio, recording studio and places to eat and do sport for all to share.</p>
            </div>
            <div class="col-12 col-md-6 mb-4 mb-lg-0">
              <h3>The services creatives really&nbsp;need</h3>
              <p>Beyond space, we will have a programme of events specially curated for our tenants. We will also have business services available from experts in intellectual property, employment law, tax and other topics that creative industries so often need help with. And we will strive to constantly improve this service; behaving more like a world-class R&D department than a landlord.</p>
              <p>So as our city grows, creatives have a permanent place to stay.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="empty">

    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import gsap from 'gsap'
import { studios, validStudios } from '~/common/architecture'
export default {
  layout: 'v2',
  data () {
    return {
      scrollK: 1,
    }
  },
  created () {
    this.$store.dispatch('updateNavigationTheme', { theme: 'dark' })
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll, { capture: false, passive: true});
    }
  },
  destroyed () {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    getHeaderStyle () {
      return {
        transform: `translateY(${(1 - this.scrollK) * 50}px)`,
        opacity: `${this.scrollK * 0.5 + 0.5}`
      }
    },    
    handleScroll: _.throttle(function (event) {
      if (process.client) {
        let scrollY = window.scrollY
        let threshold = 400
        let k = Math.min(threshold - scrollY, threshold) / threshold
        this.scrollK = k;
        // if (scrollY <= 2) {
        //   this.menuIsAtTop = true
        // } else {
        //   this.menuIsAtTop = false
        // }
      }
    }, 100),
  }
}
</script>

<style lang="scss">
.empty {
  height: 30vw;
  width: 100%;
  background: #eee;
}
.parallax-header {
  background: #000;
  z-index: 0;
  overflow: hidden;
  .parallax-header-image {
    transition: 100ms linear all;
  }
}
</style>
