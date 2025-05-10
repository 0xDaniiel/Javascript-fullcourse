/***************************************************************
 * The OR Operator (||) - Logical OR
 ***************************************************************/

/*
The OR operator `||` returns true if at least one of the conditions is true.
*/

function nestedIF(num) {
  if (num > 10) {
    return "Greater than 10";
  }
  if (num < 20) {
    return "Less than 20"; // In this case, since 15 is both greater than 10 and less than 20, it would print "Greater than 10"
  }
}

console.log(nestedIF(15)); // Output: "Greater than 10"

/*
The OR operator (`||`) can be used to combine conditions so that only one side of the condition needs to be true.
*/

function orOperator(num) {
  if (num > 10 || num < 7) {
    return true; // Returns true if either condition is true
  }
  return false; // Optional: add a return value for when the condition isn't met
}

console.log(orOperator(6)); // Output: true (because 6 is less than 7)

/***************************************************************
 * ELSE STATEMENT - Provides the opposite of the if condition
 ***************************************************************/

/*
The `else` statement is executed if the `if` condition is false.
*/

function ifElse(num) {
  if (num > 10) {
    return "Greater than 10";
  } else {
    return "Less than 10"; // This is returned when num is not greater than 10
  }
}

console.log(ifElse(5)); // Output: "Less than 10"

/***************************************************************
 * ELSE IF STATEMENT - A chain of conditions
 ***************************************************************/

/*
`else if` is used to check multiple conditions in sequence.
If the first condition is false, it will check the second condition, and so on.
*/

function elseIfstatement(str) {
  if (str === "Hello") {
    return "Hello World";
  } else if (str !== "Hello") {
    return "Hey World"; // This will run because "Hi" is not equal to "Hello"
  } else {
    return "Goodbye"; // This won't run as it is checked after the other conditions
  }
}

console.log(elseIfstatement("Hi")); // Output: "Hey World"

/***************************************************************
 * Notes:
 ***************************************************************

1. **OR (`||`) Operator**: The OR operator only requires one condition to be true for the whole expression to return true.

2. **If/Else**: The `else` statement provides an alternative if the initial `if` condition isn't met. It ensures the code has a fallback value.

3. **Else If**: This allows you to chain multiple conditions together. If the first one fails, the program checks the next condition, and so on, until one condition is true or the final `else` runs.

*/
