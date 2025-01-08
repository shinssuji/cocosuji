<template>
  <section class="main" :class="{'visible-intro':introVisible}"> 
    <!-- #INTRO -->
    <section class="intro" ref="intro" v-show="introVisible">
      <span class="intro-text intro-number"><em></em></span>
      <h2 class="intro-text intro-title text-split">SuJi</h2>
      <div aria-hidden="true" class="intro-background-circle"></div>
      <div aria-hidden="true" class="intro-background intro-background-left"></div>
      <div aria-hidden="true" class="intro-background intro-background-right"></div>
    </section>
    
    <!-- #VISUAL -->
    <section class="visual" ref="visual">
      <span aria-hidden="true" class="visual-circle" ref="circle"><em></em></span>
      <div class="visual-text-group">
        <p class="text-top animate-text animate-bounceBottom" ref="publisher">Publisher</p>
        <p class="text-bottom animate-text">
          <span class="animate-bounceRight" ref="shin">shin</span>
          <span class="text-split" ref="suji">suji.</span>
        </p>
      </div>
      <span class="copyright" ref="copy">ⓒ 2025</span>
    </section>

    <!-- #SKILLS -->
    <section class="skills" ref="skills">
      <h2 class="heading-main animate-scaleup animate-fadeUp" ref="secTitle">Main skills</h2>
      <ul class="skill-wrap" ref="skillwrap">
        <li v-for="(skill, index) in skillLists" :key="index" :ref="`skill${index+1}`" class="animate-fadeUp">
          <i :class="`ico-${skill.classname}`"></i>
          <strong class="tit">{{skill.title}}</strong>
          <p class="para">{{skill.text}}</p>
        </li>
      </ul>
    </section>

    <!-- #WORKS -->
    <section class="works">
      <section class="box" v-for="(box, index) in workLists" :key="index">
        <div class="item img">
          <img
           :src="`../images/${box.img}@2x.jpg`" :alt="box.sub" />
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
    </section>

    <Footer />
  </section>
</template>
<script>
import Footer from "@/components/Footer.vue";
import { store } from '@/router/index.js'

