import _ from 'lodash'
export default {
  data () {
    return {
      siteActive: true,
      buildingActive: false,
      floorActive: false,
      spaceActive: false
    }
  },
  computed: {
    currentBuilding () {
      return this.$route.query.building
    },
    currentFloor () {
      return this.$route.query.floor
    },
    currentSpace () {
      return this.$route.query.space
    }
  },
  watch: {
    '$route' (newVal, oldVal) {
      this.updateViewByRoute()
      this.onWindowResize()
    }
  },
  mounted () {
    // this.updateViewByRoute()
  },
  methods: {
    updateViewByRoute () {
      if (!this.sceneState || !this.sceneState.isLoaded) {
        return
      }

      console.log('updateViewByRoute.................')

      const building = this.$route.query.building
      const floor = this.$route.query.floor
      const space = this.$route.query.space
      if (space) {
        this.siteActive = false
        this.buildingActive = false
        this.floorActive = false
        this.spaceActive = true
        this.updateControlsTarget(building)
        this.displayBuildingBySlugOnly(building)
        this.zoomToBuilding()
        this.enableHighlightByRay = false
      } else
      if (floor) {
        this.siteActive = false
        this.buildingActive = false
        this.floorActive = true
        this.spaceActive = false
        this.updateControlsTarget(building)
        this.displayBuildingBySlugOnly(building)
        this.zoomToBuilding()
        this.enableHighlightByRay = false
      } else
      if (building) {
        this.siteActive = false
        this.buildingActive = true
        this.floorActive = false
        this.spaceActive = false
        this.updateControlsTarget(building)
        this.displayBuildingBySlugOnly(building)
        this.zoomToBuilding()
        this.enableHighlightByRay = false
      } else {
        this.siteActive = true
        this.buildingActive = false
        this.floorActive = false
        this.spaceActive = false
        this.updateControlsTarget()
        this.zoomToSite()
        setTimeout(() => {
          this.enableHighlightByRay = true
          this.resetBuildingHighlight()
        }, 500)
      }
      // this.triggerSceneResize()
    },
    getBuildingName (name) {
      // get first 2 letter of a name
      const buildingName = _.join(_.take(name, 2), '')
      return buildingName
    }
  }
}
