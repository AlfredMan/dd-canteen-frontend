<template lang="html">
  <div class="mt-5">
    <!--  -->
    <div id="architecture" class="-container-fluid overflow-hidden">
      <div class="-row -bg-white px-0 -px-md-4 py-4 py-5 py-md-5 cap-max-w">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-6">
              <h1>Architecture</h1>
            </div>
          </div>
          <div class="row align-items-baseline">
            <div class="col-12 col-md-6">
              <h4>Extraordinary buildings. The needs of creatives put front and centre. Design District is an offer that’s entirely new for London. Meet the architects.</h4>
              <!-- <h4>The 16 buildings in the district have been designed by creatives, for creatives. The architects prioritised natural ventilation, high ceilings, north-facing lights and pedestrian movement for a healthy and happy workplace. The brief to the architects was to create a space that they would like to work in themselves. The project’s novel and exciting approach involved each practice working in a silo, overseen by HNNA founder Hannah Corlett.</h4> -->
            </div>
            <div class="col-12 col-md-6">
              <!-- <p class="h5">The 16 buildings in the district have been designed by creatives, for creatives. The architects prioritised natural ventilation, high ceilings, north-facing lights and pedestrian movement for a healthy and happy workplace. The brief to the architects was to create a space that they would like to work in themselves. The project’s novel and exciting approach involved each practice working in a silo, overseen by HNNA founder Hannah Corlett.</p> -->
              <!-- <p>The 16 buildings in the district have been designed by creatives, for creatives. The architects prioritised natural ventilation, high ceilings, north-facing lights and pedestrian movement for a healthy and happy workplace. The brief to the architects was to create a space that they would like to work in themselves. The project’s novel and exciting approach involved each practice working in a silo, overseen by HNNA founder Hannah Corlett.</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="-container-fluid bg-white mt-0 mt-md-5 pt-4 pt-md-5">
      <div class="px-0 px-md-4- cap-max-w">
        <div class="container-fluid px-0">
          <div class="row no-gutters d-flex align-items-baseline">
            <div v-for="studio in studios" :key="studio.slug" class="col-12 col-md-6 col-lg-4 px-0 px-3 mb-5">
              <transition-link :to="`/architecture/${studio.slug}`">
                <lazy-image
                class="transition-source"
                :src="studio.imagesPractice[0].url"
                :w="2000"
                :h="2000"
                />
                <h4>{{ studio.title }}</h4>
              </transition-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EnquireForm from '~/components/forms/Enquire.vue'
import NewsletterForm from '~/components/forms/Newsletter.vue'
// import { studios, validStudios } from '~/common/architecture'
export default {
  head () {
    return {
      title: 'About',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Design District is a collection of 16 buildings designed by eight architects, set in the heart of Greenwich Peninsula. From autumn 2020 it will offer a permanent and purpose-designed work space for the creative industries.' }
      ]
    }
  },
  created () {
    this.$store.dispatch('updateNavigationTheme', { theme: 'light' })
  },
  components: {
    EnquireForm,
    NewsletterForm
  },
  computed: {
    studios () {
      return this.$store.state.studios
    }
  }
}
</script>

<style lang="scss">
</style>
