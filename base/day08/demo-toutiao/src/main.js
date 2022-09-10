import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
// 定制主题, 需要导入.less
import 'vant/lib/index.less'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
