<template>
  <div class="map">

    <iframe id="website" src="https://designdistrict.co.uk" width="" height=""></iframe>

    <div class="info">
      <div class="" v-if="threejs.intersect && threejs.controls.isLocked">
        {{threejs.intersect.object.data.title}}
      </div>
    </div>

    <!-- <div class="enter" v-if="threejs.controls && !threejs.controls.isLocked">
      <a v-if="threejs.controls" @click="togglePointerLock">Enter</a>
    </div> -->

    <!-- <div class="cursor" v-if="threejs.controls && threejs.controls.isLocked" :class="{'intersect-active': threejs.intersect !== null}">
    </div> -->

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
      <div
      class="content"
      :class="{'active': mapActive }"
      >
        <div class="">
          <!-- <h1>Map</h1>
          <h4>Rent a desk, a studio, a workshop, or an entire building. With simple wi-fi access, clean and dirty workshops, integrated security, flexible leases and a host of events.</h4> -->

          <h1>The Club</h1>
          <h4>Co-working space for creative freelancers and entrepreneurs. four membership tiers: lounge, hot desk, fixed desk and micro-studio.</h4>
          <h4>
            Facilities &rarr;<br>
            Members &rarr;<br>
            Upcoming Events &rarr;<br>
            Available Space &rarr;
          </h4>
        </div>

        <div class="spacer">

        </div>

        <div class="">
          <h4>Explore Design District</h4>
          <div class="tags">
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
        <!-- <h3>
          Facilities &rarr;<br>
          Members &rarr;<br>
          Upcoming Events &rarr;<br>
          Available Space &rarr;
        </h3> -->

        <!-- <h3>Membership</h3>
        <h3>Co-working space</h3>
        <h3>Lounge, Hot desk, Fixed desk and Micro-studio.</h3> -->
        <!-- <h3>Location</h3> -->
        <!-- <p>The Club is a co-working space for creative freelancers and entrepreneurs who want to be part of Design District but don’t need their own studio. There are four membership tiers: lounge, hot desk, fixed desk and micro-studio.</p> -->
        <!-- <h3>Programme</h3> -->
        <!-- <p>Design District will be home to an active events programme created to connect our tenants and club members. A series of talks and panel discussions will cover every topic from employment law to using a 3D&nbsp;printer.</p> -->
        <!-- <h3>Location</h3> -->
        <!-- <p>The Club is located in a light-filled building in the heart of the Design District. It’s also where the Design District team is based, so drop by and say&nbsp;hello.</p> -->
      </div>

      <div class="search"
      :class="{
        'active': mapActive
        }"
      >
        <div class="input">
          Search for a space
        </div>
<svg class="icon-search" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-816.000000, -36.000000)" stroke="#2b2b2b"><g transform="translate(817.000000, 37.000000)"><g transform="translate(0.360000, 0.000000)"><circle stroke-width="2" cx="7.5" cy="7.5" r="7.5"></circle><line x1="12.7618408" y1="12.7618408" x2="17.7115883" y2="17.7115883" stroke-width="2"></line></g></g></g></g></svg>
      </div>

      <div class="list"
      :class="{
        'active': mapActive
        }"
      >
        <strong>Directory</strong><br>
        <a href="#">Cabinet Gallery</a><br>
        <a href="#">Gagosian Gallery</a><br>
        <a href="#">Timothy Taylor</a><br>
        <a href="#">White Cube</a><br>
        <a href="#">Berlin Biennale for Contemporary Art</a><br>
        <a href="#">Czech Pavilion La Biennale di Venezia</a><br>
        <a href="#">German Pavilion at La Biennale di Venezia</a><br>
        <a href="#">Lisbon Architecture Triennale</a><br>
        <a href="#">Taipei Biennial</a><br>
        <a href="#">Educational Institutions</a><br>
        <a href="#">Architectural Association</a><br>
        <a href="#">CCS Bard Center for Curatorial Studies</a><br>
        <a href="#">Goldsmiths, University of London</a><br>
        <a href="#">Princeton University</a><br>
        <a href="#">Royal College of Art</a><br>
        <a href="#">Städelschule</a><br>
        <a href="#">University of Southern California</a><br>
        <a href="#">Design & Fashion</a><br>
        <a href="#">Frank Ocean</a><br>
        <a href="#">Nike</a><br>
        <a href="#">OFF-WHITE c/o VIRGIL ABLOH™</a><br>
        <a href="#">Paco Rabanne</a><br>
        <a href="#">Vitra</a>
      </div>

    </div>

  </div>
