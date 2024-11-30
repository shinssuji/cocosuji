import Vue from 'vue'
import App from './App.vue'
import router from './router'
import common from './assets/js/commonPlugin'
import AOS from 'aos';
import "aos/dist/aos.css";

// * Plugins


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted() {
    AOS.init({
      duration: 800, // 애니메이션 지속 시간
      offset: 120,    // 스크롤 시작 위치
      easing: 'ease-in-out', // 애니메이션 easing 옵션 추가
    });
  }
}).$mount('#app')

Vue.mixin({
  updated() {
    this.$nextTick(() => {
      AOS.refresh(); // DOM 업데이트 후 새로 고침
    });
  }
});

Vue.use(common);
