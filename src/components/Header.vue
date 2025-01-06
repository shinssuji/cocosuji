<template>
  <header id="workList" :class="[{dark:darkMode}, {'scr-down':scrollDir}, {'scr-up':!scrollDir&&scrollDir!=null}]">
    <div class="logo" @click="goToPage('main')"><span class="blind">J.</span></div>
    <button type="button" 
      id="workList" class="btn-ico btn-menu" aria-label="작업물 리스트 전체"
      @click="goToPage('sub')"
      v-if="!(this.$router.currentRoute.path === '/sub')">
      <span class="blind">작업물 리스트 전체</span>
    </button>
  </header>
</template>
<script>
export default {
  props: {
    darkMode: {
      Type: Boolean
    },
    scrollDir: {
      Type: Boolean
    }
  },
  data() {
    return {
    }
  },
  watch: {
  },
  destroyed() {
  },
  mounted() {
  },
  methods: {
  }
};
</script>