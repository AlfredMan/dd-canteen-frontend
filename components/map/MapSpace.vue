<template lang="html">
  <div class="map-space-content">
    <div v-if="space">
      <div class="content">
        <nuxt-link class="back" :to="{ query: {
          building: space.building
        }}">&larr; Building {{space.building}}</nuxt-link>
        <h2>Space {{slug}}</h2>        
        <h4>Type: {{space.type}}</h4>
        <h4>Building: <nuxt-link :to="{ query: {
          building: space.building
          }}">{{space.building}}</nuxt-link></h4>
        <!-- <h4>Level: <nuxt-link :to="{ query: {
          building: space.building,
          floor: space.level
          }}">{{space.level}}</nuxt-link></h4> -->
        <h4>Level: {{space.level}}</h4>
        <h4>Area: {{space.floorarea}} sqft</h4>
        <h4>Description: {{space.description}}</h4>
        <lazy-image
        class="thumbnail"
        :src="space.url"
        :w="2000"
        :h="2000"
        />
      </div>
    </div>
    <div v-else>
      <h2>Something went wrong.</h2>
      <h4>The space you're looking for is currently unavailable.</h4>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    slug () {
      return this.$route.query.space
    },
    space () {
      return this.$store.getters.getSpaceBySlug(this.slug)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
