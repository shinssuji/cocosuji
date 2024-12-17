<template>
  <section class="main">
    <section class="visual" ref="visual">
      <!-- <p class="text-left" :style="`transform: translateX(-${scrollH}px)`">Publisher</p> -->
      <!-- <p class="text-right" :style="`transform: translateX(${scrollH}px)`" ref="text">shinsuuji.</p> -->

      <!-- <p class="text-left" ref="word1">Publisher</p> -->
      <p class="text-left" ref="word1">P<span class="up">u</span>b<span class="down">l</span>i<span class="up">s</span>h<span class="down">e</span>r</p>
      <!-- <p class="text-right" ref="word2">shinsuuji.</p> -->
      <p class="text-right" ref="word2">s<span class="up">h</span>i<span class="down">n</span>s<span class="up">u</span>u<span class="down">j</span>i.</p>
      <span aria-hidden="true" class="circle" ref="circle"><em></em></span>
      
      <span class="copyright" ref="copy">ⓒ 2024</span>
    </section>

    <!-- SKILLS -->
    <section class="skills" ref="skills">
      <!-- <h2 class="heading-main" data-aos="fade-in">Main skills</h2> -->
      <h2 class="heading-main" ref="secTitle">Main skills</h2>
      <ul class="skill-wrap" ref="skillwrap">
        <li v-for="(skill, index) in skillLists" :key="index" :ref="`skill${index+1}`">
          <i :class="`ico-${skill.classname}`"></i>
          <strong class="tit">{{skill.title}}</strong>
          <p class="para">{{skill.text}}</p>
        </li>
      </ul>
    </section>

    <!-- WORKS -->
    <section class="works" v-if="false">
      <section class="box" v-for="(box, index) in workLists" :key="index">
        <div class="item img" data-aos="fade-down" data-aos-anchor-placement="center-bottom">
          <img
           :src="`../images/${box.img}@2x.png`" :alt="box.sub" />
        </div>
        <div class="item text" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <span class="s-tit">{{box.sub}}</span>
          <h3 v-html="box.main"></h3>
          <div class="tags">
            <span class="tag" v-for="(tag, i) in workLists[index].tag" :key="i">#{{tag}}</span>
          </div>
          <button type="button" class="btn btn-blackline btn-view" @click="goToPage(box.link)">View Project</button>
        </div>
      </section>
    </section>


    <section class="works">
      <div class="horizon-scroll-container align-center">
        <section class="box" v-for="(box, index) in workLists" :key="index">
          <div class="item img">
            <img
            :src="`../images/${box.img}@2x.png`" :alt="box.sub" />
          </div>
          <div class="item text">
            <span class="s-tit">{{box.sub}}</span>
            <h3 v-html="box.main"></h3>
            <div class="tags">
              <span class="tag" v-for="(tag, i) in workLists[index].tag" :key="i">#{{tag}}</span>
            </div>
            <button type="button" class="btn btn-blackline btn-view" @click="goToPage(box.link)">View Project</button>
          </div>
        </section>
      </div>
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

  .horizon-scroll-container {
    display: flex;
    width: 600% !important;
    max-width: 600% !important;
  }
  .align-center {
    align-items: center;
  }
