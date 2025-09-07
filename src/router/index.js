import Vue from 'vue'
import VueRouter from 'vue-router'
import basicRouter from './modules/basicRouter'
import workRouter from './modules/workRouter'
import { EventBus } from '@/assets/js/eventBus';
import debounce from '@/assets/js/debounce';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [basicRouter, workRouter],
  scrollBehavior() {
    return { x: 0, y: 0 } // 최상단 위치 반환
  },
});

export const store = Vue.observable({
  introVisible: false, // 인트로 화면 상태
  isMobile: false // 모바일 디바이스 상태
})

router.beforeEach((to, from, next) => {
  /**
   * loading
   */
  // const skipLoading = from.path.includes('detail') && to.name === 'sub';
  const skipLoading = from.name != 'main' && to.name != 'main';

  if (!skipLoading) {
    EventBus.$emit('toggle-loading', to);
    EventBus.$once('animation-complete', (nextRoute) => {
      if (nextRoute.fullPath === to.fullPath) {
        next()
      }
    });
  } else {
    next();
  }

  
  /**
   * main intro
   */
  // 메인페이지 처음 진입 시 introVisible = true
  if (to.name === 'main' && (!from || !from.name)) {
    store.introVisible = true;
  } else {
    store.introVisible = false;
  }
  next();


  /**
   * scroll top 0
   */
  // 라우터 변경 전에 스크롤 위치 초기화
  const app = router.app;
  if (app && app.$lenis && app.$lenis.isActive()) {
    app.$lenis.scrollTo(0, {
      duration: 0,
      immediate: true,
      onComplete: () => next()
    })
  } else {
    window.scrollTo(0, 0);
    next()
  }

});

router.afterEach((to) => {
  /**
   * title setting
   */
  document.title = to.meta.title || 'Portfolio of suji'
  /**
   * lenis
   */
  Vue.nextTick(() => {
    const app = router.app
    if (app && app.$lenis && app.$lenis.isActive()) {
      // 지연을 주어 DOM 업데이트
      setTimeout(() => {
        app.$lenis.update()
      }, 100)
    }
  })
});

const mixins = {
  install(Vue) {
    // store를 Vue 인스턴스에 전역으로 추가
    Vue.prototype.$store = store

    // 글로벌 믹스인
    Vue.mixin({
      data() {
        return {
          // isMobile: false, // 모바일 디바이스 상태 저장
        };
      },
      computed: {
        isMobile() {
          return store.isMobile;
        }
      },
      // watch: {
      //   isMobile(state) {
      //     console.log('isMobile 상태 변경:', state);
      //   },
      // },
      created() {
      },
      mounted() {
        this.setScreenHeight();
        this.checkIfMobile();

        this.debouncedCheck = debounce(this.checkIfMobile, 250);
        window.addEventListener('resize', this.debouncedCheck);

        this.debouncedSetHeight = debounce(this.setScreenHeight, 250);
        window.addEventListener('resize', this.debouncedSetHeight);
      },
      beforeDestroy() {
        window.addEventListener('resize', this.debouncedCheck);
        window.removeEventListener('resize', this.debouncedSetHeight);
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
         * 공용: 상단으로 이동
         */
        goToTop() {
          // lenis 사용 시 scrollTo 사용 지양
          // window.scrollTo({top: 0, behavior: 'smooth'}); 
          this.$lenis.scrollTo(0, {
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          })
        },
        /**
         * * 모바일 디바이스 감지
         */
        checkIfMobile() {
          const userAgent = navigator.userAgent || navigator.vendor || window.opera;

          // 모바일 디바이스를 확인하는 정규식
          store.isMobile = /android|iphone|ipad|ipod|blackberry|windows phone|opera mini|iemobile|mobile/i.test(userAgent);
        },
        /**
         * 공용: vh 세팅
         * 모바일 브라우저 높이 인식 이슈
         */
        // setScreenHeight() {
        //   const vh = window.innerHeight * 0.01;
        //   document.documentElement.style.setProperty('--vh', `${vh}px`);
        // },
        setScreenHeight() {
          // 이전 높이 저장 (처음에는 undefined)
          const prevHeight = this.prevHeight || 0;
          const currentHeight = window.innerHeight;
          
          // 높이 변화가 일정 이상일 때만 업데이트
          if (Math.abs(currentHeight - prevHeight) > 100) {
            const vh = currentHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            this.prevHeight = currentHeight;
          }
        },
        /**
         * 바디 스크롤 제어 
         */
        disableScroll() {
          document.body.style.overflow = "hidden";
        },
        enableScroll() {
          document.body.style.overflow = "";
        }
      }
    });
  }
};


Vue.use({ ...mixins });

export default router
