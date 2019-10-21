import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import router from './router'
import App from './App.vue'
import './utils/ajax'

Vue.config.productionTip = false

// @ts-ignore
__webpack_public_path__ = window.getPublicPath && window.getPublicPath('food') // tslint:disable-line

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    // el: '#food',
    render: (h) => {
      return h(App)
    },
    router,
  },
});

export const bootstrap = [vueLifecycles.bootstrap];
export const mount = [vueLifecycles.mount];
export const unmount = [vueLifecycles.unmount];