<template>
  <section class="sub">
    <!-- #PROJECT TYPES -->
    <h2 class="blind">프로젝트 타입</h2>
    <nav aria-label="프로젝트 타입">
      <button 
        type="button"
        v-for="(type, index) in subTypes" :key="index"
        @click="SelectType(type)"
        :class="{active:subTypeName===type}"
      >
        {{type}}
      </button>
    </nav>

    <!-- #PROJECT LISTS -->
    <h2 class="blind">프로젝트 리스트</h2>
    <ul class="list-wrap list-motion-wrap" aria-label="프로젝트 리스트" ref="subGropus">
      <li role="button" class="item" v-for="(work, i) in subVisibleLists" :key="i">
        <p
          v-for="(lang, index) in ['en', 'kr']"
          :key="index"
          class="work-list"
          :class="lang"
          tabindex="0"
          @click="goToPage('detail/'+work.sub.path)"
          @keydown.enter="goToPage('detail/'+work.sub.path)"
        >
          {{ work.sub[lang]}}
        </p>
      </li>
    </ul>
  </section>
</template>
<script>
import { workContent } from '@/data/workData.js';
export default {
  data() {
    return {
      workContent,
      subTypes: [
        'all',
        'website',
        'shpppingmall',
        'admin',
        'mobile',
        'landing'
      ],
      showPrototype: true,
      subTypeName: 'all',
    }
  },
  computed: {
    subVisibleLists() {
      const subLists = Object.values(this.workContent);

      // prototype 표시 여부에 따라 필터링
      let filteredLists = subLists;
      if (!this.showPrototype) {
        return filteredLists = subLists.filter(item => item.type !== "prototype");
      }

      // 선택된 타입에 따라 필터링
      if(this.subTypeName === "all") {
        return filteredLists;
      }
      return filteredLists.filter(item => item.type === this.subTypeName);      
    },
  }, 
  destroyed() {
  },
  mounted() {
    this.$nextTick(function() {
      this.startMotion();
    })
  },
  beforeDestroy() {
  },
  created() {
  },
  methods: {
    // 서브 메뉴 선택
    SelectType(type) {
      this.$refs.subGropus.classList.remove('is-visible');
      this.startMotion();
      
      this.subTypeName = type;

      // return window.scrollY = 0;
      return this.$lenis.scrollTo(0, { immediate: true });
    },
    // 리스트 모션
    startMotion() {
      clearTimeout(this.aniTimer);
      this.aniTimer = setTimeout(() => {
          this.$refs.subGropus.classList.add('is-visible');
      }, 200);
    }
  }
};
</script>