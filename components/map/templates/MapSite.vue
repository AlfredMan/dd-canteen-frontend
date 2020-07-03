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

      <!-- <map-space-types></map-space-types> -->

      <!-- <map-listing></map-listing> -->

      <div class="credit">
        Design and build by Hato
      </div>
    </div>
  </div>
</template>

<script>
// import MapListing from './MapListing.vue'
import MapSpaceTypes from './MapSpaceTypes.vue'
export default {
  computed: {
  },
  components: {
    // MapListing,
    MapSpaceTypes
  }
}
</script>

<style lang="scss" scoped>
// .map-content {
//   pointer-events: none;
//
//   .content {
//     position: relative;
//     pointer-events: none;
//
//     > * {
//       pointer-events: initial;
//     }
//   }
// }
.credit {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2rem;
  opacity: 0.3;
}
</style>
