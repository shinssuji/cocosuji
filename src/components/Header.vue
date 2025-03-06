<template>
  <header id="workList" :class="[{dark:darkMode}, {'scr-down':scrollDir}, {'scr-up':!scrollDir&&scrollDir!=null}]">
    <div
      role="button"
      class="logo"
      aria-label="Publisher Shinsuji"
      @click="goToPage('main')"
    >
      <h1><span class="blind">Publisher Shinsuji</span></h1>
    </div>
    <button type="button" 
      class="btn-ico btn-menu"
      aria-label="작업물 리스트 전체"
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