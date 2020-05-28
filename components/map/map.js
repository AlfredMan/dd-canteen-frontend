import init from './mapInit.js'
import controls from './mapControls.js'
import environment from './mapEnvironment.js'
import lifecycle from './mapLifecycle.js'
import events from './mapEvents.js'
import userEvents from './mapUserEvents.js'
import model from './mapModel.js'
import utility from './mapUtility.js'

import MapSite from './MapSite.vue'
import MapBuilding from './MapBuilding.vue'
import MapFloor from './MapFloor.vue'
import MapSpace from './MapSpace.vue'

export default {
  props: ['name', 'active'],
  components: {
    MapSite,
    MapBuilding,
    MapFloor,
    MapSpace
  },
  mixins: [
    init,
    controls,
    environment,
    events,
    userEvents,
    lifecycle,
    model,
    utility
  ],
  updated () {
    // console.log('updated', this.name)
  },
  activated () {
    console.log('activated', this._inactive)
  },
  deactivated () {
    console.log('deactivated', this._inactive)
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.removeObjects()
  },
  destroyed () {
    this.unbindEvents()
    this.destroyScene()
  }
}
