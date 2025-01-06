import Vue from 'vue'
import App from './App.vue'
import router from './router'
import common from './assets/js/commonPlugin'


// * Plugins
// * Lenis Import
import { lenisPlugin } from './assets/js/lenis'
// * GSAP Import
import { gsapPlugin } from './assets/js/gsap'


Vue.config.productionTip = false

Vue.use(lenisPlugin)
Vue.use(gsapPlugin)

// * GSAP Plugin Registration
// gsap.registerPlugin(ScrollTrigger);

// Register GSAP globally
// Vue.prototype.$gsap = gsap;
// Vue.prototype.$ScrollTrigger = ScrollTrigger;


new Vue({
  router,
  render: h => h(App),
  mounted() {

  }
}).$mount('#app')

Vue.mixin({
  updated() {
    
  }
});

Vue.use(common);

