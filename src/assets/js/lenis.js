import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const lenisPlugin = {
  install(Vue) {
    let lenis = null
    let isScrolling = false
    // let rafId = null

    Vue.prototype.$lenis = {
      init(container) {
        // 모바일 lenis 초기화 안함
        if (Vue.prototype.$store.isMobile) {
          return null;
        }

        if (lenis) this.destroy()

        // lenis 초기화
        lenis = new Lenis({
          wrapper: container,
          content: container,
          lerp: 0.1,          
          smooth: true,
          duration: 2,
          orientation: 'vertical',
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        })


        // 스크롤 이벤트 GSAP ScrollTrigger 연동
        lenis.on('scroll', () => {
          if (!isScrolling) {
            ScrollTrigger.update()
          }
        })

        // GSAP Lenis 연동
        gsap.ticker.add((time) => {
          if (lenis) {
            lenis.raf(time * 1000)
          }
        })
        gsap.ticker.lagSmoothing(0)
        // const animate = (time) => {
        //   if (lenis) {
        //     lenis.raf(time * 1000)
        //   }
        // }

        // gsap.ticker.add(animate);
        // gsap.ticker.lagSmoothing(0);


        // 리사이징
        window.addEventListener('resize', () => {
          if (lenis) {
            lenis.resize()
            ScrollTrigger.refresh()
          }
        })
        // const handleResize = debounce(() => {
        //   if (lenis) {
        //     lenis.resize()
        //     ScrollTrigger.refresh()
        //   }
        // }, 250)

        // window.addEventListener('resize', handleResize);

        return lenis;

      },

      scrollTo(target, options = {}) {
        // 모바일
        if (!lenis) {
          window.scrollTo({
            top: typeof target === 'number' ? target : 0,
            behavior: 'smooth'
          });
          if (options.onComplete) {
            setTimeout(options.onComplete, options.duration || 0);
          }
          return;
        }

        // PC
        isScrolling = true;
        lenis.scrollTo(target, {
          offset: 0,
          duration: 2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          ...options,
          onComplete: () => {
            isScrolling = false;
            if (options.onComplete) options.onComplete();
          }
        });
        // isScrolling = true;
        // const defaultOptions = {
        //   offset: 0,
        //   duration: 2,
        //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        //   immediate: false,
        //   onComplete: () => {
        //     isScrolling = false
        //   }
        // };

        // lenis.scrollTo(target, { 
        //   ...defaultOptions, 
        //   ...options,
        //   onComplete: () => {
        //     isScrolling = false
        //     if (options.onComplete) options.onComplete()
        //   }
        // });
      },

      update() {
        if (!lenis) return
        lenis.resize()
        ScrollTrigger.refresh()
        // if (!lenis) return

        // isScrolling = true
        // lenis.resize()
        // ScrollTrigger.refresh()
        
        // // RAF를 사용하여 다음 프레임에서 업데이트
        // requestAnimationFrame(() => {
        //   lenis.raf(performance.now())
        //   isScrolling = false
        // })
      },

      destroy() {
        if (!lenis) return;

        // GSAP ticker 정리
        gsap.ticker.remove((time) => {
          lenis.raf(time * 1000)
        })

        // ScrollTrigger 정리
        ScrollTrigger.getAll().forEach(st => st.kill());
        // Lenis 인스턴스 정리
        lenis.destroy();
        lenis = null;
        isScrolling = false;
      },

      isActive() {
        return !!lenis
      }
    }
  }
}


