// User class banayi hai jisme normal instance properties aur static method dono hain
class User {
    constructor(username){
        // har naya user object ke liye username set kar rahe hain
        this.username = username
    }

    logMe(){
        // instance method: current user ka naam console pe print karta hai
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        // static method: class ke saath directly call hota hai, object ke saath nahi
        return `123`
    }
}

const hitesh = new User("hitesh")
// NOTE: static method ko instance se call nahi karna chahiye
// console.log(hitesh.createId())

// Teacher class User se extend kar rahi hai
class Teacher extends User {
    constructor(username, email){
        super(username)
        // Teacher ka apna email property bhi hai
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// yahan static createId ko class ke through bhi call kiya ja sakta hai
console.log(iphone.createId()); //--> ye error dega