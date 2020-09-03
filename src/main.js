import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/theme/theme-409eff/index.css'

import apis from './http/index'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(apis)


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
