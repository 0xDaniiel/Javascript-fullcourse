// Math.random: Generates random decimal numbers between 0 (inclusive) and 1 (exclusive)
// This can never be exactly 1.
function randomDec() {
  return Math.random(); // Returns a random decimal between 0 (inclusive) and 1 (exclusive)
}
console.log(randomDec()); // Example output: 0.5742390025671079

// Math.floor: Rounds down the decimal number to the nearest whole number (integer)
function roundDecimals() {
  var roundDown = Math.floor(Math.random() * 20); // Random number from 0 to 19
  console.log(roundDown); // Example output: 17
}
roundDecimals();

/* 
  The explanation of how Math.floor works:
  - First, we generate a random decimal between 0 (inclusive) and 1 (exclusive).
  - Then, we multiply that number by 20 to get a number between 0 (inclusive) and 20 (exclusive).
  - Math.floor rounds down the result to the nearest whole number, giving us an integer from 0 to 19.
*/

// Generates whole numbers within a specific range (min to max)
function range(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; // Returns random integer between min (inclusive) and max (exclusive)
}
console.log(range(1, 9)); // Example output: 6

/* Explanation:
  - Multiply Math.random() by (max - min) to get a number between 0 and (max - min).
  - Add min to shift the result into the desired range (min to max).
*/

// Math.round: Rounds a number to the nearest integer (rounds up or down)
var x = 3.45678;
x = Math.round(x); // Rounds x to 3
console.log(x); // Output: 3

// Math.ceil: Rounds a number UP to the nearest integer
let y = 3.45678;
y = Math.ceil(y); // Rounds y up to 4
console.log(y); // Output: 4

// Math.pow: Raises a base to the power of an exponent
let z = Math.pow(2, 3); // 2 raised to the power of 3 (2 * 2 * 2)
console.log(z); // Output: 8

// Math.sqrt: Calculates the square root of a number
let a = Math.sqrt(16); // Square root of 16 is 4
console.log(a); // Output: 4

// Math.abs: Returns the absolute value of a number (distance from 0)
let b = Math.abs(-10); // Absolute value of -10 is 10
console.log(b); // Output: 10

// Math.max and Math.min: Return the largest or smallest value from a set of numbers
var i = 8;
var j = 7;
var k = 10;

var l = Math.max(i, j, k); // Returns the largest number
console.log(l); // Output: 10

var m = Math.min(i, j, k); // Returns the smallest number
console.log(m); // Output: 7

// Math.PI: Provides the value of Pi (approx. 3.14159)
var n = Math.PI;
console.log(n); // Output: 3.141592653589793

// parseInt: Converts a string into an integer (removes decimals and converts to base 10)
function convertInteger(str) {
  return parseInt(str); // Converts string to integer
}
console.log(convertInteger("57")); // Output: 57

/* 
  parseInt with Radix: The radix parameter specifies the base of the numeral system.
  - Base 2 is binary, base 10 is decimal, base 16 is hexadecimal, etc.
*/
function baseInt(str) {
  return parseInt(str, 2); // Converts a binary string to an integer
}
console.log(baseInt("11111111")); // Output: 255 (binary "11111111" is equal to decimal 255)
