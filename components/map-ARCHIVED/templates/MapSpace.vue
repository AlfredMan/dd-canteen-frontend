<template lang="html">
  <div class="map-content map-space-content">
    <div class="content" v-if="space" :key="space.slug">
      <div >
        <nuxt-link class="back" :to="{ query: {
          building: space.building
        }}">&larr; Building {{space.building}}</nuxt-link>
        <h1>{{slug}}</h1>
        <div class="spec">
          <span class="spec-title">Type</span> <span class="spec-value">{{space.type}}</span>
        </div>
        <div class="spec">
          <span class="spec-title">Building</span> <span class="spec-value"><nuxt-link :to="{ query: {
          building: space.building
          }}">{{space.building}}</nuxt-link></span>
        </div>
        <div class="spec">
          <span class="spec-title">Level</span> <span class="spec-value">{{space.level}}</span>
        </div>
        <div class="spec">
          <span class="spec-title">Area</span> <span class="spec-value">{{space.floorarea}} sqft</span>
        </div>
        <div class="description">{{space.description}}</div>
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
