import Vue from 'vue'
import Router from 'vue-router'
import Contributors from '@/components/Contributors'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contributors',
      name: 'Contributors',
      component: Contributors
    }
  ]
})
