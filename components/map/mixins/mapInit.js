import * as THREE from 'three'
export default {
  data () {
    return {
      sceneState: {
        isLoaded: false,
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
        controlsTarget: {
          x: 0,
          y: 1,
          z: 0
        },
        prevTime: null,
        mouse: null,
        container: null,
        raf: null,
        canAdd: false,
        targetMesh: null,
        rayTarget: []
      },
      thumbSceneState: {
        w: 150,
        h: 150,
        container: null,
        scene: null,
        raf: null
      }
    }
  },
  methods: {
    init () {
      this.loadModel().then((models) => {
        this.initThree()
        // this.initThumb()
        this.initControls()
        this.animate()
        this.bindEvents()
        this.handleModels(models)
        // this.onContainerResize()
        this.updateLoadState()
        this.render()
        this.updateViewByRoute()
      })
    },
    updateLoadState () {
      this.sceneState.isLoaded = true
    },
    initThree () {
      const container = this.$refs.mapContainer
      const scene = new THREE.Scene()
      const raycaster = new THREE.Raycaster()
      const mouse = new THREE.Vector2()
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.domElement.style.cssText = 'position:absolute;top:0px;left:0px;z-index:10;background:transparent;width:100%;height:100%'
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.shadowMap.enabled = true
      renderer.gammaOutput = true
      renderer.gammaFactor = 2.2
      container.appendChild(renderer.domElement)

      this.sceneState.container = container
      this.sceneState.scene = scene
      this.sceneState.raycaster = raycaster
      this.sceneState.mouse = mouse
      this.sceneState.renderer = renderer

      this.camera()
      this.lights()
    },
    camera () {
      const cameraDefaultPosition = new THREE.Vector3(0, 0, 0)
      cameraDefaultPosition.x = 25
      cameraDefaultPosition.y = 30
      cameraDefaultPosition.z = 25

      const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.01, 10000)
      camera.position.x = cameraDefaultPosition.x
      camera.position.z = cameraDefaultPosition.z
      camera.position.y = cameraDefaultPosition.y
      camera.lookAt(new THREE.Vector3(0, 10, 0))

      this.sceneState.cameraDefaultPosition = cameraDefaultPosition
      this.sceneState.camera = camera
    },
    lights () {
      const light = new THREE.AmbientLight(0xFFFFFF, 1) // soft white light
      this.sceneState.scene.add(light)

      const d = 20
      const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1)
      directionalLight.position.set(-4, 10, 4)
      directionalLight.target.position.set(0, 0, 0)
      directionalLight.castShadow = true
      directionalLight.shadow.mapSize.width = 1024 // default
      directionalLight.shadow.mapSize.height = 1024 // default
      directionalLight.shadow.camera.left = -d
      directionalLight.shadow.camera.right = d
      directionalLight.shadow.camera.top = d
      directionalLight.shadow.camera.bottom = -d

      const directionalLight2 = new THREE.DirectionalLight(0xFFFFFF, 1)
      directionalLight2.position.set(-4, 10, -1)
      directionalLight2.target.position.set(0, 0, 0)
      directionalLight2.castShadow = true
      directionalLight2.shadow.mapSize.width = 1024 // default
      directionalLight2.shadow.mapSize.height = 1024 // default
      directionalLight2.shadow.camera.left = -d
      directionalLight2.shadow.camera.right = d
      directionalLight2.shadow.camera.top = d
      directionalLight2.shadow.camera.bottom = -d

      this.sceneState.scene.add(directionalLight)
      this.sceneState.scene.add(directionalLight2)
    }
  }
}
