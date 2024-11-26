const basicRouter = {
  path: "/",
  name: "layout",
  redirect: "/main",
  component: () => import("@/layout/Default.vue"),
  children: [
    {
      path: "/main",
      name: "main", // 메인
      component: () => import("@/views/Main.vue"),
    },
    {
      path: "/sub",
      name: "sub", // 작업물
      component: () => import("@/views/Sub.vue"),
    },
  ],
};

export default basicRouter;