/***************************************************************
 * ESCAPE SEQUENCES IN STRINGS
 ***************************************************************/

// \'  → Single quote
// \"  → Double quote
// \\  → Backslash
// \n  → New line
// \t  → Tab (approx. 8 spaces)
// \b  → Backspace
// \r  → Carriage return
// \f  → Form feed

var escapeExample = 'Line1\nLine2\tTabbed\\Backslash"Quote"';
console.log(escapeExample);

/***************************************************************
 * STRING CONCATENATION
 ***************************************************************/

// Using the + operator
var myName = "I am " + "Javascript";
console.log(myName); // Output: I am Javascript

// Using the += operator
var intro = "I am ";
intro += "Javascript";
console.log(intro); // Output: I am Javascript

/***************************************************************
 * CONCATENATING STRINGS WITH VARIABLES
 ***************************************************************/

var nameIntro = "I am ";
var age = 25;
var sentence = nameIntro + age;
console.log(sentence); // Output: I am 25

/***************************************************************
 * APPENDING VARIABLES TO STRINGS
 ***************************************************************/

var anAdjective = "Awesome!";
var word = "Javascript is ";
word += anAdjective;
console.log(word); // Output: Javascript is Awesome!

/***************************************************************
 * STRING LENGTH
 ***************************************************************/

var job = "Programmer";
console.log("Length of 'Programmer':", job.length); // Output: 10

/***************************************************************
 * BRACKET NOTATION - ACCESSING STRING CHARACTERS
 ***************************************************************/

// First character
var firstName = "Ada";
var firstLetter = firstName[0];
console.log("First letter:", firstLetter); // Output: A

// Second character
var secondLetter = firstName[1];
console.log("Second letter:", secondLetter); // Output: d

// Last character
var lastName = "Javascript";
var lastLetter = lastName[lastName.length - 1];
console.log("Last letter:", lastLetter); // Output: t

/***************************************************************
 * STRING IMMUTABILITY
 ***************************************************************/

var hey = "Jello World";

// Strings are immutable → individual characters can't be changed directly
// hey[0] = "H"; // ❌ This won't work

// Correct approach: reassign the entire string
hey = "Hello World";
console.log(hey); // Output: Hello World
