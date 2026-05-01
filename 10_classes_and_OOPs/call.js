// Constructor function that assigns a username to the current object
function SetUsername(username){
    // pretend this does complex DB calls or validation before assignment
    this.username = username
    console.log("called");
}

// Constructor function to create a new user object
function createUser(username, email, password){
    // Use Function.call to invoke SetUsername with current object as `this`
    SetUsername.call(this,username)
   
    // Assign other properties to the new user object
    this.email = email
    this.password = password
}

// Create a new user instance using the `new` keyword
const chai = new createUser("chai", "chai@fb.com", "123")

// Log the created user object to verify the assigned properties
console.log(chai);