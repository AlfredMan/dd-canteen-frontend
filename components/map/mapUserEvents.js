import * as THREE from 'three'
import _ from 'lodash'
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
      if (intersect) {
        this.sceneState.intersect = intersect
        this.resetMesh()
        this.mapIntersectActive = true
        this.highlightMesh()
      } else {
        this.mapIntersectActive = false
        this.sceneState.intersect = null
        this.resetMesh()
      }
    },
    highlightMesh () {
      const intersect = this.sceneState.intersect
      if (intersect) {
        const intersectName = intersect.object.name
        const buildingName = this.getBuildingName(intersectName)
        const meshesOfSameBuilding = _.filter(this.sceneState.rayTarget, mesh => _.includes(mesh.name, buildingName))
        const otherBuildings = _.filter(this.sceneState.rayTarget, mesh => !_.includes(mesh.name, buildingName))

        for (let i = 0; i < meshesOfSameBuilding.length; i++) {
          meshesOfSameBuilding[i].material.transparent = true
          meshesOfSameBuilding[i].material.opacity = 1
          // meshesOfSameBuilding[i].material.wireframe = false
        }
        for (let i = 0; i < otherBuildings.length; i++) {
          otherBuildings[i].material.transparent = true
          otherBuildings[i].material.opacity = 0.05
          // otherBuildings[i].material.wireframe = true
        }
      }
    },
    resetMesh () {
      for (let i = 0; i < this.sceneState.rayTarget.length; i++) {
        this.sceneState.rayTarget[i].material.transparent = false
        this.sceneState.rayTarget[i].material.opacity = 1
        // this.sceneState.rayTarget[i].material.wireframe = false
      }
    }
  }
}
