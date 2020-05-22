export const state = () => ({
  navigation: {
    theme: 'light'
  }
})

export const mutations = {
  setNavigationTheme (state, payload) {
    state.navigation.theme = payload.theme
  }
}

export const actions = {
  updateNavigationTheme ({ commit }, context) {
    const theme = context.theme
    commit('setNavigationTheme', { theme })
  }
}
