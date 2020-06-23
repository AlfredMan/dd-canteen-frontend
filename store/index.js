import _ from 'lodash'
import { spaces } from '~/common/spaces'
import { hire } from '~/common/hire'
import { buildings } from '~/common/buildings'
import { studios } from '~/common/architecture'
import { units } from '~/common/units'

export const state = () => ({
  navigation: {
    theme: 'light'
  },
  transition: {
    step: 0,
    delay: 700,
    count: 0,
    sourceElement: null,
    sourceElementRect: null
  },
  filters: {
    sizeBracket: [
      '>100',
      '100-200',
      '201-500',
      '501-1,000',
      '1,001-2,000',
      '2,001<'
    ],
    architect: [
      'A6 Architects',
      'Adam Khan Architects',
      'Archtecture 00',
      'Barozzi Veiga',
      'David Kohn Architects',
      'HNNA',
      'Mole Architects',
      'Selgascano'
    ],
    options: [
      'Multi-purpose work space',
      'Serviced studio',
      'On/off office',
      'Co-working',
      'Ground floor space'
    ]
  },
  studios: {},
  hire: [],
  spaces: [],
  buildings: []
})

export const mutations = {
  setNavigationTheme (state, payload) {
    state.navigation.theme = payload.theme
  },
  setRouteTransitionStep (state, payload) {
    state.transition.step = payload.step
  },
  setRouteTransitionInc (state) {
    state.transition.count += 1
  },
  setRouteTransitionSourceElement (state, payload) {
    state.transition.sourceElement = payload.sourceElement
  },
  clearRouteTransitionSourceElement (state) {
    state.transition.sourceElement = null
  },
  setRouteTransitionSourceElementRect (state, payload) {
    state.transition.sourceElementRect = payload.boundingClientRect
  },
  clearRouteTransitionSourceElementRect (state) {
    state.transition.sourceElementRect = null
  },
  setSpaces (state, payload) {
    // console.log('vuex setSpaces', payload)
    state.spaces = payload.spaces
  },
  setHire (state, payload) {
    // console.log('vuex setHire', payload)
    state.hire = payload.hire
  },
  setBuildings (state, payload) {
    // console.log('vuex setBuildings', payload)
    state.buildings = payload.buildings
  },
  setStudios (state, payload) {
    // console.log('vuex setStudios', payload)
    state.studios = _.sortBy(payload.studios, ['slug'])
  },
  setSpaceFilter (state, payload) {
    console.log('vuex setSpaceFilter', payload)
    state.filters = payload.filters
  },
  setSpaceFilterOptions (state, payload) {
    state.filters.options = payload.filterSpaceOptions
  },
  setSpaceFilterSizeBracket (state, payload) {
    state.filters.sizeBracket = payload.filterSpaceSizeBracket
  },
  setSpaceFilterArchitect (state, payload) {
    state.filters.architect = payload.filterSpaceArchitect
  }
}

