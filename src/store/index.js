import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPlayerTest: {}
  },


  mutations: {
    SET_CURRENT_PLAYER(state, trucmuche){
      state.currentPlayerTest = trucmuche
    }
  },
  actions: {
  },
  modules: {
  }
})
