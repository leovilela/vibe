export const BUSCA = "BUSCA//UTILS";
export const LIMPA_BUSCA = "LIMPA_BUSCA//UTILS";


export default {
  [BUSCA](state, payload) {
    state.busca = payload.busca;
  },
  [LIMPA_BUSCA](state) {
    state.busca = "";
  },
};
