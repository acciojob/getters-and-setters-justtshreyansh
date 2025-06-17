//complete this code
class Person {
	constructor(name,age){
		this._name = name;
		this.age =age;
	}

	get get_name(){
		return this._name;
	}
	set set_age(age){
		this.age = age;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age);
	}

	study(){
		console.log(this._name + " is studying")
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}

	teach(){
		console.log(this._name +" is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
