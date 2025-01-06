<template>
  <div id="app">
    <div ref="scrollContainer">
      <LoadingScreen />
      <router-view/>
    </div>
    <CustomCursor
      :darkMode="this.$router.currentRoute.path==='/sub'"
      :targets="['.logo', '.work-list.en', '.work-list.kr', 'button', 'a']"
      :circleColor="'rgb(0 0 0 / 10%)'"
      :circleColorHover="'rgb(246 53 67 / 30%)'"
      :dotColor="'#f63543'"
      :dotColorHover="'#f63543'"
      :circleDarkColor="'rgb(255 255 255 / 10%)'"
      :circleDarkColorHover="'rgb(255 255 255 / 30%)'"
      :dotDarkColor="'#f63543'"
      :dotDarkColorHover="'skyblue'"
      :hoverSize="1.5"
      v-if="!isMobile"
    ></CustomCursor>
  </div>
</template>
<script>
import LoadingScreen from '@/components/common/LoadingScreen.vue';
import CustomCursor from '@/components/common/CustomCursor.vue';
export default {
  components: {
    LoadingScreen,
    CustomCursor
  },
  data() {
    return {
    };
  },
  watch: {
    '$route'() {
      // 라우트 변경 시 스크롤 위치 초기화
      if (this.$lenis.isActive()) {
        this.$lenis.scrollTo(0, { immediate: true })
      }
    }
  },
  mounted() {
    const container = this.$root.$refs.scrollContainer;
    this.$lenis.init(container);
  },
  beforeDestroy() {
    this.$lenis.destroy();
  },
  methods: {
  },
};
</script>
