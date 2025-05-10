/* Ternary Operator:
   It's a shorthand for an `if...else` statement, often used when we need to assign a value based on a condition.
   The syntax is:
   condition ? expression_if_true : expression_if_false;
   
   It evaluates the condition:
   - If true, it returns the expression before the colon.
   - If false, it returns the expression after the colon.
*/

// Simple Ternary Operator Example
function tenaryOp(x, y) {
  return x > y ? true : false; // If x is greater than y, return true, else false
}
console.log(tenaryOp(6, 2)); // Output: true (because 6 is greater than 2)

// Multiple Ternary Operators
function checksign(num) {
  // First checks if num > 0, if true returns "Positive"
  // Else, checks if num < 0, if true returns "Negative"
  // Otherwise, returns "Zero"
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}

console.log(checksign(10)); // Output: Positive (because 10 > 0)
console.log(checksign(-10)); // Output: Negative (because -10 < 0)
console.log(checksign(0)); // Output: Zero (because it's neither positive nor negative)

/*
In the function checksign(num):
- First, the condition `num > 0` is checked. If it's true, it returns "Positive".
- If `num > 0` is false, it checks if `num < 0`. If that's true, it returns "Negative".
- If both conditions fail, the final return is "Zero", which is the result when num is neither positive nor negative.
*/

// Tip about Ternary Operator:
// - It's useful when you have simple conditional expressions.
// - However, using too many ternary operators in a single line can reduce code readability, so use them judiciously.

// Alternative to the ternary operator (for more complex cases):
// You might consider using `if...else` statements if the logic is too complicated or hard to read.
