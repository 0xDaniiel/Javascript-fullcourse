// Difference between var and let

/*
For a long time in JavaScript, if you were to declare a variable, you would use the `var` keyword.
But starting in ES6 (2015), we now have two more ways to declare variables: `let` and `const`.

Let’s look at the differences between `var` and `let`.
*/

/* 
`let` does not allow you to declare a variable twice within the same scope.
*/
// With `var`, you can declare a variable multiple times in the same scope.
var names = "Javascript";
var names = "Typescript"; // No error here

console.log(names); // Output: "Typescript"
// The last assignment value gets retained

// But `let` does not allow this:
let language = "Javascript";
// let language = "Typescript";  // Uncommenting this will throw an error

console.log(language); // Output: Error (because `language` is already declared with `let`)

// However, reinitializing the variable (without using `let` again) works fine:
language = "C++";
console.log(language); // Output: "C++"

// Variables declared with `let` can be reassigned but not redeclared in the same scope.

///////////////////////////////////////////////////////////////////

// "use strict" mode
/*
"Use strict" is a way of enforcing stricter parsing and error handling in your JavaScript code.
It helps you catch common coding mistakes and unsafe actions.

For example, if you try to assign a value to a variable without declaring it using `var`, `let`, or `const`,
it will throw an error in strict mode.
*/

// SCOPES OF KEYWORDS (Global vs Local Scope)
///////////////////////////////////////////////////////////////////

/*
If a variable is declared with `var`, it is scoped to the nearest function (or globally if declared outside any function).
If a variable is declared with `let`, it is scoped to the nearest block (the code inside `{}`).
*/

// Example with `var`:
function checkScope() {
  "use strict";
  // var i = "function scope"; // You can still use var here
  if (true) {
    var i = "block scope";
    console.log("Block Scope i is ", i); // Output: "Block scope" (because var has function scope)
  }
  console.log("Function scope is ", i); // Output: "Block scope" (because var is function-scoped and accessible outside block)
  return i;
}
checkScope();

/*
With `var`, the variable `i` is accessible outside the block, because `var` has a function-level scope, not a block-level scope.
Thus, the function `checkScope()` will print "Block scope" in both cases, inside and outside the block.
*/

// Example with `let`:
function checkBlock() {
  "use strict";
  // let j = "function scope"; // You can still use let here
  if (true) {
    let j = "block scope";
    console.log("Block Scope j is ", j); // Output: "Block scope"
  }
  console.log("Function scope j is ", j); // Error: ReferenceError: j is not defined
  return j; // Error: ReferenceError: j is not defined
}
checkBlock();

/*
With `let`, the variable `j` is only accessible within the block (inside the `if` statement), 
so trying to access it outside of the block will result in an error (`ReferenceError: j is not defined`).
*/

// Summary of `var` vs `let`:

// 1. `var` is function-scoped (can be used inside functions, globally if declared outside functions).
// 2. `let` is block-scoped (limited to the nearest `{}` block).

// So, `let` provides better scoping rules that prevent unwanted errors due to variable redeclaration or unexpected behavior.
// It's a good practice to use `let` (or `const` for constants) to declare variables unless you have a specific reason to use `var`.

// Tips:
// - Always prefer using `let` and `const` to avoid issues with redeclaring variables or confusing scoping behavior.
