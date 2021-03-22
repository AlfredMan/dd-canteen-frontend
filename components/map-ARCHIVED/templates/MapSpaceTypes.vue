<template lang="html">
  <div class="space-types-listing mt-5">
    <div class="d-flex row flex-row align-items-baseline" v-for="(spaceTypeValue, spaceTypeNameKey) in allSpacesByType " :key="spaceTypeNameKey">

      <div class="col-12 mb-3 d-flex justify-content-between align-items-baseline">
        <h3 class="text-capitalize">{{spaceTypeNameKey}}</h3>
        <!-- <nuxt-link class="h5 text-primary"
        :to="`/workspace/${getSlug(spaceTypeNameKey)}`"
        >View all {{spaceTypeNameKey}} &rarr;</nuxt-link> -->
        <a class="h5 text-primary"
        >View all {{spaceTypeNameKey}} &rarr;</a>
      </div>
      <div class="col-12 col-md-12 col-lg-12 mb-5 building"
      v-for="(space, index) in spaceTypeValue" v-if="index < 1"
      :key="space.slug">
        <nuxt-link
        :key="space.title"
        :to="{ query: {
          building: space.building,
          floor: space.level,
          space: space.title
        } }"
        >
          <div class="">
            <lazy-image
            :src="space.url"
            :w="3000"
            :h="2400"
            :custom="'fit=thumb&f=center'"
            />
          </div>
          <h5 class="mt-3 mb-1">{{space.title}}</h5>
          <p class="mt-1"><small>{{space.description}}</small></p>
        </nuxt-link>
      </div>

    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    building: {
      type: String
    }
  },
  computed: {
    allSpaces () {
      return this.$store.state.spaces
    },
    allSpacesByType () {
      return _.groupBy(this.allSpaces, 'type')
    }
  },
  methods: {
    getSlug (string) {
      return _.kebabCase(string)
    },
  }
}
</script>

<style lang="scss">
</style>
