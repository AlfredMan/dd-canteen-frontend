import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import _ from 'lodash'
export default {
  methods: {
    initControls () {
      this.sceneState.controls = new OrbitControls(this.sceneState.camera, this.sceneState.renderer.domElement)
      this.sceneState.controls.autoRotate = false
      // this.sceneState.controls.autoRotateSpeed = 0.1
      this.sceneState.controls.enableDamping = true
      this.sceneState.controls.dampingFcator = 0.05
      this.sceneState.controls.target = new THREE.Vector3(0, 1, 0)
      this.sceneState.controls.enableZoom = false
    },
    updateControlsTarget (slug) {
      const self = this

      self.tl = gsap.timeline({
        onUpdate: () => {
          update()
        }
      })
      self.tl.pause()

      const object = _.find(self.sceneState.rayTarget, building => building.name == slug)
      // debugger

      const from = {
        x: self.sceneState.controlsTarget.x,
        y: self.sceneState.controlsTarget.y,
        z: self.sceneState.controlsTarget.z
      }

      let target = {
        x: 0,
        y: 1,
        z: 0
      }
      if (object && object.position) {
        target = {
          x: object.position.x,
          y: 1,
          z: object.position.z
        }
      }

      self.sceneState.controlsTarget = Object.assign({}, self.sceneState.controlsTarget, target)

      self.tl.to(from, {
        x: target.x,
        y: target.y,
        z: target.z,
        duration: 1
        // background: 'green',
      })

      self.tl.play()

      function update () {
        // if (self.sceneState.controls) {
        //   // console.log(target)
        //   self.sceneState.controls.target = new THREE.Vector3(target.x, target.y, target.z)
        //   self.sceneState.controls.update()
        // }
        // self.onAnimateDebounce()
      }
    }
  }
}
