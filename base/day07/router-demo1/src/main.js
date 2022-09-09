import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'
import router from '@/router'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
// 全局设置的axios的请求根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
