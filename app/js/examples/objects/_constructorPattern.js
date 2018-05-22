
// Constructor Pattern
// This pattern is useful when you want to define your own custom types, similar
// to Object and Array, however with your own properties.
//
// Note: Constructor functions are defined with a capital for the initial letter
// this is to set them apart from other nonconstructor functions. Which is an OO
// convention.
//
// Using the constructor gives it the constructor function that points back to the original,
// whereas in the factory example, you are creating an entirly new object.
//
// An issue with constructor patterns is that, functions created on it
// are defined individually, meaning that one function is not the same another,
// even though it performs the same task. The prototype pattern fixes this.

function Person(name, age, sex, job) {
  this.name = name,
  this.age = age,
  this.sex = sex,
  this.job = job,
  this.sayName = function () {
    console.log(this.name);
  }
}

var person3 = new Person('Jaymond', 34, 'Male', 'Front-end');
var person4 = new Person('Syl', 26, 'Male', 'Back-end');

// console.log(person3);