</template>

<script>
const artworks = [
  {
    meta: { title: '' },
    position: { x: 0, y: 0.5, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    geometry: { width: 1, height: 1, depth: 3 }
  },
  {
    meta: { title: '' },
    position: { x: 2, y: 0.5, z: 1 },
    rotation: { x: 0, y: 0, z: 0 },
    geometry: { width: 2, height: 1, depth: 1 }
  }
]

import { studios } from '../../common/architecture.js'
import * as THREE from 'three'
import _ from 'lodash'
// import FirstPersonControls from 'first-person-controls'
// import PointerLockControls from 'three-pointer-lock-controls'
// import PointerLockControls from 'three-pointer-lock-controls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
// import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

export default {
  props: ['name'],
  data () {
    return {
      mapActive: true,
      mapTouchable: true,
      threejs: {
        scene: null,
        camera: null,
        cameraDefaultPosition: null,
        renderer: null,
        geometry: null,
        material: null,
        texture: null,
        meshes: [],
        mesh: null,
        controls: null,
        clock: null,
        tick: 0,
        raycaster: null,
        intersect: null,
        controlConfig: {
          moveForward: false,
          moveLeft: false,
          moveBackward: false,
          moveRight: false,
          canJump: false,
          velocity: null,
          direction: null
        },
        prevTime: null,
        mouse: null,
        container: null,
        raf: null,
        canAdd: false,
        model: '/model/dd-site.obj',
        mtl: '/model/dd-site.mtl',
        targetMesh: null,
        activeMaterial: null,
        defaultMaterial: null,
        pointerTextureMap: require('../assets/the-o2.png'),
        // buildingTexture: require('../assets/building.png'),
        // buildingTexture2: require('../assets/building2.png'),
        // buildingTexture3: require('../assets/buildingroof.png')
      }
    }
  },
  watch: {
    mapActive (newVal, oldVal) {
      this.onContainerResize()
      this.disableMapInteraction()
    }
  },
  updated () {
    console.log('updated', this.name)
  },
  mounted () {
    console.log('mounted', this.name, this.$refs)
    this.threejs.container = this.$refs['webglCanvas']
    this.startScene()
  },
  beforeDestroy () {
    console.log('beforeDestroy')
    this.removeObjects()
  },
  destroyed () {
    console.log('destroyed')
    this.destroyScene()
  },
  methods: {
    toggleMapActive (boo) {
      if (boo == true) {
        this.mapActive = true
      } else
      if (boo == false) {
        this.mapActive = false
      } else {
        this.mapActive = !this.mapActive
      }
    },
    enableMapInteraction: _.debounce( function (){
      this.mapTouchable = true
    }, 500, {
      leading: false
    }),
    disableMapInteraction: _.debounce( function (){
      this.mapTouchable = false
      this.enableMapInteraction()
    }, 500, {
      leading: true
    }),
    startScene () {

      let self = this
      let rayable = []

      var onProgress = function ( xhr ) {
        if ( xhr.lengthComputable ) {
          var percentComplete = xhr.loaded / xhr.total * 100;
          console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
        }
      };

      var onError = function () { };
      var manager = new THREE.LoadingManager();
      new MTLLoader( manager )
				.load( self.threejs.mtl, function ( materials ) {
					materials.preload();
					new OBJLoader( manager )
						.setMaterials( materials )
						.load( self.threejs.model, function ( object ) {
              init()
              initControls()
              initWorld()
              animate()
              self.bindEvents()
              // object.scale.set(0.0)
              addModel(object)
              // addSignage()
						}, onProgress, onError );
			});

      var pointerTexture = new THREE.TextureLoader().load( self.threejs.pointerTextureMap );
      // var buildingTexture = new THREE.TextureLoader().load( self.threejs.buildingTexture2 );
      // var roofTexture = new THREE.TextureLoader().load( self.threejs.buildingTexture3 );
      // // instantiate a loader
      // let loader = new OBJLoader();
      //
      // // load a resource
      // loader.load(
      //   // resource URL
      //   self.threejs.model,
      //   // called when resource is loaded
      //   function ( object ) {
      //
      //     init()
      //     initControls()
      //     initWorld()
      //     animate()
      //     self.bindEvents()
      //     self.threejs.scene.add( object );
      //
      //   },
      //   // called when loading is in progresses
      //   function ( xhr ) {
      //
      //     console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      //
      //   },
      //   // called when loading has errors
      //   function ( error ) {
      //
      //     console.log( 'An error happened' );
      //
      //   }
      // );

      // init()
      // initControls()
      // initWorld()
      // animate()
      // self.bindEvents()

      function addModel (object) {
        if (!object) return;

        console.log({ studios })

        for (var i = 0; i < object.children.length; i++) {
          object.children[i].castShadow = true
          object.children[i].receiveShadow = true
        }
        console.log(object.children)

        self.threejs.activeMaterial = new THREE.MeshStandardMaterial( {color: 0x666666, side: THREE.DoubleSide } );
        self.threejs.defaultMaterial = new THREE.MeshStandardMaterial( {color: 0xeeeeee, side: THREE.DoubleSide} );
        // self.threejs.defaultBuildingMaterial = new THREE.MeshStandardMaterial( {color: 0xeeeeee, side: THREE.DoubleSide, map: buildingTexture} );
        // self.threejs.defaultRoofMaterial = new THREE.MeshStandardMaterial( {color: 0xeeeeee, side: THREE.DoubleSide, map: roofTexture} );

        object.scale.set(0.01,0.01,0.01)
        // object.position.x = 1.25
        // object.position.z = 2.75
        object.position.x = 1.0
        object.position.z = 2.5

        self.threejs.targetMesh = object

        self.threejs.scene.add( object );
      }

      function addSignage () {
        var signMaterial = new THREE.MeshBasicMaterial( { map: pointerTexture } );
        let signGeom = new THREE.PlaneGeometry( 5, 1.2)
        let mesh = new THREE.Mesh(signGeom, signMaterial)
        mesh.position.x = 8
        mesh.position.z = 9
        mesh.rotation.x = - Math.PI / 2
        self. threejs.scene.add( mesh )

      }

      function init () {
        self.threejs.scene = new THREE.Scene()

        self.threejs.cameraDefaultPosition = new THREE.Vector3(0,0,0)
        self.threejs.cameraDefaultPosition.x = -25
        self.threejs.cameraDefaultPosition.y = 30
        self.threejs.cameraDefaultPosition.z = 25

        self.threejs.raycaster = new THREE.Raycaster();
        self.threejs.mouse = new THREE.Vector2();

        self.threejs.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.01, 1000000)
        self.threejs.camera.position.x = self.threejs.cameraDefaultPosition.x
        self.threejs.camera.position.z = self.threejs.cameraDefaultPosition.z
        self.threejs.camera.position.y = self.threejs.cameraDefaultPosition.y
        self.threejs.camera.lookAt(new THREE.Vector3(0, 0 ,0))

        // for (let i = 0; i < artworks.length; i++) {
        //   self.addObject(artworks[i])
        // }

        var light = new THREE.AmbientLight( 0xffffff, 0.5 ); // soft white light
        self.threejs.scene.add( light );
        // light.castShadow = true;

        var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
        directionalLight.position.set(4, 10, 4);
        directionalLight.target.position.set(0, 0, 0);

        directionalLight.castShadow = true;

        //Set up shadow properties for the light
        directionalLight.shadow.mapSize.width = 1024;  // default
        directionalLight.shadow.mapSize.height = 1024; // default

        // directionalLight.shadow.camera.near = 0.1;    // default
        // directionalLight.shadow.camera.far = 1000;     // default

        var d = 20;
        directionalLight.shadow.camera.left = - d;
        directionalLight.shadow.camera.right = d;
        directionalLight.shadow.camera.top = d;
        directionalLight.shadow.camera.bottom = - d;
        // directionalLight.shadow.camera.far = 1024;
        // directionalLight.shadow.camera.near = 2;
        self.threejs.scene.add( directionalLight );
        // self.threejs.scene.add( new THREE.CameraHelper( directionalLight.shadow.camera ) );

        self.threejs.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        self.threejs.renderer.setSize(window.innerWidth, window.innerHeight)
        self.threejs.renderer.domElement.style.cssText = 'position:absolute;top:0px;left:0px;z-index:10;background:transparent;width:100%;height:100%'
        self.threejs.renderer.setPixelRatio( window.devicePixelRatio );
        self.threejs.renderer.shadowMap.enabled = true;
        // self.threejs.renderer.shadowMap.type = THREE.BasicShadowMap; // default THREE.PCFShadowMap
        // document.body.appendChild(self.threejs.renderer.domElement)
        self.threejs.container.appendChild(self.threejs.renderer.domElement)
      }

      function initControls () {
        self.threejs.controls = new OrbitControls( self.threejs.camera, self.threejs.renderer.domElement );
        self.threejs.controls.autoRotate = true
        self.threejs.controls.autoRotateSpeed = 0.1
        self.threejs.controls.enableDamping = false
        self.threejs.controls.dampingFcator = 0.1
      }

      function initWorld () {
        let geometry = new THREE.PlaneGeometry( 24, 18, 32 );
        // let material = new THREE.MeshLambertMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
        let material = new THREE.ShadowMaterial();
            material.opacity = 0.5;
        let plane = new THREE.Mesh( geometry, material );
        plane.rotation.x = - Math.PI / 2
        plane.receiveShadow = true;
        self.threejs.scene.add( plane );

      }

      function ray () {
        // update the picking ray with the camera and mouse position
        // if (self.threejs.controls.isLocked) {
        //   self.threejs.mouse.x = 0
        //   self.threejs.mouse.y = 0
        // }
        // console.log('mouse:', self.threejs.mouse)

        if (!self.threejs.targetMesh) return

        self.threejs.raycaster.setFromCamera( self.threejs.mouse, self.threejs.camera );

        // calculate objects intersecting the picking ray
        var intersects = self.threejs.raycaster.intersectObjects( self.threejs.targetMesh.children );

        if (intersects.length > 0) {
          self.setIntersect(intersects[0])
        } else {
          self.setIntersect(null)
        }

      }

      function controlAnimate () {

        self.threejs.controls.update();
        // if ( self.threejs.controls.isLocked === true ) {
        //
        //   // console.log('controlAnimate')
        //   // raycaster.ray.origin.copy( self.threejs.controls.getObject().position );
        //   // raycaster.ray.origin.y -= 10;
        //   //
        //   // var intersections = raycaster.intersectObjects( objects );
        //   //
        //   // var onObject = intersections.length > 0;
        //
        //   var time = performance.now();
        //   var delta = ( time - self.threejs.prevTime ) / 1000;
        //
        //   self.threejs.controlConfig.velocity.x -= self.threejs.controlConfig.velocity.x * 10 * delta;
        //   self.threejs.controlConfig.velocity.z -= self.threejs.controlConfig.velocity.z * 10 * delta;
        //   self.threejs.controlConfig.velocity.y -= 9.8 * 1.0 * delta; // 100.0 = mass
        //
        //   self.threejs.controlConfig.direction.z = Number( self.threejs.controlConfig.moveForward ) - Number( self.threejs.controlConfig.moveBackward );
        //   self.threejs.controlConfig.direction.x = Number( self.threejs.controlConfig.moveRight ) - Number( self.threejs.controlConfig.moveLeft );
        //   self.threejs.controlConfig.direction.normalize(); // this ensures consistent movements in all directions
        //
        //   if ( self.threejs.controlConfig.moveForward || self.threejs.controlConfig.moveBackward ) self.threejs.controlConfig.velocity.z -= self.threejs.controlConfig.direction.z * 5 * delta;
        //   if ( self.threejs.controlConfig.moveLeft || self.threejs.controlConfig.moveRight ) self.threejs.controlConfig.velocity.x -= self.threejs.controlConfig.direction.x * 5 * delta;
        //
        //   // if ( onObject === true ) {
        //   //
        //   //   self.threejs.controlConfig.velocity.y = Math.max( 0, self.threejs.controlConfig.velocity.y );
        //   //   canJump = true;
        //   //
        //   // }
        //
        //   self.threejs.controls.moveRight( - self.threejs.controlConfig.velocity.x * 10 * delta );
        //   self.threejs.controls.moveForward( - self.threejs.controlConfig.velocity.z * 10 * delta );
        //
        //   // self.threejs.controls.getObject().position.y += ( self.threejs.controlConfig.velocity.y * delta ); // new behavior
        //   //
        //   // if ( self.threejs.controls.getObject().position.y < 1.6 ) {
        //   //
        //   //   self.threejs.controlConfig.velocity.y = 0;
        //   //   self.threejs.controls.getObject().position.y = 1.6;
        //   //
        //   //   self.threejs.controlConfig.canJump = true;
        //   //
        //   // }
        //
        //   // console.log(self.threejs.controlConfig);
        //
        //   self.threejs.prevTime = time;
        //
        //
        // }
      }

      function animate () {
        self.threejs.raf = requestAnimationFrame(animate)
        self.threejs.tick++

        // if (self.threejs.controls && self.threejs.clock) {
        //   self.threejs.controls.update(self.threejs.clock.getDelta())
        //   self.threejs.camera.position.y = self.threejs.cameraDefaultPosition.y
        // }

        if (controlAnimate) {
          controlAnimate()
        }

        // if (self.threejas

        if (ray) {
          ray()
        }

        if (self.threejs.mesh) {
          let inc = (self.threejs.tick / 5)
          for (var i = 0; i < self.threejs.meshes.length; i++) {
            // self.threejs.meshes[i].rotation.x += 1 / 300
            // self.threejs.meshes[i].rotation.z += 1 / 300
            // self.threejs.meshes[i].rotation.y += 1 / 300
            // self.threejs.meshes[i].position.y = Math.sin(inc) * 0.05
          }
        }

        self.threejs.renderer.render(self.threejs.scene, self.threejs.camera)

        // removeObjects()
      }
    },
    // togglePointerLock () {
    //   let self = this
    //   if (self.threejs.controls && !self.threejs.controls.isLocked) {
    //     self.threejs.controls.lock()
    //   }
    //   if (self.threejs.controls && self.threejs.controls.isLocked) {
    //     self.threejs.controls.unlock()
    //   }
    // },
    setIntersect (intersect) {
      let self = this
      if (intersect) {
        self.threejs.intersect = intersect
        // console.log(intersect)
        self.resetMeshMaterials()
        intersect.object.material = self.threejs.activeMaterial
        // self.threejs.controls.activeLook = false
      } else {
        self.threejs.intersect = null
        self.resetMeshMaterials()
        // self.threejs.controls.activeLook = true
      }
    },
    resetMeshMaterials () {
      let self = this
      for (var i = 0; i < self.threejs.targetMesh.children.length; i++) {
        self.threejs.targetMesh.children[i].material = self.threejs.defaultMaterial
        // if (i==16) {
        //   self.threejs.targetMesh.children[i].material = self.threejs.defaultBuildingMaterial
        // }
        // if (i==15) {
        //   self.threejs.targetMesh.children[i].material = self.threejs.defaultRoofMaterial
        // }
        // if (i==4 || i==2 || i==7) {
        //   self.threejs.targetMesh.children[i].material = self.threejs.activeMaterial
        // }
        if (i == 3) {
          self.threejs.targetMesh.children[i].material = self.threejs.activeMaterial
        }
      }
    },
    onWindowResize () {
      let self = this
      console.log('update camera 1')
      if (self.threejs.camera) {
        console.log('update camera 2')
        self.threejs.camera.aspect = window.innerWidth / window.innerHeight
        self.threejs.camera.updateProjectionMatrix()
        self.threejs.renderer.setSize(window.innerWidth, window.innerHeight)
      }
    },
    onContainerResize () {
      let self = this
      console.log('onContainerResize')
      if (self.threejs.camera) {
        if (self.mapActive) {
          self.threejs.camera.aspect = window.innerWidth / window.innerHeight
          self.threejs.camera.updateProjectionMatrix()
          // self.threejs.renderer.setSize(window.innerWidth, window.innerHeight)
        } else {
          self.threejs.camera.aspect = window.innerWidth / window.innerHeight
          self.threejs.camera.updateProjectionMatrix()
          // self.threejs.renderer.setSize(100, 100)
        }
      }
    },
    onDown () {
      console.log('onDown')
      let self = this
      // self.addObject()
      self.threejs.canAdd = true
    },
    onUp () {
      console.log('onUp')
      let self = this
      // self.addObject()
      self.threejs.canAdd = false
    },
    onMove () {
      // console.log('onMove')
      let self = this
      // self.addObject()
      if (self.threejs.mouse) {
        self.threejs.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        self.threejs.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        // console.log(self.threejs.mouse.x, self.threejs.mouse.y);
      }
    },
    keyup (event) {
      let self = this
      console.log(event.keyCode)
      switch ( event.keyCode ) {

            case 38: // up
            case 87: // w
              self.threejs.controlConfig.moveForward = false;
              break;

            case 37: // left
            case 65: // a
              self.threejs.controlConfig.moveLeft = false;
              break;

            case 40: // down
            case 83: // s
              self.threejs.controlConfig.moveBackward = false;
              break;

            case 39: // right
            case 68: // d
              self.threejs.controlConfig.moveRight = false;
              break;

          }
    },
    keydown (event) {
      let self = this
      console.log(event.keyCode)
      switch ( event.keyCode ) {

            case 38: // up
            case 87: // w
              self.threejs.controlConfig.moveForward = true;
              break;

            case 37: // left
            case 65: // a
              self.threejs.controlConfig.moveLeft = true;
              break;

            case 40: // down
            case 83: // s
              self.threejs.controlConfig.moveBackward = true;
              break;

            case 39: // right
            case 68: // d
              self.threejs.controlConfig.moveRight = true;
              break;

            case 32: // space
              if ( self.threejs.controlConfig.canJump === true ) self.threejs.controlConfig.velocity.y += 350;
              self.threejs.controlConfig.canJump = false;
              break;

          }
    },
    createImage () {
      let canvas = document.createElement('canvas')
      canvas.width = 256
      canvas.height = 256

      let context = canvas.getContext('2d')
      context.fillStyle = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'
      context.fillRect(0, 0, 256, 256)
      return canvas
    },
    addObject (option) {
      let self = this

      self.threejs.geometry = new THREE.CubeGeometry(option.geometry.width, option.geometry.height, option.geometry.depth)
      self.threejs.texture = new THREE.CanvasTexture(self.createImage())
      self.threejs.material = new THREE.MeshStandardMaterial({ color: Math.random() * 0xffffff, wireframe: false, map: self.threejs.texture })
      self.threejs.mesh = new THREE.Mesh(self.threejs.geometry, self.threejs.material)
      self.threejs.mesh.geometry = self.threejs.geometry
      self.threejs.mesh.texture = self.threejs.texture
      self.threejs.mesh.material = self.threejs.material

      self.threejs.mesh.position.x = option.position.x
      self.threejs.mesh.position.y = option.position.y
      self.threejs.mesh.position.z = option.position.z

      self.threejs.mesh.rotation.x = option.rotation.x
      self.threejs.mesh.rotation.z = option.rotation.z
      self.threejs.mesh.rotation.y = option.rotation.y

      self.threejs.mesh.data = option.meta

      self.threejs.meshes.push(self.threejs.mesh)
      self.threejs.scene.add(self.threejs.mesh)
    },
    removeObjects () {
      let self = this
      if (self.threejs.meshes.length > 0) {
        // see mr.doob on SO
        // https://stackoverflow.com/questions/12945092/memory-leak-with-three-js-and-many-shapes?rq=1
        for (var i = 0; i < self.threejs.meshes.length; i++) {
          self.threejs.meshes[i].geometry.dispose()
          self.threejs.meshes[i].texture.dispose()
          self.threejs.meshes[i].material.dispose()
          self.threejs.scene.remove(self.threejs.meshes[i])
        }
        self.threejs.meshes = []
        self.threejs.geometry.dispose()
        self.threejs.texture.dispose()
        self.threejs.material.dispose()
      }
    },
    bindEvents () {
      let self = this
      if (('ontouchstart' in window) || window.DocumentTouch) {
        self.threejs.renderer.domElement.addEventListener('touchstart', self.onDown, false)
        self.threejs.renderer.domElement.addEventListener('touchend', self.onUp, false)
      } else {
        // window.document.addEventListener('keydown', self.keydown, false)
        // window.document.addEventListener('keyup', self.keyup, false)

        self.threejs.renderer.domElement.addEventListener('mousedown', self.onDown, false)
        self.threejs.renderer.domElement.addEventListener('mousemove', self.onMove, false)
        self.threejs.renderer.domElement.addEventListener('mouseup', self.onUp, false)
      }
      self.threejs.container.addEventListener('resize', self.onContainerResize, false)
      window.addEventListener('resize', self.onWindowResize, false)
    },
    unbindEvents () {
      let self = this
      if (('ontouchstart' in window) || window.DocumentTouch) {
        self.threejs.renderer.domElement.removeEventListener('touchstart', self.onDown, false)
        self.threejs.renderer.domElement.removeEventListener('touchend', self.onUp, false)
      } else {
        // window.document.removeEventListener('keydown', self.keydown, false)
        // window.document.removeEventListener('keyup', self.keyup, false)

        self.threejs.renderer.domElement.removeEventListener('mousedown', self.onDown, false)
        self.threejs.renderer.domElement.removeEventListener('mousemove', self.onMove, false)
        self.threejs.renderer.domElement.removeEventListener('mouseup', self.onUp, false)
      }
      self.threejs.container.removeEventListener('resize', self.onContainerResize, false)
      window.removeEventListener('resize', self.onWindowResize, false)
    },
    destroyScene () {
      let self = this
      //
      cancelAnimationFrame(self.threejs.raf)// Stop the animation

      this.unbindEvents()
      // self.threejs.renderer.domElement.addEventListener('dblclick', null, false) //remove listener to render

      //
      self.threejs.scene = null
      self.threejs.camera = null
      // self.threejs.projector = null
      // self.threejs.controls = null

      empty(self.threejs.container)

      function empty (elem) {
        while (elem.lastChild) elem.removeChild(elem.lastChild)
      }
    }
  }
}

