// Testing Objects for Properties
/*
You can check if an object has a property using the hasOwnProperty method 
*/

var sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

function checkPropertyExistence(propertyKey) {
  if (sampleObject.hasOwnProperty(propertyKey)) {
    console.log(`sampleObject has the property: ${propertyKey}`);
  } else {
    return "Property not found";
  }
}

// Check if 'key1' exists in the object
checkPropertyExistence("key1"); // Output: sampleObject has the property: key1

// Check if 'key5' exists in the object
console.log(checkPropertyExistence("key5")); // Output: Property not found

// MANIPULATING COMPLEX OBJECTS
var developers = [
  {
    name: "Dan",
    profession: "Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    jobType: "Remote",
  },

  {
    name: "Danny",
    profession: "Programmer",
    skills: ["Next.js", "React.js", "Tailwind CSS"],
    session: true,
  },
];

// ACCESSING NESTED OBJECTS
var personalDetails = {
  name: {
    firstName: "Dan",
    languages: {
      basic: "HTML",
      styling: "Tailwind CSS",
      complex: {
        advanced: "TypeScript",
        framework: "Next.js",
        library: "React.js",
      },
    },
    hobbies: ["Coding", "Reading", "Exercising"],
    age: 5,
  },
};

// Using dot notation
console.log(personalDetails.name.firstName); // Output: Dan
console.log(personalDetails.name.languages.complex.advanced); // Output: TypeScript
console.log(personalDetails.name.hobbies[1]); // Output: Reading

// Using bracket notation (useful for dynamically accessing properties)
console.log(personalDetails["name"]["languages"]["complex"]["advanced"]); // Output: TypeScript
