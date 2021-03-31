export const state = () => ({
  isMobilePortrait: false,
  isDraggableInfoPanelDisabled: false,
  isDraggableInfoPanelCollapsed: true,
  isDraggableInfoPanelExpanded: false
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
    // state.isDraggableInfoPanelExpanded = isCollapsed
    //   ? true
    //   : state.isDraggableInfoPanelDisabled;
  },
  setIsDraggableInfoPanelExpanded(state, { isExpanded }) {
    state.isDraggableInfoPanelExpanded = isExpanded;
    state.isDraggableInfoPanelCollapsed = !isExpanded;
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
  },
  setIsDraggableInfoPanelExpanded({ commit }, { isExpanded }) {
    commit("setIsDraggableInfoPanelExpanded", { isExpanded });
  }
};
