import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index.vue'

// import DemoRoutes from './routes/demo'
Vue.use(Router)
const routes = [
  // ...DemoRoutes,
  {
    path: '/*',
    name: 'Home',
    component: Home
    // component: () => import('@/pages/home/index.vue')
  }
]

export default new Router({
  mode: 'history',
  routes
})
