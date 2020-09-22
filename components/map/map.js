import init from './mixins/mapInit.js'
import controls from './mixins/mapControls.js'
import environment from './mixins/mapEnvironment.js'
import lifecycle from './mixins/mapLifecycle.js'
import events from './mixins/mapEvents.js'
import userEvents from './mixins/mapUserEvents.js'
import model from './mixins/mapModel.js'
import utility from './mixins/mapUtility.js'

import MapSite from './templates/MapSite.vue'
import MapBuilding from './templates/MapBuilding.vue'
import MapFloor from './templates/MapFloor.vue'
import MapSpace from './templates/MapSpace.vue'
import MapListing from './templates/MapListing.vue'

import MapThumbnail from '~/components/map-thumbnail/MapThumbnail.vue'

export default {
  props: ['name', 'active'],
  components: {
    MapSite,
    MapBuilding,
    MapFloor,
    MapSpace,
    MapListing,
    MapThumbnail
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
    // this.init()
  },
  beforeDestroy () {
    this.removeObjects()
  },
  destroyed () {
    this.unbindEvents()
    this.destroyScene()
  }
}
