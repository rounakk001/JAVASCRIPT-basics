const promiseOne=new Promise(function(resolve,reject){

    //do an ASYNC Task
    //DB calls,cryptography,network
    setTimeout(function()
    {
        console.log("Async task is completed");
        resolve();
    },1000)
    
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})


new Promise(function(resolve,reject){

    //do an ASYNC Task
    //DB calls,cryptography,network
    setTimeout(function()
    {
        console.log("Async task2 is completed");
         resolve();
    },1000)
   
}).then(function(){
    console.log("Promise2 Consumed");
})




const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:"rounak", email:"rounaksingh2303@gmail.com"})
    },1000)
})

promiseThree.then(function(user){//yaha pe resolve jo pass hua hai wo recieve hoga then me
      console.log(user);
}
)


const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"rounak", gmail:"rounak@gmail.com"})  //yaha agar error nahi hoga to  resolve karenge 
        }
        else{
            reject("Error: Something went wrong")      //yaha agar error hoga to reject krenge  jo catch pakdega
        } 

    },1000)
})

promisefour.then(function(user){
        console.log(user);
        return user.username;   //yahaa pe user.username throw kr rahe
})
.then(function(username){       //ye chaining hai yha pr user.username  aa raha hai
    console.log(username);
})
.catch(function(error){          //yaha pr agar reject hua to kya hoga ho raha hai catch hmesha reject wale ke liye hi hota hai
    console.log(error);
})
.finally(function(){
    console.log("The promise is either resolved or rejected");
})




const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"mufasa", password:"123"})  //yaha agar error nahi hoga to  resolve karenge 
        }
        else{
            reject("Error: JS went wrong")      //yaha agar error hoga to reject krenge  jo catch pakdega
        } 

    },1000)
})


async function consumepromisefive(){
        try {
            const response=await promiseFive;
            console.log(response);
        } catch (error) {
            console.log(error);
        }
}

consumepromisefive();


// Async: Yeh ek keyword hai jise function ke aage lagane se woh function hamesha ek 'Promise' return karta hai, jisse code asynchronous banta hai.
// Await: Yeh keyword kisi 'async' function ke andar use hota hai aur code ke execution ko tab tak 'pause' kar deta hai jab tak promise resolve na ho jaye.

/*
async function getallusers(){
    try{
    const response= await fetch("https://jsonplaceholder.typicode.com/users")

    const data= await response.json()   //--yaha pr await isliye lg raha kyuki resome ko convert krne me bhi to time lgega'

    console.log(data);
    }
    catch(error){
        console.log("E: ",error);
    }

}

getallusers();

*/

fetch("https://api.github.com/users/rounakk001")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})