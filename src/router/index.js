import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

const router = new Router({
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
  },
  {
    path: '/details/:id',
    name: 'details',
    component: () => import('@/views/index/details'),
    meta: {
      title:'书籍详情'
    }
  }
]
})

router.beforeEach((to, from, next) => {
  let title = to.meta.title
  document.title = title
  next()
})


export default router
