import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import router from './router'
import App from './App.vue'
import './utils/ajax'

Vue.config.productionTip = false

export default new Vue({
  el: '#kitchen',
  router,
  render: h => h(App)
})
