import {
  BUSCA,
  LIMPA_BUSCA,
  CALENDARIO,
} from "./mutations";

export default {
  medicoCalendario({ commit }, data) {
    commit(CALENDARIO, data);
  },
  busca({ commit }, data) {
    commit(BUSCA, data);
  },
  limpaBusca({ commit }) {
    commit(LIMPA_BUSCA);
  },
};
