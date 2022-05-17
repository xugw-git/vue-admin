import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NoteView from '../views/NoteView.vue'
import ArticleView from '../views/ArticleView.vue'
import CodeView from '../views/CodeView.vue'
import LinkView from '../views/LinkView.vue'

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
    path: '/article',
    name: 'article',
    component: ArticleView,
  },
  {
    path: '/code',
    name: 'code',
    component: CodeView
  },
  {
    path: '/link',
    name: 'link',
    component: LinkView
  },
]

const router = new VueRouter({
  routes
})

export default router
