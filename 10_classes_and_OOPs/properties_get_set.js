// Ye function constructor hai jo User object banata hai
// Yahan getters aur setters ka use kiya gaya hai taake
// properties ko control kar sakein, jaise validation ya transformation
function User(email, password){
    // Private properties: underscore se shuru karte hain convention ke liye
    this._email = email;
    this._password = password

    // email property ke liye getter aur setter define kar rahe hain
    // getter: jab bhi chai.email access karenge to ye function call hoga
    // aur email ko uppercase mein return karega
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        // setter: jab chai.email = "newvalue" karenge to ye function call hoga
        // aur _email ko update karega
        set: function(value){
            this._email = value
        }
    })

    // password property ke liye bhi same getter aur setter
    // getter: password ko uppercase mein return karta hai
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        // setter: password ko update karta hai
        set: function(value){
            this._password = value
        }
    })

}

// User ka instance banaya
const chai = new User("chai@chai.com", "chai")

// yahan getter call hoga aur email uppercase mein print hoga
console.log(chai.email);