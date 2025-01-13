import Vue from 'vue';
import App from './App.vue';
import router from './router';
import common from './assets/js/commonPlugin';
import { EventBus } from '@/assets/js/eventBus';

// * Plugins
// * Lenis Import
import { lenisPlugin } from './assets/js/lenis';
// * GSAP Import
import { gsapPlugin } from './assets/js/gsap';

Vue.config.productionTip = false;
Vue.prototype.$EventBus = EventBus;

Vue.use(lenisPlugin);
Vue.use(gsapPlugin);
Vue.use(common);

new Vue({
    router,
    render: (h) => h(App),
    mounted() {}
}).$mount('#app');

Vue.mixin({
    updated() {}
});
