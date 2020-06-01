import * as THREE from 'three'
import _ from 'lodash'
import Stats from 'stats.js'
export default {
  data () {
    return {
      mapActive: false,
      mapTouchable: true,
      mapIntersectActive: false,
      useStats: false,
      isStatsActive: false,
      enableHighlightByRay: true
    }
  },
  watch: {
    mapActive (newVal, oldVal) {
      // this.onContainerResize()
      this.disableMapInteraction()
    }
  },
  mounted () {
    this.mapActive = this.active
    this.initStats()
  },
  methods: {
    initStats () {
      if (!this.useStats || this.isStatsActive) { return }
      this.stats = new Stats()
      this.stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
      document.body.appendChild(this.stats.dom)
      this.stats.dom.style.top = 'auto'
      this.stats.dom.style.bottom = 0
      this.isStatsActive = true
    },
    selectBuilding () {
      if (this.mapIntersectActive && this.enableHighlightByRay) {
        const intersect = this.sceneState.intersect
        if (intersect) {
          const intersectName = intersect.object.name
          const buildingName = this.getBuildingName(intersectName)
          this.$router.push({
            query: { building: buildingName }
          })
        }
      }
    },
    toggleMapActive (boo) {
      if (boo == true) {
        this.mapActive = true
      } else
      if (boo == false) {
        this.mapActive = false
        this.$router.push({
          query: null
        })
      } else {
        this.mapActive = !this.mapActive
      }

      // update query
      if (this.mapActive === false) {
        this.triggerSceneAnimate()
        this.resetRouteDebounce()
        this.sceneState.intersect = null
      }
    },
    resetRouteDebounce: _.debounce(function () {
      this.$router.push({
        query: null
      })
    }, 500),
    ray () {
      const self = this
      if (!self.sceneState.rayTarget) { return }
      if (!this.enableHighlightByRay) { return }

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
    setIntersect (intersect) {
      // return
      if (intersect) {
        this.sceneState.intersect = intersect
        this.mapIntersectActive = true
        this.resetHighlight()
        this.highlight()
      } else {
        this.mapIntersectActive = false
        this.sceneState.intersect = null
        // this.resetHighlight()
      }
    },
    highlight () {
      const intersect = this.sceneState.intersect
      if (intersect) {
        const intersectName = intersect.object.name
        const buildingName = this.getBuildingName(intersectName)
        this.highlightBuildingBySlug(buildingName)
      }
    },
    resetHighlight () {
      this.resetBuildingHighlight()
    },
    animate () {
      if (this.stats) {
        this.stats.begin()
      }

      if (this.eventState.move) {
        this.sceneState.tick++
        this.sceneState.controls.update()

        if (this.eventState.move) {
          if (this.ray) {
            this.ray()
          }
        }
        //
        // if (this.eventState.resize) {
        //   this.onContainerResize()
        // }

        this.render()
      }

      if (this.stats) {
        this.stats.end()
      }

      this.sceneState.raf = requestAnimationFrame(this.animate)
    },
    render () {
      this.sceneState.renderer.render(this.sceneState.scene, this.sceneState.camera)
    }
  }
}
