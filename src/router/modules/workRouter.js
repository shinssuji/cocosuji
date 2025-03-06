const workRouter = {
  path: "/detail",
  name: "detail",
  // redirect: "/main",
  component: () => import("@/layout/Detail.vue"),
  children: [
    { // KB 데이터허브
      path: "/detail/KBdatahub",
      name: "KBdatahub",
      component: () => import("@/views/detail/DetailCon.vue"),
      meta: {
        title: 'Project of Suji Portfolio - KB데이터허브'
      }
    },
    { // 시월뮤직
      path: "/detail/siwolmusic",
      name: "siwolmusic",
      component: () => import("@/views/detail/DetailCon.vue"),
      meta: {
        title: 'Project of Suji Portfolio - 시월뮤직'
      }
    },
    { // 페이앱 
      path: "/detail/payapp",
      name: "payapp",
      component: () => import("@/views/detail/DetailCon.vue"),
      meta: {
        title: 'Project of Suji Portfolio - 페이앱'
      }
    },
    { // 하이컴AS
      path: "/detail/hicomAS",
      name: "hicomAS",
      component: () => import("@/views/detail/DetailCon.vue"),
      meta: {
        title: 'Project of Suji Portfolio - 하이컴AS'
      }
    },
    { // UDID
      path: "/detail/udid",
      name: "udid",
      component: () => import("@/views/detail/DetailCon.vue"),
      meta: {
        title: 'Project of Suji Portfolio - 유디아이디'
      }
    },
    // { // 쇼비즈
    //   path: "/detail/shobiz",
    //   name: "shobiz",
    //   component: () => import("@/views/detail/DetailCon.vue"),
    // },


    { // 브랜디액션
      path: "/detail/brandyaction",
      name: "brandyaction",
      component: () => import("@/views/detail/DetailCon.vue"),
      meta: {
        title: 'Project of Suji Portfolio - 브랜디액션'
      }
    },
    { // 싱싱샐러드
      path: "/detail/singsing",
      name: "singsing",
      component: () => import("@/views/detail/DetailCon.vue"),
      meta: {
        title: 'Project of Suji Portfolio - 싱싱샐러드'
      }
    },
    // { // 천안문화도시
    //   path: "/detail/cheonan",
    //   name: "cheonan",
    //   component: () => import("@/views/detail/DetailCon.vue"),
    // },
    // { // 수빈아빠 타타타 - 보류중
    //   path: "/detail/tatata",
    //   name: "tatata",
    //   component: () => import("@/views/detail/DetailCon.vue"),
    // },
    { // 블로그페이 서비스
      path: "/detail/blogpay",
      name: "blogpay",
      component: () => import("@/views/detail/DetailCon.vue"),
      meta: {
        title: 'Project of Suji Portfolio - 블로그페이'
      }
    },
    { // 블로그페이 무료 쇼핑몰 메인
      path: "/detail/shopmain",
      name: "shopmain",
      component: () => import("@/views/detail/DetailCon.vue"),
      meta: {
        title: 'Project of Suji Portfolio - 쇼핑몰 메인'
      }
    },
    { // 쇼비즈 무료 쇼핑몰
      path: "/detail/shopall",
      name: "shopall",
      component: () => import("@/views/detail/DetailCon.vue"),
      meta: {
        title: 'Project of Suji Portfolio - 쇼핑몰 전체'
      }
    },
    

    { // 유캔싸인
      path: "/detail/ucansign",
      name: "ucansign",
      component: () => import("@/views/detail/DetailCon.vue"),
      meta: {
        title: 'Project of Suji Portfolio - 유캔싸인'
      }
    },

    
    { // 100방
      path: "/detail/hundredbang",
      name: "hundredbang",
      component: () => import("@/views/detail/DetailCon.vue"),
      meta: {
        title: 'Project of Suji Portfolio - 100방'
      }
    },
    // { // smart u ems
    //   path: "/detail/samrtumes",
    //   name: "samrtumes",
    //   component: () => import("@/views/detail/DetailCon.vue"),
    // },

  ],
};

export default workRouter;