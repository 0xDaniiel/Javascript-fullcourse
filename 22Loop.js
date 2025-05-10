// Data structure holding contact information
var contacts = [
  {
    name: "Dan",
    age: 5,
    hobbies: ["exercising", "coding", "farming"],
  },
  {
    name: "Dave",
    age: 6,
    hobbies: ["coding", "farming", "exercising"],
  },
  {
    name: "Daniel",
    age: 7,
    hobbies: ["farming", "exercising", "coding"],
  },
];

// Function to look up a contact's information based on name and property
function lookUpProfile(contactName, property) {
  // Looping through the contacts array to find the matching contact
  for (var i = 0; i < contacts.length; i++) {
    // Checking if the current contact's name matches the input name
    if (contacts[i].name === contactName) {
      // If the contact exists, return the requested property or "No such property"
      // Note: Use the "||" operator to return a default message if the property doesn't exist
      return contacts[i][property] || "No such property";
    }
  }

  // If no contact with the provided name is found, return "No such contact"
  // Tip: It's better to return after the loop if no match is found, rather than inside it.
  return "No such contact";
}

// Test case where both name and property exist
var result1 = lookUpProfile("Dan", "age");
console.log(result1); // Output: 5 (because Dan exists and has an "age" property)

// Test case where the name does not exist in the contacts list
var result2 = lookUpProfile("Bob", "age");
console.log(result2); // Output: No such contact (because Bob is not in the contacts list)

// Test case where the property does not exist for the contact
var result3 = lookUpProfile("Dan", "skills");
console.log(result3); // Output: No such property (because Dan does not have a "skills" property)
