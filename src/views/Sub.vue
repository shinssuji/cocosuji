<template>
  <section class="sub">
    <nav>      
      <button 
        type="button"
        v-for="(type, index) in subTypes" :key="index"
        @click="SelectType(type)"
        :class="{active:subTypeName===type}"
      >
          {{type}}
      </button>
    </nav>

    <div role="list" class="list-wrap list-motion-wrap" ref="subGropus">
        <div role="listitem" class="item" v-for="(work, i) in subVisibleLists" :key="i" @click="goToPage('detail/'+work.sub.path)">
          <p class="work-list en">{{work.sub.en}}</p>
          <p class="work-list kr">{{work.sub.kr}}</p>
        </div>
    </div>
  </section>
</template>
<script>
import { workContent } from '@/data/workData.js';
export default {
  components: {
  },
  data() {
    return {
      workContent,
      subTypes: [
        'all',
        'website',
        'landing',
        'admin',
        'mobile'
      ],
      subTypeName: 'all',
    }
  },
  computed: {
    subVisibleLists() {
      const subLists = Object.values(this.workContent);
      if(this.subTypeName === "all") {
        return subLists;
      }
      return subLists.filter(item => item.type == this.subTypeName);      
    },
  }, 
  watch: {
  },
  destroyed() {
  },
  mounted() {
    this.$nextTick(function() {
      this.startMotion();

      console.log(this.subTypeName);
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

      return document.querySelector("#wrap").scrollTop = 0;
    },

    // 리스트 모션
    startMotion() {
      clearTimeout(this.aniTimer);
      this.aniTimer = setTimeout(() => {
          this.$refs.subGropus.classList.add('is-visible');
      }, 200);

      // if (this.winwidth > 1513) {
      //     clearTimeout(this.aniTimer);
      //     this.aniTimer = setTimeout(() => {
      //         document.querySelector('.frontcard').classList.add('active');
      //     }, 200);
      // } else {
      //     clearTimeout(this.aniTimer);
      //     this.aniTimer = setTimeout(() => {
      //         document.querySelector('.frontcard').classList.remove('active');
      //     }, 200);
      // }
    }



  }
};
</script>