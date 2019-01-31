import VueRouter from 'vue-router';

const router = new VueRouter({
  routes: [
    {
      path: '/button',
      component: () => import('../components/button.vue')
    },
    {
      path: '/collapse',
      component: () => import('../components/collapse.vue')
    }
  ]
});
export default router;
