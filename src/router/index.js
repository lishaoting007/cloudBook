import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [{
      path: "/",
      name: "layout",
      redirect: "/index",
      component: () => import("@/views/layout"),
      children: [{
          path: "index",
          name: "index",
          meta: {
            title: "首页"
          },
          component: () => import("@/views/index")
        },
        {
          path: "person",
          name: "person",
          meta: {
            title: "个人中心"
          },
          component: () => import("@/views/person")
        }
      ]
    },
    {
      path: "/details/:id",
      name: "details",
      component: () => import("@/views/details"),
      meta: {
        title: "书籍详情"
      }
    },
    {
      path: "/titles/:id",
      name: "titles",
      component: () => import("@/views/titles"),
      meta: {
        title: "目录"
      }
    },
    {
      path: "/article/:id",
      name: "article",
      component: () => import("@/views/articles"),
      meta: {
        title: "文章内容"
      }
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: () => import('@/views/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("@/views/register"),
      meta: {
        title: "注册"
      }
    },
    {
      path: '/countdown',
      name: 'countdown',
      component: () => import('@/views/countDown'),
      meta: {
        title: "倒计时"
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  let title = to.meta.title;
  document.title = title;
  next();
});

export default router;
