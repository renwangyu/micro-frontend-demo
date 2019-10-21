import axios from 'axios'
import Vue from 'vue'

const CancelToken: {source: any} = axios.CancelToken;

if (!Vue.prototype.$ajax) {
  axios.defaults.timeout = 10 * 1000;
  // todo interceptors

  const methods: Array<string> = ['get', 'head', 'options', 'post', 'put', 'patch'];
  methods.forEach((method: string) => {
    axios[method] = function (url: string, config: any = {}) {
      let data: object
      let defer: any
      let source: any = CancelToken.source()
      let cancel = function () {
        source.cancel({ config })
      }

      if ('post|put|patch'.indexOf(method) !== -1) {
        data = config;
        config = arguments[2] || {};
      }

      config.method = method
      config.url = url
      config.data = data
      config.headers = { 'X-Requested-With': 'XMLHttpRequest' }
      config.cancelToken = source.token
      // @ts-ignore
      defer = axios.request(config)
      defer.cancel = cancel
      return defer

    }
  })
  Vue.prototype.$ajax = axios
}

export default Vue.prototype.$ajax
