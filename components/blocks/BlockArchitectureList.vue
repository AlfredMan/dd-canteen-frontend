<template lang="html">
  <div class="mt-5">
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
export default {
  computed: {
    studios () {
      return this.$store.state.studios
    }
  }
}
</script>

<style lang="scss">
</style>
