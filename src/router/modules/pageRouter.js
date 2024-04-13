const pageRouter = {
  path: "/",
  name: "layout",
  redirect: "/main",
  component: () => import("@/layout/Default.vue"),
  children: [
    {
      path: "/main",
      name: "main",
      component: () => import("@/views/Main.vue"),
    },
  ],
};

export default pageRouter;