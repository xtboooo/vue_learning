import Vue from 'vue'
import App from './App.vue'
// 导入需要被全局注册的组件
import Count from "@/components/Count.vue"
Vue.component("MyCount", Count)

Vue.config.productionTip = false

// 定义全局自定义指令

Vue.directive("color",
  (el, binding) => {
    el.style.color = binding.value
  }
)
new Vue({
  render: h => h(App),
}).$mount('#app')
