import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentPlayer: {},
        game: {}


    },




    mutations: {
        SET_CURRENT_PLAYER(state, payload) {
            state.currentPlayer = payload
        },
        SET_GAME(state, payload) {
            state.game = payload
        },
        DECREASE_TIMER(state) {
            state.game.timer = state.game.timer -1
        }
    },
    actions: {},
    modules: {}
})
