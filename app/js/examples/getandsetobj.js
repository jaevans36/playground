// Getter and Setter example

var book = {
  __year: 2004,
  edition: 1
};

Object.defineProperty(book, 'year', {
  get : function() {
    return this.__year;
  },
  set: function(newYear) {
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