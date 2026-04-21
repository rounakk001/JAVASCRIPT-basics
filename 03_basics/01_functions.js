
function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("U");
    console.log("N");
    console.log("A");
    console.log("K");

}

//sayMyName()


// function addTwoNumbers(number1 ,number2)
// {
//     console.log(number1+number2);
// }

function addTwoNumbers(number1 ,number2)
{
        return number1+number2;
}
const result=addTwoNumbers(2,3);

// console.log("Result: ",result);

function loginUserMesssage(username="sam"){  //username="sam" ye default sam lega agar kooi value pass nhi ki to
    if(!username){
        console.log("Pease enter  a username");
        return
    }
    return  `${username}  just logged in`
}


// console.log(loginUserMesssage("Rounak"))
console.log(loginUserMesssage("Rounak"))



function calculateCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200,400,500,2000))

const user={
    username:"Rounak",
    price:199

}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username:"Sam",
    price : 399
})

const myNewArray=[200,400,200,600]

function returnSecondValue(getArray){
    return  getArray[1]

}

console.log(returnSecondValue(myNewArray));


