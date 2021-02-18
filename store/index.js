export const state = () => ({
  persistedState: null,
  alertState: false,
})

export const getters = {}

export const actions = {
  switchPersistanceState({ commit }, payload) {
    commit('SET_STATE', payload)
    commit('SET_ALERT', true)
    if (payload === null) {
      commit('SET_ALERT', false)
    }
  },
}

export const mutations = {
  SET_STATE(state, payload) {
    state.persistedState = payload
  },
  SET_ALERT(state, payload) {
    state.alertState = payload
  },
}
