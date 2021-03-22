<template lang="html">
  <div class="map-content map-floor-content">
    <h2>Floor {{slug}}</h2>
    <h4>Information goes here</h4>
  </div>
</template>

<script>
export default {
  computed: {
    slug () {
      return this.$route.query.floor
    }
  }
}
</script>

<style lang="scss">
</style>
