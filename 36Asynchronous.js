// Asynchronous JavaScript: Working with Promises, async/await, and setTimeout/setInterval

// Example of setTimeout (used for delayed execution)
console.log("Start");
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
console.log("End");

// Example of setInterval (used for repeated execution)
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("Repeating every 1 second", count);
  if (count === 5) {
    clearInterval(intervalId); // Stop the interval after 5 repetitions
  }
}, 1000);

// Promises (a way to handle asynchronous operations)
const fetchData = new Promise((resolve, reject) => {
  const dataFetched = true;
  if (dataFetched) {
    resolve("Data fetched successfully");
  } else {
    reject("Failed to fetch data");
  }
});

fetchData
  .then((result) => {
    console.log(result); // Output: Data fetched successfully
  })
  .catch((error) => {
    console.log(error); // Output: Failed to fetch data
  });

// Async/Await (simplifying promises)
async function getData() {
  try {
    let result = await fetchData; // Wait until fetchData is resolved
    console.log(result); // Output: Data fetched successfully
  } catch (error) {
    console.log(error);
  }
}
getData();
