import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
export default {
  methods: {
    initControls () {
      this.sceneState.controls = new OrbitControls(this.sceneState.camera, this.sceneState.renderer.domElement)
      this.sceneState.controls.autoRotate = true
      this.sceneState.controls.autoRotateSpeed = 0.1
      this.sceneState.controls.enableDamping = true
      this.sceneState.controls.dampingFcator = 0.05
      this.sceneState.controls.target = new THREE.Vector3(0, 1, 0)
      // this.sceneState.controls.enableZoom = false
    }
  }
}
