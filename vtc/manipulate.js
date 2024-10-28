function greeting(name) {
    // Original greeting message with the name included
    let greetingMessage = `Welcome to the Javascript Course. ${name}`;

    // Check if the greeting message exceeds 40 characters
    if (greetingMessage.length > 40) {
        // Return a shortened version of the greeting that still includes the name
        return `Welcome to the Javascript Course, ${name}`;
    }

    // If the message does not exceed 40 characters, return the original greeting
    return greetingMessage;
}
console.log(greeting("Immaculate")); // This will print the result of the greeting function to the console