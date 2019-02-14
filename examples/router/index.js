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
    },
    {
      path: '/icon',
      component: () => import('../components/icon.vue')
    }
  ]
});
export default router;
