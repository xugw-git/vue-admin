import Vue from 'vue'
import Vuex from 'vuex'
import SiderbarCollapse from './SiderbarCollapse.js'
import TagbarDisplay from './TagbarDisplay.js'
import UserToken from './UserToken.js'
import DialogMark from './CheckviewDialog.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    SiderbarCollapse,
    TagbarDisplay,
    UserToken,
    DialogMark
  }
})
