import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import Detail from '@/pages/Detail'
import Topics from '@/pages/Topics'
import Login from '@/pages/Login'
import Start from '@/pages/Start'
import About from '@/pages/About';
import Api from '@/pages/Api'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Topics
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/signin',
      name: 'signin',
      component: Login
    },
    {
      path: '/getstart',
      name: 'getstart',
      component: Start
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/Api',
      name: 'api',
      component: Api
    }
  ]
})
