import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './utils/ajax'

Vue.config.productionTip = false

export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
