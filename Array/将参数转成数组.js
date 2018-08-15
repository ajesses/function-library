function a(name,age,job,location,area){

	var _arguments = Array.prototype.slice.apply(arguments)
	// console.log(arguments.length)
	console.log(_arguments)
}

a('jessewang',25,'IT','changzhou')
// console.log(a.length)

// console.log(a.name)