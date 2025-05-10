/***************************************************************
 * DECIMALS (FLOATING-POINT NUMBERS)
 ***************************************************************/

// ADDITION
var a = 2.0 + 3.4;
console.log("2.0 + 3.4 =", a); // Output: 5.4

// SUBTRACTION
var b = 2.0 - 3.4;
console.log("2.0 - 3.4 =", b); // Output: -1.4

// MULTIPLICATION
var c = 2.0 * 3.4;
console.log("2.0 * 3.4 =", c); // Output: 6.8

// DIVISION
var d = 2.0 / 3.4;
console.log("2.0 / 3.4 =", d); // Output: ~0.588

/***************************************************************
 * REMAINDER (MODULUS) OPERATOR
 ***************************************************************/

var e = 11 % 3;
console.log("11 % 3 =", e); // Output: 2

// Common use case: checking for even or odd numbers
// Example:
var number = 6;
var isEven = number % 2 === 0;
console.log("Is 6 even?", isEven); // Output: true

/***************************************************************
 * COMPOUND ASSIGNMENT OPERATORS
 ***************************************************************/

// AUGMENTED ADDITION
var f = 7;
f += 3; // Same as: f = f + 3
console.log("f after += 3:", f); // Output: 10

// AUGMENTED SUBTRACTION
var g = 7;
g -= 3; // Same as: g = g - 3
console.log("g after -= 3:", g); // Output: 4

// AUGMENTED MULTIPLICATION
var h = 7;
h *= 3; // Same as: h = h * 3
console.log("h after *= 3:", h); // Output: 21

// AUGMENTED DIVISION
var i = 7;
i /= 2; // Same as: i = i / 2
console.log("i after /= 2:", i); // Output: 3.5
