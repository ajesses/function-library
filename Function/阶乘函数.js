// 阶乘函数用递归算法，函数内部调用自身，用arguments.callee代替自身函数名
function sum(num){
	if (num <= 1) {
		return 1
	}else{
		return num * arguments.callee(num-1)
	}
}
// console.log(sum(3));