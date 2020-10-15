import Vue from 'vue'
import Vuex from 'vuex'
import busca from './utils/busca'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    busca
  }
})
