const user={
    username:"Rounak",
    price:"999",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

}


//  user.welcomeMessage()
//  user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username="rounak"
//     console.log(this.username); //this kewal object me kaam karega  yaha nhi karega
// }

// chai()


const chai= ()=>{
    let username="rounak"
    console.log(this.username)
}

// chai()


//----------- basic arrow function---------------


// const addTwo=(num1,num2) => {    
//     return num1+num2
// }


// const addTwo=(num1,num2) => num1+num2


// const addTwo=(num1,num2) => (num1+num2)

const addTwo=(num1,num2) => ({username:"rounak"})



console.log(addTwo(3,4))


// const myArray=[2,3,4,5,6]

// myArray.forEach()



