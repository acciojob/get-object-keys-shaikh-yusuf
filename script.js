//your JS code here. If required.
const student = {
  name: "John Doe"
};

// Add a property to the Object prototype called 'getKeys()'
Object.prototype.getKeys = function() {
  // Return an array of all the keys in the object
  return Object.keys(this);
};

// Test the getKeys() method on the 'student' object
const keysArray = student.getKeys();
console.log(keysArray)
