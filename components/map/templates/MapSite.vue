<template lang="html">
  <div class="map-content map-site-content">
    <div class="content">
      <h2>Design<br>District</h2>
      <h4>Welcome to the Design District. London’s new work space for the creative industries. Opening autumn 2020.</h4>
      <!-- <div class="tags mt-4">
        <div class="tag">
          Events
        </div>
        <div class="tag">
          Workshops
        </div>
        <div class="tag -active">
          Facilities
        </div>
        <div class="tag">
          Members Only
        </div>
      </div> -->
      <map-listing></map-listing>
    </div>
  </div>
</template>

<script>
import MapListing from './MapListing.vue'
export default {
  computed: {
  },
  components: {
    MapListing
  }
}
</script>

<style lang="scss">
</style>
