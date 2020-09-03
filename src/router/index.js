import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Intro from '@/views/Intro/Intro'
import NotFound from '@/views/Error/404'
import User from '@/views/SysMng/User'
import Menu from '@/views/SysMng/Menu'
import Role from '@/views/SysMng/Role'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '首页',
    component: Home,
    children: [
      { path: '', component: Intro, name: '系统介绍'},
      { path: '/user', component: User, name: '用户管理',meta: {icon: 'fa fa-home fa-lg',index: 0} },
      { path: '/menu', component: Menu, name: '菜单管理' },
      { path: '/role', component: Role, name: '角色管理' }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
   //  component: () => import('../views/Login.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  // 登录界面登录成功之后，会把用户信息保存在会话
  // 存在时间为会话生命周期，页面关闭即失效。
  // let token = Cookies.get('token')
  let user = sessionStorage.getItem('user')
  if (to.path === '/login') {
    // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
    if(user) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (!user) {
      // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
      next({ path: '/login' })
    } else {
      // 加载动态菜单和路由
      next()
    }
  }
})



export default router
