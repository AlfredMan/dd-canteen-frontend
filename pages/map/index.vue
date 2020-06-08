<template lang="html">
  <div class="">
    <app-map :active="true"/>
    <!-- <div class=""
    id="thumb-container"
    ref="thumbContainer"
    >
    </div> -->
  </div>
</template>

<script>
import AppMap from '~/components/map/Map.vue'
import * as THREE from 'three'
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
      mapSelectedDot: '~/assets/images/map-selected-dot.png',
      thumbSceneState: {
        width: 150,
        height: 150,
        container: null
      }
    }
  },
  mounted () {
    // this.thumbSceneState.container = this.$refs.thumbContainer
    // var scene = new THREE.Scene();
    // var camera = new THREE.PerspectiveCamera( 75, this.thumbSceneState.width / this.thumbSceneState.height, 0.1, 1000 );
    //
    // var renderer = new THREE.WebGLRenderer();
    // renderer.setSize( this.thumbSceneState.width, this.thumbSceneState.height );
    // this.thumbSceneState.container.appendChild( renderer.domElement );
    //
    // var geometry = new THREE.BoxGeometry();
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // var cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );
    //
    // camera.position.z = 1.5;
    //
    // var animate = function () {
    //   requestAnimationFrame( animate );
    //
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
    //
    //   renderer.render( scene, camera );
    // };
    //
    // animate();
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
