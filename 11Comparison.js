/***************************************************************
 * COMPARISON WITH LOGICAL OPERATORS
 ***************************************************************/

/* 
Comparison operators can be combined with logical operators 
like AND (`&&`), OR (`||`), and NOT (`!`) to create more complex conditions.
*/

/***************************************************************
 * Greater Than (>) - Checks if one value is greater than another
 ***************************************************************/

function testGreaterThan(num) {
  if (num > 10) {
    return "Above 10"; // Returns this if num is greater than 10
  }
  return "Not above 10"; // Optional: Add return for clarity if condition isn't met
}

console.log(testGreaterThan(15)); // Output: "Above 10"

/***************************************************************
 * Greater Than or Equal To (>=) - Checks if one value is greater or equal to another
 ***************************************************************/

function test(num) {
  if (num >= 10) {
    return true; // Returns true if num is greater than or equal to 10
  }
  return false; // Returns false if num is less than 10
}

console.log(test(15)); // Output: true

/***************************************************************
 * Less Than (<) - Checks if one value is less than another
 ***************************************************************/

function lessThan(num) {
  if (num < 10) {
    return "Less than 10"; // Returns this if num is less than 10
  }
  return "False! Above 10"; // Returns this if num is greater than or equal to 10
}

console.log(lessThan(15)); // Output: "False! Above 10"

/***************************************************************
 * Less Than or Equal To (<=) - Checks if one value is less or equal to another
 ***************************************************************/

function less(num) {
  if (num <= 10) {
    return true; // Returns true if num is less than or equal to 10
  }
  return false; // Returns false if num is greater than 10
}

console.log(less(10)); // Output: true

/***************************************************************
 * Using AND Operator (&&) - Combines multiple conditions
 ***************************************************************/

/*
The AND (`&&`) operator ensures that both sides of the condition must be true for the block to execute.
This is a more readable and efficient alternative to nested `if` statements.
*/

function nestedIF(num) {
  if (num > 10 && num < 100) {
    return "Yes"; // Returns "Yes" if num is greater than 10 and less than 100
  }
  return "No"; // Returns "No" if either condition is false
}

console.log(nestedIF(20)); // Output: "Yes"

/***************************************************************
 * AND Operator Example - Checks if num is within a specific range
 ***************************************************************/

function andOperator(num) {
  if (num < 50 && num > 30) {
    return "Yes, num is less than 50, but greater than 30"; // Both conditions must be true
  }
  return "No, it's not"; // Returns this if either condition is false
}

console.log(andOperator(31)); // Output: "Yes, num is less than 50, but greater than 30"

/***************************************************************
 * Note on AND Operator:
 ***************************************************************/

/*
In the AND operator (`&&`), both conditions on the left and right sides must be true for the entire expression to be true.
*/
