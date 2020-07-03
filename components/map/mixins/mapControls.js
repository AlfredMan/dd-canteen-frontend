import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import _ from 'lodash'
export default {
  data () {
    return {
      sceneState: {
        controlsDefaultDistance: 50,
        controlsZoomedDistance: 20
      }
    }
  },
  methods: {
    initControls () {
      this.sceneState.controls = new OrbitControls(this.sceneState.camera, this.sceneState.renderer.domElement)
      this.sceneState.controls.autoRotate = false
      // this.sceneState.controls.autoRotateSpeed = 0.1
      this.sceneState.controls.enableDamping = true
      this.sceneState.controls.dampingFcator = 0.7
      this.sceneState.controls.target = new THREE.Vector3(0, 1, 0)
      this.sceneState.controls.enableZoom = true
      this.sceneState.controls.minDistance = this.sceneState.controlsDefaultDistance
      this.sceneState.controls.maxDistance = this.sceneState.controlsDefaultDistance
    },
    zoomToBuilding () {
      let from = {}; let to = {}
      const self = this
      const controls = self.sceneState.controls
      from = {
        limit: controls.maxDistance
      }
      to = {
        limit: self.sceneState.controlsZoomedDistance
      }
      gsap.to(from, {
        limit: to.limit,
        duration: 0.5,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (controls) {
            controls.minDistance = from.limit
            controls.maxDistance = from.limit
            controls.update()
            self.triggerSceneAnimate()
          }
        }
      })
    },
    zoomToSite () {
      let from = {}; let to = {}
      const self = this
      const controls = self.sceneState.controls
      from = {
        limit: controls.maxDistance
      }
      to = {
        limit: self.sceneState.controlsDefaultDistance
      }
      gsap.to(from, {
        limit: to.limit,
        duration: 0.5,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (controls) {
            controls.minDistance = from.limit
            controls.maxDistance = from.limit
            controls.update()
            self.triggerSceneAnimate()
          }
        }
      })
    },
    updateControlsTarget (slug = '') {
      const self = this

      if (!self.sceneState.controls) { return }

      self.tl = gsap.timeline({
        onUpdate: () => {
          update()
        }
      })
      self.tl.pause()

      const object = _.find(self.sceneState.rayTarget, building => building.name == slug)

      console.log('updateControlsTarget to ')

      let currentTarget = {}
      currentTarget = {
        x: self.sceneState.controls.target.x,
        y: self.sceneState.controls.target.y,
        z: self.sceneState.controls.target.z
      }
      let target = {
        x: 0,
        y: 1,
        z: 0
      }

      if (object && object.position) {
        console.log(slug, object)
        const newX = object.getWorldPosition(new THREE.Vector3()).x
        const newZ = object.getWorldPosition(new THREE.Vector3()).z
        target = {
          x: newX,
          y: 1,
          z: newZ
        }
        console.log(target)
      }

      // const diff = {
      //   x: currentTarget.x - target.x,
      //   y: currentTarget.y - target.y,
      //   z: currentTarget.z - target.z
      // }

      // debugger

      self.sceneState.controlsTarget = Object.assign({}, self.sceneState.controlsTarget, target)

      self.tl.to(currentTarget, {
        x: target.x,
        y: target.y,
        z: target.z,
        duration: 0.5,
        ease: 'power2.inOut'
        // background: 'green',
      })

      self.tl.play()

      function update () {
        // console.log(currentTarget.x, target.x)
        if (self.sceneState.controls) {
          // console.log(self.sceneState.controls.target.x, self.sceneState.controls.target.z)
          self.sceneState.controls.target.x = currentTarget.x
          self.sceneState.controls.target.y = currentTarget.y
          self.sceneState.controls.target.z = currentTarget.z
          self.sceneState.controls.update()
        }
        self.triggerSceneAnimate()
      }
    }
  }
}
