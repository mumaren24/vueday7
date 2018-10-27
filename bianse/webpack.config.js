// 导入 html-webpack-plugin，从而帮我们自动把 打包好的 main.js 注入到 index.html 页面中
// 同时，html-webpack-plugin 可以把 磁盘上的 index.html 页面，复制一份并托管到 内存中；
const HtmlPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlPlugin({
  // 传递一个配置对象
  template: './src/index.html', // 指定路径，表示 要根据哪个物理磁盘上的页面，生成内存中的页面
  filename: 'index.html' // 指定，内存中生成的页面的名称
})

// webpack 这个构建工具，是基于 Node.js 开发出来的一个前端工具
module.exports = {
  mode: 'development', // 当前处于开发模式
  plugins: [htmlPlugin] ,
      // 所有非JS结尾的文件类型模块，都在这里进行配置
      module:{
        rules:[
        { test:/\.css$/,use:['style-loader','css-loader'] },
        { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
        { test: /\.jpg|jpeg|png|gif|svg$/, use: 'url-loader' },
        // {
        //   test: /\.js$/,
        //   exclude: /node_modules/,
        //   use: {
        //     loader: 'babel-loader',
        //     options: {
        //       presets: ['@babel/preset-env']
        //     }
        //   }
        // }
        ]
      }
    
}
