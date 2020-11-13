import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: 'Hello vuex!'
    },
    mutations: {
        setMessage(state, payload) {
            state.message = payload.mes
        }
    },
    actions: {
        setMessage({commit}) {
            let mes = 'Hello again!'
            commit('setMessage', {mes})
        }
    },
    getters: {
        getMessage(state) {
            return state.message
        }
    },
})
