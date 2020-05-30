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
      }
    }
  },
  methods: {
    init () {
      this.loadModel().then((models) => {
        this.initThree()
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
      this.sceneState.container = this.$refs.webglCanvas
      this.sceneState.scene = new THREE.Scene()
      this.sceneState.raycaster = new THREE.Raycaster()
      this.sceneState.mouse = new THREE.Vector2()

      this.camera()
      this.lights()

      this.sceneState.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      this.sceneState.renderer.setSize(window.innerWidth, window.innerHeight)
      this.sceneState.renderer.domElement.style.cssText = 'position:absolute;top:0px;left:0px;z-index:10;background:transparent;width:100%;height:100%'
      this.sceneState.renderer.setPixelRatio(window.devicePixelRatio)
      this.sceneState.renderer.shadowMap.enabled = true

      // this.sceneState.renderer.toneMapping = THREE.ACESFilmicToneMapping
      // this.sceneState.renderer.toneMappingExposure = 0.8
      // this.sceneState.renderer.outputEncoding = THREE.sRGBEncoding
      this.sceneState.renderer.gammaOutput = true
      this.sceneState.renderer.gammaFactor = 2.2
      // this.sceneState.renderer.shadowMap.type = THREE.BasicShadowMap; // default THREE.PCFShadowMap
      // document.body.appendChild(this.sceneState.renderer.domElement)
      this.sceneState.container.appendChild(this.sceneState.renderer.domElement)
    },
    camera () {
      this.sceneState.cameraDefaultPosition = new THREE.Vector3(0, 0, 0)
      this.sceneState.cameraDefaultPosition.x = 25
      this.sceneState.cameraDefaultPosition.y = 30
      this.sceneState.cameraDefaultPosition.z = 25

      this.sceneState.camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.01, 10000)
      this.sceneState.camera.position.x = this.sceneState.cameraDefaultPosition.x
      this.sceneState.camera.position.z = this.sceneState.cameraDefaultPosition.z
      this.sceneState.camera.position.y = this.sceneState.cameraDefaultPosition.y
      this.sceneState.camera.lookAt(new THREE.Vector3(0, 10, 0))
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
