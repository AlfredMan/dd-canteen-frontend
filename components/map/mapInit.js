import * as THREE from 'three'
export default {
  data () {
    return {
      sceneState: {
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
        targetMesh: null
      }
    }
  },
  methods: {
    init () {
      this.loadModel().then((model) => {
        this.initThree()
        this.initControls()
        this.animate()
        this.bindEvents()
        this.addModels(model)
      })
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
      this.sceneState.cameraDefaultPosition.x = -25
      this.sceneState.cameraDefaultPosition.y = 30
      this.sceneState.cameraDefaultPosition.z = 25

      this.sceneState.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.01, 1000000)
      this.sceneState.camera.position.x = this.sceneState.cameraDefaultPosition.x
      this.sceneState.camera.position.z = this.sceneState.cameraDefaultPosition.z
      this.sceneState.camera.position.y = this.sceneState.cameraDefaultPosition.y
      this.sceneState.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    lights () {
      const light = new THREE.AmbientLight(0xFFFFFF, 0.5) // soft white light
      this.sceneState.scene.add(light)

      const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0)
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
      this.sceneState.scene.add(directionalLight)
    }
  }
}
