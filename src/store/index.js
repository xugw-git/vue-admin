import Vue from 'vue'
import Vuex from 'vuex'
import HandleCollapse from './sidebar.js'
import HandleTag from './tagbar.js'
import UserToken from './user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    HandleCollapse,
    HandleTag,
    UserToken
  }
})
