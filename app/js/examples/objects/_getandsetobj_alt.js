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
    set: function(newYear) {
      if (newYear > 2004) {
        this._year = newYear;
        this.edition += newYear - 2004;
      }
    },
    get: function() {
      return this._year;
    }
  }
});

// console.log(moreBooks);

// moreBooks.year = 2008;

// console.log(moreBooks);