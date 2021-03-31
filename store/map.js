export const state = () => ({
  isMobilePortrait: false,
  isDraggableInfoPanelDisabled: false
});

export const mutations = {
  setIsMobilePortrait(state, { isMobilePortrait }) {
    state.isMobilePortrait = isMobilePortrait;
  },
  setIsDraggableInfoPanelDisabled(state, { isDisabled }) {
    state.isDraggableInfoPanelDisabled = isDisabled;
  }
};

export const actions = {
  setIsMobilePortrait({ commit }, { isMobilePortrait }) {
    commit("setIsMobilePortrait", {isMobilePortrait});
  },
  setIsDraggableInfoPanelDisabled({ commit }, { isDisabled }) {
    commit("setIsDraggableInfoPanelDisabled", {isDisabled});
  }
};
