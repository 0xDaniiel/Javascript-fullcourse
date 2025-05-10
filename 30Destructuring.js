// Switching places of variables using destructuring
let firstValue = 60,
  secondValue = 20;

(() => {
  "use strict";
  [firstValue, secondValue] = [secondValue, firstValue]; // Swap values using destructuring
})();

console.log(firstValue, secondValue); // Output: 20 60

// Destructuring assignment with the rest operator
let numberArray = [1, 2, 3, 4, 5, 6];

// Assign first two values to variables a and b, and the rest to variable c
let [firstElement, secondElement, ...remainingElements] = numberArray;

console.log(remainingElements); // Output: [3, 4, 5, 6]

// Destructuring assignment to pass an object as a function's parameter
const statistics = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
};

// Function using destructuring directly in the parameter
const calculateHalf = (function () {
  "use strict";
  return function half({ max, min }) {
    return (max + min) / 2.0; // Calculate half of the sum of max and min
  };
})();

console.log(statistics); // Output: full statistics object
console.log(calculateHalf(statistics)); // Output: 28.515 (half of max + min)
