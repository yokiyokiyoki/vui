import VueRouter from "vue-router";

const router = new VueRouter({
  routes: [
    {
      path: "/button",
      component: () => import("../components/Button.md")
    }
  ]
});
export default router;
