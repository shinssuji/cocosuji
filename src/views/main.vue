<template>
  <section class="main">
    <section class="visual" style="background:#eee">

    </section>

    <section class="skills">
      <h2 class="heading-main">Main skills</h2>
      <ul class="skill-wrap">
        <li v-for="(skill, index) in skillLists" :key="index">
          <i :class="'ico-'+skill.classname"></i>
          <strong class="tit">{{skill.title}}</strong>
          <p class="para">{{skill.text}}</p>
        </li>
      </ul>
    </section>

    <section class="works">
      <section class="box" v-for="(box, index) in workLists" :key="index">
        <div class="item img">
          <img :src="box.img" :alt="box.sub">
        </div>
        <div class="item text">
          <span v-html="box.sub"></span>
          <h3 v-html="box.main"></h3>
          <div class="tag">
            <span v-for="(tag, i) in workLists[index].tag" :key="i">{{tag}}</span>
          </div>
          <button type="button" @click="goToPage(box.link)">View Project</button>
        </div>
      </section>
    </section>

  </section>
</template>
<script>
export default {
  data() {
    return {
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
      workLists: [
        {
          sub: 'KB부동산 데이터허브 구축',
          main: 'KB부동산 \n빅데이터 통계 분석 플랫폼',
          tag: ['vue', 'html', 'css', 'javascript'],
          img: '',
          link: '/main'
        },
        {
          sub: '페이앱 홈페이지 리뉴얼',
          main: '온/오프라인 결제가 \n가능한 무료 통합 결제 솔루션',
          tag: ['design', 'html', 'scss', 'jquery'],
          img: '',
          link: ''
        },
        {
          sub: '유캔싸인 솔루션 구축',
          main: '효율적인 계약업무를 위한 \n전자서명 솔루션',
          tag: ['vue', 'html', 'css', 'jquery'],
          img: '',
          link: ''
        }
      ]
    };
  },
};
</script>