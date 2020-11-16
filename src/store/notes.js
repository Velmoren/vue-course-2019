export default {
    state: {
        notes: [
            {
                title: 'First Note',
                imp: '0',
                descr: 'Description for first note',
                date: new Date(Date.now()).toLocaleString()
            },
            {
                title: 'Second Note',
                imp: '0',
                descr: 'Description for second note',
                date: new Date(Date.now()).toLocaleString()
            },
            {
                title: 'Third Note',
                imp: '0',
                descr: 'Description for third note',
                date: new Date(Date.now()).toLocaleString()
            }
        ]
    },
    mutations: {
        setNote(state, payload) {
            state.notes.push(payload)
        },
        removeNote(state, payload) {
            state.notes.splice(payload.index, 1)
        }
    },
    actions: {
        setNote({commit}, payload) {
            commit('setNote', payload)
        },
        removeNote({commit}, payload) {
            commit('removeNote', payload)
        }
    },
    getters: {
        getNotes(state) {
            return state.notes
        }
    }
}