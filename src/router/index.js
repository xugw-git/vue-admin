import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import NoteView from '../views/NoteView.vue'
import ArticleList from '../views/ArticleList.vue'
import ArticleCreate from '../views/ArticleCreate.vue'
import CheckView from '../views/CheckView.vue'
import LoginView from '../views/LoginView.vue'

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
    path: '/article/list',
    name: 'list',
    component: ArticleList,
  },
  {
    path: '/article/create',
    name: 'create',
    component: ArticleCreate,
  },
  {
    path: '/check',
    name: 'check',
    component: CheckView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
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

export default router
