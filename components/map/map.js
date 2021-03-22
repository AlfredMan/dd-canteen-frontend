import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const MY_CONST = 2

class Scene {
  constructor({ rootEl, onHover, onSelect }) {

    console.log('Scene construtor called.')

    this.canvas = document.createElement('canvas')

    this.onHoverCallback = onHover
    this.onSelectCallback = onSelect

    this.hoverTarget = null

    this.root = rootEl
    this.width = rootEl.clientWidth
    this.height = rootEl.clientHeight

    this.background = '#0000ff'

    this.objects = []

    this.isAddObjectMode = false

    this.init()
    this.update()
    this.bindEvents()
  }

  triggerUpdate (options) {

    // dummy proof of concept
    let buildingId = options && options.id || ''

    console.log('triggerUpdate', options)

    for (let i = 0; i < this.objects.length; i++) {
      let box = this.objects[i]
      if (buildingId && box.userData.building==buildingId) {
        box.material.color.setHex( 0xff0000 ); // make it red
        this.hoverTarget=box // set internal reference the box that matches ID
      } else {
        box.material.color.setHex( 0xffffff ); // make rest white
      }
    }

    // dummy proof of concept
  }

  destroy() {
    if (this.scene) {
      this.scene.remove.apply(this.scene, this.scene.children);
    }
    if (this.canvas) {
      this.canvas.parentElement.removeChild(this.canvas)
    }
    if (this.raf) {
      cancelAnimationFrame(this.raf)
    }
    this.unbindEvents()
  }

  init() {
    this.initScene()
    this.initLights()
    this.initCamera()
    this.initRenderer()
    this.initOrbitControls()
    this.initRaycaster()

    this.initMapObjects()

    this.root.appendChild(this.canvas)
  }

  initScene() {
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(this.background)
  }

  initLights() {
    const hlights = new THREE.AmbientLight('#666666')
    const directionalLight = new THREE.DirectionalLight('#dfebff', 1)
    directionalLight.position.set(0, 10, 10)
    directionalLight.position.multiplyScalar(1.3)

    this.scene.add(hlights)
    this.scene.add(directionalLight)
  }

  initCamera() {
    const aspect = this.width / this.height

    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100)

    this.camera.position.set(0, 4, 5)
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(this.background, 1)

    this.canvas = this.renderer.domElement
  }

  initOrbitControls() {
    this.orbitControls = new OrbitControls(this.camera, this.canvas)

    this.orbitControls.maxPolarAngle = Math.PI * 0.45

    this.orbitControls.enableDamping = true
    this.orbitControls.dampingFactor = 0.05
    this.orbitControls.screenSpacePanning = false

    this.orbitControls.maxDistance = 15
    this.orbitControls.minDistance = 3

    this.orbitControls.update()
  }

  initMapObjects() {

    // dummy geom for testing

    let buildings=['A1','A2','A3','A4','B1','B2','B3','B4','C1','C2','C3','C4','D1','D2','D3','D4']
    for (let i = 0; i < buildings.length; i++) {
      const geometry = new THREE.BoxGeometry( 0.4, 0.4, 0.4 );
      const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
      const cube = new THREE.Mesh( geometry, material );
      cube.position.x = i-buildings.length/2 + 0.5
      cube.userData.building=buildings[i]
      this.scene.add( cube );
      this.objects.push(cube)
    }

    // dummy geom for testing
  }

  initRaycaster() {
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()
  }

  ray() {

    this.raycaster.setFromCamera(this.mouse, this.camera)
    const intersects = this.raycaster.intersectObjects([...this.objects], true)

    if (intersects.length > 0) {

      this.hoverTarget = intersects[0].object
      this.onHoverCallback(this.hoverTarget)

      for ( let i = 0; i < intersects.length; i ++ ) {
        if (intersects[ i ].object && intersects[ i ].object.material) {
          intersects[ i ].object.material.color.setHex( Math.random() * 0xffffff ); // set a random color so we know its constantly updating
        }
      }
    }
    // if (intersects.length > 0) {
    //   console.log(intersects[0].object.userData&&intersects[0].object.userData.building)
    // } else {
    //   //
    // }
  }

  render() {
    this.renderer.render(this.scene, this.camera)
  }

  update() {
    this.raf = requestAnimationFrame(() => this.update())
    this.ray()
    this.orbitControls.update()
    this.render()
  }

  // Callbacks

  onResize = () => {
    this.width = this.root.clientWidth
    this.height = this.root.clientHeight

    this.renderer.setSize(this.width, this.height)

    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
  }

  onDocumentMouseMove = (event) => {
    event.preventDefault()
    let x=event.offsetX||event.clientX
    let y=event.offsetY||event.clientY
    this.mouse.x = (x / this.width) * 2 - 1
    this.mouse.y = -(y / this.height) * 2 + 1
  }

  onDocumentMouseDown = (event) => {
    // return
    event.preventDefault()
    if (this.hoverTarget) {
      this.onSelectCallback(this.hoverTarget)
    } else {
      this.onSelectCallback()
    }
  }

  bindEvents() {
    window.addEventListener('resize', this.onResize)
    this.canvas.addEventListener('mousemove', this.onDocumentMouseMove, false)
    this.canvas.addEventListener('mousedown', this.onDocumentMouseDown, false)
  }

  unbindEvents() {
    window.removeEventListener('resize', this.onResize)
    this.canvas.removeEventListener('mousemove', this.onDocumentMouseMove, false)
    this.canvas.removeEventListener('mousedown', this.onDocumentMouseDown, false)
  }
}

const SceneConstructor = (args) => new Scene(args)

export default SceneConstructor