export default {
  components: {
    Footer,
  },
  props: {
    scrollH: Number
  },
  data() {
    return {
      introVisible: false,
      // breakpoint
      scrollTriggerDefaults: {
        tablet: "(max-width: 1024px)",
        tabletMin: "(min-width: 1025px)"
      },
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
          img: 'img_KBdatahub_thumb',
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
          img: 'img_hundredbang_thumb',
          link: '/detail/hundredbang'
        }
      ],
    }
  },
  created() {
    this.introVisible = store.introVisible;
  },
  watch: {
    scrollH: {
        deep: true,
        handler() {
        }
    },
  },
  destroyed() {
  },
  mounted() {
    this.$nextTick(() => {
      this.splitText();
      // 초기 스크롤 비활성화
      this.disableScroll();

      if (this.introVisible) {
        this.animateIntro();
      } else {
        this.animateMain();
      }

    });

    window.addEventListener("resize", this.$ScrollTrigger.update);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.$ScrollTrigger.update);
    store.introVisible = false;
  },
  methods: {
    animateIntro() {
      const numberText = document.querySelector(".intro-number em");
      let fakeProgress = 0;

      const master = this.$gsap.timeline({
          paused: false,
          delay: 0.2,
      });

      // 인트로 화면
      const simulateLoading = setInterval(() => {
        fakeProgress += Math.random() * 10;
        if (fakeProgress >= 100) {
          fakeProgress = 100;
          clearInterval(simulateLoading);

          // fakeProgress NEXT GSAP
          master
          .add(introAnimation())
          .eventCallback("onComplete", () => {
            // 인트로 화면 완료 후 애니메이션
            this.animateMain();
          })
        }
        
        numberText.textContent = `${Math.round(fakeProgress)}%`;
      }, 100);

      // 인트로 애니메이션
      const animationOptions = {
        ease: 'expo.inOut'
      }
      const introAnimation = () => {
        // 넘버 TIMELINE
        const numbertl = this.$gsap.timeline({
          defaults: {
            ease: animationOptions.ease,
            duration: 0,
          }
        }); 

        numbertl
        .to('.intro-number em', {
          duration: 1.2,
          y: -90,
          autoAlpha: 0,
        })

        // 인트로 TIMELINE
        const introtl = this.$gsap.timeline({
          defaults: {
            ease: animationOptions.ease,
            duration: 1,
          }
        }); 
        
        introtl.to('.intro-title span', {
          duration: 1.2,
          y: 0,
          delay: 0.3,
          autoAlpha: 1,
          stagger: 0.2,
        })
        .to('.intro-background', {
          scaleX: 1,
        })
        .to('.intro-background', {
          scaleY: 0,
          transformOrigin: 'top center',
        })
        .to('.intro-title span', {
          duration: 1,
          delay: 1,
          y: -90,
          stagger: 0.1
        }, '-=0.6')
        .to('.intro', {
          backgroundColor: 'transparent',
          duration: 0,
        }, '<')
        .to('.intro-background-circle', {
          scale: 1,
          duration: 1.5,
          delay: 0.4,
          ease: "power3.out",
        }, '<')
        .to('.intro', {
          autoAlpha: 0,
          duration: 1,
          onLeave: () => {
            document.querySelector('.main').classList.remove('visible-intro');
          },
          onComplete: () => {
            // 인트로 영역 비활성화
            this.introVisible = false;
          },
        }, '-=0.5')
        // }, '<')
        return introtl;
      }

    },
    animateMain() {
      const self = this; // Vue 컴포넌트의 this
      /**
       * * COMMON
       */
      // 분리된 텍스트 fade up GSAP
      const animteText = (time) => {
        this.$gsap.to(document.querySelectorAll('.main .text-split span'), {
          y: 0,
          delay: time,
          autoAlpha: 1,
          duration: 1.2,
          ease: 'expo.inOut',
          stagger: 0.2,
        });
      }
      // fade up GSAP
      this.$gsap.utils.toArray(".animate-fadeUp").forEach((ele) => {
        this.$ScrollTrigger.matchMedia({
          [this.scrollTriggerDefaults.tablet] : function () {
            self.$gsap.from(ele, {
              y: 100,
              autoAlpha: 0,
              duration: 1,
              ease: "power3.out",
              // yoyo: true,
              scrollTrigger: {
                trigger: ele, 
                start: "center 90%", 
                // end: "bottom top",
              },
              // delay: index * 0.2,
            });
          }
        })
      });
      // fade left GSAP
      this.$gsap.utils.toArray(".animate-fadeLeft").forEach((ele) => {
        this.$ScrollTrigger.matchMedia({
          [this.scrollTriggerDefaults.tablet] : function () {
            self.$gsap.from(ele, {
              xPercent: 100,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
              yoyo: true,
              scrollTrigger: {
                trigger: ele, 
                start: "center 60%",
              },
            });
          }
        })
      });
      // fade right GSAP
      this.$gsap.utils.toArray(".animate-fadeRight").forEach((ele) => {
        this.$ScrollTrigger.matchMedia({
          [this.scrollTriggerDefaults.tablet] : function () {
            self.$gsap.from(ele, {
              xPercent: -100,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
              yoyo: true,
              scrollTrigger: {
                trigger: ele, 
                start: "center 50%",
              },
            });
          }
        })
      });

      /**
       * VISUAL
       */
      // 애니메이션 easing
      const bounceOptions = {
        ease: 'elastic.out(1, 1)'
      }
      // VISUAL FIRST TIMELINE
      const mainmaster = this.$gsap.timeline({
        onComplete: () => {
          // 스크롤 활성화
          this.enableScroll();
        }
      });
      mainmaster
      .to(this.$refs.circle, {
        scale: 0.4,
        xPercent: -100,
        duration: 1,
        ease: "power2.out",
        yoyo: true,
      })
      .fromTo(".animate-bounceBottom", {
        y: window.innerHeight * -1,
      }, {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        ease: bounceOptions.ease,
      })
      .fromTo(".animate-bounceRight", {
        x: window.innerWidth * -1,
      }, {
          x: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "power2.out",
        }, "-=1"
      )
      .add(animteText('0.8'))
      .add(() => {
        visualAnimation();
        skillAnimation();
        workAnimation();
      })
      // .eventCallback("onComplete", () => {
      //   visualAnimation();
      //   skillAnimation();
      //   workAnimation();
      // });

      // vISUAL SECCOND TIMELINE
      const visualAnimation = () => {
        const self = this; // Vue 컴포넌트의 this

        this.$ScrollTrigger.matchMedia({
          [this.scrollTriggerDefaults.tabletMin]: function() {
              const visualtl = self.$gsap.timeline({
                duration: 0.2,
                yoyo: true,
                paused: false, // 초기에는 애니메이션 정지
                scrollTrigger: {
                  trigger: self.$refs.visual,
                  start: 'center center',
                  end: 'bottom center',
                  onEnterBack: () => { // 영역에 다시 돌아오면 애니메이션 reverse
                    visualtl.play(); 
                  },
                  onLeaveBack: () => { // 섹션을 떠나면 애니메이션 reverse
                    visualtl.reverse();
                  },
                }
              });
              visualtl
              .to(self.$refs.publisher, {
                x: '2vh',
                y: '-1.5vh',
                scale: 0.4,
              })
              .to(self.$refs.shin, {
                y: 120,
              }, "<")
              .to(self.$refs.suji, {
                x: -170,
                y: -30,
              }, "<")
              .to(self.$refs.copy, {
                x: -15,
                y: '-40vh',
              }, "<");
          }
        })
      }

      /**
       * SKILLS
       */
      const skillAnimation = () => {
        const self = this; // vue 컴포넌트의 this
        this.$ScrollTrigger.matchMedia({
          [this.scrollTriggerDefaults.tabletMin]: function() {
            console.log(self.$gsap);

            self.$gsap.fromTo(".animate-scaleup", {
              autoAlpha: 0,
              yPercent: 300,
              scale: 3,
            }, {
              autoAlpha: 1,
              yPercent: -300,
              scale: 1,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: self.$refs.skill,
                start: "top 20%",
                  end: "bottom 0%",
                scrub: 1,
              },
            });

            // SKILL TIMELINE
            const skilltl = self.$gsap.timeline({
              scrollTrigger: {
                trigger: ".skill-wrap li",
                start: "top 70%", 
                end: "bottom top",
                scrub: 1,
                ease: "power2.out"
              },
            })
            skilltl
            .fromTo(self.$refs.skill1, {
              x: 0,
              y: '-13vh'
            }, {
              x: 0,
              y: '13vh',
              duration: 1
            })
            .fromTo(self.$refs.skill3, {
              x: 0,
              y: '13vh'
            }, {
              x: 0,
              y: '-13vh',
              duration: 1
            }, "<")

          }
        })
      }

      /**
       * WORKS
       */
      const workAnimation = () => {
        const workBoxes = document.querySelectorAll(".works .box");
        const self = this;

        this.$ScrollTrigger.matchMedia({
          [this.scrollTriggerDefaults.tabletMin]: function() {
            // 텍스트 각 요소 TIMELINE
            workBoxes.forEach((box) => {   
              const worktl = self.$gsap.timeline({
                scrollTrigger: {
                  trigger: box,
                  start: "30% 50%",
                }
              });
              worktl
              .from(box.querySelectorAll('.s-tit'), {
                y: "+=5vh",
                ease: "power4",
                duration: 2,
              })
              .from(box.querySelectorAll('h3'), {
                y: 150,
                duration: 2,
                ease: "power4",
                stagger: 0.1
              }, 0)
              .from(box.querySelectorAll('.tags'), {
                x: 100,
                y: 50,
                autoAlpha: 0,
                duration: 2,
                ease: "power4"
              }, 0.4)
              .from(box.querySelectorAll('.btn-view'), {
                x: -100,
                y: 100,
                autoAlpha: 0,
                duration: 2,
                ease: "power4"
              }, 0.3)
            });

            // 텍스트/이미지 영역 TIMELINE
            workBoxes.forEach((box, index) => {
              let textItems = box.querySelectorAll('.text');
              
              const textanimationConfig = (index % 2 === 0)
                ? { xPercent: -15, y: "15vh" } // 짝수
                : { xPercent: 15, y: "15vh" }; // 홀수

              self.$gsap.fromTo(textItems, {
                scale: 0.8,
                y: 0
              },{
                scale: 1,
                ...textanimationConfig, // 분기된 애니메이션 설정
                ease: 'sine',
                scrollTrigger: {
                  trigger: box,
                  scrub: 2,
                  start: "40% 100%",
                },
              })

              let imageItems = box.querySelectorAll('.img');

              const imageanimationConfig = (index % 2 === 0)
                ? { xPercent: 20, y: "10vh" } // 짝수
                : { xPercent: -20, y: "10vh" }; // 홀수
              
              self.$gsap
              .fromTo(imageItems, {
                scale: 0.7,
                xPercent: 0,
                y: 0,
              },{
                scale: 1,
                ...imageanimationConfig,
                ease: 'sine',
                scrollTrigger: {
                  trigger: box,
                  scrub: 2,
                  start: "40% 100%",
                },
              })
            });
          },
          [this.scrollTriggerDefaults.tablet]: function() {
            // 텍스트/이미지 영역 TIMELINE
            workBoxes.forEach((box) => {
              let imageItems = box.querySelectorAll('.img img');
              self.$gsap.to(imageItems, {
                yPercent: -20,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: imageItems,
                  scrub: 1,
                  start: "top 70%",
                },
              })
              
            });
          },
          
        })
      }
    },

    splitText() {
      const textElements = document.querySelectorAll('.main .text-split');
        textElements.forEach((ele) => {
          // 텍스트 분리
          const text = ele.textContent;
          ele.textContent = ''; // 기존 텍스트 비우기

          text.split('').forEach((char) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            ele.appendChild(span);
          })
      });
    },
  }
};
</script>