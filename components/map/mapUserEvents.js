import * as THREE from 'three'
export default {
  data () {
    return {
      mapActive: false,
      mapTouchable: true
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
      if (!self.sceneState.targetMesh) { return }

      self.sceneState.raycaster.setFromCamera(self.sceneState.mouse, self.sceneState.camera)

      // calculate objects intersecting the picking ray
      const intersects = self.sceneState.raycaster.intersectObjects(self.sceneState.targetMesh.children)

      // console.log(intersects)

      // return

      if (intersects.length > 0) {
        self.setIntersect(intersects)
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

      if (self.sceneState.mesh) {
        const inc = (self.sceneState.tick / 5)
        for (let i = 0; i < self.sceneState.meshes.length; i++) {
        }
      }
      self.sceneState.renderer.render(self.sceneState.scene, self.sceneState.camera)
    },
    setIntersect (intersect) {
      // console.log(intersect)
      // return
      const self = this
      if (intersect) {
        self.sceneState.intersect = intersect
        // self.resetMeshMaterials()
        // intersect.object.material = self.sceneState.activeMaterial
      } else {
        self.sceneState.intersect = null
        // self.resetMeshMaterials()
      }
    },
    resetMeshMaterials () {
      const self = this
      for (let i = 0; i < self.sceneState.targetMesh.children.length; i++) {
        self.sceneState.targetMesh.children[i].material = self.sceneState.defaultMaterial
      }
    }
  }
}
