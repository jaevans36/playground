(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Main JS

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
  this.name = name, this.age = age, this.sex = sex, this.job = job, this.sayName = function () {
    console.log(this.name);
  };
}

var person3 = new Person('Jaymond', 34, 'Male', 'Front-end');
var person4 = new Person('Syl', 26, 'Male', 'Back-end');

// console.log(person3);
// Durable Constructor Pattern Example
//
// Durable constructor patterns are best used in secure environments 
// (those that forbid the use of this and new) or to protect data from the rest
// of the application (as in mashups).
//
// A durable constructor is a constructor that follows a pattern
// similar to the parasitic constructor pattern, with two differences: instance methods on the created
// object don’t refer to this, and the constructor is never called using the new operator. The Person
// constructor from the previous section can be rewritten as a durable constructor like this:

function Album(name, numOfTracks, releaseMonth) {
  // Create the object to return
  var o = new Object();

  // optional: define private variable/functions here

  // attach methods
  o.sayAlbumName = function () {
    console.log(name);
  };

  // Return the object
  return o;
}

var albumOne = new Album('Something something', 12, 'August');
// albumOne.sayAlbumName(); // 'Something something'
// Factory Pattern
// Although this solves the problem of creating multiple similar objects, this pattern
// doesn't address the issue of object identification (What type of object an object is).

function createPerson(name, age, sex, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.sex = sex;
  o.job = job;
  o.sayName = function () {
    console.log(this.name);
  };
  return o;
}

var person1 = createPerson('Jay', 32, 'Male', 'Front-end');
var person2 = createPerson('John', 25, 'Male', 'Back-end');
// Getter and Setter example

var book = {
  _year: 2004,
  edition: 1
};

Object.defineProperty(book, 'year', {
  get: function get() {
    return this._year;
  },
  set: function set(newYear) {
    if (newYear > 2004) {
      this._year = newYear;
      this.edition += newYear - 2004;
    }
  }
});

// console.log(book.year);

// book.year = 2006; // this is only possible because the setter is in place

// console.log(book);

// DEPRECATED
// book.__defineGetter__("year", function () {
//   return this._year;
// });

// book.__defineSetter__("year", function(newYear) {
//   if (newYear > 2004) {
//     this._year = newYear;
//     this.edition += newYear - 2004;
//   }
// });
// Defining multiple properties at the same time

// NOTE: By default, when using Object.defineProperties, writable is set to false
// So you mus specify that the value is writable for this function to work.

var moreBooks = {};

Object.defineProperties(moreBooks, {
  _year: {
    value: 2004,
    writable: true
  },
  edition: {
    value: 1,
    writable: true
  },
  year: {
    set: function set(newYear) {
      if (newYear > 2004) {
        this._year = newYear;
        this.edition += newYear - 2004;
      }
    },
    get: function get() {
      return this._year;
    }
  }
});

// console.log(moreBooks);

// moreBooks.year = 2008;

// console.log(moreBooks);
// Prototype pattern
//
// The benefi t of using the prototype is that all of its properties and methods are shared among object instances
//

function Person(name, age, sex, job) {
  this.name = name, this.age = age, this.sex = sex, this.job = job;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

var person6 = new Person('Jay', 12, 'Male', 'Front-end');
// person6.sayName();
// console.log(person6); // Jay

var person7 = new Person('John', 12, 'Male', 'Front-end');
// person7.sayName();
// console.log(person7); // John

// console.log(person6.sayName == person7.sayName); // true
},{}]},{},[1])