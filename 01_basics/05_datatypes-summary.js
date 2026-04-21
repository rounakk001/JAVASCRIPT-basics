//    Primitive 

//   7 types:String, Number, Boolean,null, undefined, Symbol,BigInt
 

const score =100
const scorevalue=0.3

const isLoggedIn=false
const outsideTemp=null

let userEmail;

const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id==anotherid);

const bigNumber=BigInt(34555555)

console.log(bigNumber)




//Reference(Non-primitive)


//Array,Objects,Functions

const heroes=["shaktiman","naagraj","dogesh"];

let myobj={
    name:"rounak",
    age:22
}

const myFunction=function(){

    console.log("hello World");
}

console.log(typeof myFunction);



//      +++++++++++++++++++++++++++++++++++++


//Stack(Primitive) , Heap(Non-Primitive)


let myName="rounakdotcom"

let anothername=myName
anotherName="rounakextradotcom"

console.log(myName);
console.log(anotherName);

let userOne={
    email: "rounak@gpay.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="rounak"

console.log(userOne.email)
console.log(userTwo.email);