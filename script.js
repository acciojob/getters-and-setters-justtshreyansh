class Person {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	get name() { // Changed to 'name' for standard getter
		return this._name;
	}

	get age() { // Adding the getter for age
		return this._age;
	}

	set age(age) { // Changed to 'age' for standard setter
		this._age = age;
	}
}

class Student extends Person {
	constructor(name, age) {
		super(name, age);
	}

	study() {
		console.log(this._name + " is studying");
	}
}

class Teacher extends Person {
	constructor(name, age) {
		super(name, age);
	}

	teach() {
		console.log(this._name + " is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;