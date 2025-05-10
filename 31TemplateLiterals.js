/* Template Literals:
Template literals are a special type of string that makes creating complex strings easier.
You create them with backticks {` `}.
*/

const personInfo = {
  name: "Dan",
  language: "JavaScript",
  age: 5,
};

// Using template literals to dynamically generate a string
const aboutMe = `My name is ${personInfo.name}, I am ${personInfo.age} years old. My favorite language is ${personInfo.language}.`;
console.log(aboutMe);

// Advantages of using template literals:
// 1. Allows multi-line strings
// 2. Can include single or double quotation marks in the string
// 3. Allows embedding variables directly into the string
// 4. Can execute JavaScript expressions inside strings

// Example of using template literals to generate an HTML list dynamically

const testResults = {
  success: ["First", "Second", "Third"],
  average: ["Fourth", "Fifth", "Sixth"],
  fail: ["Seventh", "Eighth", "Ninth"],
};

// Function that takes an array and returns an HTML list of the array items
function createHTMLList(itemsArray) {
  const htmlList = []; // Array to store the list items in HTML <li> format

  for (let i = 0; i < itemsArray.length; i++) {
    // Pushing each item wrapped in <li> tags
    htmlList.push(`<li>${itemsArray[i]}</li>`);
  }

  return htmlList; // Return the array containing <li> tags
}

console.log(createHTMLList(testResults.average));

/*
Explanation:
1. The `testResults` object contains arrays under keys "success", "average", and "fail".
2. The `createHTMLList` function accepts an array (`itemsArray`) and returns a new array (`htmlList`) where each item from the input array is wrapped inside `<li>` tags.
3. Inside the function, we use a `for` loop to iterate over the items in `itemsArray`, and for each item, we push an `<li>` HTML element to the `htmlList` array.
4. The `createHTMLList(testResults.average)` call will return an array of HTML `<li>` elements representing the "average" test results.
*/
