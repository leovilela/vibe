export const BUSCA = "BUSCA//UTILS";
export const LIMPA_BUSCA = "LIMPA_BUSCA//UTILS";
export const CALENDARIO = "CALENDARIO//UTILS";


export default {
  [BUSCA](state, payload) {
    state.busca = payload.busca;
  },
  [CALENDARIO](state, payload) {
    state.calendario = payload.calendario;
  },
  [LIMPA_BUSCA](state) {
    state.busca = "";
  },
};
