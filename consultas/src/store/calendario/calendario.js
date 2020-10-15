// initial state
const state = () => ({
  calendario: 454
})

// getters
const getters = {}

// actions
const actions = {
    execCalendario({ commit }, data) {
        commit('calendario', data);
    }
}

// mutations
const mutations = {
  calendario (state, status) {
    state.calendario = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}