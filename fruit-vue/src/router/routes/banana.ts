import Banana from '@/pages/banana/index'

const bananaRoutes = [{
  path: '/fruit/banana',
  name: 'Banana',
  component: Banana
  // component: () => import('@/pages/banana/index')
}]

export default bananaRoutes
