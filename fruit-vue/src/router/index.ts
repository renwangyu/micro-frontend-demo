import Vue from 'vue'
import Router from 'vue-router'

import DemoRoutes from './routes/demo'
import AppleRoutes from './routes/apple'
import BananaRoutes from './routes/banana'

Vue.use(Router)

const routes = [
  ...DemoRoutes,
  ...AppleRoutes,
  ...BananaRoutes,
  // {
  //   path: '/',
  //   name: 'Demo',
  //   component: () => import('@/pages/demo/index.vue')
  // }
]

export default new Router({
  mode: 'history',
  routes
})
