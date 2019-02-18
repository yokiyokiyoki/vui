import VueRouter from 'vue-router';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/button'
    },
    {
      path: '/button',
      component: () => import('../components/Button.md')
    }
  ]
});
export default router;
