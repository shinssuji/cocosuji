<template>
  <section id="wrap">
    <!-- skip navigation
    <div id="skip-nav">
      <a href="#workList">작업물 리스트 바로가기</a>
      <a href="#container">메인 컨텐츠 바로가기</a>
    </div>
    -->
    <section id="container">
      <transition name="routing-fade" appear>
        <router-view :work="work" :darkMode="darkMode" />
      </transition>
    </section>

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
import CustomCursor from '@/components/common/CustomCursor.vue';
import { workContent } from '@/data/workData.js';
export default {
  components: {
    CustomCursor
  },
  data() {
    return {
      workContent,
      name: this.$router.currentRoute.name,
      work: '',
      darkMode: ''
    }
  },
  watch: {
    $route() {
      // this.darkMode = this.$router.currentRoute.path === '/sub';
    }
  },
  created() {},
  mounted() {
    this.workHandle();
  },
  destroyed() {
    
  },
  methods: {
    workHandle() {
      this.work = workContent[this.name];
      this.darkMode = this.work.dark;
    }
  }
};
</script>