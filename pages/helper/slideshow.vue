<template>
  <div class="">
    <!--  -->
    <div class="empty">

    </div>
    <div class="container-fluid">
      <div class="row bg-dark text-light pb-5-pt-3">
        <div class="container-fluid py-5">
          <div class="row">
            <div class="col-12 col-md-6 px-4">
              <h1>Architecture</h1>
              <h4>World-class buildings. The needs of creatives put front and centre. Design District is an offer that’s entirely new for London. Meet the architects.</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 px-4">
              <a href="/about-us#architecture" class="h5 text-primary">
                View all architects &rarr;
              </a>
            </div>
          </div>

          <div v-if="randomStudios" class="row d-flex align-items-end mt-5 pt-5">

            <image-slideshow class="w-100 my-5 carousel carousel-uniform-height" :items="randomStudios">
            </image-slideshow>

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
import { studios, validStudios } from '~/common/architecture'
export default {
  layout: 'v2',
  computed: {
    randomStudios () {
      // return _.sampleSize(studios, 4)
      return studios
    }
  },
  created () {
    this.$store.dispatch('updateNavigationTheme', { theme: 'light' })
  },
}
</script>

<style lang="scss">
.empty {
  height: 30vw;
  width: 100%;
  background: #eee;
}
</style>
