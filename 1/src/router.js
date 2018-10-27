import VueRouter from 'vue-router'

// 导入 路由相关的组件
import Home from './components/Home.vue'
import Movie from './components/Movie.vue'

// 创建路由对象
const router = new VueRouter({
  routes: [
    // 路由规则
    { path: '/home', component: Home },
    { path: '/movie', component: Movie }
  ]
})

// 使用 ES6 的模块化导出规范，向外暴露成员
export default router