</style>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 등록
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
          img: 'img_brandyaction_thumb',
          link: '/detail/brandyaction'
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
    // ScrollTrigger 애니메이션 설정
    // gsap.to(this.$refs.bigbox, {
    //   x: 200,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: this.$refs.bigbox, // 애니메이션을 트리거할 요소
    //     start: "top center", // 트리거 시작 지점 (뷰포트 기준)
    //     end: "bottom 100px", // 트리거 종료 지점
    //     scrub: true, // 스크롤과 애니메이션 동기화
    //     markers: true, // 디버깅용 마커 활성화
    //   },
    // });
    // gsap.from(this.$refs.text, {
    //   opacity: 0,
    //   y: 50,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: this.$refs.text,
    //     start: "top 80%",
    //     end: "top 50%",
    //     scrub: true,
    //     markers: false,
    //   },
    // });

    

    // visual
    const visual = gsap.timeline({
    scrollTrigger: {
        trigger: this.$refs.visual,
        duration: 1,
        start: 'top 0%', 
        end: 'bottom 0%',  // 트리거 종료 지점 확장
        scrub: 1,            // 스크롤과 더 부드럽게 동기화
        pin: true,
        pinSpacing: true
      }
    });

    visual
    //.fromTo(this.$refs.word1, 
    //    { width: '0', opacity: 1, ease: 'power2.out' }, 
    //    { width: 'auto', opacity: 1, duration: 1.2, ease: 'power2.out' }
    //).fromTo(this.$refs.word2, 
    //{ width: '0%', opacity: 0 }, 
    //{ width: 'auto', opacity: 1, duration: 1.2, ease: 'power2.out' },
    //).fromTo(this.$refs.word1, 
    //    { yPercent: 0, duration: 1.2, ease: 'power2.out' }, 
    //    { yPercent: -100, duration: 1.2, ease: 'power2.out' }
    //).fromTo([this.$refs.word2, this.$refs.copy], 
    //    { yPercent: 0, duration: 1.2, ease: 'power2.out' }, 
    //    { yPercent: 100, duration: 1.2, ease: 'power2.out' },
    .fromTo(document.querySelectorAll('.visual .up'), 
        { yPercent: 60, opacity: 0.3 }, 
        { yPercent: 0, opacity: 1, duration: 2, ease: 'power2.out' }
    ).fromTo(document.querySelectorAll('.visual .down'), 
    { yPercent: -60, opacity: 0.3}, 
    { yPercent: 0, opacity: 1, duration: 2, ease: 'power2.out' },
   ).fromTo(this.$refs.word1, 
        { yPercent: 0, duration: 3 }, 
        { yPercent: 10, gap: 0, margin: '0', xPercent: 50, x: '100', scale: 0.4, duration: 3, ease: 'power2.out' }
    ).fromTo(this.$refs.word2, 
        { yPercent: 0, duration: 3 }, 
        { yPercent: -25, xPercent: -12, x: '0', scale: 0.4, gap: 0, duration: 3, ease: 'power2.out' }
    ).fromTo(this.$refs.circle, 
    { scale: 0.3}, 
    { scale: 1, duration: 5.5, ease: 'power2.out' },
    ).fromTo(this.$refs.copy, 
    { scale: 1, duration: 2}, 
    { scale: 1.5, yPercent: '-100%', opacity: 0, duration: 2, ease: 'power2.out' },
    
  );



  // skills
    // const skills = gsap.timeline({
    // scrollTrigger: {
    //     trigger: this.$refs.skills,
    //     duration: 1,
    //     start: 'top 0%', 
    //     //end: 'bottom 1%',  // 트리거 종료 지점 확장
    //     scrub: 1,            // 스크롤과 더 부드럽게 동기화
    //     pin: true,
    //   }
    // });

    // skills
    // .fromTo(this.$refs.secTitle, 
    //     { scale: 10, y: '100%', ease: 'power2.out' }, 
    //     { scale: 1, y: '0', duration: 1.5, ease: 'power2.out' }
    // ).fromTo(this.$refs.skillwrap, 
    //   { xPercent: 200 }, 
    //   { xPercent: 0, ease: 'power2.out' },
    // );




    

    // gsap.from(this.$refs.skillwrap, {
    //   xPercent: 200,
    //   duration: 3,
    //   scrollTrigger: {
    //     trigger: this.$refs.skillwrap,
    //     start: "top 95%",
    //     end: "bottom 1%",
    //     scrub: true,
    //     markers: false,
    //   },
    // });






    gsap.timeline({
      // opacity: 1,
      scrollTrigger: {
        trigger: this.$refs.skills,
        pin: true,
        scrub: 1,
        start: "top 0%",         // 섹션 상단이 뷰포트 80% 지점에 도달하면 시작
        end: "bottom 0%",           // 종료 시점 (선택 사항)
        yoyo: true, // 재시작할때는 끝부터 시작
      },
    });

    
  //   tl.from(this.$refs.skillwrap, {xPercent: 300,
  //     opacity: 0,
  //     duration: 3,},
    
  // );



    gsap.from(this.$refs.secTitle, {
      scale: 5,
      yPercent: 100,
      // yPercent: -50,
      // duration: 2,
      scrollTrigger: {
        trigger: this.$refs.secTitle,
        start: "top 50%",
        end: "bottom 0%",
        scrub: 1,
      },
    });

      gsap.from(this.$refs.skillwrap, {
      xPercent: 200,
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: this.$refs.skillwrap,
        start: "top 95%",
        end: "bottom 1%",
        scrub: 1,
        // markers: false,
      },
    });






    // ***** works 
      const scrollContainer = document.querySelector('.horizon-scroll-container');
  
      // const eleImg = document.querySelectorAll('.img');
      // const eletext = document.querySelectorAll('.text');
      
  
      
      // horizon scroll - 섹션 고정
      let HorizonAni = gsap.to(scrollContainer, {
        x: () => -(scrollContainer.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainer,
          invalidateOnRefresh: true, // 리사이징 위도우 크기 체크
          pin: true, 
          scrub: 1,
          start: "top 0",
          end: () => "+=" + scrollContainer.scrollWidth
        }
      });
      
      // img forEach animation
      gsap.utils.toArray('.img').forEach(image => {
        gsap.timeline({
          defaults: {ease: "none"},
          scrollTrigger: {
            containerAnimation: HorizonAni, // 애니메이션 발생하는 장소
            trigger: image,
            start: "left right",
            end: "left left",
            scrub: true,
            // markers: true,
          }
        })
        // .fromTo(image, {x: 0}, {x: -150, duration: 0.5}, 0)
        .fromTo(image, {minWidth: '0'}, {minWidth: '60vw', duration: 0.4}, 0)
      });
      
      // text forEach animation
      gsap.utils.toArray('.text').forEach(text => {
        gsap.timeline({
          defaults: {ease: "none"},
          scrollTrigger: {
            containerAnimation: HorizonAni, // 애니메이션 발생하는 장소
            trigger: text,
            start: "left right",
            end: "left left",
            scrub: true,
            markers: false,
            delay: 0.5,
          }
        })
        .fromTo(text, {x: 0, opacity: 0.5}, {x: -150, opacity:1, duration: 0.3}, 0)
      });


    // // 두 번째 섹션: 요소 페이드 인
    // gsap.fromTo(
    //   this.$refs.skills,
    //   { y: '5%' }, // 초기 상태: 투명도 0, 아래로 50px 이동
    //   {      // 종료 상태: 투명도 1
    //     y: 0,               // 애니메이션 지속 시간
    //     ease: "power2.out",  // 부드러운 전환
    //     stagger: 1,        // 각 요소가 0.3초 간격으로 나타남
    //     scrollTrigger: {
    //       trigger: this.$refs.skills, // 트리거할 섹션
    //       pin: true,
    //       // pinSpacing : 10,
    //       scrub: 1,
    //       start: "top 0%",         // 섹션 상단이 뷰포트 80% 지점에 도달하면 시작
    //       end: "bottom 0%",           // 종료 시점 (선택 사항)
    //       yoyo: true, // 재시작할때는 끝부터 시작
    //     },
    //   }
    // );




    // gsap.from(this.$refs.secTitle, {
    //   scale: 5,
    //   y: "100%",
    //   // yPercent: -50,
    //   // duration: 2,
    //   scrollTrigger: {
    //     trigger: this.$refs.secTitle,
    //     start: "top 50%",
    //     end: "bottom 0%",
    //     scrub: 1,
    //   },
    // });
    

    // gsap.from(this.$refs.skillwrap, {
    //   xPercent: 300,
    //   opacity: 0,
    //   duration: 3,
    //   scrollTrigger: {
    //     trigger: this.$refs.skillwrap,
    //     start: "top 95%",
    //     end: "bottom 1%",
    //     scrub: 1,
    //     markers: false,
    //   },
    // });




    
    // const skillitem = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: [this.$refs.skill1,this.$refs.skill2,this.$refs.skill3],
    //     start: "top 60%",
    //     end: "bottom 0%",
    //     scrub: 1,
    //   },
    // });
    // skillitem.from(this.$refs.skill1, {xPercent: 100, opacity: 0, ease: 'power2.out'})
    //   .from(this.$refs.skill2, {xPercent: 200, opacity: 0, ease: 'power2.out'})
    //   .from(this.$refs.skill3, {xPercent: 300, opacity: 0, ease: 'power2.out'});

    // skillitem.from(this.$refs.skill1, {xPercent: -100, opacity: 0, ease: 'power2.out'})
    //   .from(this.$refs.skill2, {xPercent: 100, opacity: 0, ease: 'power2.out'})
    //   .from(this.$refs.skill3, {yPercent: 100, opacity: 0, ease: 'power2.out'});

    





    
    // .fromTo(this.$refs.word2, 
    //     { width: '0%', opacity: 0 }, 
    //     { width: 'auto', opacity: 1, ease: 'power2.out' }, 
      
    // );

      
  },
  methods: {
    // animateBox() {
    //   // GSAP 애니메이션 실행
    //   gsap.to(this.$refs.bigbox, { duration: 1, x: 200, rotation: 360 });
    // }
  }
};
</script>