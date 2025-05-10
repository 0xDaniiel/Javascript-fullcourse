/* Arrow functions are shorter ways to represent functions
   They are written like this:
   `() => { // code }`
   Arrow functions don't need a `return` keyword if the code is a single line.
*/

// Example of an anonymous arrow function
const getCurrentDay = () => {
  return new Date().getDate(); // returns the current day of the month
};

// Arrow function with parameters
const addNumbers = (a, b) => a + b; // returns the sum of a and b

console.log(addNumbers(1, 2)); // Output: 3

// Higher-order arrow functions
/*
A higher-order function is a function that takes another function as an argument.
Common examples of higher-order functions include `map()`, `filter()`, and `reduce()`.
*/

// Example using array methods
const numbers = [4, 5.6, -9.8, 3.14, 0, 1, 2];

// This function computes the square of only positive integers in the array
const squarePositiveIntegers = (arr) => {
  const positiveIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0) // filters only positive integers
    .map((num) => num * num); // squares each positive integer

  return positiveIntegers;
};

const squaredResults = squarePositiveIntegers(numbers);
console.log(squaredResults); // Output: [16, 1, 4]

/*
In this example:
- `filter` selects only the integers greater than 0 from the array.
- `map` squares each integer from the filtered array.

These are classic use cases for arrow functions due to their conciseness and readability.
*/
