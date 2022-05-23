import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import NoteView from '../views/NoteView.vue'
import CheckView from '../views/CheckView.vue'
import CommonChart from '../views/CommonChart.vue'
import BarRace from '../views/BarRace.vue'
import DataExport from '../views/DataExport.vue'
import ExcelUpload from '../views/ExcelUpload.vue'
import LoginView from '../views/LoginView.vue'
import Page404 from '../views/Page404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/note',
    name: 'note',
    component: NoteView
  },
  {
    path: '/check',
    name: 'check',
    component: CheckView
  },
  {
    path: '/charts/common',
    name: 'common',
    component: CommonChart
  },
  {
    path: '/charts/barrace',
    name: 'barrace',
    component: BarRace
  },
  {
    path: '/function/export',
    name: 'export',
    component: DataExport
  },
  {
    path: '/function/upload',
    name: 'upload',
    component: ExcelUpload
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/404',
    component: Page404
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('GetToken')
  let token = store.state.UserToken.token
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'home' })
  } else {
    next()
  }
})


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
