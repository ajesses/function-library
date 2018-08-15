// 第一个括号： 捕获WEB地址的协议部分（匹配在冒号和俩个正斜杠前面的任何单词）
// 第二个括号： 捕获地址中的域地址部分（匹配/或：之外的一个或多个字符）
// 第三个括号： 捕获端口号（匹配冒号后面的零个或多个数字）
// 第四个括号： 捕获web地址置顶的路径和/或页信息（匹配不包括#或空格符的任何字符序列）
var pattern = /(\w+):\/\/([^/:]+)(:\d*)?([^#]*)/
var str = 'https://www.w3cschool.cc:80/html/html-tutorial.html'
str.match(pattern)
console.log(RegExp.$1)
console.log(RegExp.$2)
console.log(RegExp.$3)
console.log(RegExp.$4)
