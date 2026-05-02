// Getter aur Setter: Ye JavaScript mein properties ko control karne ke liye use hote hain.
// Getter: Jab property ko read karte hain to automatically function call hota hai.
// Setter: Jab property ko set karte hain to automatically function call hota hai.
// Isse validation, transformation, ya computed properties banayi ja sakti hain.

const User={
    // Private properties: Convention ke liye underscore use karte hain
    _email:"rounak@rc",
    _password:"abc",  

    // Getter for email: Jab User.email access karenge to ye function call hoga
    // Aur email ko uppercase mein return karega
    get email(){
        return this._email.toUpperCase();
    },

    // Setter for email: Jab User.email = "newvalue" karenge to ye function call hoga
    // Aur _email ko update karega
    set email(value){
        this._email=value
    }
}

// Object.create se User object ka prototype use karke naya object bana sakte hain
// Factory function ka alternative
const tea=Object.create(User);

// Getter call hoga aur email uppercase mein print hoga
console.log(tea.email)