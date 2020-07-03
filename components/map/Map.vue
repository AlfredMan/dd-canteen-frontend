<template>
  <div class="map" :class="{
    'active': mapActive,
    'has-intersect': mapIntersectActive
    }">

    <div class="info"
    :class="{
      'active': mapActive
      }"
    >
      <div class="" v-if="sceneState.intersect && enableHighlightByRay">
        {{getBuildingName(sceneState.intersect.object.name)}}
      </div>
    </div>

    <div
    class="curtain"
    :class="{
      'active': mapActive
      }"
    >

    </div>

    <div
    class="toggle"
    @click="toggleMapActive(false)"
    v-show="mapActive"
    >
      <span>Close Map</span><span class="cross">&times;</span>
    </div>

    <div
    class="map-thumb"
    @click="toggleMapActive(true)"
    :class="{
      'active': !mapActive
    }"
    >
      <!-- <img src="/a4.png" alt=""> -->
      <map-thumbnail></map-thumbnail>
    </div>

    <div
    :class="{
      'active': mapActive,
      'disabled': !mapTouchable,
      'site-active': siteActive,
      'building-active': buildingActive,
      'floor-active': floorActive,
      'space-active': spaceActive,
      }"
    id="container"
    ref="mapContainer"

    >
    </div>

    <div
      class="panel"
      :class="{'active': mapActive }"
      >
      <transition-group name="map-fade">
        <map-site v-if="siteActive" :key="'site'" />
        <map-building v-if="buildingActive" :key="'building'" />
        <map-floor v-if="floorActive" :key="'floor'" />
        <map-space v-if="spaceActive" :key="'space'" />
      </transition-group>
    </div>

  </div>
</template>

<script src="./map.js"></script>
<style lang="scss" src="./scss/map.scss"></style>
