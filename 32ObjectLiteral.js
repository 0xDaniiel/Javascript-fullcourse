/* Object literals are a fundamental syntax in JavaScript for creating objects. 
   They allow you to define objects and their properties and values in a concise and readable manner.
   - Object literals enable the creation of complex data structures by nesting objects and arrays.
   - They are commonly used for organizing and manipulating data in JavaScript programs.

   You can access object values using their keys, either with dot notation or bracket notation.
*/

// Writing concise object literals declaration with simple fields
let carDetails = {
  name: "Mercedes",
  model: "AMG 350",
  getPrice: function () {
    return 5000; // Returns the price of the car
  },
  printDesc: function () {
    console.log(this.name + " " + this.model); // Prints the car's name and model
  },
  year: 2023,
  // Shorter method syntax for function declaration
  getExpiry(newDate) {
    return (newDate = this.year + 50); // Returns the year after 50 years
  },
};

carDetails.printDesc(); // Calling the printDesc method (prints: Mercedes AMG 350)
console.log(carDetails.getExpiry()); // Calling the getExpiry method (prints: 2073)

// Nesting arrays of objects within an object
const carInventory = {
  cars: [
    {
      brand: "Toyota",
      model: "Camry",
      year: 2020,
      color: "blue",
    },
    {
      brand: "Honda",
      model: "Civic",
      year: 2018,
      color: "red",
    },
    {
      brand: "Ford",
      model: "Fusion",
      year: 2019,
      color: "silver",
    },
  ],
};

// Accessing an element within the nested array of objects
const selectedCarBrand = carInventory.cars[1].brand; // Accesses the brand of the second car (Honda)
console.log(selectedCarBrand); // Output: Honda

/* Shorter syntax when object keys and values have the same name
   If the property key and value name are the same, you can omit the repetition and just write the key once.
*/

const createPerson = (name, age, gender) => {
  // Old way (verbose)
  //   return {
  //     name: name,
  //     age: age,
  //     gender: gender,
  //   };

  // New, concise way
  return {
    name,
    age,
    gender,
  };
};

console.log(createPerson("Dan", 5, "Male"));
// Output: { name: "Dan", age: 5, gender: "Male" }
