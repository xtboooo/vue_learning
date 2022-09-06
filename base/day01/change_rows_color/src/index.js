// 1.使用es6导入语法, 导入jQuery
import $ from "jquery"

// 导入样式, 在webpack中, 一切皆模块, 都可以用ES6语法进行导入和使用
import "./css/index.css"
import "./css/index.less"

// 1.导入图片, 得到图片文件
import logo from "./images/logo.jpg"
// 2.给img标签的src动态赋值
$(".box").attr("src", logo)

// 2.定义jQuery的入口函数
$(function () {
    // 3.实现奇偶行变色
    $("li:odd").css("background-color", "pink")
    $("li:even").css("background-color", "cyan")
})

// 定义一个装饰器函数
function info(target){
    target.info = "Person info"
}
// 定义一个普通的类
@info
class Person{}

console.log(Person.info)