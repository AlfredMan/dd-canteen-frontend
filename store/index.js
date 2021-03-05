import _ from 'lodash'
import { spaces } from '~/common/spaces'
import { hire } from '~/common/hire'
import { buildings } from '~/common/buildings'
import { studios } from '~/common/architecture'
import { units } from '~/common/units'

import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export const state = () => ({
  seoDefault: {
    image: 'https://images.ctfassets.net/xsmgpzj6d8er/5TyiTSFZiYTicI5pOIMlfy/baffbec0099fb75bd71f6cf1e816673c/Aerial_All_Buildings_Design_District.jpg?w=2000&fm=jpg&q=80',
    title: 'Design District',
    description: 'A new permanent home for the creative industries. With purpose-designed workspaces, workshops, accessible rents and flexible leases.'
  },
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
      'Ground floor space',
      'Co-working',
      'Food stalls',
      'Entire floor',
      'Building'
    ]
  },
  studios: {},
  hire: [],
  spaces: [],
  buildings: [],
  journals: [],
  events: [],
  spaceType: [],
  architects: [],
  routeHistory: {}
})

export const mutations = {
  setNavigationTheme (state, payload) {
    state.navigation.theme = payload.theme
  },
  setNavigationAccent (state, payload) {
    state.navigation.accent = payload.accent
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
  setSpaceType (state, payload) {
    // console.log('vuex setBuildings', payload)
    state.spaceType = payload.spaceType
  },
  setStudios (state, payload) {
    // console.log('vuex setStudios', payload)
    state.studios = _.sortBy(payload.studios, ['slug'])
  },
  setJournals (state, payload) {
    // console.log('vuex setBuildings', payload)
    state.journals = payload.journals
  },
  setSpaceFilter (state, payload) {
    // console.log('vuex setSpaceFilter', payload)
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
  },
  setArchitects (state, payload) {
    // console.log('vuex setBuildings', payload)
    state.architects = payload.architects
  },
  setEvents (state, payload) {
    // console.log('vuex setBuildings', payload)
    state.events = payload.events
  },
  setRouteHistory (state, payload) {
    state.routeHistory = payload.from
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
    // console.log(slug)
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
    // console.log('nuxtServerInit ++++++++++++++++++++++++++++++=')
    // await dispatch('getArchitectureStudios')
    // await dispatch('getMapHire')
    // await dispatch('getMapBuildings')
    // await dispatch('getMapSpaces')

    // await dispatch('getJournals')
    // await dispatch('getBuildings')
    // await dispatch('getSpaceTypes')
    await dispatch('getArchitectureStudios')
    await dispatch('getJournals')
    await dispatch('getBuildings')
    await dispatch('getSpaceTypes')
    await dispatch('getJournals')
    await dispatch('getEvents')
  },
  updateNavigationTheme ({ commit }, context) {
    const theme = context.theme
    commit('setNavigationTheme', { theme })
  },
  updateNavigationAccent ({ commit }, context) {
    const theme = context.theme
    commit('setNavigationAccent', { theme })
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
  addRouteHistory ({ commit }, context) {
    const from = context.from
    commit('setRouteHistory', { from })
  },
  getArchitectureStudios ({ commit }) {
    // console.log('getArchitectureStudios...')
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const demoStudios = studios
        resolve(demoStudios)
        commit('setStudios', { studios })
      }, 500)
    })
  },
  // async getEvents ({ commit }) {
  //   const response = await client.getEntries({
  //     'content_type': 'events',
  //     order: '-sys.createdAt',
  //     limit: 99
  //   })
  //   if (response.items.length > 0) {
  //     // console.log('getJournals response.items??..............', response.items)
  //     const events = _.orderBy(response.items, ['fields.title'], ['desc'])
  //     commit('setEvents', { events })
  //   }
  // },
  async getArchitects ({ commit }) {
    const response = await client.getEntries({
      'content_type': 'architect',
      order: '-sys.createdAt',
      limit: 99
    })
    if (response.items.length > 0) {
      // console.log('getJournals response.items??..............', response.items)
      const architects = _.orderBy(response.items, ['fields.title'], ['desc'])
      commit('setArchitects', { architects })
    }
  },
  async getJournals ({ commit }) {
    const response = await client.getEntries({
      'content_type': 'news',
      order: '-sys.createdAt',
      limit: 99
    })
    if (response.items.length > 0) {
      // console.log('getJournals response.items??..............', response.items[0])
      const featured = _.filter(response.items, item => item.fields.featured)
      const featuredOrderedByDate = _.orderBy(featured, ['sys.createdAt'], ['desc'])
      const nonFeatured = _.filter(response.items, item => !item.fields.featured)
      const nonFeaturedOrderedByDate = _.orderBy(nonFeatured, ['sys.createdAt'], ['desc'])
      // console.log('featured', featuredOrderedByDate)
      // console.log('nonFeatured', nonFeaturedOrderedByDate)
      commit('setJournals', { journals: featuredOrderedByDate.concat(nonFeaturedOrderedByDate) })
    }
  },
  async getEvents ({ commit }) {
    const response = await client.getEntries({
      'content_type': 'event',
      order: '-sys.createdAt',
      limit: 99
    })
    if (response.items.length > 0) {

      const featured = _.filter(response.items, item => item.fields.featured)
      const featuredOrderedByDate = _.orderBy(featured, ['sys.createdAt'], ['desc'])
      const nonFeatured = _.filter(response.items, item => !item.fields.featured)
      const nonFeaturedOrderedByDate = _.orderBy(nonFeatured, ['sys.createdAt'], ['desc'])
      commit('setEvents', { events: featuredOrderedByDate.concat(nonFeaturedOrderedByDate) })
      // console.log('getEvents response.items??..............', response.items[0])
      // const featured = _.filter(response.items, item => item.fields)
      // const featuredOrderedByDate = _.orderBy(response.items, ['sys.createdAt'], ['desc'])
      // commit('setEvents', { events: response.items })
    }
  },
  async getBuildings ({ commit }) {
    const response = await client.getEntries({
      'content_type': 'buildings',
      order: '-sys.createdAt',
      include: 5
    })
    if (response.items.length > 0) {
      // console.log('getBuildings response.items??..............', response.items.length)
      let buildings = response.items
      buildings = _.map(buildings, (b)=>{
        // b.slug = b.fields.title
        b.slug = b.fields.slug
        return b
      })
      commit('setBuildings', { buildings })
    }
  },
  async getSpaceTypes ({ commit }) {
    const response = await client.getEntries({
      'content_type': 'spaceType',
      order: '-sys.createdAt'
    })
    if (response.items.length > 0) {
      // console.log('getBuildings response.items??..............', response.items.length)
      const spaceType = response.items
      commit('setSpaceType', { spaceType })
    }
  }
}
