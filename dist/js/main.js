(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Main JS
// Getter and Setter example

var book = {
  __year: 2004,
  edition: 1
};

Object.defineProperty(book, 'year', {
  get: function get() {
    return this.__year;
  },
  set: function set(newYear) {
    if (newYear > 2004) {
      this.__year = newYear;
      this.edition += newYear - 2004;
    }
  }
});

console.log(book.year);

book.year = 2006; // this is only possible because the setter is in place

console.log(book);

// DEPRECATED
// book.__defineGetter__("year", function () {
//   return this.__year;
// });

// book.__defineSetter__("year", function(newYear) {
//   if (newYear > 2004) {
//     this.__year = newYear;
//     this.edition += newYear - 2004;
//   }
// });
},{}]},{},[1])