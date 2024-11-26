import Vue from 'vue'
import App from './App.vue'
import router from './router'
import common from './assets/js/commonPlugin'

// * Plugins


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(common);
