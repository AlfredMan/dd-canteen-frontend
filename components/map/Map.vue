<template>
  <div class="map" :class="{
    'active': mapActive
    }">

    <div class="info">
      <div class="" v-if="threejs.intersect && threejs.controls.isLocked">
        {{threejs.intersect.object.data.title}}
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

<script>
import * as THREE from 'three'
import _ from 'lodash'
// import FirstPersonControls from 'first-person-controls'
// import PointerLockControls from 'three-pointer-lock-controls'
// import PointerLockControls from 'three-pointer-lock-controls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import { studios } from '../../common/architecture.js'

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
// import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

export default {
  props: ['name'],
  data () {
    return {
      mapActive: false,
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
        pointerTextureMap: require('~/assets/images/map/the-o2.png')
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
    // console.log('updated', this.name)
  },
  mounted () {
    console.log('mounted', this.name, this.$refs)
    this.threejs.container = this.$refs.webglCanvas
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
    enableMapInteraction: _.debounce(function () {
      this.mapTouchable = true
    }, 500, {
      leading: false
    }),
    disableMapInteraction: _.debounce(function () {
      this.mapTouchable = false
      this.enableMapInteraction()
    }, 500, {
      leading: true
    }),
    startScene () {
      const self = this
      const rayable = []

      const onProgress = function (xhr) {
        if (xhr.lengthComputable) {
          const percentComplete = xhr.loaded / xhr.total * 100
          console.log(Math.round(percentComplete, 2) + '% downloaded')
        }
      }

      const onError = function () { }
      const manager = new THREE.LoadingManager()
      new MTLLoader(manager)
        .load(self.threejs.mtl, function (materials) {
          materials.preload()
          new OBJLoader(manager)
            .setMaterials(materials)
            .load(self.threejs.model, function (object) {
              init()
              initControls()
              initWorld()
              animate()
              self.bindEvents()
              // object.scale.set(0.0)
              addModel(object)
              // addSignage()
            }, onProgress, onError)
        })

      const pointerTexture = new THREE.TextureLoader().load(self.threejs.pointerTextureMap)

      function addModel (object) {
        if (!object) { return }

        console.log({ studios })

        for (let i = 0; i < object.children.length; i++) {
          object.children[i].castShadow = true
          object.children[i].receiveShadow = true
        }
        console.log(object.children)

        self.threejs.activeMaterial = new THREE.MeshStandardMaterial({ color: 0x666666, side: THREE.DoubleSide })
        self.threejs.defaultMaterial = new THREE.MeshStandardMaterial({ color: 0xEEEEEE, side: THREE.DoubleSide })
        // self.threejs.defaultBuildingMaterial = new THREE.MeshStandardMaterial( {color: 0xeeeeee, side: THREE.DoubleSide, map: buildingTexture} );
        // self.threejs.defaultRoofMaterial = new THREE.MeshStandardMaterial( {color: 0xeeeeee, side: THREE.DoubleSide, map: roofTexture} );

        object.scale.set(0.01, 0.01, 0.01)
        // object.position.x = 1.25
        // object.position.z = 2.75
        object.position.x = 1.0
        object.position.z = 2.5

        self.threejs.targetMesh = object

        self.threejs.scene.add(object)
      }

      function addSignage () {
        const signMaterial = new THREE.MeshBasicMaterial({ map: pointerTexture })
        const signGeom = new THREE.PlaneGeometry(5, 1.2)
        const mesh = new THREE.Mesh(signGeom, signMaterial)
        mesh.position.x = 8
        mesh.position.z = 9
        mesh.rotation.x = -Math.PI / 2
        self.threejs.scene.add(mesh)
      }

      function init () {
        self.threejs.scene = new THREE.Scene()

        self.threejs.cameraDefaultPosition = new THREE.Vector3(0, 0, 0)
        self.threejs.cameraDefaultPosition.x = -25
        self.threejs.cameraDefaultPosition.y = 30
        self.threejs.cameraDefaultPosition.z = 25

        self.threejs.raycaster = new THREE.Raycaster()
        self.threejs.mouse = new THREE.Vector2()

        self.threejs.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.01, 1000000)
        self.threejs.camera.position.x = self.threejs.cameraDefaultPosition.x
        self.threejs.camera.position.z = self.threejs.cameraDefaultPosition.z
        self.threejs.camera.position.y = self.threejs.cameraDefaultPosition.y
        self.threejs.camera.lookAt(new THREE.Vector3(0, 0, 0))

        // for (let i = 0; i < artworks.length; i++) {
        //   self.addObject(artworks[i])
        // }

        const light = new THREE.AmbientLight(0xFFFFFF, 0.5) // soft white light
        self.threejs.scene.add(light)
        // light.castShadow = true;

        const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8)
        directionalLight.position.set(4, 10, 4)
        directionalLight.target.position.set(0, 0, 0)

        directionalLight.castShadow = true

        // Set up shadow properties for the light
        directionalLight.shadow.mapSize.width = 1024 // default
        directionalLight.shadow.mapSize.height = 1024 // default

        // directionalLight.shadow.camera.near = 0.1;    // default
        // directionalLight.shadow.camera.far = 1000;     // default

        const d = 20
        directionalLight.shadow.camera.left = -d
        directionalLight.shadow.camera.right = d
        directionalLight.shadow.camera.top = d
        directionalLight.shadow.camera.bottom = -d
        // directionalLight.shadow.camera.far = 1024;
        // directionalLight.shadow.camera.near = 2;
        self.threejs.scene.add(directionalLight)
        // self.threejs.scene.add( new THREE.CameraHelper( directionalLight.shadow.camera ) );

        self.threejs.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        self.threejs.renderer.setSize(window.innerWidth, window.innerHeight)
        self.threejs.renderer.domElement.style.cssText = 'position:absolute;top:0px;left:0px;z-index:10;background:transparent;width:100%;height:100%'
        self.threejs.renderer.setPixelRatio(window.devicePixelRatio)
        self.threejs.renderer.shadowMap.enabled = true
        // self.threejs.renderer.shadowMap.type = THREE.BasicShadowMap; // default THREE.PCFShadowMap
        // document.body.appendChild(self.threejs.renderer.domElement)
        self.threejs.container.appendChild(self.threejs.renderer.domElement)
      }

      function initControls () {
        self.threejs.controls = new OrbitControls(self.threejs.camera, self.threejs.renderer.domElement)
        self.threejs.controls.autoRotate = true
        self.threejs.controls.autoRotateSpeed = 0.1
        self.threejs.controls.enableDamping = true
        self.threejs.controls.dampingFcator = 0.1
        self.threejs.controls.enableZoom = false
      }

      function initWorld () {
        const geometry = new THREE.PlaneGeometry(24, 18, 32)
        // let material = new THREE.MeshLambertMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
        const material = new THREE.ShadowMaterial()
        material.opacity = 0.5
        const plane = new THREE.Mesh(geometry, material)
        plane.rotation.x = -Math.PI / 2
        plane.receiveShadow = true
        self.threejs.scene.add(plane)
      }

      function ray () {
        if (!self.threejs.targetMesh) { return }

        self.threejs.raycaster.setFromCamera(self.threejs.mouse, self.threejs.camera)

        // calculate objects intersecting the picking ray
        const intersects = self.threejs.raycaster.intersectObjects(self.threejs.targetMesh.children)

        if (intersects.length > 0) {
          self.setIntersect(intersects[0])
        } else {
          self.setIntersect(null)
        }
      }

      function controlAnimate () {
        self.threejs.controls.update()
      }

      function animate () {
        self.threejs.raf = requestAnimationFrame(animate)
        self.threejs.tick++

        if (controlAnimate) {
          controlAnimate()
        }

        if (ray) {
          ray()
        }

        if (self.threejs.mesh) {
          const inc = (self.threejs.tick / 5)
          for (let i = 0; i < self.threejs.meshes.length; i++) {
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
    setIntersect (intersect) {
      const self = this
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
      const self = this
      for (let i = 0; i < self.threejs.targetMesh.children.length; i++) {
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
        // if (i == 3) {
        //   self.threejs.targetMesh.children[i].material = self.threejs.activeMaterial
        // }
      }
    },
    onWindowResize () {
      const self = this
      console.log('update camera 1')
      if (self.threejs.camera) {
        console.log('update camera 2')
        self.threejs.camera.aspect = window.innerWidth / window.innerHeight
        self.threejs.camera.updateProjectionMatrix()
        self.threejs.renderer.setSize(window.innerWidth, window.innerHeight)
      }
    },
    onContainerResize () {
      const self = this
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
      // console.log('onDown')
      const self = this
      // self.addObject()
      self.threejs.canAdd = true
    },
    onUp () {
      // console.log('onUp')
      const self = this
      // self.addObject()
      self.threejs.canAdd = false
    },
    onMove () {
      // console.log('onMove')
      const self = this
      // self.addObject()
      if (self.threejs.mouse) {
        self.threejs.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        self.threejs.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
        // console.log(self.threejs.mouse.x, self.threejs.mouse.y);
      }
    },
    keyup (event) {
      const self = this
      console.log(event.keyCode)
      switch (event.keyCode) {
        case 38: // up
        case 87: // w
          self.threejs.controlConfig.moveForward = false
          break

        case 37: // left
        case 65: // a
          self.threejs.controlConfig.moveLeft = false
          break

        case 40: // down
        case 83: // s
          self.threejs.controlConfig.moveBackward = false
          break

        case 39: // right
        case 68: // d
          self.threejs.controlConfig.moveRight = false
          break
      }
    },
    keydown (event) {
      const self = this
      console.log(event.keyCode)
      switch (event.keyCode) {
        case 38: // up
        case 87: // w
          self.threejs.controlConfig.moveForward = true
          break

        case 37: // left
        case 65: // a
          self.threejs.controlConfig.moveLeft = true
          break

        case 40: // down
        case 83: // s
          self.threejs.controlConfig.moveBackward = true
          break

        case 39: // right
        case 68: // d
          self.threejs.controlConfig.moveRight = true
          break

        case 32: // space
          if (self.threejs.controlConfig.canJump === true) { self.threejs.controlConfig.velocity.y += 350 }
          self.threejs.controlConfig.canJump = false
          break
      }
    },
    createImage () {
      const canvas = document.createElement('canvas')
      canvas.width = 256
      canvas.height = 256

      const context = canvas.getContext('2d')
      context.fillStyle = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'
      context.fillRect(0, 0, 256, 256)
      return canvas
    },
    addObject (option) {
      const self = this

      self.threejs.geometry = new THREE.CubeGeometry(option.geometry.width, option.geometry.height, option.geometry.depth)
      self.threejs.texture = new THREE.CanvasTexture(self.createImage())
      self.threejs.material = new THREE.MeshStandardMaterial({ color: Math.random() * 0xFFFFFF, wireframe: false, map: self.threejs.texture })
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
      const self = this
      if (self.threejs.meshes.length > 0) {
        // see mr.doob on SO
        // https://stackoverflow.com/questions/12945092/memory-leak-with-three-js-and-many-shapes?rq=1
        for (let i = 0; i < self.threejs.meshes.length; i++) {
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
      const self = this
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
      const self = this
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
      const self = this
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
        while (elem.lastChild) { elem.removeChild(elem.lastChild) }
      }
    }
  }
}

</script>

<style lang="scss" src="./map.scss"></style>
