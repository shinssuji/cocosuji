const basicRouter = {
  path: "/",
  name: "layout",
  redirect: "/main",
  component: () => import("@/layout/Default.vue"),
  children: [
    {
      path: "/main",
      name: "main", // 메인
      component: () => import("@/views/main.vue"),
      meta: {
        title: 'Portfolio of suji'
      }
    },
    {
      path: "/sub",
      name: "sub", // 작업물
      component: () => import("@/views/Sub.vue"),
      meta: {
        title: 'Project of Suji Portfolio'
      }
    },
  ],
};

export default basicRouter;