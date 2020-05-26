<template lang="html">
  <div class="mt-5">
    <!--  -->
    <div id="architecture" class="container-fluid">
      <div class="row bg-white pb-5 pt-3">
        <div class="container py-5">
          <div class="row">
            <div class="col-12 col-md-6">
              <h1>Architecture</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6">
              <h4>Extraordinary buildings. The needs of creatives put front and centre. Design District is an offer that’s entirely new for London. Meet the architects.</h4>
              <!-- <a href="#" class="text-primary">View all architects &rarr;</a> -->
            </div>
            <div class="col-12 col-md-6">
              <p>The 16 buildings in the district have been designed by creatives, for creatives. The architects prioritised natural ventilation, high ceilings, north-facing lights and pedestrian movement for a healthy and happy workplace. The brief to the architects was to create a space that they would like to work in themselves. The project’s novel and exciting approach involved each practice working in a silo, overseen by HNNA founder Hannah Corlett.</p>
            </div>
          </div>

          <div class="row d-flex align-items-end mt-5 pt-5">
            <div v-for="studio in studios" :key="studio.slug" class="col-12 col-md-6 col-lg-4 mb-5">
              <!-- <router-link :to="`/architecture/${studio.slug}`"> -->
              <transition-link :to="`/architecture/${studio.slug}`">
                <!-- <img class="lazyload" :data-src="studio.imagesPractice[0].url" alt=""> -->
                <lazy-image
                class="transition-source"
                :src="studio.imagesPractice[0].url"
                :w="2000"
                :h="2000"
                />
                <h5>{{ studio.title }}</h5>
              <!-- </router-link> -->
              </transition-link>
              <!-- <img class="lazyload" :data-src="studio.imagesPractice[0].url" alt="">
              <h5>{{ studio.title }}</h5> -->
            </div>

            <!-- <div class="col-12 col-md-6 col-lg-4 mb-5">
              <router-link to="/architecture/hnna">
                <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/4H7LD6UdKbLKXTBqYH7wv3/cb9c690b567f1a7768158e9c80def96b/ASSEMBLAGE-Architect000.jpg?w=1000&h=1200&fm=jpg&q=80" alt="">
                <h5>HNNA</h5>
              </router-link>
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <router-link to="/architecture/6a-architects">
                <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/4PPO5LoteF6CWrT30TUBKO/6fc95dbe5e49e0f81e1fc748ef11fb09/6aArchictects-2A-Architect.jpg?w=1000&h=1200&fm=jpg&q=80" alt="">
                <h5>6A Architects</h5>
              </router-link>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <router-link to="/architecture/adam-khan-architects">
                <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/5Qu2qJOxKsVJyq14IByYXQ/eb84ad1acc0500e3946e6bea0f905bd1/AdamKahn-1A-Architect.jpg?w=1000&h=1000&fm=jpg&q=80&fit=thumb" alt="">
                <h5>Adam Khan Architects</h5>
              </router-link>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <router-link to="/architecture/architecture-00">
                <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/4wwMRjzluVJ7zf67yR4PrR/96a7d23c5fbd40afe8df58db0588ed24/Architecture00-2A-Architect.jpg?w=1000&h=1000&fm=jpg&q=80&fit=thumb" alt="">
                <h5>Architecture 00</h5>
              </router-link>
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <router-link to="/architecture/barozzi-veiga">
                <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/3HiQG1XaJ2pfkYLLq6Yyyi/b0b5d7f11232fe4a0fdcbe97557e33ed/Barozzi-Veiga-1A-Architect.jpg?w=1000&h=1200&fm=jpg&q=80" alt="">
                <h5>Barozzi Veiga</h5>
              </router-link>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <router-link to="/architecture/david-kohn">
                <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/52ffU0zKmwkW1ywhPbxc8d/bdf71cf84374de5fc0d2c7e264a5a21c/Architects.jpg?w=1000&h=1200&fm=jpg&q=80&fit=thumb" alt="">
                <h5>David Kohn</h5>
              </router-link>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <router-link to="/architecture/mole-architects">
                <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/5zFeuuTpuphEgbbWRYpwE5/b88df7566a01b6270be20502047aa9ca/Mole-1A-Architect.jpg?w=1000&h=1200&fm=jpg&q=80" alt="">
                <h5>Mole Architects</h5>
              </router-link>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <router-link to="/architecture/schulze-grassov">
                <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/9yzz0PJ19F2lZDv6SjUSu/a1dfef599ae8838a56e5d418c1fe095f/Schulze-Grassov-2A-Architect.jpg?w=1000&h=1000&fm=jpg&q=80&fit=thumb" alt="">
                <h5>Schulze + Grassov</h5>
              </router-link>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <img class="lazyload" data-src="https://images.ctfassets.net/7p1ysxjarsp5/5hjrqA6j9HzAhWQe60b4l/053cb70d38428f1e3c00874c57852c71/SelgasCano-1A-Architect.jpg?w=1000&h=1200&fm=jpg&q=80" alt="">
              <h5>Selgascano</h5>
            </div> -->
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
import EnquireForm from '../../components/forms/Enquire.vue'
import NewsletterForm from '../../components/forms/Newsletter.vue'
import { studios, validStudios } from '~/common/architecture'
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
      return studios
    }
  }
}
</script>

<style lang="scss">
</style>
