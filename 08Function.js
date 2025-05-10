/***************************************************************
 * QUEUE: Stand in Line (FIFO)
 ***************************************************************/

/*
A queue is an abstract data structure where items are kept in order.
- New items are added to the back of the queue (using .push()).
- Old items are removed from the front of the queue (using .shift()).
*/

function nextInLine(arr, item) {
  arr.push(item); // Adds 'item' to the end of the array (queue).
  return arr.shift(); // Removes and returns the first item from the array (queue).
}

var testArr = [1, 2, 3, 4, 5];

// Display the state of the array before and after manipulation
console.log("Before: " + JSON.stringify(testArr)); // Convert array to string for better visualization
console.log("Returned value:", nextInLine(testArr, 6)); // Add 6 to the queue, remove the first item
console.log("After: " + JSON.stringify(testArr)); // Show the updated array

/*
Explanation:
- Initially, the array is [1, 2, 3, 4, 5].
- The function adds 6 to the array (push) and removes the first item (shift).
- The function returns the item that was removed (in this case, 1).
*/
