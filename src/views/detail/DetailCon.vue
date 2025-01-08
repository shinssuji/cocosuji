<template>
  <section :class="['detail', {dark:darkMode}, work.sub.path]">
    <button type="button" aria-label="페이지 닫기" class="btn-ico btn-close" @click="goToPage('/sub')"></button>
    
    <!-- #WORK INTRO -->
    <section class="detail-intro">
      <div aria-hidden="true" class="obj"></div>
      <div class="txt">
        <h1>{{work.title}}</h1>
        <p>{{work.do}}</p>
      </div>
    </section>

    <!-- #WORK INFO -->
    <section class="detail-info animate-fadeUp">
      <div class="info-main">
        <strong class="info-tit">{{work.subtit}}</strong>
        <p class="info-txt">{{work.perform}}</p>
        <button type="button" class="btn btn-blackline btn-view" @click="newWindow(work.url)">View Project</button>
      </div>
      <ul class="info-skill">
        <li v-for="(data, i) in work.info" :key="i">
          <b>{{data.tit}}</b>
          <span class="text-strong">{{data.text}}</span>
        </li>
      </ul>
    </section>
    
    <!-- #WORK VISUAL -->
    <section class="detail-visual">
      <div class="">
        <img :src="`../images/${detailImg}.jpg`" v-for="(detailImg, i) in work.detailimages" :key="i">
      </div>
      <p class="copyright">ⓒ 2025 suji. all rights reserved.</p>
    </section>

    <div class="floating-btns is-show scr-up" v-if="work.code">
      <button type="button" class="btn-ico btn-black btn-code" aria-label="Code 보기" @click="newWindow(work.code)">View Code</button>
    </div>
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
    }
  },
  watch: {
  },
  destroyed() {
  },
  mounted() {
    this.$nextTick(() => {
      this.commonAnimate();
    })
  },
  methods: {
    commonAnimate() {
      // fade up GSAP
      this.$gsap.utils.toArray(".animate-fadeUp").forEach((ele) => {
        this.$gsap.from(ele, {
          y: 100,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ele,
            start: 'top 50%',
          },
        });
      });
      //
    }
  }
};
</script>