<template>
  <div class="map" :class="{
    'active': mapActive,
    'has-intersect': mapIntersectActive
    }">

    <div class="info">
      <div class="" v-if="sceneState.intersect">
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
      class="content"
      :class="{'active': mapActive }"
      >

        <div class="panel panel-main">
          <!-- <h1>Map</h1>
          <h4>Rent a desk, a studio, a workshop, or an entire building. With simple wi-fi access, clean and dirty workshops, integrated security, flexible leases and a host of events.</h4> -->

          <h2>Design<br>District</h2>
          <h4>Welcome to the Design District. London’s new work space for the creative industries. Opening autumn 2020.</h4>
          <div class="tags mt-4">
            <div class="tag">
              Events
            </div>
            <div class="tag">
              Workshops
            </div>
            <div class="tag -active">
              Facilities
            </div>
            <div class="tag">
              Members Only
            </div>
          </div>
        </div>

      </div>

  </div>
</template>

<script src="./map.js"></script>
<style lang="scss" src="./map.scss"></style>
