<template>
  <section id="wrap">
    <!-- #SKIP NAVIGATION -->
    <div id="skipNav">
      <!-- <a href="#workList">헤더 바로가기</a>
      <a href="#container">메인 컨텐츠 바로가기</a>
      <a href="#footer">푸터 바로가기</a> -->

      <button type="button" @click.prevent="scrollToElement('workList')">헤더 바로가기</button>
      <button type="button" @click.prevent="scrollToElement('container')">메인 컨텐츠 바로가기</button>
      <button type="button" @click.prevent="scrollToElement('footer')">푸터 바로가기</button>
    </div>

    <!-- #HEADER -->
    <Header :darkMode="darkMode" :scrollDir="scrollDir" />

    <!-- #CONTAINER -->
    <section id="container" ref="container">
      <transition name="routing-fade" appear>
        <router-view :scrollH="scrollH" />
      </transition>

      <FloatingButton
        :scrollDir="scrollDir"
        :scrollH="scrollH"
      />
    </section>
  </section>
</template>
<script>
import Header from "@/components/Header.vue";
import FloatingButton from "@/components/common/FloatingButton.vue";
export default {
  components: {
    Header,
    FloatingButton
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
    scrollToElement(elementId) {
      const ele = document.getElementById(elementId);
      if (ele) {
        ele.scrollIntoView({ behavior: 'smooth', block: 'start' });
        ele.focus();
      }
    }
  }
};
</script>