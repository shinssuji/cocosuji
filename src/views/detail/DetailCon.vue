<template>
  <section :class="['detail', {dark:darkMode}, work.sub.path]">
    <!-- <button type="button" aria-label="페이지 닫기" class="btn-ico btn-close" @click="goBack"></button> -->
    <button type="button" aria-label="페이지 닫기" class="btn-ico btn-close" @click="goToPage('/sub')"></button>
    
    <!-- WORK INTRO -->
    <section class="detail-intro">
      <div class="obj"></div>
      <div class="txt">
        <h1>{{work.title}}</h1>
        <p>{{work.do}}</p>
      </div>
    </section>

    <!-- WORK INFO -->
    <section class="detail-info">
      <div class="info-main" data-aos="fade-right">
        <strong class="info-tit">{{work.subtit}}</strong>
        <p class="info-txt">{{work.perform}}</p>
        <button type="button" class="btn btn-black btn-view" @click="newWindow(work.url)">View Project</button>
      </div>
      <ul class="info-skill" data-aos="fade-left">
        <li v-for="(data, i) in work.info" :key="i">
          <b>{{data.tit}}</b>
          <span>{{data.text}}</span>
        </li>
      </ul>
    </section>
    
    <!-- WORK VISUAL -->
    <section class="detail-visual">
      <div class="web">
        <img :src="`../images/${detailImg}_w.png`" v-for="(detailImg, i) in work.webimg" :key="i">
      </div>

      <div class="mobile">

      </div>

      <p class="copyright">ⓒ 2024 suji. all rights reserved.</p>
    </section>
  </section>
</template>
<script>
export default {
  props: {
    work: {
      Type: Array
    },
    darkMode: {
      Type: Boolean
    }
  },
  data() {
    return {
      // works
    }
  },
  watch: {
    // scrollH: {
    //     deep: true,
    //     handler() {
    //     }
    // }
  },
  destroyed() {
  },
  mounted() {
  },
  methods: {
  }
};
</script>