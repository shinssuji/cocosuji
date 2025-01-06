import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const lenisPlugin = {
  install(Vue) {
    let lenis = null
    // let rafId = null

    Vue.prototype.$lenis = {
      init(container) {
        if (lenis) this.destroy()

        lenis = new Lenis({
          wrapper: container,
          content: container,
          lerp: 0.1,          
          smooth: true,
          duration: 2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          smoothTouch: false,  // 모바일에서 네이티브 스크롤 동작 유지
        })


        // Lenis 스크롤 이벤트와 GSAP ScrollTrigger 연동
        lenis.on('scroll', ScrollTrigger.update)

        // GSAP ticker와 Lenis 연동
        const animate = (time) => {
          if (lenis) {
            lenis.raf(time * 1000)
          }
        }

        gsap.ticker.add(animate);
        gsap.ticker.lagSmoothing(0);


        // 윈도우 리사이즈 대응
        // const handleResize = () => {
        //   if (lenis) {
        //     lenis.resize()
        //     ScrollTrigger.refresh()
        //   }
        // }
        // window.addEventListener('resize', handleResize)
        window.addEventListener('resize', () => {
          if (lenis) {
            lenis.resize()
            ScrollTrigger.refresh()
          }
        })

        // 뒤로가기/앞으로가기 대응
        // window.addEventListener('popstate', () => {
        //   if (lenis) {
        //     lenis.scrollTo(0, { immediate: true })
        //   }
        // })
        window.addEventListener('popstate', () => {
          if (lenis) {
            lenis.scrollTo(0, { immediate: true })
          }
        })

      },

      scrollTo(target, options = {}) {
        const defaultOptions = {
          offset: 0,
          duration: 2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          immediate: false
        }

        lenis.scrollTo(target, { ...defaultOptions, ...options })
      },
      
      update() {
        if (lenis) {
          lenis.resize()
          ScrollTrigger.refresh()
          requestAnimationFrame(() => {
            lenis.raf(performance.now())
          })
        }
      },

      destroy() {
        if (lenis) {
          // GSAP ticker 정리
          gsap.ticker.remove((time) => {
            lenis.raf(time * 1000)
          })

          // ScrollTrigger 정리
          ScrollTrigger.getAll().forEach(st => st.kill())
          // Lenis 인스턴스 정리
          lenis.destroy()
          lenis = null
        }
      },

      isActive() {
        return !!lenis
      }
    }
  }
}


