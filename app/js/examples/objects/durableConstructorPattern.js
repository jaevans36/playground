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
  o.sayAlbumName = function() {
    console.log(name);
  };

  // Return the object
  return o;
}

var albumOne = new Album('Something something', 12, 'August');
// albumOne.sayAlbumName(); // 'Something something'