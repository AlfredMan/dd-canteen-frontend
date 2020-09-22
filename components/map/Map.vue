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
    :class="{
      'active': mapActive
    }"
    >
      <!-- <span>Close Map</span><span class="cross">&times;</span> -->
      <div
      class="flex align-center items-center items-end px-6 py-2 text-lg rounded-lg bg-opacity-50"
      >
        <div class="relative w-4 h-4 mr-2">
          <IconX class=""/>
        </div>
        Close Map
      </div>
    </div>

    <div class="map-thumb-wrapper">
      <div
      class="map-thumb"
      @click="toggleMapActive(true)"
      :class="{
        'active': !mapActive
      }"
      >
        <div
        class="flex align-center items-center items-end px-6 py-2 text-lg rounded-lg bg-opacity-50"
        >
          <div class="relative w-4 h-4 mr-2">
            <IconBox class=""/>
          </div>
          Map
        </div>
        <!-- <map-thumbnail></map-thumbnail> -->
      </div>
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
