import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pro',
    name: 'pro',
    component: () => import('../views/pro.vue')
  },
  {
    path: '/photo',
    // name: 'photo',
    component: () => import('../views/photo.vue')
  },
  {
    path: '/info',
    // name: 'info',
    component: () => import('../views/info.vue')
	/*,
	meta:{
		title: '资讯中心'
	}*/	
  },//以下移植自研发部
  {
    path: '/list/:id',
    name: 'list',
    component: () => import('../views/List.vue')
  },
  {
    path: '/content/:id',
    name: 'content',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Content.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/test2',
    name: 'test2',
    component: () => import('../views/Test2.vue')
  },
  {
    path: '/NodeList/:id?',
    component: () => import('../views/NodeList.vue')
	/*,
	meta:{
		title: '节点列表'
	}
	*/
  },
  {
    path: '/NodeContent/:nid',
    component: () => import('../views/NodeContent.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})


// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })


export default router
