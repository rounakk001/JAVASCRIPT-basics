//Immediately Invoked Function Expressions (IIFE)+>global scope ke pollution se bachne ke liye use krte hai



 (function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
 })();



(   (name) => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})('hitesh')
 