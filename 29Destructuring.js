// Destructuring Assignments
/*
   - Destructuring is a way to unpack values from arrays, or properties from objects, into distinct variables.
   - It's a special syntax for neatly assigning values from an object or array into variables.

*/

// Example: Destructuring an object
const vowelValues = { a: 1, e: 5, i: 9, o: 15, u: 21 };

// Old way of getting the values:
const a = vowelValues.a;
const e = vowelValues.e;
const i = vowelValues.i;
const o = vowelValues.o;
const u = vowelValues.u;

// New way using destructuring:
function displayVowelValues() {
  const { a, e, i, o, u } = vowelValues; // Destructuring the object properties into variables
  console.log({ a, e, i, o, u }); // Output the destructured values
}
displayVowelValues(); // Output: { a: 1, e: 5, i: 9, o: 15, u: 21 }

// Destructuring in functions
const testScores = {
  highest: 79,
  lowest: 10,
};

function getHighestScore(scores) {
  const { highest: maxScore } = scores; // Destructuring to extract 'highest' and rename it to maxScore
  return maxScore;
}
console.log(getHighestScore(testScores)); // Output: 79

// Destructuring with nested objects
const subjectScores = {
  maths: { best: 98, worst: 46 },
  english: { best: 95, worst: 32 },
};

function getBestMathsScore(scores) {
  const {
    maths: { best: bestMathsScore }, // Destructuring nested 'maths' object to get 'best' score
  } = scores;
  return bestMathsScore;
}
console.log(getBestMathsScore(subjectScores)); // Output: 98

// Destructuring with arrays
/*
   When destructuring an array, the values are assigned based on their position in the array.
   You cannot specify which element goes into a particular variable like you can with objects.
   If you want to skip elements, you can use a blank comma ( , ) to ignore certain values.
*/

const array = [1, 2, 3, 4, 5, 6];
const [, secondValue, thirdValue, , , sixthValue] = array; // Skipping the first, fourth, and fifth elements

console.log(secondValue, thirdValue, sixthValue); // Output: 2 3 6
/*
   In this example:
   - secondValue is assigned the value at index 1 (2)
   - thirdValue is assigned the value at index 2 (3)
   - sixthValue is assigned the value at index 5 (6)
   - The values at indices 0, 3, and 4 are skipped using commas.
*/

