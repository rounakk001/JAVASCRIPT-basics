//isme hum dekh rahe hai ki hum MATH .PI ki value kyu nhi change kr paate
const descriptor=Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);


const chai={
    name:"ginger chai",
    price:250,
    avalaible:true,

    orderchai:function(){
        console.log("code fat gaya");
    }
}

/* console.log(Object.getOwnPropertyDescriptor(chai));  ye error dega kyuki 
direct object ka descriptor do pr property ka descriptor diya jaata hai */

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{    //----hmne name pe enmerable false kr diya to usko skip kr dega iteration krte waqt      
    //writable:false,
    enumerable:false
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


//Enumeration in JavaScript refers to iterating over an object's properties or defining a set of named constants (enums).


for(let [key,value] of Object.entries(chai)){
    if(typeof value !=='function'){                  //hume function nahi print karana 
         console.log(`${key} : ${value}`)
    }
   
}


