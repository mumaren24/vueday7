const Htmlplug = require('html-webpack-plugin');
const htmlplug = new Htmlplug({
    template:'./src/index.html',
    filename:'index.html'
})

// 导入插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// new 一个插件的实例对象
const vuePlugin = new VueLoaderPlugin()


module.exports = {
    plugins:[htmlplug,vuePlugin],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            { test: /\.jpg|jpeg|png|gif|svg$/, use: 'url-loader' }, // 处理 样式表中 图片路径的loader
            { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader' }, // 处理 字体 文件的 loader
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    resolve: {
        alias: {
            // 为 import 的包，起别名，这样，在 导入包的时候，会根据这里的进行导入；
            vue: 'vue/dist/vue.js'
        }
    }
}