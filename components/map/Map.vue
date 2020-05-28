<template>
  <div class="map" :class="{
    'active': mapActive,
    'has-intersect': mapIntersectActive
    }">

    <div class="info">
      <div class="" v-if="sceneState.intersect">
        {{getBuildingName(sceneState.intersect.object.name)}}
        {{sceneState.tick}}
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
    @click="toggleMapActive"
    v-show="mapActive"
    >
      &times;
    </div>

    <div
    :class="{'active': mapActive, 'disabled': !mapTouchable}"
    id="container"
    ref="webglCanvas"
    @click="toggleMapActive(true)"
    >
    </div>

    <div
      class="panel"
      :class="{'active': mapActive }"
      >
      <transition-group name="fade">
        <map-site v-if="siteActive" :key="'site'" />
        <map-building v-if="buildingActive" :key="'building'" />
        <map-floor v-if="floorActive" :key="'floor'" />
        <map-space v-if="spaceActive" :key="'space'" />
      </transition-group>
    </div>

  </div>
</template>

<script src="./map.js"></script>
<style lang="scss" src="./map.scss"></style>
