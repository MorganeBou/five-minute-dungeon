import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentPlayerTest: {},
        gameTest: {}


    },




    mutations: {
        SET_CURRENT_PLAYER(state, payload) {
            state.currentPlayerTest = payload
        },
        SET_GAME(state, payload) {
            state.gameTest = payload
        }
    },
    actions: {},
    modules: {}
})
