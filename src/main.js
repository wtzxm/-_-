import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

import router from './router';
import store from './store'
import http from './http'
Vue.config.productionTip = false
Vue.prototype.$http = http
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
