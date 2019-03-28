import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'layout',
    redirect:'/index',
    component: () => import('@/views/layout'),
    children:[{
      path:"index",
      name:'index',
      meta:{
        title:'首页'
      },
      component: () => import('@/views/index')
    }]
  }]
})
