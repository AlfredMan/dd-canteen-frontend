import init from './mapInit.js'
import controls from './mapControls.js'
import environment from './mapEnvironment.js'
import lifecycle from './mapLifecycle.js'
import events from './mapEvents.js'
import userEvents from './mapUserEvents.js'
import model from './mapModel.js'

export default {
  props: ['name', 'active'],
  mixins: [
    init,
    controls,
    environment,
    events,
    userEvents,
    lifecycle,
    model
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
