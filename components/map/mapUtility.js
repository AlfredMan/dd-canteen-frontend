import _ from 'lodash'
export default {
  data () {
    return {
    }
  },
  methods: {
    getBuildingName (name) {
      // get first 2 letter of a name
      const buildingName = _.join(_.take(name, 2), '')
      return buildingName
    }
  }
}
