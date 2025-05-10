/**
 * In JavaScript, a class is a blueprint for creating objects with predefined properties and methods.
 * It's a way to define a new type of object, encapsulating both data (properties) and behavior (methods).
 */

// Creating a Car class with a constructor
class Car {
  constructor(model) {
    this.model = model; // The 'model' property is assigned when a new instance of Car is created.
  }
}

// Creating a new instance of the Car class with a specific model
const benz = new Car("Mercedes Benz");

// Accessing the 'model' property of the benz object
console.log(benz.model); // Output: Mercedes Benz

/*
  Explanation:
  - The 'Car' class serves as a blueprint for creating car objects.
  - The 'constructor' is a special method that gets called automatically when a new object (e.g., benz) is created.
  - 'model' is a property of each car, defined when we create a car object.
  - When we create 'benz' using `new Car("Mercedes Benz")`, we are setting its model to "Mercedes Benz".
  - `console.log(benz.model)` prints the model of the benz object, which is "Mercedes Benz".
*/

// Using Getters and Setters to manage properties
/**
 * Getters and Setters are used to control access to an object's properties.
 * A getter retrieves the value of a property, and a setter allows you to update that property.
 * They help to control how properties are accessed or modified.
 */

class Weather {
  constructor(temp) {
    this._temp = (5 / 9) * (temp - 32); // Convert Fahrenheit to Celsius
  }

  // Getter for temperature
  get temperature() {
    return this._temp; // Returns the temperature in Celsius
  }

  // Setter for temperature
  set temperature(updatedTemp) {
    this._temp = updatedTemp; // Allows you to set a new temperature value
  }
}

// Creating an instance of the Weather class with a temperature in Fahrenheit
const newWeather = new Weather(78); // 78°F will be converted to Celsius in the constructor

// Using the getter to access the temperature
let result = newWeather.temperature; // Calls the getter to return the current temperature in Celsius

// Using the setter to update the temperature
newWeather.temperature = 26; // Set the temperature to 26°C using the setter

// Getting the updated temperature using the getter
result = newWeather.temperature;

console.log(result); // Output: 26

/*
  Explanation:
  - The 'Weather' class has a private '_temp' variable that stores the temperature in Celsius.
  - The 'constructor' takes the temperature in Fahrenheit, converts it to Celsius, and stores it in '_temp'.
  - The 'temperature' getter returns the current value of '_temp' (the temperature in Celsius).
  - The 'temperature' setter allows us to change the temperature by directly assigning a new value to '_temp'.
  - This ensures the temperature is encapsulated and protected, with access controlled through getters and setters.
*/
