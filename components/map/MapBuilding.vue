<template lang="html">
  <div class="map-building-content" v-if="building" :key="building.slug">
    <div class="content">
      <nuxt-link class="back" :to="{query:null}">&larr; View all</nuxt-link>
      <h2>Building {{building.slug}}</h2>
      <h4>{{building.description}}</h4>
      <h4 class="">
        Available Spaces:
        <div class="" v-for="space in allSpacesByBuilding">
          <nuxt-link :to="{ query: {
            building: space.building,
            floor: space.level,
            space: space.title
          } }">{{space.building}} {{space.level}} {{space.title}}</nuxt-link>
        </div>
      </h4>
      <lazy-image
      class="thumbnail"
      :src="building.url"
      :w="2000"
      :h="2000"
      />
    </div>
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
    },
    building () {
      return this.$store.getters.getBuildingBySlug(this.slug)
    },
    allSpacesByBuilding () {
      return this.$store.getters.getSpacesByBuilding(this.slug)
    },
  }
}
</script>

<style lang="scss">
</style>
