// Objects are used to store data, similar to arrays, but instead of using indexes, we use properties (keys).
// Arrays [] vs Objects {}

var aboutMe = {
  name: "Dan", // Property: name, Value: "Dan"
  age: 5, // Property: age, Value: 5
  hobby: ["Coding", "Reading", "Exercising"], // Property: hobby, Value: an array
};

// Adding new properties dynamically using dot and bracket notation
aboutMe.profession = "Developer"; // Using dot notation
aboutMe["city"] = "New York"; // Using bracket notation

console.log(aboutMe); // Output will include the newly added properties "profession" and "city"

// Accessing object properties
/*
In an object, the left-hand side of the colon (:) is the "key", and the right-hand side is the "value".
To access a value, we use the object name and the key, either via dot notation or bracket notation.
*/

// Dot notation (simple and easy to use)
console.log(aboutMe.name); // Output: "Dan"

// Bracket notation (useful when the property name has spaces or is stored in a variable)
var spaceObjects = {
  "an entry": true, // Property: "an entry", Value: true
  "second entry": false, // Property: "second entry", Value: false
  "this course": "Javascript", // Property: "this course", Value: "Javascript"
};

var getCourse = spaceObjects["this course"];
console.log(getCourse); // Output: "Javascript"

// Accessing object properties with variables
var myObj = {
  key: "value", // Property: key, Value: "value"
};

var myKey = "key"; // Variable holding the key name

console.log(myObj[myKey]); // Output: "value"
// Here, we use bracket notation and the variable `myKey` to access the value tied to the key "key".

// Another example with a more complex object
var footballer = {
  name: "Messi", // Property: name, Value: "Messi"
  age: 33, // Property: age, Value: 33
  position: "Forward", // Property: position, Value: "Forward"
  team: "Barcelona", // Property: team, Value: "Barcelona"
};

var messiTeam = "team"; // Variable holding the key name "team"
console.log(footballer[messiTeam]); // Output: "Barcelona"

var messiAge = "age"; // Variable holding the key name "age"
console.log(footballer[messiAge]); // Output: 33

// Checking if a property exists in an object
if ("name" in aboutMe) {
  console.log("Property 'name' exists in aboutMe object.");
}

// Looping through Object Properties
for (let key in aboutMe) {
  console.log(key + ": " + aboutMe[key]); // Output: name: Dan, age: 5, hobby: Array(3), profession: Developer, city: New York
}

// Removing Properties from Objects
delete aboutMe.age; // Removing the "age" property
console.log(aboutMe); // Output will no longer include "age"
