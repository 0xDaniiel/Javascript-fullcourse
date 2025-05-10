/***************************************************************
 * CASE SENSITIVITY IN VARIABLES
 ***************************************************************/

// JavaScript variable names are **case-sensitive**
var name = "Javascript";
nAME = "JScript"; // ❌ Error: nAME is not declared

// Always declare variables before using them, and use consistent casing.
// Recommended: use camelCase for variable names
// Example:
let myVariableName = "value";

/***************************************************************
 * BASIC MATHEMATICAL OPERATIONS IN JAVASCRIPT
 ***************************************************************/

// ADDITION
var x = 10;
var y = 20;
var sum = x + y;
console.log("Addition (x + y):", sum); // Output: 30

// SUBTRACTION
var a = 10;
var b = 20;
var difference = a - b;
console.log("Subtraction (a - b):", difference); // Output: -10

// MULTIPLICATION
var d = 10;
var e = 20;
var product = d * e;
console.log("Multiplication (d * e):", product); // Output: 200

// DIVISION
var g = 10;
var h = 20;
var quotient = g / h;
console.log("Division (g / h):", quotient); // Output: 0.5

/***************************************************************
 * INCREMENT AND DECREMENT
 ***************************************************************/

// INCREMENT
var j = 10;
j++; // Same as: j = j + 1
console.log("Incremented j:", j); // Output: 11

// DECREMENT
var k = 10;
k--; // Same as: k = k - 1
console.log("Decremented k:", k); // Output: 9
