import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// });
Vue.use(VueRouter);

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];
const router = new VueRouter({
  routes
});
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app');
router.push('/goods');
