<template lang="html">
  <div v-if="entry && entry.fields.contentBlocks > 0" class="entry-content-blocks">

    <template v-for="block in entry.fields.contentBlocks">

      {{block}}

    </template>

  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: ['entry'],
  components: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.entry-content-blocks {
}
</style>
