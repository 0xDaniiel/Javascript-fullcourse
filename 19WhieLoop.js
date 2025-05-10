// WHILE LOOP EXAMPLES

// Example 1: Incrementing Loop
/*
In this example, we are pushing values into the `arr` array as long as `i` is less than 5.
*/
var arr = [];
var i = 0;

while (i < 5) {
  arr.push(i); // Pushes the value of i into the array
  i++; // Increments i
}

console.log(arr);
// Output: [0, 1, 2, 3, 4]
// Explanation: The loop starts with i = 0, keeps pushing values of i into the array, and increments i after each iteration until i reaches 5.

// Example 2: Incrementing from 0 to 15
/*
This example pushes values from 0 to 15 into the `arr2` array.
*/
var arr2 = [];
var j = 0;

while (j <= 15) {
  // While j is less than or equal to 15
  arr2.push(j); // Pushes the value of j into the array
  j++; // Increments j
}

console.log(arr2);
// Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// Explanation: This loop starts at j = 0, and increments j by 1 after each iteration until j reaches 15.

// Example 3: Decrementing Loop
/*
In this example, we start with k = 10 and decrement the value of k until it reaches 5.
*/
var arr3 = [];
var k = 10;

while (k >= 5) {
  // While k is greater than or equal to 5
  arr3.push(k); // Pushes the value of k into the array
  k--; // Decrements k
}

console.log(arr3);
// Output: [10, 9, 8, 7, 6, 5]
// Explanation: The loop starts at k = 10 and keeps pushing values of k into the array while decrementing k until k is no longer greater than or equal to 5.
