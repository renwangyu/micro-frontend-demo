import Bread from '@/pages/bread/index'
const breadRoutes = [{
  path: '/food/bread',
  name: 'Bread',
  component: Bread
  // component: () => import('@/pages/bread/index')
}, {
  path: '/food/',
  name: 'Home',
  component: Bread
}]

export default breadRoutes
