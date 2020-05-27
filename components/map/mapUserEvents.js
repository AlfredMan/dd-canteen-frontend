import * as THREE from 'three'
export default {
  data () {
    return {
      mapActive: false,
      mapTouchable: true,
      mapIntersectActive: false
    }
  },
  watch: {
    mapActive (newVal, oldVal) {
      this.onContainerResize()
      this.disableMapInteraction()
    }
  },
  mounted () {
    this.mapActive = this.active
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
    ray () {
      const self = this
      if (!self.sceneState.rayTarget) { return }

      self.sceneState.raycaster.setFromCamera(self.sceneState.mouse, self.sceneState.camera)

      // calculate objects intersecting the picking ray
      const intersects = self.sceneState.raycaster.intersectObjects(self.sceneState.rayTarget)

      // console.log(intersects)

      // return

      if (intersects.length > 0) {
        self.setIntersect(intersects[0])
      } else {
        self.setIntersect(null)
      }
    },
    animate () {
      const self = this
      self.sceneState.raf = requestAnimationFrame(this.animate)
      self.sceneState.tick++
      self.sceneState.controls.update()

      if (this.ray) {
        this.ray()
      }

      // if (self.sceneState.mesh) {
      //   const inc = (self.sceneState.tick / 5)
      //   for (let i = 0; i < self.sceneState.meshes.length; i++) {
      //   }
      // }
      self.sceneState.renderer.render(self.sceneState.scene, self.sceneState.camera)
    },
    setIntersect (intersect) {
      // console.log(intersect)
      // return
      const self = this
      if (intersect) {
        self.sceneState.intersect = intersect
        self.resetMeshMaterials()
        self.mapIntersectActive = true
        // intersect.object.material = self.sceneState.activeMaterial
        intersect.object.material.transparent = true
        intersect.object.material.opacity = 0.7
      } else {
        self.mapIntersectActive = false
        self.sceneState.intersect = null
        self.resetMeshMaterials()
      }
    },
    resetMeshMaterials () {
      const self = this
      for (let i = 0; i < self.sceneState.rayTarget.length; i++) {
        self.sceneState.rayTarget[i].material.transparent = false
        self.sceneState.rayTarget[i].material.opacity = 1
      }
    }
  }
}
