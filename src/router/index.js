import Vue from 'vue'
import VueRouter from 'vue-router'
import basicRouter from './modules/basicRouter'
import workRouter from './modules/workRouter'
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [basicRouter, workRouter],
  scrollBehavior(to, from, savedPosition) {
    // 저장된 스크롤 위치가 있다면 해당 위치로 이동
    if (savedPosition) {
      return savedPosition;
    }

    // 스크롤을 즉시 맨 위로 이동
    window.scrollTo(0, 0);

    // Vue Router의 기본 스크롤 동작 방지
    return false;
  },
});

router.afterEach(() => {
  AOS.refresh(); // 페이지 전환 후 AOS 갱신
});

const mixins = {
  install(Vue) {
      // 글로벌 믹스인
      Vue.mixin({
          data() {
              return {
                isMobile: false, // 모바일 디바이스 상태 저장
              };
          },
          computed: {
          },
          watch: {
            isMobile(newVal) {
              if (newVal) {
                console.log("모바일 디바이스 감지");
              } else {
                console.log("데스크톱 디바이스 감지");
              }
            },
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
               * * 모바일 디바이스 감지
               */
              checkIfMobile() {
                const userAgent = navigator.userAgent || navigator.vendor || window.opera;

                // 모바일 디바이스를 확인하는 정규식
                this.isMobile = /android|iphone|ipad|ipod|blackberry|windows phone|opera mini|iemobile|mobile/i.test(userAgent);
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
