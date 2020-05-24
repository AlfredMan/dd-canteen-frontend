<template lang="html">
  <a class="transition-link" :href="to" @click.prevent="setTransitionSource(to, $event)">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    setTransitionSource (to, ev) {

      if (!to) {
        console.log('setTransitionSource +++++++++++++ 0 to is not defined')
        return;
      }
      // debugger
      // console.log('setTransitionSource +++++++++++++ 1', ev)
      // if (ev.srcElement.classList.contains('transition-source') || ev.srcElement) {
      //   console.log('setTransitionSource +++++++++++++ 2', ev.srcElement)
      //   // this.$store.dispatch('setRouteTransitionSource', { sourceElement: ev.srcElement })
      //   this.$store.dispatch('setRouteTransitionSourceRect', { boundingClientRect: ev.srcElement.getBoundingClientRect() })
      // }
      this.$store.dispatch('setRouteTransitionSourceRect', { boundingClientRect: ev.srcElement.getBoundingClientRect() })

      this.$router.push({path: to})
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
