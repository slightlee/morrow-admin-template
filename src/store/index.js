import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import NavStore from './modules/NavStore.js';


export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
  },
  modules: {
    nav_store: NavStore
  }
})
