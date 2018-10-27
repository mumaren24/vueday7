# Vue.js - Day5 - Webpack



## 1. 在网页中会引用哪些常见的静态资源？

1. 样式表
   + .css/.less/.scss
2. JS文件
   + .js/.ts
3. 图片
   + .jpg/.jpeg/.png/.gif/.bmp/.svg/.webp
4. 字体文件
   + .eot/.ttf/.woff/.woff2/.svg
5. 模板文件
   + .vue/.jsx



## 2. 网页中引入的静态资源多了以后有什么问题？？？

1. **对网页性能不友好：**要发起很多的静态资源请求，降低页面的加载效率，用户体验差；
2. **对程序开发不友好：**前端程序员要处理复杂的文件之间的依赖关系；



## 3. 如何解决上述两个问题

1. 对于 JS 文件 或  CSS 文件，可以合并和压缩；小图片适合转 Base64 格式的编码；
2. 通过一些工具，让工具自动维护文件之间的依赖关系；




## 4. 什么是webpack?
+ **什么是webpack：**webpack 是前端项目的构建工具；前端的项目，都是基于 webpack 进行 构建和运行的；
+ **什么项目适合使用webpack：**
    + webpack 非常适合与单页面应用程序结合使用；
    + 不太适合与多页面的普通网站结合使用；
+ **为什么要使用webpack:** 
    1. 如果项目使用 webpack 进行构建，我们可以书写高级的ES代码，且不用考虑兼容性；
    2. webpack 能够优化项目的性能；
    3. 基于webpack，程序员可以把 自己的开发重心，放到功能上；
