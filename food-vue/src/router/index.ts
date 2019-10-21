import Vue from 'vue'
import Router from 'vue-router'

// import DemoRoutes from './routes/demo'
import BreadRoutes from './routes/bread'
import CakeRoutes from './routes/cake'
// import Bread from '@/pages/bread/index'

Vue.use(Router)

const routes = [
  // ...DemoRoutes,
  ...BreadRoutes,
  ...CakeRoutes,
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
