export const state = () => ({
  isMobilePortrait: false,
  isDraggableInfoPanelDisabled: false,
  isDraggableInfoPanelCollapsed: true
});

export const mutations = {
  setIsMobilePortrait(state, { isMobilePortrait }) {
    state.isMobilePortrait = isMobilePortrait;
  },
  setIsDraggableInfoPanelDisabled(state, { isDisabled }) {
    state.isDraggableInfoPanelDisabled = isDisabled;
  },
  setIsDraggableInfoPanelCollapsed(state, { isCollapsed }) {
    state.isDraggableInfoPanelCollapsed = isCollapsed;
  }
};

export const actions = {
  setIsMobilePortrait({ commit }, { isMobilePortrait }) {
    commit("setIsMobilePortrait", { isMobilePortrait });
  },
  setIsDraggableInfoPanelDisabled({ commit }, { isDisabled }) {
    commit("setIsDraggableInfoPanelDisabled", { isDisabled });
  },
  setIsDraggableInfoPanelCollapsed({ commit }, { isCollapsed }) {
    commit("setIsDraggableInfoPanelCollapsed", { isCollapsed });
  }
};
