import Vue from 'vue'
import VueRouter from 'vue-router'
import Question from '../views/Question.vue'
import Classify from '../views/Classify.vue'
import Action from '../views/Action.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/question',
    name: 'Question',
    component: Question
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify
  },
  {
    path: '/action',
    name: 'Action',
    component: Action
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 异步组件
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
