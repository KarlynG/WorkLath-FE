import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hideNavbarAndFooter: true,
  },
  mutations: {
    hideNavbarAndFooter(state, hide) {
      state.hideNavbarAndFooter = hide;
    },
  },
  actions: {
  },
  modules: {
  }
})
