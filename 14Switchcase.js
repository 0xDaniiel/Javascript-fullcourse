// Switch Case: A more efficient way to handle multiple conditional checks than chained if-else statements
/*
A switch statement tests a value and can have many case statements which define various possible values.
*/

function switchCase(day) {
  switch (day) {
    case 1:
      console.log("Monday");
      break; // Breaks out of the switch block after printing Monday
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default: // The default is the same as the "else" in an if-else statement.
      console.log("Invalid day");
  }
}
switchCase(7); // Output: Sunday

/*
The switch statement uses the strict equality operator `===`, so values like 1 and "1" would be considered different.
If the passed argument is 1, it will print "Monday", and if the argument is 7, it will print "Sunday".
*/

/* 
The break statement tells JavaScript to stop executing the code inside the switch after a match is found.
Without it, it will continue executing all subsequent cases (even if they don't match), which is called "fall-through."
*/

function identicalCase(day) {
  switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      console.log("Weekday"); // This will run for any day from 1 to 5
      break;
    case 6:
    case 7:
      console.log("Weekend"); // This will run for days 6 or 7
      break;
    default:
      console.log("Invalid day");
  }
}
identicalCase(5); // Output: Weekday

/*
Switch cases with multiple identical options:
In the `identicalCase` function, days 1 through 5 will all print "Weekday" and days 6 and 7 will print "Weekend".
This eliminates the need to write separate case statements for each individual day.
*/

/*
Returning Boolean values from a function
*/

function isLess(x, y) {
  return x > y; // Returns true if x is greater than y, false otherwise.
}

console.log(isLess(7, 9)); // Output: false (because 7 is not greater than 9)
console.log(isLess(10, 5)); // Output: true (because 10 is greater than 5)

/*
This is a good example of a function that simply evaluates a condition and returns a boolean value.
*/
