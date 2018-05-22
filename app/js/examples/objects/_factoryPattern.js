// Factory Pattern
// Although this solves the problem of creating multiple similar objects, this pattern
// doesn't address the issue of object identification (What type of object an object is).

function createPerson(name, age, sex, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.sex = sex;
  o.job = job;
  o.sayName = function() {
    console.log(this.name);
  }
  return o;
}

var person1 = createPerson('Jay', 32, 'Male', 'Front-end');
var person2 = createPerson('John', 25, 'Male', 'Back-end');