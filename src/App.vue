<template>
  <div id="app">
    <div ref="scrollContainer">
      <LoadingScreen />
      <router-view/>
    </div>
    <CustomCursor
      :darkMode="this.$router.currentRoute.path==='/sub'"
      :hoverTargets="['.logo', '.work-list.en', '.work-list.kr', 'button', 'a']"
      v-if="!isMobile"
    />
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
  computed: {
    isMobile() {
      return this.$store.isMobile;
    }
  },
  watch: {
    '$route': {
      handler() {
        this.$nextTick(() => {
          if (this.isMobile) {
            window.scrollTo({
              top: 0,
              behavior: 'auto'
            });
          } else if (this.$lenis && this.$lenis.isActive()) {
            this.$lenis.scrollTo(0, {
              immediate: true,
              onComplete: () => {
                this.$lenis.update()
              }
            })
          }
        })
      },
      immediate: true,
    }
  },
  mounted() {
    if (!this.isMobile) {
      const container = this.$root.$refs.scrollContainer;
      this.$lenis.init(container);
    }
  },
  beforeDestroy() {
    this.$lenis.destroy();
  },
  methods: {
  },
};
</script>
