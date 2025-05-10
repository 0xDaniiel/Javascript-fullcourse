// Example of updating, adding, and deleting object properties

// Initial object with keys and values
var productInfo = {
  name: "Laptop",
  brand: "Dell",
  price: 1200,
};

// Updating an existing property using dot notation
productInfo.price = 1000; // Changing the price of the laptop
console.log(productInfo.price); // Output: 1000

// Adding a new property to the object using dot notation
productInfo.stock = 50; // Adding the stock property to the object
console.log(productInfo.stock); // Output: 50

// Deleting a property from the object
delete productInfo.stock; // Removing the stock property
console.log(productInfo.stock); // Output: undefined, as the stock property is deleted

// Using bracket notation to update a property
productInfo["brand"] = "HP"; // Changing the brand to "HP"
console.log(productInfo["brand"]); // Output: HP

// Using bracket notation to add a new property
productInfo["color"] = "Black"; // Adding color property
console.log(productInfo["color"]); // Output: Black

// Using bracket notation to delete a property
delete productInfo["color"]; // Removing the color property
console.log(productInfo["color"]); // Output: undefined

// Objects as lookups (Accessing values using keys)
var userProfile = {
  username: "john_doe",
  email: "john.doe@example.com",
  age: 28,
};

// Look up user data using keys
var userEmail = userProfile.email; // Accessing email using dot notation
console.log(userEmail); // Output: john.doe@example.com

// Look up user data using bracket notation (useful for dynamic keys or keys with spaces)
var userAge = userProfile["age"];
console.log(userAge); // Output: 28

// Objects are very useful for lookup purposes, as you can easily access values via their keys.
