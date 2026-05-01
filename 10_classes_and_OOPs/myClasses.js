// //ES6

// class User{
//     constructor(username,email,password){   //ab apne aap call ho jayega
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }


//     encryptpassword(){             
//         return `${this.username}abc`;
//     }

//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai=new User("rounak","rogmail.com","123");

// console.log(chai.encryptpassword());    

// console.log(chai.changeusername());


//behind the scene

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptpassword=function(){   //inject kar rahe hai prototype ke help se
    return `${this.username}abc`
}

const tea=new User("rounakkkkkk","ron@gmail.com","123");

console.log(tea.encryptpassword());