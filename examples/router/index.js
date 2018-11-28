import VueRouter from "vue-router";

const router = new VueRouter({
  routes: [
    {
      path: "/button",
      component: () => import("../components/button.vue")
    }
  ]
});
export default router;
