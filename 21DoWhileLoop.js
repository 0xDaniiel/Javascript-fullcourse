// 1. **Iterating Through Even Numbers with a `for` Loop**
var evenNumbers = [];
for (let i = 0; i < 40; i += 2) {
  evenNumbers.push(i);
}
console.log(evenNumbers);
// Output: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]

// 2. **Iterating Through Odd Numbers with a `for` Loop**
var oddNumbers = [];
for (let i = 1; i < 40; i += 2) {
  oddNumbers.push(i);
}
console.log(oddNumbers);
// Output: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]

// 3. **Counting Backwards with a `for` Loop**
var countdown = [];
for (let i = 10; i > 0; i--) {
  countdown.push(i);
}
console.log(countdown);
// Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// 4. **Iterating Through an Array with a `for` Loop**
var numbersArray = [2, 3, 4, 5, 6];
var sum = 0;
for (var i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}
console.log(sum);
// Output: 20

// 5. **Nesting `for` Loops to Multiply All Array Elements**
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    // Outer loop iterates through subarrays
    for (let j = 0; j < arr[i].length; j++) {
      // Inner loop iterates through elements of subarray
      product *= arr[i][j]; // Multiply each element with the product
    }
  }
  return product;
}

var result = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(result);
// Output: 5040 (because 1 * 2 * 3 * 4 * 5 * 6 * 7 = 5040)

/* 6. **Using a `do...while` Loop to Push to an Array**
The difference between `while` and `do...while` is that `do...while` executes at least once before checking the condition.

*/

var numbersArray = [];
var i = 10;

do {
  numbersArray.push(i);
  i++; // Increment i
} while (i < 5);

console.log(i, numbersArray);
// Output: i = 11, numbersArray = [10] because the loop runs at least once before checking the condition

// 7. **For Loop Iteration Over Array with Condition**
var sampleArray = [1, 2, 3, 4, 5, 6, 7, 8];
var total = 0;
for (var i = 0; i < sampleArray.length; i++) {
  total += sampleArray[i];
}
console.log(total);
// Output: 36

// 8. **For Loop With Even Numbers**
var evenNumbersArray = [];
for (let i = 0; i < 40; i += 2) {
  evenNumbersArray.push(i);
}
console.log(evenNumbersArray);
// Output: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]

// 9. **For Loop With Odd Numbers**
var oddNumbersArray = [];
for (let i = 1; i < 40; i += 2) {
  oddNumbersArray.push(i);
}
console.log(oddNumbersArray);
// Output: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]

// 10. **Count Backwards Using For Loop**
var countdownArray = [];
for (let i = 10; i > 0; i--) {
  countdownArray.push(i);
}
console.log(countdownArray);
// Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// 11. **Iterating with Do-While Loop**
var doWhileArray = [];
var k = 10;
do {
  doWhileArray.push(k);
  k++; // Increment k
} while (k < 5);
console.log(k, doWhileArray);
// Output: k = 11, doWhileArray = [10]
