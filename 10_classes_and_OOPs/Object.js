function multiplyby5(num){
    return num*5
}


multiplyby5.power=2

//in javascript everything resembles to  a object  
console.log(multiplyby5(5))

console.log(multiplyby5.power)

console.log(multiplyby5.prototype)  //-->ye prototype upar wlae function ka this hai


function createuser(username,score){
    this.username=username;      //yaha this mtlb current context
    this.score=score;
}

createuser.prototype.increment=function(){
    return this.score++;   //yaha this mtlb jisne bhi bulaya usme increment krna 
                            //jaise myArray.map() -> isme map() prototype ke andar pehle se present hai pr hamara increment nahi hai to inject krna padega prototype. laga ke
}

createuser.prototype.printme=function()
{
    console.log(`my socre is ${this.score}`);  //ye this hi batata hai kon sa user hai 
}

const user1=new createuser("rounak",100)

const user2=new createuser("chai",98);

user1.printme();

user2.increment(); //ye waisa hai jaisa ki hm call kar rahe function ko object bana ke 



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
