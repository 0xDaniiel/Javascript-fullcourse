/***************************************************************
 * COMPARISON OPERATORS & NOT OPERATORS
 ***************************************************************/

/* 
Comparison operators allow us to compare values and determine 
if they are equal, not equal, or satisfy some other condition.
*/

/***************************************************************
 * Equality Operator (==) - Compares values, allowing type coercion
 ***************************************************************/

// Compares the values but allows type conversion (e.g., number 7 and string "7" are considered equal)
function compare(x, y) {
  if (x == y) {
    return "Equal"; // Returns "Equal" if values are considered the same after type coercion
  }
  return "Not equal"; // Returns "Not equal" if values are different
}

console.log(compare(7, "7")); // Output: "Equal" (due to type coercion in the `==` operator)

/***************************************************************
 * Strict Equality Operator (===) - Compares both values and data types
 ***************************************************************/

// Strict equality checks both value and type, without type coercion
function compareNum(x, y) {
  if (x === y) {
    return "Equal"; // Returns "Equal" if both value and type match
  }
  return "Not Equal because of string"; // Returns this message if values and types do not match
}

console.log(compareNum(7, "7")); // Output: "Not Equal because of string" (types are different)

/***************************************************************
 * Inequality Operator (!=) - Checks if values are not equal (with type coercion)
 ***************************************************************/

/* 
The `!=` operator checks for inequality between two values but allows for type coercion.
The `!` (not) operator negates the condition (i.e., opposite of true/false).
*/

// Example with inequality operator `!=`
function notOperator(num) {
  if (num != 99) {
    return "True, Not equal"; // Returns this if num is not equal to 99
  }
  return "Equal"; // Returns this if num is equal to 99
}

console.log(notOperator(100)); // Output: "True, Not equal" (because 100 is not equal to 99)

/***************************************************************
 * Strict Inequality Operator (!==) - Checks if values are NOT equal AND also considers data types
 ***************************************************************/

// Strict inequality checks both value and type and returns true if they are not equal
function strictNotOperator(num) {
  if (num !== 99) {
    return "Not equal because of string"; // Returns if values and/or types do not match
  }
  return "Equal"; // Returns if both values and types are equal
}

console.log(strictNotOperator("99")); // Output: "Not equal because of string" (types are different)
