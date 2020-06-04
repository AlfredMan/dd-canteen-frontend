<template lang="html">
  <div
    v-if="entry"
  >
    <h1>{{entry.fields.title}}</h1>
  </div>
</template>

<script>
export default {
  props: ['entry'],
  methods: {
  }
}
</script>

<style lang="scss">
</style>
