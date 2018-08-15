// 字符串数组和数字数组比较
function compare(a,b){
	if (a>b) {return 1}
		else if (a<b) {return -1}
			else if (a=b) {return 0}
}

var arr = [0,1,20,15,5];
console.log(arr.sort(compare))