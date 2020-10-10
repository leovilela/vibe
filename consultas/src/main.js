import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueResource);


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})


