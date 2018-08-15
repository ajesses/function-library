function Person(name,age）{
	this.name = name;
	this.age = age;
}
Person.prototype.getAge = function() {
	console.log(this.age);
}
Person.prototype.getName = function() {
	console.log(this.name);
}
function Student(name,age,className) {
	Person.call(this,name,age);
	this.className = className;
}
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student;

Student.prototype.getClassName = function() {
	console.log(this.className);
}
Student.prototype.hi = function() {
	console.log(this.name + 'is learning' + this.age + this.className)
}

var st = new Student('jesse',25,'class 1, grade 1');

st.hi();