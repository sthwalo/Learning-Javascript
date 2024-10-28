// Define an object `userObj` representing a user with properties and a custom toString method
const userObj = {
    id: 1, // User's ID
    name: "John Doe", // User's name
    email: "johndoe@example.com", // User's email address
    age: 30, // User's age
    toString: function() {
        // Method to return a string representation of the user object
        return `[User ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Age: ${this.age}]`;
    },
};

// Define another object `userObj1` similar to `userObj` but with a different user
const userObj1 = {
    id: 2, // User's ID
    name: "Jane Smith", // User's name
    email: "janesmith@example.com", // User's email address
    age: 25, // User's age
    toString: function() {
        // Method to return a string representation of the user object
        return `[User ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Age: ${this.age}]`;
    },
    valueOf: function() {
        // Method to provide a numeric representation of the object when needed (e.g., in mathematical operations)
        return this.id;
    }
};

// Create an array `userArray` consisting of the two user objects
let userArray = new Array(userObj, userObj1);

// Iterate over each user in the `userArray` using forEach
userArray.forEach((user, index) => {
    // Log the index of the user in the array and the user object's string representation to the console
    console.log("[index=" + index + "] " + user);
    // Place for further implementation or processing of each user if needed
    //implementation here
});