+ 根据官网的图片介绍webpack打包的过程
+ [webpack官网](http://webpack.github.io/)



## 5. 在项目中安装和配置`webpack`

>  webpack 就是前端的一个工具，这个工具，已经被托管到了NPM官网上；

1. 新建一个项目的空白目录，并在在终端中，`cd`到项目的根目录，执行`npm init -y` 初始化项目

2. 装包：运行 `cnpm i webpack webpack-cli -D` 安装项目构建所需要的 `webpack`

3. 打开 `package.json`文件，在 `scripts` 节点中，新增一个 `dev` 的节点：

   ```json
   "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "dev": "webpack"
     },
   ```

4. 在项目根目录中，新建一个 `webpack.config.js` 配置文件，内容如下：

   ```
   // 这是 使用 Node 语法， 向外导出一个 配置对象
   module.exports = {
     mode: 'production' // production    development
   }
   ```

5. 在项目根目录中，新增一个 `src` 目录，并，在 `src` 目录中，新建一个 `index.js` 文件，作为 `webpack 构建的入口`；

6. 在终端中，直接运行 `npm run dev`  启动webpack进行项目构建；




## 6. 初步使用`webpack`构建项目




## 7. 实现`webpack`的实时打包构建

1. 借助于 `webpack-dev-sever` 这个工具，能够实现 webpack 的实时打包构建；

2. 运行`cnpm i webpack-dev-server -D` 安装包

3. 打开`package.json`文件，把 `scripts` 节点下的 `dev` 脚本，修改为如下配置：

   ```json
   "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "dev": "webpack-dev-server"
     },
   ```

4. 修改 `index.html` 文件中的 `script` 的 `src`, 让 src 指向 内存中根目录下的 `/main.js`

   ```html
   <script src="/main.js"></script>
   ```



> node ./app.js         nodemon ./app.js

> webpack                 webpack-dev-server



## 8. 使用`html-webpack-plugin`插件配置启动页面

1. 装包`cnpm i html-webpack-plugin -D `

2. 在 `webpack.config.js`中，导入 插件：

   ```js
   // 导入 html-webpack-plugin，从而帮我们自动把 打包好的 main.js 注入到 index.html 页面中
   // 同时，html-webpack-plugin 可以把 磁盘上的 index.html 页面，复制一份并托管到 内存中；
   const HtmlPlugin = require('html-webpack-plugin')
   const htmlPlugin = new HtmlPlugin({
     // 传递一个配置对象
     template: './src/index.html', // 指定路径，表示 要根据哪个物理磁盘上的页面，生成内存中的页面
     filename: 'index.html' // 指定，内存中生成的页面的名称
   })
   ```

3. 把 创建好的 `htmlPlugin` 对象，挂载到 `plugins`数组中：

   ```js
   // webpack 这个构建工具，是基于 Node.js 开发出来的一个前端工具
   module.exports = {
     mode: 'development', // 当前处于开发模式
     plugins: [htmlPlugin] // 插件数组
   }
   ```

   



## 9. 实现自动打开浏览器、热更新和配置浏览器的默认端口号

+ `--open` 自动打开浏览器
+ `--host` 配置IP地址
+ `--port` 配置 端口号
+ `--hot` 热更新；最新的代码，以打补丁的形式，替换到页面上，加快编译的速度；



## 10. 打包处理非`js`文件

### 10.1 使用webpack打包css文件

1. 运行 `cnpm i style-loader css-loader -D`

2. 在`webpack.config.js`配置文件的导出对象上，新增一个`module`对象节点，在 对象中，新增一个 `rules`数组，格式如下：

   ```js
   module: {
       // 所有非JS结尾的文件类型模块，都在这里进行配置
       rules: [
         // 文件处理规则
         { test: /\.css$/, use: ['style-loader', 'css-loader'] } // 配置 所有 CSS 文件的 处理 loader
       ]
     }
   ```

### 10.2 使用webpack打包less文件

1. 运行 `cnpm i less-loader less -D` 

2. 在`rules`中新增一个规则：

   ```js
   { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] } // 处理 less 文件的 loader
   ```

### 10.3 使用webpack打包scss文件

1. 运行 `cnpm i sass-loader node-sass -D`

2. 在 `rules`中新增一个规则：

   ```js
   { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] } // 处理 scss 文件的loader
   ```

   

### 10.4 使用webpack处理css中的路径

1. 运行 `cnpm i url-loader -D`

2. 在 `rules`中新增一个规则：

   ```js
   { test: /\.jpg|jpeg|png|gif|svg$/, use: 'url-loader' } // 处理 样式表中 图片路径的loader
   ```

### 10.5 使用babel处理高级JS语法

1. 运行命令安装两套包：

   + 第一个套命令：

     ```
     cnpm install babel-loader@7 babel-core  babel-plugin-transform-runtime -D
     ```
     
     ```
     cnpm i babel-preset-stage-0 babel-preset-env -D
     ```

   + 第二套命令：

     ```
     暂时不用
     ```

2. 添加 `rules`规则：

   ```js
   { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ } // 处理JS高级语法的loader ; 注意： 一定要添加 exclude 排除项，把 node_modules 目录排除
   ```
   
   ```
   暂时启用
   {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
    ```


3. 在项目根目录中，添加一个 `.babelrc` 配置文件：

   ```json
   {
     "presets": ["env", "stage-0"],
     "plugins": ["transform-runtime"]
   }
   ```

### 10.6 处理 字体文件路径问题

1. 还是使用 `url-loader` 进行处理

2. 添加 `rules`规则：

   ```
   { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader' }, // 处理 字体 文件的 loader
   ```

   

## 11. ES6 中模块化规范

1. 暴露成员方式1： `export default { }`
   1. 每个模块中，只能使用1次
   2. 这种方式暴露的成员，在接收的时候，可以使用任意名称来接收；
2. 暴露成员方式2：`export var a = 10`
   1. 每个模块中可以多次使用 `export` 暴露成员给外界；
   2. 暴露的成员，必须使用 `import {} from '模块'`来接收
   3. 暴露的成员，在接收的时候，必须使用指定的名称来接收；但是，接收完以后；可以使用 `as` 关键字改名
3. 导入成员的三种方式：
   1. `import obj from '模块'`
   2. `import '模块'`
   3. `import { 需要按需接收的成员 } from '模块'`   或 `import obj, { 按需导入的成员 } from '模块'`



## 相关文章

[babel-preset-env：你需要的唯一Babel插件](https://segmentfault.com/p/1210000008466178)
[Runtime transform 运行时编译es6](https://segmentfault.com/a/1190000009065987)