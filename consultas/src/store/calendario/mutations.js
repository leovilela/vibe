export const CALENDARIO = "CALENDARIO//UTILS";


export default {
  [CALENDARIO](state, payload) {
    state.calendario = payload.calendario;
  }
};
