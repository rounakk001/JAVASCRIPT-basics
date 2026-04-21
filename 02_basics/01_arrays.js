//arrays


const myArr=[0,1,2,3,4,5];

const myHeroes=["shaktiman","naagraj"];

const myArr2=new Array(1,2,3,4);
// console.log(myArr[1]);



//Array Methods

// myArr.push(6);

// console.log(myArr);

// myArr.pop(6);

//myArr.unshift(9); ->similar to push

//myArr.shift();  ->similar to pop


// console.log(myArr.indexOf(9));

// console.log(myArr.includes(9));

const newArr=myArr.join();  //convert kar dega string mein  

console.log(newArr);
console.log(typeof newArr)


//slice,splice

console.log("A ",myArr);

const myn1=myArr.slice(1,3);
console.log(myn1);

console.log("B ",myArr);

const myn2=myArr.splice(1,3);
console.log(myn2);