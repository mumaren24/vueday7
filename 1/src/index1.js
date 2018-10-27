import Vue from 'vue'

// 在 runtime-only 版本的 Vue 包中，不支持这种方式来定义组件
// 注意：今后在结合webpack开发Vue的时候，不要使用最全的那个包；直接使用 官方推荐的 runtime-only 的包就行

// 因为 传统的 配置对象类定义Vue组件的形式，并没有把 组件化的思想，发挥到极致！
// Vue 官方，推荐使用 .vue 文件的形式，来定义组件
// const Home = {
//   template: '<h1>这是Home组件</h1>'
// }

// 创建Vue的实例对象
const vm = new Vue({
  el: '#app',
  data: {
    msg: '123'
  }
  // render: c => c(Home)
})
