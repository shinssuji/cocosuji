// import Vue from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger)

export const gsapPlugin = {
    install(Vue) {
        // let gsap = null // 전역 변수로 인스턴스 관리
        // let ScrollTrigger = null
        // Vue 인스턴스에 $gsap 추가
        Vue.prototype.$gsap = gsap
        Vue.prototype.$ScrollTrigger = ScrollTrigger
    }
}