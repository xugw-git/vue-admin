import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import NoteView from '../views/NoteView.vue'
import CheckView from '../views/CheckView.vue'
import ExportExcel from '../views/ExportExcel.vue'
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
    path: '/tool/excel',
    name: 'excel',
    component: ExportExcel
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
