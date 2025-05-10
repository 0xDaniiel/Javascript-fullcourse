// ACCESSING NESTED ARRAYS
/*
In this case, we have an array of objects, each containing properties like 'name', 'languages', and 'jobType'.
We will use array indexing to access individual items and dot notation to access the properties of the objects.
*/

var about = [
  {
    name: "Dan",
    languages: ["HTML", "CSS", "JavaScript"],
    jobType: "Remote",
  },
  {
    name: "Danny",
    languages: ["Next.js", "React.js", "Tailwind CSS"],
    session: true,
  },
];

// Accessing the 3rd language in the first object
console.log(about[0].languages[2]);
// Output: JavaScript
/* Explanation:
   - `about[0]` accesses the first object in the `about` array.
   - `.languages` accesses the 'languages' array within that object.
   - `[2]` accesses the 3rd item in the 'languages' array (remember, arrays are 0-indexed).
*/

// RECORD COLLECTION
/*
We have a collection of soccer players, each represented as an object. The record contains personal information like 'age', 'position', and the teams they've scored goals against.
The `updateRecords` function allows us to update the records based on given conditions.
*/

const record = {
  messi: {
    age: 33,
    position: "Forward",
    goalAgainst: [
      "Manchester City F.C.",
      "Barcelona",
      "Real Madrid C.F.",
      "Liverpool",
      "PSG",
    ],
  },
  ronaldo: {
    age: 36,
    position: "Forward",
    goalAgainst: [
      "Manchester UTD",
      "Juventus",
      "Barcelona",
      "PSG",
      "Liverpool",
    ],
    penalties: [],
  },

  neymar: {
    age: 29,
    position: "Forward",
    goalAgainst: [
      "Liverpool",
      "PSG",
      "Manchester City F.C.",
      "Barcelona",
      "Real Madrid C.F.",
      "Liverpool",
      "PSG",
    ],
  },
};

// Create a deep copy of the record object to ensure we preserve the original record data.
var recordCopy = JSON.parse(JSON.stringify(record));

/*
Function to update the records of a player.
  - If `values` is an empty string, the specified property will be deleted from the player.
  - If `properties` is 'goalAgainst', we add the new value to the 'goalAgainst' array.
  - For any other property, we simply update the value to the provided value.
*/

function updateRecords(player, properties, values) {
  if (values === "") {
    // If the value is an empty string, delete the specified property
    delete record[player][properties];
  } else if (properties === "goalAgainst") {
    // If the property is goalAgainst, ensure it's an array and push the new value
    record[player][properties] = record[player][properties] || [];
    record[player][properties].push(values);
  } else {
    // For other properties, directly set the new value
    record[player][properties] = values;
  }

  return record;
}

// Testing the updateRecords function
console.log(updateRecords("ronaldo", "goalAgainst", "Bayern"));
// Output: The 'goalAgainst' array for Ronaldo is updated with "Bayern"

// Testing the delete operation by passing an empty string
console.log(updateRecords("ronaldo", "penalties", ""));
// Output: The 'penalties' property for Ronaldo is deleted

// Testing other property updates
console.log(updateRecords("messi", "position", "Attacker"));
// Output: Messi's position is updated to "Attacker"
