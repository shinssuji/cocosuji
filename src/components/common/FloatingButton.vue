<template>
  <div class="floating-btns" :class="[{'scr-down':scrollDir}, {'scr-up':!scrollDir}, {'is-hidden':scrollH<=199}]">
    <button type="button" class="btn-ico btn-blackline btn-top" aria-label="페이지 상단으로 가기" @click="goToTop">
        <span class="blind">페이지 상단으로 가기</span>
    </button>
    <template v-if="this.$router.currentRoute.path==='/main'">
        <button type="button" class="btn-ico btn-redline" aria-label="Github로 이동하기" @click="newWindow('https://github.com/shinssuji/cocosuji/tree/master')">Github</button>
    </template>

    <!-- 필요 시 버튼 추가 -->
    <slot name="add-buttons"></slot>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    scrollH: Number,
    scrollDir: Boolean
  },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  beforeDestroy() {
  },
  methods: {


  }
};
</script>
