<script>
	function Person() {}
	var person = new Person();
	console.log(person.__proto__ === Person.prototype)
	console.log(Person === Person.prototype.constructor)
	console.log(Object.getPrototypeOf(person) === Person.prototype)
	console.log(person.constructor === Person)
	console.log(person.constructor === Person.prototype.constructor)
</script>