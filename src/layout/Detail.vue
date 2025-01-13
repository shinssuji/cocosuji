<template>
  <section id="wrap">
    <section id="container">
      <transition name="routing-fade" appear>
        <router-view :work="work" :darkMode="darkMode" :scrollH="scrollH" :scrollDir="scrollDir" />
      </transition>
    </section>
  </section>
</template>
<script>
import { workContent } from '@/data/workData.js';
export default {
  components: {
    // CustomCursor
  },
  data() {
    return {
      workContent,
      name: this.$router.currentRoute.name,
      work: null,
      darkMode: false,
      scrollH: 0,
      lastScrollH: null,
      scrollDir: null,
    }
  },
  watch: {
    '$route': {
      handler() {
        // 라우트가 변경될 때마다 work 데이터 업데이트
        this.workHandle();
      },
      immediate: true  // 컴포넌트 생성 시에도 실행
    }
  },
  created() {},
  mounted() {
    this.workHandle();
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    workHandle() {
      if (this.name) {
        this.work = workContent[this.name];
        this.darkMode = this.work.dark;
      }
    },
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