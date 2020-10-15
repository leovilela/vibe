import Vue from 'vue'
import Vuex from 'vuex'
import busca from './utils/busca'
import calendario from './calendario/calendario'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    busca,
    calendario
  }
})
