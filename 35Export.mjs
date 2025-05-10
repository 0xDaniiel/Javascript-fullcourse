// Exported files

// Named export for a function that capitalizes a string
export const CAPITALISE_LETTERS = (str) => str.toUpperCase();
/**
 * This function takes a string as input and converts all the characters in the string to uppercase.
 * Example: "hello" -> "HELLO"
 */

// Types of export

/*
  **Named Exports:**
    - With named exports, you can export multiple values (functions, constants, variables, etc.) from a module by giving each value a name.
    - Named exports are explicit and can be imported by their exact name.
    - You can export multiple items using named exports in a single module.
*/

// Exporting multiple values using named exports
export const PI = 3.14; // Exporting a constant
export function double(num) {
  // Exporting a function
  return num * 2;
}

/*
  **Default Export:**
    - Default exports are used when you want to export only one value from a module.
    - A module can only have one default export.
    - You can import a default export using any name you choose.
*/

// Exporting a single value (function) using default export
const greet = (name) => `Hello, ${name}!`;
export default greet;

/*
  **Summary:**
    - Named exports allow you to export multiple values by their name, which are then imported using the same name.
    - Default export allows you to export a single value as the "default," which can be imported using any name you choose.
    - In practice, default exports are useful when the module exports a primary function or value, while named exports are used for utility functions, constants, or multiple values.

*/
