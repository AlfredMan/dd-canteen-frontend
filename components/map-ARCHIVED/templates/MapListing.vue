<template lang="html">
  <div class="list">
    <div class="listing-table">
      <div class="listing-header">
        <div class="listing-field building">Building</div>
        <div class="listing-field level">Level</div>
        <div class="listing-field title">Space</div>
        <div class="listing-field type">Type</div>
        <div class="listing-field floorarea">Size</div>
      </div>
      <nuxt-link
      class="listing-row"
      v-for="space in spaces"
      :key="space.title"
      :to="{ query: {
        building: space.building,
        floor: space.level,
        space: space.title
      } }">
        <div class="listing-field building">{{space.building}} </div>
        <div class="listing-field level">{{space.level}} </div>        
        <div class="listing-field title">{{space.title}}</div>
        <div class="listing-field type">{{space.type}}</div>
        <div class="listing-field floorarea">{{space.floorarea}}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    building: {
      type: String
    }
  },
  computed: {
    spaces () {
      if (this.building) {
        //
        return this.$store.getters.getSpacesByBuilding(this.building)
      } else {
        return this.$store.getters.getAllSpaces()
      }
    }
  }
}
</script>

<style lang="scss">
</style>
