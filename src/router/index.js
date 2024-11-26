import Vue from 'vue'
import VueRouter from 'vue-router'
import basicRouter from './modules/basicRouter'
import workRouter from './modules/workRouter'

Vue.use(VueRouter)
/*
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]
*/
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [basicRouter, workRouter],
});

const mixins = {
  install(Vue) {
      // 글로벌 믹스인
      Vue.mixin({
          data() {
              return {
              };
          },
          computed: {
          },
          watch: {
          },
          created() {
          },
          mounted() {
            this.setScreenHeight();
            window.addEventListener('resize', this.setScreenHeight);  
          },
          beforeDestroy() {
            window.removeEventListener('resize', this.setScreenHeight);
          },
          methods: {
              /**
               * * 공용: 페이지 이동
               *
               * @param {String} path:
               * @param {Obeject} path:
               *
               */
              goToPage(path, query) {
                  this.$router.push({ path, query }).catch(() => {});
              },
              /**
               * * 공용: 페이지 뒤로가기(-1)
               *
               */
              goBack() {
                  this.$router.go(-1);
              },
              /**
               * * 공용: 새창
               *
               * @param {String} path : URL
               * @param {String} target : window target
               * @param {String} features : window options...
               *
               */
              newWindow(path, target, features) {
                  window.open(path, target, features ? features : '');
              },

              /**
               * 공용: vh 세팅
               * 모바일 브라우저 높이 인식 이슈
               */
              setScreenHeight() {
                const vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
              }
          }
      });
  }
};


Vue.use({ ...mixins });

export default router
