// Task 1

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  sayHello = () => {
    console.log(`Hello ${this.name}`);
  }
};

const person1 = new Person('John', 30);

console.log(person1.name);
console.log(person1.age);

// Task 2
person1.sayHello();

// Task 3

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  study = () => {
    console.log(`${this.name} is learning JS.`);
  }
};

const student1 = new Student('Yuriy', 56, 'ur3vhc');  

console.log(student1.studentId);

// student1.sayHello();
student1.study();
student1.studentId = 'ur3vhc.1969';
console.log(student1.studentId);

// example of inheritance
class Teacher extends Person {
  teacherId = null;
  constructor(name, subject, id) {
    super(name);
    this.subject = subject;
    this.teacherId = id;
  }

  teach = () => {
    console.log(`${this.name} is teaching ${this.subject}.`);
  }
}

const teacher1 = new Teacher('Maxim', 'JS', 't001');

console.log(teacher1.name);
console.log(teacher1.subject);
console.log(teacher1.teacherId);
teacher1.teach();