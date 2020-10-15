import {
  BUSCA,
  LIMPA_BUSCA,
} from "./mutations";

export default {
  busca({ commit }, data) {
    commit(BUSCA, data);
  },
  limpaBusca({ commit }) {
    commit(LIMPA_BUSCA);
  },
};
