// Prototype pattern
//
// The benefi t of using the prototype is that all of its properties and methods are shared among object instances
//

function Person(name, age, sex, job) {
  this.name = name,
  this.age = age,
  this.sex = sex,
  this.job = job
}

Person.prototype.sayName = function() {
  console.log(this.name);
};

var person6 = new Person('Jay', 12, 'Male', 'Front-end');
// person6.sayName();
// console.log(person6); // Jay

var person7 = new Person('John', 12, 'Male', 'Front-end');
// person7.sayName();
// console.log(person7); // John

// console.log(person6.sayName == person7.sayName); // true