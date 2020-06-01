<template lang="html">
  <div class="">
    <app-map :active="true"/>
  </div>
</template>

<script>
import AppMap from '~/components/map/Map.vue'
export default {
  layout: 'fullscreen',
  components: {
    AppMap
  },
  data () {
    return {
      state: 0,
      a4: '/a4.png',
      map: '~/assets/images/map.png',
      mapSelected: '~/assets/images/map-selected.png',
      mapSelectedDot: '~/assets/images/map-selected-dot.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.map-wrapper {
  overflow: hidden;
  height: 50vw;
}
.map {
  background-size: cover
}

.text-view {
  height: 50vw;
  overflow: hidden;
  background-color: #eee;
  box-shadow: 0 0 10px 0px rgba(0,0,0,0.3);
  z-index: 99;
}
.building-view {
  background: #f0f0f0;
  box-shadow: 0 0 10px 0px rgba(0,0,0,0.3);
  z-index: 9;
  height: 50vw;
  // overflow: auto;
}
.map-view {
  width: 100%;
  height: 50vw;
  background-color: #fff;
  position: relative;
}
input {
  // position: absolute;
  // top: 2rem;
  // right: 2rem;
  // width: 20rem;
  // z-index: 99
}
.building-plan {
  margin-top: 5rem;
}
.site-plan {
  object-fit: contain;
  object-position: center center;
  width: 100%;
  height: 100%;
}

a {
  cursor: pointer
}
</style>