</script>

<style lang="sass">
.map
  font-family: MabryTrial, "MabryTrial", -apple-system, BlinkMacSystemFont, sans-serif
  // font-family: MabryPro-Light, "MabryPro-Light", -apple-system, BlinkMacSystemFont, sans-serif
  position: fixed
  width: 100vw
  height: 100vh

#container
  position: absolute
  bottom: 0
  right: 0
  z-index: 99
  // width: 15vw
  // height: 15vh
  width: 100%
  height: 100%
  transition: .7s ease-in-out all

  canvas
    pointer-events: none

    &:focus,
    &:active
      outline: none !important

  &:active,
  &:focus
    outline: none

  &.active
    // canvas
    transition: .3s ease all
    width: 100%
    height: 100%
    transform: translateX(0%) scale(1)
    cursor: initial

    canvas
      pointer-events: initial

    &:hover
      transform: translateX(0%) scale(1)

  &.disabled
    pointer-events: none

  // canvas
  transition: .3s ease all
  width: 100%
  height: 100%
  transform-origin: bottom right
  transform: translateX(5%) scale(0.25)
  transition: all 0.5s cubic-bezier(0.64, 0.01, 0.34, 1) 0s
  cursor: pointer

  &:hover
    transform: translateX(4%) scale(0.3)

  .content
    color: black
    position: absolute
    top: 0
    left: 0
    bottom: 0
    padding: 3rem 2rem
    z-index: 999
    width: 40rem
    opacity: 0
    display: flex
    flex-direction: column
    justify-content: space-between
    pointer-events: none

    &.active
      opacity: 1

    .spacer
      margin: auto

    h1
      margin-bottom: 2rem !important

    h3
      font-size: 1.25rem
      line-height: 1.3
      margin-bottom: .25rem
      // text-transform: uppercase

    h4
      margin-top: auto
      margin-bottom: .5rem
      max-width: 20em

    .tags
      display: flex

      .tag
        padding: .5rem 1rem
        margin-right: .3rem
        margin-left: 0
        font-size: 1.2rem
        border-radius: 2rem
        border: 1px solid
        &.active
          background: black
          border: 1px solid black
          color: white

    p
      font-size: 1.25rem
  // background: radial-gradient(to top, hsl(0, 100%, 50%), hsl(0, 100%, 80%))
  // background: radial-gradient(circle at center, red 0, blue 100%)
