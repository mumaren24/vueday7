// 导入 Jquery 包   这是 ES6 规范中，导入包的语法
// 通过 演示，发现，webpack 这个工具，默认，就能够转换一部分高级的ES语法 -> 低级的ES语法
import $ from 'jquery'
//使用es6
import './assets/css/1.css'
// 导入 Less 样式表
import './assets/css/1.less'
// Jquery 的 入口函数
$(function() {
  $('li:even').css('backgroundColor', 'red')
  $('li:odd').css('backgroundColor', 'blue')
})
// class Person {
//   // 类中的的静态属性
//   static info = { name: 'zs', age: 22 }
// }

// console.log(Person.info)
// webpack-dev-server 把 打包好的 main.js ，并没有存放到实际的物理磁盘上；而是放到了内存中；
