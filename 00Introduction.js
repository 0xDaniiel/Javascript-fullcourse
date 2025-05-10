/***************************************************************
 * JavaScript Data Types
 ***************************************************************/

// 1. Undefined
// 2. Null
// 3. Boolean
// 4. String
// 5. Number
// 6. Object (including arrays and functions)

/***************************************************************
 * Variable Declaration Keywords
 ***************************************************************/

// var   → Function-scoped. Can be re-declared and updated.
// let   → Block-scoped. Can be updated but not re-declared in the same scope.
// const → Block-scoped. Cannot be updated or re-declared.

// Example:
var x; // Declaration
let y = 10; // Declaration and initialization
const PI = 3.14; // Constant declaration (must be initialized)

/***************************************************************
 * Variable Assignment
 ***************************************************************/

// Declaring a variable without assigning a value:
var a; // 'a' is declared but undefined

// Declaring and assigning:
var b = 2; // 'b' is declared and assigned the value 2

// Assigning a new value (no need to re-declare):
a = 7; // 'a' now holds the value 7

// The equal sign (=) is the assignment operator.

/***************************************************************
 * Example: Variable Manipulation
 ***************************************************************/

var a = 5;
var b = 10;
var c = "I am a ";

a = a + 1; // a becomes 6
b = b - 1; // b becomes 9
c = c + "string"; // c becomes "I am a string"

console.log(a); // 6
console.log(b); // 9
console.log(c); // "I am a string"