.search
  position: absolute
  top: 2rem
  right: 2rem

  opacity: 0
  &.active
    opacity: 1

  .input
    border-bottom: 2px solid
    line-height: 3rem
    width: 12em
    font-size: 1.5rem
    color: rgba(0,0,0,0.5)
  svg
    position: absolute
    top: 0
    right: 0
    bottom: 0
    margin: auto
    height: 1.25rem
    width: 1.25rem

.list
  position: absolute
  z-index: 99
  top: 7rem
  bottom: 2rem
  right: 2rem
  width: 18rem
  line-height: 1.3
  font-size: 1.2rem

  opacity: 0
  &.active
    opacity: 1

  a
    &:hover
      text-decoration: underline

.curtain
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  pointer-events: none
  z-index: 9
  // background: red
  opacity: 0
  transition: all 0.5s

  &.active
    pointer-events: initial
    opacity: 0.9
    // opacity: 1
    background: white
    // background: #222
    // background: blue

.background
  width: 100%
  height: 100%
  opacity: .5

.info
  position: absolute
  z-index: 99999
  padding: 1rem
  line-height: 1
  font-size: 3rem
  font-weight: bold
  top: 0rem
  left: 0rem
  color: #f0f

.cursor
  position: absolute
  top: 50%
  left: 50%
  transform: translate3d(-50%, -50%, 0)
  width: 16px
  height: 16px
  border-radius: 50%
  background: transparent
  border: 4px solid rgba(0,0,255,1)
  z-index: 999
  pointer-events: none
  transition: .3s ease all
  &.intersect-active
    width: 20px
    height: 20px
    border: 4px solid rgba(0,255,0,1)

.enter
  position: absolute
  top: 50%
  left: 50%
  transform: translate3d(-50%, -50%, 0)
  z-index: 999
  cursor: pointer
  font-size: 3rem
  a
    color: #00f
    &:hover
      opacity: 0.5

.toggle
  position: absolute
  z-index: 99999
  right: 0
  bottom: 0
  width: 5rem
  height: 5rem
  text-align: center
  line-height: 5rem
  font-size: 3rem
  font-weight: 200
  color: black
  cursor: pointer

#website
  border: 0
  display: block
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 1
</style>
