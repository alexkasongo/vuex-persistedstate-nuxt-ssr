export const state = () => ({
  persistedState: null,
  alert: false,
})

export const getters = {}

export const actions = {
  switchPersistanceState({ commit }, payload) {
    commit('SET_STATE', payload)
    commit('SET_ALERT', true)
  },
}

export const mutations = {
  SET_STATE(state, payload) {
    state.persistedState = payload
  },
  SET_ALERT(state, payload) {
    state.alert = payload
  },
}
