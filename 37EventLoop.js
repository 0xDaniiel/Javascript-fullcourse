// The JavaScript Event Loop: A concept that explains how asynchronous code runs

console.log("First log");

setTimeout(() => {
  console.log("Second log from setTimeout");
}, 0);

console.log("Third log");

// Expected Output:
// First log
// Third log
// Second log from setTimeout

// Explanation:
// The first and third logs happen synchronously, while the setTimeout callback gets added to the event queue after the call stack is empty.
// So, even though we set the delay as 0ms, the setTimeout callback gets executed last.
