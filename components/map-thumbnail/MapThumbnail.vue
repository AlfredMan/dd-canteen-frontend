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
        w: 150,
        h: 150,
        container: null,
        scene: null,
        renderer: null,
        raf: null,
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
        meshes: []
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
      this.loadModel().then((models) => {
        this.initThree()
        this.camera()
        this.handleModels(models)
        this.bindEvents()
        this.animate()
      })
    },
    bindEvents () {
      if (process.client) {
        const self = this
        window.addEventListener('resize', self.onWindowResize, false)
      }
    },
    unbindEvents () {
      if (process.client) {
        const self = this
        window.removeEventListener('resize', self.onWindowResize, false)
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
      this.thumbSceneState.renderer.render(this.thumbSceneState.scene, this.thumbSceneState.camera)
      this.thumbSceneState.raf = requestAnimationFrame(this.animate)
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

      var geometry = new THREE.BoxGeometry( 10, 10, 10 );
      var material = new THREE.MeshNormalMaterial( {color: 0x00ff00} );
      var cube = new THREE.Mesh( geometry, material );
      this.thumbSceneState.scene.add( cube );

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
    handleModels (models) {
      const [gltfScene, obj] = models
      this.thumbSceneState.activeMaterial = new THREE.MeshStandardMaterial({ color: 0x666666, side: THREE.DoubleSide })
      this.thumbSceneState.defaultMaterial = new THREE.MeshStandardMaterial({ color: 0xEEEEEE, side: THREE.DoubleSide })
      // debugger
      gltfScene.traverse((child) => {
        // console.log(_.lowerCase(child.name))
        if (_.includes(['site'], _.lowerCase(child.name))) {
          this.thumbSceneState.site = child
        } else
        if (_.includes(['plane', 'ground'], _.lowerCase(child.name))) {
          child.receiveShadow = true
          this.thumbSceneState.environment.push(child)
        } else
        if (child.type === 'Object3D') {
          this.thumbSceneState.buildings.push(child)
        }else
        if (child.type === 'Mesh') {
          this.thumbSceneState.meshes.push(child)
        }
      })
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
  background: red;
}
</style>
