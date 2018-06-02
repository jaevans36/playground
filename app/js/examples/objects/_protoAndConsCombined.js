// Combining Constructor and Prototype Pattern for custom types
// This is useful because using the prototype constructor on its own,
// means that values are shared between all objects created with this
// prototype. With this approach, each instance ends up with its own
// copy of instance properties.

function PersonConst(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['Jim', 'Dwight'];
}

PersonConst.prototype = {
    constructor: Person,
    sayName: function() {
        alert(this.name);
    }
}

var person1 = new PersonConst('Nicholas', 29, 'Software Engineer');
var person2 = new PersonConst('Greg', 27, 'Doctor');

// console.log(person1);

person1.friends.push('Van');

// alert(person1.friends); // Jim, Dwight, Van
// alert(person2.friends); // Jim, Dwight
// alert(person1.friends === person2.friends); //false
// alert(person1.sayName === person2.sayName); //true