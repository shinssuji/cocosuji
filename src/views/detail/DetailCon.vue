<template>
  <section :class="['detail', {dark:darkMode}, work.sub.path, {'has-code':work.code}]">
    <button type="button" aria-label="페이지 닫기" class="btn-ico btn-close" @click="goToPage('/sub')"></button>
    
    <!-- #WORK INTRO -->
    <section class="detail-intro">
      <div aria-hidden="true" class="intro-thumb" ref="thumbnail"></div>
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
      <img loading="lazy" :src="`../images/${detailImg}.jpg`" v-for="(detailImg, i) in work.detailimages" :key="i">
      <p class="copyright">ⓒ 2025 suji. all rights reserved.</p>
    </section>

    <FloatingButton :scrollDir="scrollDir" :scrollH="scrollH">
      <template
        v-slot:add-buttons
        v-if="work.code"
      >
        <button
         type="button" 
         class="btn-ico btn-black btn-code" aria-label="Code 보기" 
         @click="newWindow(work.code)"
        >
          View Code
        </button>
      </template>
    </FloatingButton>
  </section>
</template>
<script>
import FloatingButton from "@/components/common/FloatingButton.vue";
export default {
  components: {
    FloatingButton
  },
  props: {
    work: {
      type: Object,
      required: true
    },
    darkMode: Boolean,
    scrollH: Number,
    scrollDir: Boolean
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
      // thumbnail GSAP
      this.$gsap.to(this.$refs.thumbnail, {
        scale: 1.4,
        scrollTrigger: {
          scrub: 0.2,
          trigger: this.$refs.thumbnail,
          start: 'top 0%',
        }
      });
    }
  }
};
</script>