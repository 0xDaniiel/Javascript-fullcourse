/***************************************************************
 * Career Decision Based on Age and Salary
 ***************************************************************/

/* 
   The function `yourCareer` determines a person's career based on their age and salary. 
   The logic applies various conditions to decide which career path is suitable.
*/

var careers = [
  "Programmer", // Career 0
  "Doctor", // Career 1
  "Scientist", // Career 2
  "Engineer", // Career 3
  "Sports Athlete", // Career 4
];

/*
The function checks different conditions, including age and salary, and returns the most appropriate career.
*/

function yourCareer(age, salary) {
  if (age < 25 && salary > 180000) {
    return careers[0]; // Programmer if under 25 and earning above 180k
  } else if (age > 40 && salary > 170000) {
    return careers[1]; // Doctor if over 40 and earning above 170k
  } else if (age > 45 && salary > 200000) {
    return careers[2]; // Scientist if over 45 and earning above 200k
  } else if (age > 55 && salary > 100000) {
    return careers[3]; // Engineer if over 55 and earning above 100k
  } else if (age < 40 && salary > 300000) {
    return careers[4]; // Sports Athlete if under 40 and earning above 300k
  } else {
    return "I am still a student"; // Default if none of the above conditions are met
  }
}

/* 
Example Outputs:
1. Checking for someone who is 30 and earning 350k.
   Expectation: They should be classified as a "Sports Athlete" based on the conditions.
*/

console.log(yourCareer(30, 350000)); // Output: Sports Athlete

/*
You can easily manipulate the data and adjust age/salary to understand how each condition works. 
For example, changing age to 45 and salary to 250000 would select "Scientist."
*/

/***************************************************************
 * More Example Tests
 ***************************************************************/

// Testing for different scenarios:

console.log(yourCareer(22, 190000)); // Output: Programmer (Age < 25 and salary > 180k)
console.log(yourCareer(50, 180000)); // Output: Scientist (Age > 45 and salary > 200k)
console.log(yourCareer(60, 120000)); // Output: Engineer (Age > 55 and salary > 100k)
console.log(yourCareer(38, 350000)); // Output: Sports Athlete (Age < 40 and salary > 300k)
console.log(yourCareer(20, 150000)); // Output: I am still a student (Neither condition met)
