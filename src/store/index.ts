import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hideNavbarAndFooter: true,
    isLoggedIn: false,
    username: ''
  },
  mutations: {
    hideNavbarAndFooter(state, hide) {
      state.hideNavbarAndFooter = hide;
    },
    isLoggedIn(state, hide){
      state.isLoggedIn = hide;
    },
    username(state, user) {
      state.username = user;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
});
