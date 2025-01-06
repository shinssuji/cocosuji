<template>
  <section id="wrap">
    <!-- #SKIP NAVIGATION -->
    <div id="skipNav">
      <a href="#workList">작업물 리스트 바로가기</a>
      <a href="#container">메인 컨텐츠 바로가기</a>
      <a href="#footer">푸터 바로가기</a>
    </div>

    <!-- #HEADER -->
    <Header :darkMode="darkMode" :scrollDir="scrollDir" />

    <!-- #CONTAINER -->
    <section id="container" ref="container">
      <transition name="routing-fade" appear>
        <router-view :scrollH="scrollH" />
      </transition>

      <div class="floating-btns is-show" :class="[{'scr-down':scrollDir}, {'scr-up':!scrollDir}, {'hide':scrollH<=199}]">
        <button type="button" class="btn-ico btn-top" aria-label="페이지 상단으로 가기" @click="goToTop">
          <span class="blind">페이지 상단으로 가기</span>
        </button>
        <template v-if="this.$router.currentRoute.path==='/main'">
          <button type="button" class="btn-ico btn-redline" aria-label="Github로 이동하기" @click="newWindow('https://github.com/shinssuji/cocosuji/tree/master')">Github</button>
        </template>
      </div>
    </section>
  </section>
</template>
<script>
import Header from "@/components/Header.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 등록
export default {
  components: {
    Header,
  },
  data() {
    return {
      scrollH: 0,
      lastScrollH: null,
      scrollDir: null,
      darkMode: this.$router.currentRoute.path === '/sub'
    }
  },
  watch: {
    $route() {
      this.darkMode = this.$router.currentRoute.path === '/sub';
    }
  },
  created() {},
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollH = window.scrollY;

      if(this.scrollH > 0) {
        this.scrollDir = this.scrollH > this.lastScrollH;
      } else {
        this.scrollDir = null;
      }

      this.lastScrollH = this.scrollH;
    },
  }
};
</script>