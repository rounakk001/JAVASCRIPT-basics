class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`my name is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addcourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}

const print = new Teacher('JohnDoe', 'john@example.com', 'password123');

print.addcourse();

console.log(print instanceof Teacher) //check krne ke liye ki haiki nahi instance

console.log(print instanceof User) //Teacher extends user isliye

