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

    <div class="map-thumb-wrapper">
      <div
      class="map-thumb bg-white border-1 rounded-full m-6 shadow transition duration-300"
      @click="toggleMapActive(true)"
      :class="{
        'active': !mapActive
      }"
      >
        <div
        class="flex align-center items-center items-end px-6 py-2 text-lg rounded-lg bg-opacity-50"
        >
          <!-- <img src="/a4.png" alt="" class="w-12 h-auto mr-2">  -->
          <div class="relative w-4 h-4 mr-2">
            <IconBox class=""/>
            <!-- <div class="absolute z-10 inset-0 flex justify-center items-center" style="font-size: 0.6em; font-weight:bold; -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: white;">
              3D
            </div> -->
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
