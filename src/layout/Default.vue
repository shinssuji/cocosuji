<template>
  <section id="wrap">
    <!-- skip navigation
    <div id="skip-nav">
      <a href="#workList">작업물 리스트 바로가기</a>
      <a href="#container">메인 컨텐츠 바로가기</a>
    </div>
    -->
    <Header :darkMode="darkMode" :scrollDir="scrollDir" />
    <section id="container" ref="container">
      <transition name="routing-fade">
        <router-view :scrollH="scrollH" />
      </transition>

      <div class="floating-btns is-show" :class="[{'scr-down':scrollDir}, {'scr-up':!scrollDir}, {'hide':scrollH<=199}]">
        <button type="button" class="btn-ico btn-top" aria-label="페이지 상단으로 가기" @click="goToTop">
          <span class="blind">페이지 상단으로 가기</span>
        </button>
      </div>
    </section>
    <Footer v-if="!(this.$router.currentRoute.path==='/sub')" />

    <CustomCursor
      :darkMode="darkMode"
      :targets="['logo', 'work-list en', 'work-list kr', 'button', 'a']"
      :circleColor="'rgb(0 0 0 / 10%)'"
      :circleColorHover="'rgb(246 53 67 / 30%)'"
      :dotColor="'#f63543'"
      :dotColorHover="'#f63543'"
      :circleDarkColor="'rgb(255 255 255 / 10%)'"
      :circleDarkColorHover="'rgb(255 255 255 / 30%)'"
      :dotDarkColor="'#f63543'"
      :dotDarkColorHover="'skyblue'"
      :hoverSize="1.5"
    ></CustomCursor>
  </section>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import CustomCursor from '@/components/common/CustomCursor.vue';
export default {
  components: {
    Header,
    Footer,
    CustomCursor
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

      this.scrollDir = this.scrollH > this.lastScrollH;
      this.lastScrollH = this.scrollH;
    },

    goToTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }
};
</script>