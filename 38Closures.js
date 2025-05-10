// Closures: A closure is a function that remembers its outer function's variables even after the outer function has finished execution.

function outer() {
  let counter = 0; // Local variable
  return function inner() {
    counter++; // This inner function still has access to the counter variable
    console.log(counter);
  };
}

const counterClosure = outer(); // Create closure
counterClosure(); // Output: 1
counterClosure(); // Output: 2
counterClosure(); // Output: 3

// The inner function `counterClosure` still remembers and has access to the `counter` variable from the `outer` function,
// even though the `outer` function has already finished execution. This is the essence of closures.
