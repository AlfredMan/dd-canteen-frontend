<template lang="html">
  <div class=""
  id="thumb-container"
  ref="thumbContainer"
  >
  </div>
</template>

<script>
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'
import _ from 'lodash'
export default {
  data () {
    return {
      thumbSceneState: {
        width: 150,
        height: 150,
        container: null,
        scene: null,
        renderer: null,
        raf: null,
        tick: 0,
        gltfs: [
          '/model/DD-all-baked-16-no-texture.gltf',
          '/model/DD-all-gltf-combined-test-1.gltf',
          '/model/DD-all-gltf-v01.gltf',
          '/model/DD-all-baked-A1.gltf',
          '/model/DD-all-baked-A2.gltf',
          '/model/DD-all-baked-A3.gltf',
          '/model/DD-all-baked-A4.gltf'
        ],
        activeMaterial: null,
        defaultMaterial: null,
        site: null,
        environment: [],
        buildings: [],
        meshes: [],
        currentBuilding: null
      }
    }
  },
  computed: {
  },
  components: {
    // MapListing,
    // MapSpaceTypes
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.removeObjects()
  },
  destroyed () {
    this.unbindEvents()
    this.destroyScene()
  },
  methods: {
    init () {
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
			// camera.position.z = 5;
      //
			// var animate = function () {
			// 	requestAnimationFrame( animate );
      //
			// 	cube.rotation.x += 0.01;
			// 	cube.rotation.y += 0.01;
      //
			// 	renderer.render( scene, camera );
			// };
      //
			// animate();
      this.loadModel().then((models) => {
        this.initThree()
        this.camera()
        this.lights()
        this.handleModels(models)
        this.bindEvents()
        this.animate()
        this.focusBuilding()
      })
    },
    bindEvents () {
      if (process.client) {
        const self = this
        window.addEventListener('resize', self.onWindowResize, false)
        window.addEventListener('scroll', self.onWindowScroll, false)
      }
    },
    unbindEvents () {
      if (process.client) {
        const self = this
        window.removeEventListener('resize', self.onWindowResize, false)
        window.removeEventListener('scroll', self.onWindowScroll, false)
      }
    },
    onWindowScroll (event) {
      if (process.client) {
        const self = this
        // console.log(window.scrollY)
        let y = window.scrollY
        let step = 1000
        if (y < 1*step) {
          this.focusBuilding(3)
        } else
        if (y < 2*step) {
          this.focusBuilding(1)
        } else
        if (y < 3*step) {
          this.focusBuilding(0)
        } else
        if (y < 4*step) {
          this.focusBuilding(6)
        } else
        if (y < 5*step) {
          this.focusBuilding(8)
        }

        if (this.thumbSceneState.currentBuilding) {
          this.thumbSceneState.currentBuilding.rotation.y = y / (step/4)
        }
      }
    },
    onWindowResize () {
      if (process.client) {
        const self = this
        if (self.thumbSceneState.camera) {
          self.thumbSceneState.camera.aspect = this.thumbSceneState.width /this.thumbSceneState.height
          self.thumbSceneState.camera.updateProjectionMatrix()
          self.thumbSceneState.renderer.setSize(this.thumbSceneState.width, this.thumbSceneState.height)
        }
      }
    },
    animate () {
      this.thumbSceneState.tick++
      this.thumbSceneState.raf = requestAnimationFrame(this.animate)
      // console.log('animate...', this.thumbSceneState)
      // if (this.thumbSceneState.tick % 2 == 0) {
      //   this.thumbSceneState.renderer.setClearColor( 0xffff00 );
      // } else {
      //   this.thumbSceneState.renderer.setClearColor( 0x0000ff );
      // }
      this.thumbSceneState.renderer.render(this.thumbSceneState.scene, this.thumbSceneState.camera)
    },
    initThree () {
      this.thumbSceneState.container = this.$refs.thumbContainer
      this.thumbSceneState.scene = new THREE.Scene()

      this.thumbSceneState.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      this.thumbSceneState.renderer.setSize(this.thumbSceneState.width, this.thumbSceneState.height)
      this.thumbSceneState.renderer.domElement.style.cssText = 'position:absolute;top:0px;left:0px;z-index:10;background:transparent;width:100%;height:100%'
      this.thumbSceneState.renderer.setPixelRatio(window.devicePixelRatio)
      this.thumbSceneState.renderer.gammaOutput = true
      this.thumbSceneState.renderer.gammaFactor = 2.2
      this.thumbSceneState.container.appendChild(this.thumbSceneState.renderer.domElement)

      // this.thumbSceneState.renderer.setClearColor(0x00FF00, 0);
      // this.thumbSceneState.renderer.setClearColor( 0xff00ff );

      var geometry = new THREE.BoxGeometry( 100, 100, 100 );
      var material = new THREE.MeshNormalMaterial( {color: 0x00ff00} );
      var cube = new THREE.Mesh( geometry, material );
      this.thumbSceneState.scene.add( cube );

      this.thumbSceneState.renderer.render(this.thumbSceneState.scene, this.thumbSceneState.camera)

    },
    lights () {
      const light = new THREE.AmbientLight(0xFFFFFF, 1) // soft white light
      this.thumbSceneState.scene.add(light)

      const d = 20
      const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1)
      directionalLight.position.set(-4, 10, 4)
      directionalLight.target.position.set(0, 0, 0)
      directionalLight.castShadow = true
      directionalLight.shadow.mapSize.width = 1024 // default
      directionalLight.shadow.mapSize.height = 1024 // default
      // directionalLight.shadow.camera.left = -d
      // directionalLight.shadow.camera.right = d
      // directionalLight.shadow.camera.top = d
      // directionalLight.shadow.camera.bottom = -d

      const directionalLight2 = new THREE.DirectionalLight(0xFFFFFF, 1)
      directionalLight2.position.set(-4, 10, -1)
      directionalLight2.target.position.set(0, 0, 0)
      directionalLight2.castShadow = true
      directionalLight2.shadow.mapSize.width = 1024 // default
      directionalLight2.shadow.mapSize.height = 1024 // default
      // directionalLight2.shadow.camera.left = -d
      // directionalLight2.shadow.camera.right = d
      // directionalLight2.shadow.camera.top = d
      // directionalLight2.shadow.camera.bottom = -d

      this.thumbSceneState.scene.add(directionalLight)
      this.thumbSceneState.scene.add(directionalLight2)
    },
    camera () {
      this.thumbSceneState.cameraDefaultPosition = new THREE.Vector3(0, 0, 0)
      this.thumbSceneState.cameraDefaultPosition.x = 25
      this.thumbSceneState.cameraDefaultPosition.y = 30
      this.thumbSceneState.cameraDefaultPosition.z = 25

      this.thumbSceneState.camera = new THREE.PerspectiveCamera(15, this.thumbSceneState.width / this.thumbSceneState.height, 0.01, 10000)
      this.thumbSceneState.camera.position.x = this.thumbSceneState.cameraDefaultPosition.x
      this.thumbSceneState.camera.position.z = this.thumbSceneState.cameraDefaultPosition.z
      this.thumbSceneState.camera.position.y = this.thumbSceneState.cameraDefaultPosition.y
      this.thumbSceneState.camera.lookAt(new THREE.Vector3(0, 1, 0))

      this.thumbSceneState.scene.add( this.thumbSceneState.camera );
    },
    loadModel () {
      const self = this
      return new Promise((resolve, reject) => {
        new GLTFLoader().load(self.thumbSceneState.gltfs[0], function (gltf) {
          resolve([gltf.scene])
        })
      })
    },
    focusBuilding (index = 0) {
      for (var i = 0; i < this.thumbSceneState.buildings.length; i++) {
        this.thumbSceneState.buildings[i].visible = false
      }

      let currentBuilding = this.thumbSceneState.buildings[index]
      currentBuilding.visible = true

      this.thumbSceneState.camera.position.x = currentBuilding.position.x - 15
      this.thumbSceneState.camera.position.z = currentBuilding.position.z - 15
      this.thumbSceneState.camera.position.y = currentBuilding.position.y + 5
      this.thumbSceneState.camera.lookAt(new THREE.Vector3(currentBuilding.position.x,currentBuilding.position.y + 1.5,currentBuilding.position.z))

      this.thumbSceneState.currentBuilding = currentBuilding
      console.log(index, this.thumbSceneState.currentBuilding.name)
    },
    handleModels (models) {
      const [gltfScene, obj] = models
      this.thumbSceneState.activeMaterial = new THREE.MeshStandardMaterial({ color: 0x666666, side: THREE.DoubleSide })
      this.thumbSceneState.defaultMaterial = new THREE.MeshStandardMaterial({ color: 0xEEEEEE, side: THREE.DoubleSide })
      // debugger
      gltfScene.traverse((child) => {
        // console.log(_.lowerCase(child.name))
        if (_.includes(['site'], _.lowerCase(child.name))) {
          this.thumbSceneState.site = child
          for (let i = 0; i < this.thumbSceneState.site.children.length; i++) {
            this.thumbSceneState.buildings.push(this.thumbSceneState.site.children[i])
          }
        }
        // else
        // if (_.includes(['plane', 'ground'], _.lowerCase(child.name))) {
        //   child.receiveShadow = true
        //   this.thumbSceneState.environment.push(child)
        // } else
        // if (child.type === 'Object3D') {
        //   this.thumbSceneState.buildings.push(child)
        // }else
        // if (child.type === 'Mesh') {
        //   this.thumbSceneState.meshes.push(child)
        // }
      })

      console.log(this.thumbSceneState)

      gltfScene.position.x = 0
      gltfScene.position.y = 0
      gltfScene.position.z = 0
      this.thumbSceneState.scene.add(gltfScene)
    },
    destroyScene () {
      cancelAnimationFrame(this.thumbSceneState.raf)// Stop the animation
      this.unbindEvents()
      this.thumbSceneState.scene = null
      this.thumbSceneState.camera = null
      empty(this.thumbSceneState.container)
      function empty (elem) {
        while (elem.lastChild) { elem.removeChild(elem.lastChild) }
      }
    },
    removeObjects () {
      if (this.thumbSceneState.meshes.length > 0) {
        // see mr.doob on SO
        // https://stackoverflow.com/questions/12945092/memory-leak-with-three-js-and-many-shapes?rq=1
        for (let i = 0; i < this.thumbSceneState.meshes.length; i++) {
          if (this.thumbSceneState.meshes[i].geometry) {this.thumbSceneState.meshes[i].geometry.dispose()}
          if (this.thumbSceneState.meshes[i].texture) {this.thumbSceneState.meshes[i].texture.dispose()}
          if (this.thumbSceneState.meshes[i].material) {this.thumbSceneState.meshes[i].material.dispose()}
          this.thumbSceneState.scene.remove(this.thumbSceneState.meshes[i])
        }
        this.thumbSceneState.meshes = []
        // this.thumbSceneState.geometry.dispose()
        // this.thumbSceneState.texture.dispose()
        // this.thumbSceneState.material.dispose()
      }
    }
  }
}
</script>

<style lang="scss" scoped="">
#thumb-container {
  position: relative;
  width: 150px;
  height: 150px;
  // background: yellow;
}
</style>
