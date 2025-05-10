/*
 CONST (Constant Variables)
`const` behaves similarly to `let` but with one major difference: once a variable is declared with `const`,
its value cannot be reassigned. 
This is why it's called "constant."

It's a good convention to write constant variables in all uppercase letters to distinguish them from other variables.
*/

const MY_NAME = "Daniel";
// MY_NAME = "Dan"; // Uncommenting this will throw an error because constants cannot be reassigned.
console.log(MY_NAME); // Output: "Daniel"

// Example with Arrays - Mutability of Arrays Declared with `const`
/*
Even though an array is declared using `const`, the contents (elements) of the array can still be mutated. 
This is because `const` only prevents reassignment of the entire array, not its elements.
*/

const LANGUAGES = ["Java", "C++", "Javascript", "Python"];

function updateLanguages() {
  "use strict";
  // Reassigning the entire array will throw an error
  // LANGUAGES = ["Typescript", "Swift", "Go"];  // Uncommenting this line will throw an error

  // However, mutating individual array elements is allowed
  LANGUAGES[0] = "C#"; // Update the first element (Java -> C#)
  LANGUAGES[1] = "C"; // Update the second element (C++ -> C)
  LANGUAGES[2] = "Kotlin"; // Update the third element (Javascript -> Kotlin)
}

updateLanguages();
console.log(LANGUAGES);
// Output: ["C#", "C", "Kotlin"]

/*
This demonstrates that the array itself (the reference to the array) cannot be reassigned, but the contents of the array can still be mutated.
*/

// Prevent Object Mutation
/*
In JavaScript, even objects declared with `const` can be mutated (i.e., their properties can be changed). 
To prevent this, we use `Object.freeze()`.
*/

const MATH_CONSTANTS = {
  pi: 3.14,
  e: 2.71,
};

// `Object.freeze` makes the object immutable (its properties cannot be changed)
Object.freeze(MATH_CONSTANTS);

try {
  // Attempt to change the value of `e` in the frozen object
  MATH_CONSTANTS.e = 3.89; // This would throw an error if the object is frozen
} catch (ex) {
  console.log(ex); // Output: TypeError: Cannot assign to read only property 'e' of object '#<Object>'
}

console.log(MATH_CONSTANTS);
// Output: { pi: 3.14, e: 2.71 }
// `MATH_CONSTANTS` is still the same as before because the mutation was prevented by `Object.freeze()`

/*
In summary:
- `const` makes the variable assignment immutable, but it does not make objects or arrays immutable.
- To make an object immutable, use `Object.freeze()`.
- Arrays declared with `const` can have their elements mutated, but the array itself (the reference) cannot be reassigned.
*/
