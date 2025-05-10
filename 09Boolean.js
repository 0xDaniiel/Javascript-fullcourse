/***************************************************************
 * BOOLEAN LOGIC AND CONDITIONAL STATEMENTS
 ***************************************************************/

/* 
There are only two boolean values: true and false.
Booleans are often used to make decisions in your code.
*/

/***************************************************************
 * Using an if statement
 ***************************************************************/

function howTrue(isTrue) {
  if (isTrue) {
    return "Yes, it's true"; // If 'isTrue' is true, return this
  }
  return "No, it's not"; // If 'isTrue' is false, return this
}

console.log(howTrue(true)); // Output: "Yes, it's true"

/***************************************************************
 * Comparison operators
 ***************************************************************/

/* 
Equality operator (==) checks if two values are equal, but it does NOT 
check the data type. It can coerce different types into the same type.
*/

// Example with equality operator (==)
function testEqual(num) {
  if (num == 10) {
    return true;
  }
  return "not equal"; // Will return this if num is not equal to 10
}

console.log(testEqual(12)); // Output: "not equal"

/***************************************************************
 * Strict equality operator (===)
 ***************************************************************/

/* 
Strict equality (===) checks both the value and the data type.
Unlike ==, it does not coerce values to match types.
*/

// Example with strict equality operator (===)
function testStrict(num) {
  if (num === 10) {
    return true; // Returns true if the number is exactly 10 (same type + value)
  }
  return "not equal"; // Returns "not equal" if num is not exactly 10
}

console.log(testStrict(10)); // Output: true

/***************************************************************
 * Comparing different types with == and ===
 ***************************************************************/

// Checking comparison between 10 (number) and "10" (string)
function testStrictEqual(num) {
  if (num === 10) {
    return true; // Returns true only if num is exactly 10 (number)
  }
  return "not equal"; // Returns "not equal" if num is not exactly 10
}

console.log(testStrictEqual("10")); // Output: "not equal" (since "10" is a string, not a number)

/* 
With double equality (==), JavaScript allows for type coercion:
It will convert "10" (a string) to 10 (a number), and they will match.
*/
function doubleEqual(num) {
  if (num == "10") {
    return true; // Returns true because "10" (string) is converted to 10 (number)
  }
  return false;
}

console.log(doubleEqual(10)); // Output: true (because 10 == "10" after type coercion)
