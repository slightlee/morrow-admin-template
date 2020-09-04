import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/iconfont/iconfont.css'

import apis from './http/index'
import i18n from './i18n'

Vue.config.productionTip = false  // 设置 false 以阻止 vue 在启动时生成生产提示

Vue.use(ElementUI)
Vue.use(apis)


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
