import _ from 'lodash'
import { spaces } from '~/common/spaces'
import { hire } from '~/common/hire'
import { buildings } from '~/common/buildings'
import { studios } from '~/common/architecture'

export const state = () => ({
  navigation: {
    theme: 'light'
  },
  transition: {
    step: 0,
    delay: 500,
    count: 0,
    sourceElement: null,
    sourceElementRect: null
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
    state.spaces = payload.spaces
  },
  setHire (state, payload) {
    state.hire = payload.hire
  },
  setBuildings (state, payload) {
    state.buildings = payload.buildings
  },
  setStudios (state, payload) {
    state.studios = _.sortBy(payload.studios, ['slug'])
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
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    console.log('nuxtServerInit ++++++++++++++++++++++++++++++=')
    await dispatch('getMapSpaces')
    await dispatch('getMapHire')
    await dispatch('getMapBuildings')
    await dispatch('getArchitectureStudios')
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
  getMapSpaces ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const demoSpaces = spaces
        resolve(demoSpaces)
        commit('setSpaces', { spaces })
      }, 500)
    })
  },
  getMapHire ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const demoHire = hire
        resolve(demoHire)
        commit('setHire', { hire })
      }, 500)
    })
  },
  getMapBuildings ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const demoBuildings = buildings
        resolve(demoBuildings)
        commit('setBuildings', { buildings })
      }, 500)
    })
  },
  getArchitectureStudios ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const demoStudios = studios
        resolve(demoStudios)
        commit('setStudios', { studios })
      }, 500)
    })
  }
}
