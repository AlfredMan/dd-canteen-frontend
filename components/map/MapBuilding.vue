<template lang="html">
  <div class="map-building-content">
    <h2>Building {{slug}}</h2>
    <div class="">
      <div class="" v-for="space in allSpaces">
        <nuxt-link :to="{ query: {
          building: space.building,
          floor: space.level,
          space: space.title
        } }">{{space.building}} {{space.level}} {{space.title}}</nuxt-link>
      </div>
    </div>
    <h4>Information goes here</h4>
  </div>
</template>

<script>
export default {
  computed: {
    slug () {
      return this.$route.query.building
    },
    allSpaces () {
      return this.$store.state.spaces
    },
    allSpacesByType () {
      return _.groupBy(this.allSpaces, 'type')
    },
    allBuildings () {
      return this.$store.state.buildings
    }
  }
}
</script>

<style lang="scss">
</style>
