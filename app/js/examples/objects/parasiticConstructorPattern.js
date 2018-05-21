// Parasitic Constructor Pattern
// The parasitic constructor pattern is typically a fallback when the other patterns fail. The basic idea
// of this pattern is to create a constructor that simply wraps the creation and return of another object
// while looking like a typical constructor.
//
// This pattern allows you to create constructors for objects that may not be possible otherwise. For
// example, you may want to create a special array that has an extra method. Since you don’t have
// direct access to the Array constructor, this pattern works:

function SpecialArray() {
  // Create the array
  var values = new Array();

  // Add the values
  values.push.apply(values, arguments);

  // Assign the method
  values.toPipedString = function() {
    return this.join('|');
  }
  
  // Return it
  return values;
}

var colours = new SpecialArray('Red','Blue','Green','Yellow','Black');
// console.log(colours.toPipedString());