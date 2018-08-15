{
	Object.prototype.toString.call([])    // "[object Array]"
	Object.prototype.toString.call({})    // "[object Object]"
	Object.prototype.toString.call(2)    // "[object Number]"
}

{
	[] instanceof Array   // true
}