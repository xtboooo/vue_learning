const path = require("path")

// 1.导入html-webpack-plugin这个插件, 得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 2.new 构造函数, 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    // 指定要复制哪个文件
    template: "./src/index.html",
    // 指定出来的文件名存放在哪里
    filename: "./index.html"
})
// 左侧的h
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const cleanWebpackPlugin = new CleanWebpackPlugin()

// 使用node.js中的导出语法, 向外导出一个webpack配置对象
module.exports = {
    devtool: "eval-source-map",c
    // devtool: "nosources-source-map",
    // 代表webpack的运行模式, 可选的有 development 和 production
    mode: "development",
    // 指定要处理哪个文件
    entry: path.join(__dirname, "./src/index.js"),
    // 指定生成的文件要放到哪里
    output: {
        // 存放到那个目录
        path: path.join(__dirname, "dist"),
        // 生成的文件名
        filename: "js/bundle.js"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "./"),
            watch: true
        }
    },
    // 插件的数组, 将来webpack在运行时, 会加载并运行这些插件
    plugins: [
        htmlPlugin,
        cleanWebpackPlugin,
    ],
    devServer: {
        // 自动打开浏览器
        open: true,
        // 在http协议中, 如果端口号是80, 则可以被省略
        // port: 80
        // 指定运行的地址
        // host: "127.0.0.1"
    },
    module: {
        // 定义了不同模块的loader
        rules: [
            // .css
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            // .less
            { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
            // 图片文件
            { test: /\.jpg|png|gif$/, use: "url-loader?limit=2000&outputPath=images" },
            // 使用babel-loader处理高级的js语法
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }
        ]
    },
}