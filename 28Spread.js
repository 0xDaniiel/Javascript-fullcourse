// Using the Rest operator with function parameters
/*  
   The rest operator allows you to create a function that takes a variable number of arguments. 
   This is useful when you don't know beforehand how many arguments a function might receive.
*/

// Example 1: Using Rest Operator without Spread
const sumWithRest = (function () {
  return function sum(x, y, z) {
    const args = [x, y, z]; // Collects the arguments into an array called args
    return args.reduce((a, b) => a + b, 0); // Sums up all elements in the args array
  };
})();
console.log(sumWithRest(1, 2, 3)); // Output: 6

// Example 2: Using Rest Operator to handle an indefinite number of arguments
const sumWithVariableArgs = (function () {
  return function sum(...args) {
    // Using the rest operator to collect all arguments into an array called args
    return args.reduce((a, b) => a + b, 0); // Sums all elements in the args array
  };
})();
console.log(sumWithVariableArgs(1, 2, 3)); // Output: 6
console.log(sumWithVariableArgs(1, 2, 3, 4, 5)); // Output: 15

// Spread Operator: Expanding an array into individual elements

/*  
   The spread operator allows you to expand an iterable (like an array) into individual elements. 
   It's the opposite of the rest operator which collects individual elements into an array. 
*/

const months = ["Jan", "Feb", "Mar", "Apr", "May"];
let newArr;
(function () {
  newArr = [...months]; // The spread operator copies all elements from the months array into newArr
  months[1] = "Dec"; // Modifies the original months array at index 1
})();
console.log(newArr); // Output: ["Jan", "Feb", "Mar", "Apr", "May"]
console.log(months); // Output: ["Jan", "Dec", "Mar", "Apr", "May"] (Notice that the original array is modified)

// Immediately Invoked Function Expression (IIFE) Example:
// The function is defined and executed immediately. This avoids polluting the global scope with unnecessary variables.

