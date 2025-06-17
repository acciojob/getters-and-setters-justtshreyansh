//complete this code
class Person {
	constructor(name,age){
		this._name = name;
		this._age =age;
	}

	get get_name(){
		return this._name;
	}
	set set_age(age){
		this._age = age;
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

// Creating a Person instance
const person = new Person("John", 25);
console.log(person.get_name);  // Output: John

person.set_age = 30;  // Using the setter to change the age
console.log(person._age);  // Output: 30

// Creating a Student instance
const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

// Creating a Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach();  // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
