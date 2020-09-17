<template lang="html">
  <!--  -->
  <div class="-container-fluid overflow-hidden">
    <div class="-row bg-dark text-light pb-5-pt-3">
      <div class="container-fluid py-5 px-0">

        <div class="px-0 py-0 py-md-2 cap-max-w">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-6 px-3">
                <h2>Architecture</h2>
                <h4>World-class buildings. The needs of creatives put front and centre. Design District is an offer that’s entirely new for London. Meet the architects.</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-6 px-3">
                <!-- <a href="/about-us#architecture" class="h5 text-primary"> -->
                <nuxt-link to="/architecture" class="h5 text-primary">
                  View all architects &rarr;
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <div v-if="studios && studios.length > 0" class="row d-flex align-items-end pt-5">

          <image-slideshow class="w-100 my-5 carousel carousel-uniform-height">

            <div v-for="studio in studios" class="item">
              <router-link :to="`/architecture/${studio.slug}`">
                <lazy-image
                :src="studio.imagesPractice[0].url"
                :h="2000"
                />
                <h5>{{ studio.title }}</h5>
              </router-link>
            </div>
          </image-slideshow>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    studios () {
      // return _.sampleSize(studios, 4)
      // return studios
      return this.$store.state.studios
    }
  },
}
</script>

<style lang="scss" scoped>
.item {
  a:hover {
    h5 {
      @apply text-green;
    }
  }
}
</style>
