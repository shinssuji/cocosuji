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
    },
    { // 시월뮤직
      path: "/detail/siwolmusic",
      name: "siwolmusic",
      component: () => import("@/views/detail/DetailCon.vue"),
    },
    { // 페이앱 
      path: "/detail/payapp",
      name: "payapp",
      component: () => import("@/views/detail/DetailCon.vue"),
    },
    { // 하이컴AS
      path: "/detail/hicomAS",
      name: "hicomAS",
      component: () => import("@/views/detail/DetailCon.vue"),
    },
    { // UDID
      path: "/detail/udid",
      name: "udid",
      component: () => import("@/views/detail/DetailCon.vue"),
    },
    { // 쇼비즈
      path: "/detail/shobiz",
      name: "shobiz",
      component: () => import("@/views/detail/DetailCon.vue"),
    },


    { // 브랜디액션
      path: "/detail/brandyact",
      name: "brandyact",
      component: () => import("@/views/detail/DetailCon.vue"),
    },
    { // 싱싱샐러드
      path: "/detail/singsing",
      name: "singsing",
      component: () => import("@/views/detail/DetailCon.vue"),
    },
    { // 천안문화도시
      path: "/detail/cheonan",
      name: "cheonan",
      component: () => import("@/views/detail/DetailCon.vue"),
    },
    { // 수빈아빠 타타타 - 포함? 삭제? 보류중
      path: "/detail/tatata",
      name: "tatata",
      component: () => import("@/views/detail/DetailCon.vue"),
    },
    { // 블로그페이 서비스
      path: "/detail/blogpay",
      name: "blogpay",
      component: () => import("@/views/detail/DetailCon.vue"),
    },
    

    { // 유캔싸인
      path: "/detail/ucansign",
      name: "ucansign",
      component: () => import("@/views/detail/DetailCon.vue"),
    },
    { // 쇼비즈 어드민 - 포함? 삭제? 보류중
      path: "/detail/shobizAdmin",
      name: "shobizAdmin",
      component: () => import("@/views/detail/DetailCon.vue"),
    },

    
    { // 100방
      path: "/detail/100bang",
      name: "100bang",
      component: () => import("@/views/detail/DetailCon.vue"),
    },
    { // smart u ems
      path: "/detail/samrtumes",
      name: "samrtumes",
      component: () => import("@/views/detail/DetailCon.vue"),
    },
  ],
};

export default workRouter;