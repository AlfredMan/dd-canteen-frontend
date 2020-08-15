// import Vue from 'vue'
// Learn more on https://nuxtjs.org/guide/vuex-store

// =================================================
// State
// =================================================
export const state = () => {
  return {
    cookieActive: false
  }
}

// =================================================
// Mutations
// =================================================
export const mutations = {
  COOKIE_IS_ACTIVE: (state) => {
    state.cookieActive = true
  }
}
// =================================================
// Actions
// =================================================
export const actions = {
  // COOKIE_FOUND ({ commit, state }) {
  //   commit('COOKIE_IS_ACTIVE')
  // },
  COOKIE_CHECK ({ commit, state }) {
    console.log('COOKIE_CHECK')
    const cookieRes = this.$cookies.get('DD_CP')
    if ((cookieRes && +cookieRes === 1) || document.cookie.indexOf('DD_CP')>-1) {
      commit('COOKIE_IS_ACTIVE')
    }
  },
  COOKIE_ACCEPT ({ commit, state }) {
    this.$cookies.set('DD_CP', 1, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30
    })
    commit('COOKIE_IS_ACTIVE')
  }
}
