// initial state
const state = () => ({
  busca: ""
})

// getters
const getters = {}

// actions
const actions = {
    execBusca({ commit }, data) {
        commit('busca', data);
    },
    limpaBusca({ commit }) {
        commit('limpaBusca');
    }
}

// mutations
const mutations = {
  busca (state, status) {
    state.busca = status
  },
  limpaBusca(state) {
    state.busca = ''
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}