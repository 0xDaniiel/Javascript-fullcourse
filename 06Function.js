/***************************************************************
 * FUNCTIONS IN JAVASCRIPT
 ***************************************************************/

// A function lets you group reusable code into a block

function myFunction() {
  console.log("My first function");
}

myFunction(); // Function call — runs the code inside

/***************************************************************
 * PASSING ARGUMENTS TO FUNCTIONS
 ***************************************************************/

// Parameters are placeholders used when defining a function
// Arguments are actual values passed in when calling the function

function yourFunction(a, b) {
  console.log("a - b =", a - b);
}

yourFunction(10, 5); // Output: 5

function ourFunction(x, y) {
  console.log("x + y =", x + y);
}

ourFunction(80, 20); // Output: 100

/***************************************************************
 * SCOPE IN JAVASCRIPT
 ***************************************************************/

// Scope refers to the visibility/accessibility of variables

// Variables declared outside any function are in the global scope
var globalScope = 10;

function test() {
  automaticGlobal = 5; // ⚠️ Implicitly global (if not using 'use strict')
  /* Without a declaration keyword (var, let, const), 
     this becomes a global variable — not recommended. */
}

test(); // Make sure to call test() so automaticGlobal is actually defined

function checkScope() {
  var output = "";

  if (
    typeof globalScope !== "undefined" &&
    typeof automaticGlobal !== "undefined"
  ) {
    output += globalScope + automaticGlobal;
    console.log("Combined output:", output); // Output: 15
  } else {
    console.log("One or both variables are undefined");
  }
}

checkScope();

/*
Note:
In modern JavaScript or with `"use strict"`, 
creating global variables without declaration is not allowed — always use let/const/var!
*/
