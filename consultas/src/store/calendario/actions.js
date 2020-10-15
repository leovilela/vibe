import {
  CALENDARIO,
} from "./mutations";

export default {
  execCalendario({ commit }, data) {
    commit(CALENDARIO, data);
  }
};
