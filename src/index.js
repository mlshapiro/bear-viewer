import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import router from './router.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// use Bootstrap Vue (https://bootstrap-vue.github.io)
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  template: '<div id="app"><router-view></router-view></div>'
})
