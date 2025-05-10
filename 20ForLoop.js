// FOR LOOP EXAMPLES

// Example 1: Creating an array of numbers 0-9
/*
We initialize the loop with index = 0. The loop runs until index is less than 10, and after each iteration, index is incremented by 1.
*/
var arr = [];
for (let index = 0; index < 10; index++) {
  arr.push(index); // Pushes the current value of index into the array
}

console.log(arr);
// Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Explanation: The loop starts at 0 and increments the index until it reaches 9, adding each value to the array.

// Example 2: Iterating through an array (starting from index 1)
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
for (let index = 1; index < arr2.length; index++) {
  const element = arr2[index]; // Retrieves the value at the current index
  console.log(element); // Prints the value of the current element in the array
}

console.log(arr2);
// Output:
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// [1, 2, 3, 4, 5, 6, 7, 8]
// Explanation: The loop starts at index 1, iterating through the array, and prints each element of the array starting from index 1.
// Finally, the entire array `arr2` is printed to the console.

// Example 3: Same as Example 2 with a new array
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
for (let j = 1; j < arr3.length; j++) {
  const element = arr3[j]; // Retrieves the value at the current index
  console.log(element); // Prints the value of the current element
}

console.log(arr3);
// Output:
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// [1, 2, 3, 4, 5, 6, 7, 8]
// Explanation: This example is similar to the previous one, iterating through the array and printing each value starting from index 1.
// The whole array is printed afterward.
