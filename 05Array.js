/***************************************************************
 * MANIPULATING ARRAYS: shift() and unshift()
 ***************************************************************/

// shift(): Removes the **first** element from an array (like pop, but from the start)
var arr1 = [1, 2, 3, 4];
arr1.shift();
console.log("After shift:", arr1); // Output: [2, 3, 4]

// unshift(): Adds one or more elements to the **beginning** of an array
var arr2 = [1, 2, 3, 4];
arr2.unshift(0);
console.log("After unshift:", arr2); // Output: [0, 1, 2, 3, 4]

/***************************************************************
 * PRACTICE: Nested Array with Array Methods
 ***************************************************************/

var shopList = [
  ["Milk", 2],
  ["Bread", 3],
  ["Eggs", 12],
  ["Cheese", 1],
];

// pop(): Remove the last item (Cheese)
shopList.pop();
console.log("After removing Cheese (pop):", shopList);

// push(): Add Butter to the end
shopList.push(["Butter", 2]);
console.log("After adding Butter (push):", shopList);

// unshift(): Add Chocolate to the beginning
shopList.unshift(["Chocolate", 5]);
console.log("After adding Chocolate (unshift):", shopList);

// shift(): Remove the first item (Chocolate)
shopList.shift();
console.log("After removing Chocolate (shift):", shopList);
