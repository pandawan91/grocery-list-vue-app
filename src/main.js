import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomeView from './views/HomeView.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

var routeObject = new VueRouter({
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/list',
        name: 'grocery-list',
        component: () => import('./views/GroceryListView.vue')
    }
  ],
  mode: 'history'
})

new Vue({
  router: routeObject,
  render: h => h(App),
}).$mount('#app')
