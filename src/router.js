import Vue from 'vue'
import Router from 'vue-router'

// Components
import Main from './routes/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})