import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import Detail from '@/pages/Detail'
import Topics from '@/pages/Topics'


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
    }
  ]
})
