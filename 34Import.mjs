/**
 * Import and Export in JavaScript:
 * Import and export functionality allows you to share code between different files. You can export functions, variables, or objects from one file and import them into another.
 * This is useful for organizing and modularizing your code, especially in larger applications.
 *
 * In ECMAScript modules, we use `import` to bring in code from another file and `export` to make code available to other files.
 * You must also change the file extension from `.js` to `.mjs` for ECMAScript modules in Node.js.
 */

// Importing a specific function from an external file (in this case, `CAPITALISE_LETTERS`)
import { CAPITALISE_LETTERS } from "./35Export.mjs";

// Using the imported function to convert a string to uppercase
const result = CAPITALISE_LETTERS("i am daniel");
console.log(result); // Output: I AM DANIEL

/*
  Explanation:
  - We imported the `CAPITALISE_LETTERS` function from the file `35Export.mjs`.
  - We used this function to convert the string `"i am daniel"` into uppercase.
  - This demonstrates how to import a specific function from another module and use it in the current file.
*/

// Importing everything from the `35Export.mjs` file and storing it in a single object
import * as everythingObj from "./35Export.mjs";

/**
 * The `* as` syntax imports all the named exports from a file into an object (in this case, `everythingObj`).
 * We can then access any of the exports from that file as properties of `everythingObj`.
 */

// Example: Accessing properties from the imported object
console.log(everythingObj.PI); // Output: 3.14 (assuming `PI` is exported from 35Export.mjs)
console.log(everythingObj.double(5)); // Output: 10 (assuming `double` is a function exported from 35Export.mjs)

/*
  Explanation:
  - We used `import * as everythingObj` to import all named exports from `35Export.mjs`.
  - The imported code is available as properties of the `everythingObj` object.
  - You can access each exported function, constant, or object using the property name from the module.
*/

// Importing specific named exports
import { PI, double } from "./35Export.mjs";

// Using the imported `PI` constant and `double` function
console.log(PI); // Output: 3.14
console.log(double(5)); // Output: 10

/*
  Explanation:
  - We directly imported the `PI` constant and `double` function from `35Export.mjs`.
  - This method is useful when you only need specific exports and want to avoid importing the entire module.
*/

// Importing a default export
import defaultexport from "./35Export.mjs";

// Using the default export function
console.log(defaultexport("Daniel")); // Output: Hello, Daniel!

/*
  Explanation:
  - A default export allows you to export a single value or function from a module.
  - We imported the default export (which in this case is a function) and used it to print a personalized greeting.
*/
