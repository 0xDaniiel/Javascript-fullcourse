// Array methods: map, filter, and reduce

const numbers = [1, 2, 3, 4, 5];

// map() - Transforms each item in the array
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// filter() - Filters the array based on a condition
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce() - Reduces the array to a single value (e.g., sum, product)
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15
