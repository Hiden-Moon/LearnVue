import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
const router = new VueRouter({
  // mode中有两个模式，hash和history，hash可以直接部署在服务器上使用，history需要安装connect-history-api-fallback（排除刷新的bug）
  mode: 'history',
  routes: [
    {
      name: 'guanyu',
      path: '/about',
      component: About,
      meta: { title: '关于' },
    },
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
      meta: { title: '主页' },
      children: [
        {
          name: 'xinwen',
          path: 'news',
          component: News,
          meta: { isAuth: true, title: '新闻' },
        },
        {
          name: 'xiaoxi',
          path: 'message',
          component: Message,
          meta: { isAuth: true, title: '消息' },
          children: [
            {
              name: 'xiangqing',
              path: 'detail',
              component: Detail,
              meta: { title: '详情' },
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                }
              },
            },
          ],
        },
      ],
    },
  ],
})

//全局后置路由守卫————页面初始化和路由跳转时候调用
// router.afterEach((to, from) => {
//   // to and from are both route objects.
//   document.title = to.meta.title || '系统'
//   console.log(to, from)
// })

export default router
