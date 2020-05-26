import spaces from '~/common/spaces'
import buildings from '~/common/buildings'

export const state = () => ({
  navigation: {
    theme: 'light'
  },
  transition: {
    step: 0,
    delay: 500,
    count: 0,
    sourceElement: null,
    sourceElementRect: null,
    spaces: [],
    buildings: []
  }
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
  setBuildings (state, payload) {
    state.buildings = payload.buildings
  }
}

export const actions = {
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
    return Promise((resolve, reject) => {
      setTimeout(() => {
        const demoSpaces = spaces
        resolve(demoSpaces)
        commit('setSpaces', { spaces })
      }, 500)
    })
  },
  getMapBuildings ({ commit }) {
    return Promise((resolve, reject) => {
      setTimeout(() => {
        const demoBuildings = buildings
        resolve(demoBuildings)
        commit('setBuildings', { buildings })
      }, 500)
    })
  }
}