export const getters = {
  getAllSpaces: state => () => {
    return state.spaces
  },
  getAllStudios: state => () => {
    return state.studios
  },
  getSpaceBySlug: state => (slug) => {
    return state.spaces.length > 0 ? state.spaces.find(space => space.slug === slug) : null
  },
  getBuildingBySlug: state => (slug) => {
    return state.buildings.length > 0 ? state.buildings.find(building => building.slug === slug) : null
  },
  getSpacesByBuilding: state => (slug) => {
    return state.spaces.length > 0 ? state.spaces.filter(space => space.building === slug) : null
  },
  getHireBySlug: state => (slug) => {
    return state.hire.length > 0 ? state.hire.find(hire => hire.slug === slug) : null
  },
  getStudioBySlug: state => (slug) => {
    return state.studios.length > 0 ? state.studios.find(studios => studios.slug === slug) : null
  },
  getStudioByBuilding: state => (building) => {
    return state.studios.length > 0 ? state.studios.find(studios => _.includes(_.split(studios.buildings, ' '), building)) : null
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    console.log('nuxtServerInit ++++++++++++++++++++++++++++++=')
    await dispatch('getArchitectureStudios')
    await dispatch('getMapHire')
    await dispatch('getMapBuildings')
    await dispatch('getMapSpaces')
  },
  updateNavigationTheme ({ commit }, context) {
    const theme = context.theme
    commit('setNavigationTheme', { theme })
  },
  routeTransitionStart ({ commit }) {
    commit('setRouteTransitionStep', { step: 1 })
  },
  routeTransitionEnd ({ commit }) {
    commit('setRouteTransitionStep', { step: 0 })
  },
  routeTransitionInc ({ commit }) {
    commit('setRouteTransitionInc')
  },
  setRouteTransitionSource ({ commit }, context) {
    if (!context || !context.sourceElement) {
      commit('clearRouteTransitionSourceElement')
    } else {
      const sourceElement = context.sourceElement
      commit('setRouteTransitionSourceElement', { sourceElement })
    }
  },
  setRouteTransitionSourceRect ({ commit }, context) {
    if (!context || !context.boundingClientRect) {
      commit('clearRouteTransitionSourceElementRect')
    } else {
      const boundingClientRect = context.boundingClientRect
      commit('setRouteTransitionSourceElementRect', { boundingClientRect })
    }
  },
  resetRouteTransitionSourceRect ({ commit }) {
    commit('clearRouteTransitionSourceElementRect')
  },
  getMapSpaces ({ commit, getters }) {
    console.log('getMapSpaces...')
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const demoSpaces = _.map(units, (unit) => {
          // console.log(unit.Building)
          // console.log(getters, getters.getBuildingBySlug(unit.Building))
          const newUnit = {
            title: unit.Title,
            slug: unit.Slug,
            images: [
              {
                url: getters.getBuildingBySlug(unit.Building) ? getters.getBuildingBySlug(unit.Building).url : ''
              }
            ],
            floorplan: [
              {
                url: 'https://images.ctfassets.net/xsmgpzj6d8er/74jLzbmZYiAqAIt5fi3tFc/519fed5fe663df6f83cea41a8dde94db/A2-1-1.png'
              }
            ],
            uniqueUnitReference: unit['Unique Unit Reference'],
            building: unit.Building,
            architect: unit.Architect,
            floor: unit.Floor,
            unit: unit.Unit,
            tenant: unit.Tenant,
            spaceType: unit['Space Type'],
            spaceOption: unit['Space option'],
            sizeSqFt: unit['Size Sq Ft'],
            sizeSqM: unit['Size Sq M'],
            sizeSqFtBracket: unit['Size Sq Ft Bracket'],
            explantion: unit.Explantion,
            options: unit.Options
          }
          // console.log('newUnit', newUnit)
          return newUnit
        })
        // console.log(demoSpaces)

        // const filterSpaceOptions = _.uniq(_.map(demoSpaces, space => space.options))
        // const filterSpaceSizeBracket = _.uniq(_.map(demoSpaces, space => space.sizeSqFtBracket))
        // const filterSpaceArchitect = _.uniq(_.map(demoSpaces, space => space.architect))

        commit('setSpaces', { spaces: demoSpaces })
        // commit('setSpaceFilterOptions', { options: filterSpaceOptions })
        // commit('setSpaceFilterSizeBracket', { sizeBracket: filterSpaceSizeBracket })
        // commit('setSpaceFilterArchitect', { architect: filterSpaceArchitect })

        resolve(demoSpaces)
      }, 500)
    })
  },
  getMapHire ({ commit }) {
    console.log('getMapHire...')
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const demoHire = hire
        resolve(demoHire)
        commit('setHire', { hire })
      }, 500)
    })
  },
  getMapBuildings ({ commit }) {
    console.log('getMapBuildings...')
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const demoBuildings = buildings
        resolve(demoBuildings)
        commit('setBuildings', { buildings })
      }, 500)
    })
  },
  getArchitectureStudios ({ commit }) {
    console.log('getArchitectureStudios...')
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const demoStudios = studios
        resolve(demoStudios)
        commit('setStudios', { studios })
      }, 500)
    })
  }
}
