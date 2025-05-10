/***************************************************************
 * LOCAL SCOPE IN FUNCTIONS
 ***************************************************************/

// Variables declared inside a function are locally scoped
function localScope() {
  var scope = 10;
  console.log("Inside function:", scope); // Output: 10
}

localScope();

// Trying to access 'scope' outside will result in an error:
// console.log(scope); // ❌ ReferenceError: scope is not defined

/***************************************************************
 * GLOBAL VS LOCAL SCOPE
 ***************************************************************/

// Global variable
var fruit = "Apple";

function localPrecedence() {
  // Local variable with the same name as the global one
  var fruit = "Banana";
  console.log("Inside function:", fruit); // Output: Banana
}

localPrecedence();
console.log("Outside function:", fruit); // Output: Apple

/*
When a local variable shares the same name as a global variable,
the local variable takes precedence within its function.
*/

/***************************************************************
 * RETURNING VALUES FROM FUNCTIONS
 ***************************************************************/

function returnFunction(num) {
  return num - 3;
}
console.log("returnFunction(7):", returnFunction(7)); // Output: 4

function timesFive(num) {
  return num * 5;
}
console.log("timesFive(3):", timesFive(3)); // Output: 15

/***************************************************************
 * FUNCTIONS THAT DO NOT RETURN A VALUE
 ***************************************************************/

var num = 5;

function returnNothing() {
  num += 3;
  // No return statement → returns undefined by default
}

var result = returnNothing();
console.log("returnNothing():", result); // Output: undefined

/***************************************************************
 * ASSIGNMENT WITH RETURNED VALUE
 ***************************************************************/

var notChanged = 0;

function change(n) {
  return (n + 5) / 3;
}

notChanged = change(10);
console.log("Changed value:", notChanged); // Output: 5

/*
Explanation:
- 10 is passed to 'change'
- (10 + 5) / 3 = 15 / 3 = 5
- 5 is returned and assigned to 'notChanged'
*/
