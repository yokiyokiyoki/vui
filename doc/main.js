import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';

import router from './router/index.js';
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
