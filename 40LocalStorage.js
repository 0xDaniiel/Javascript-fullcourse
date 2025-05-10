// Working with LocalStorage: Store and retrieve data from the browser's local storage

// Store data in local storage
localStorage.setItem("username", "JohnDoe");

// Retrieve data from local storage
const username = localStorage.getItem("username");
console.log(username); // Output: JohnDoe

// Remove data from local storage
localStorage.removeItem("username");

// Clear all items from local storage
localStorage.clear();
