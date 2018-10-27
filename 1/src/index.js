import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import Home from './components/Home.vue'
// import Movie from './components/movie.vue'
// const router =new VueRouter({
//     routes:[
//         {path:'/home',component:Home},
//         {path:'/home',component:Movie},
//     ]
// })

 axios.defaults.baseURL =''
import axios from 'axios';
Vue.prototype.$http = axios
//带入element-ui
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);




//导入自己路由模块
import router from './router.js'
import App from './components/App.vue'

const vm =new Vue({
    el:'#app',
    render:c=>c(App),
    router
})