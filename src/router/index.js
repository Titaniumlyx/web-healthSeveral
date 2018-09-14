import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    }
  ]
})
