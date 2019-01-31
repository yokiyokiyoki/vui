import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';

import router from './router/index.js';

// import dsui from '../lib/dsui';
// import '../lib/styles/dsui.css';
// 开发模式直接不引用打包
import dsui from '../src/index';
Vue.use(VueRouter);

Vue.use(dsui);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
