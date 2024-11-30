<template>
  <section class="main">
    <!-- VISUAL -->
    <section class="visual">
      <p class="text-left" :style="`transform: translateX(${scrollH}px)`">Publisher</p>
      <p class="text-right" :style="`transform: translateX(-${scrollH}px)`">shinsuuji.</p>
      <span aria-hidden="true" class="circle"><em></em></span>
    </section>

    <!-- SKILLS -->
    <section class="skills">
      <h2 class="heading-main" data-aos="fade-in">Main skills</h2>
      <ul class="skill-wrap">
        <li v-for="(skill, index) in skillLists" :key="index">
          <i :class="`ico-${skill.classname}`"></i>
          <strong class="tit">{{skill.title}}</strong>
          <p class="para">{{skill.text}}</p>
        </li>
      </ul>
    </section>

    <!-- WORKS -->
    <section class="works">
      <section class="box" v-for="(box, index) in workLists" :key="index">
        <div class="item img" data-aos="fade-down" data-aos-anchor-placement="center-bottom">
          <img
           :src="`../images/${box.img}@1x.png`" :alt="box.sub"
           :srcset="
           `../images/${box.img}@1x.png 1x` +
           `../images/${box.img}@2x.png 2x` +
           `../images/${box.img}@3x.png 3x`
           "
          />
        </div>
        <div class="item text" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <span class="s-tit">{{box.sub}}</span>
          <h3 v-html="box.main"></h3>
          <div class="tags">
            <span class="tag" v-for="(tag, i) in workLists[index].tag" :key="i">#{{tag}}</span>
          </div>
          <button type="button" class="btn btn-black btn-view" @click="goToPage(box.link)">View Project</button>
        </div>
      </section>
    </section>

  </section>
</template>
<style scoped>
  html:not(.no-js) [data-aos=fade-down] {
    transform: translate3d(0, -500px, 0)
  }
  html:not(.no-js) [data-aos=fade-up] {
    transform: translate3d(0, 500px, 0)
  }
</style>
<script>
export default {
  props: {
    scrollH: Number
  },
  data() {
    return {
      // skills
      skillLists: [
        {
          title: 'UI Dev.',
          text: 'vue 프레임워크 환경에서 \n컴포넌트 단위의 마크업 개발 경험이 있으며, \n다양한 UI 구현을 위한 \nJavascript, jQuery 사용 가능합니다.',
          classname: 'uidev'
        },
        {
          title: 'Co-work',
          text: '각 파트의 작업자들과의 원활한 소통과 \n협업을 중요하게 생각하며, \n늘 유연하게 사고하며 대응하도록 \n노력합니다.',
          classname: 'cowork'
        },
        {
          title: 'Markup / Style',
          text: '웹 표준, 접근성 준수 및 SEO 최적화를 고려한 \n마크업을 합니다. 유지 보수에 용이하도록 \n끊임 없이 고민하며 \n프로젝트에 적합한 방식으로 스타일링 합니다.',
          classname: 'markup'
        },
      ],
      // works
      workLists: [
        {
          sub: 'KB부동산 데이터허브 구축',
          main: 'KB부동산 \n빅데이터 통계 분석 플랫폼',
          tag: ['vue', 'html', 'css', 'javascript'],
          img: 'img_datahub_thumb',
          link: '/detail/KBdatahub'
        },
        {
          sub: '시월뮤직 서비스 구축',
          main: '음원 제작부터 \n수익 정산까지 가능한 플랫폼',
          tag: ['html', 'scss', 'javascript'],
          img: 'img_siwolmusic_thumb',
          link: '/detail/siwolmusic'
        },
        {
          sub: '페이앱 홈페이지 리뉴얼',
          main: '온/오프라인 결제가 \n가능한 무료 통합 결제 솔루션',
          tag: ['design', 'html', 'scss', 'jquery'],
          img: 'img_payapp_thumb',
          link: '/detail/payapp'
        },
        {
          sub: '유캔싸인 솔루션 구축',
          main: '효율적인 계약업무를 위한 \n전자서명 솔루션',
          tag: ['vue', 'html', 'css', 'jquery'],
          img: 'img_ucansign_thumb',
          link: '/detail/ucansign'
        },
        {
          sub: '디지털 마케팅 대행사 랜딩',
          main: '브랜디액션의 \n디지털 마케팅 대행 서비스',
          tag: ['html', 'scss', 'jquery'],
          img: 'img_brandyact_thumb',
          link: '/detail/brandyact'
        },
        {
          sub: '백방 하이브리드앱 구축',
          main: '백 명의 견적을 제공하는 \n장기 렌트 견적 플랫폼',
          tag: ['html', 'css', 'jquery'],
          img: 'img_100bang_thumb',
          link: '/detail/100bang'
        }
      ],
    }
  },
  watch: {
    scrollH: {
        deep: true,
        handler() {
        }
    }
  },
  destroyed() {
  },
  mounted() {
  },
  methods: {
  }
};
</script>