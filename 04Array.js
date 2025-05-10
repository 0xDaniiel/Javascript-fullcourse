/***************************************************************
 * ARRAYS IN JAVASCRIPT
 ***************************************************************/

// Arrays store multiple values in a single variable
var arr = ["Apple", 2, true];
console.log("Basic array:", arr);

/***************************************************************
 * NESTED ARRAYS (MULTI-DIMENSIONAL ARRAYS)
 ***************************************************************/

var nestedArr = [1, 2, [3, 4], 5, "yes", true];
console.log("Nested array example:", nestedArr);

/***************************************************************
 * ACCESSING ARRAY ELEMENTS USING INDEX
 ***************************************************************/

var indexArr = [1, 2, 3, 5];
console.log("Element at index 2:", indexArr[2]); // Output: 3

/***************************************************************
 * MODIFYING ARRAY ELEMENTS
 ***************************************************************/

indexArr[2] = 4;
console.log("Modified array:", indexArr); // Output: [1, 2, 4, 5]

/***************************************************************
 * ACCESSING DATA IN MULTI-DIMENSIONAL ARRAYS
 ***************************************************************/

var multiArray = [[1, 2, 3], "Javascript", true, [4, 5, 6]];
var multiArrayData = multiArray[0][0]; // First array's first element
console.log("multiArray[0][0]:", multiArrayData); // Output: 1

var multiArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
var multiArrData = multiArr[3][0][1]; // 11
console.log("multiArr[3][0][1]:", multiArrData);

/*
Explanation:
multiArr[3] → [[10, 11, 12], 13, 14]
multiArr[3][0] → [10, 11, 12]
multiArr[3][0][1] → 11
*/

/***************************************************************
 * ARRAY METHODS: push(), pop()
 ***************************************************************/

// push(): Adds element(s) to the end of the array
var arrPush = [1, 2, 3, 4, 5];
arrPush.push(4, 5, "added");
console.log("After push:", arrPush);
// Output: [1, 2, 3, 4, 5, 4, 5, "added"]

// pop(): Removes the last element from the array
var arrPop = [1, 2, 3, 4, 5];
arrPop.pop();
console.log("After pop:", arrPop);
// Output: [1, 2, 3, 4]
